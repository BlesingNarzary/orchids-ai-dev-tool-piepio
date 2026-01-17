import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireDbUser } from "@/lib/require-db-user";

export async function GET() {
  const user = await requireDbUser();

  const rows = await db
    .select()
    .from(projects)
    .where(eq(projects.ownerId, user.id));

  return NextResponse.json({ projects: rows }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const user = await requireDbUser();
  const body = await req.json();
  const name = body.name as string | undefined;
  const description = body.description as string | undefined;

  if (!name || !name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const [created] = await db
    .insert(projects)
    .values({
      ownerId: user.id,
      name,
      description: description || null,
    })
    .returning();

  return NextResponse.json({ project: created }, { status: 201 });
}
