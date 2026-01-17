import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(projects)
    .where(eq(projects.ownerId, userId as any));

  return NextResponse.json({ projects: rows }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const name = body.name as string | undefined;
  const description = body.description as string | undefined;

  if (!name || !name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const [created] = await db
    .insert(projects)
    .values({
      ownerId: userId as any,
      name,
      description: description || null,
    })
    .returning();

  return NextResponse.json({ project: created }, { status: 201 });
}

