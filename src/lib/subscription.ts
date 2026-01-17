import { db } from "@/db/client";
import { subscriptions } from "@/db/schema";
import { and, eq, gt } from "drizzle-orm";

export async function getActiveSubscriptionForUser(userId: string) {
  const now = new Date();

  const rows = await db
    .select()
    .from(subscriptions)
    .where(
      and(
        eq(subscriptions.userId, userId),
        gt(subscriptions.currentPeriodEnd, now),
        eq(subscriptions.status, "active"),
      ),
    )
    .limit(1);

  if (rows.length === 0) {
    return null;
  }

  return rows[0];
}

export async function requireActiveSubscription(userId: string) {
  const sub = await getActiveSubscriptionForUser(userId);

  if (!sub) {
    throw new Error("No active subscription");
  }

  return sub;
}

