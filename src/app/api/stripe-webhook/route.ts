import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/db/client";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!secret || !stripeSecretKey) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
  }

  const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.created") {
    const subscription = event.data.object as Stripe.Subscription;
    const customerId = subscription.customer as string;

    await db
      .insert(subscriptions)
      .values({
        userId: "" as any,
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscription.id,
        plan: subscription.items.data[0]?.price.id ?? "",
        status: subscription.status,
        currentPeriodEnd: new Date(subscription.current_period_end * 1000),
      })
      .onConflictDoUpdate({
        target: subscriptions.stripeSubscriptionId,
        set: {
          status: subscription.status,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        },
      });
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

