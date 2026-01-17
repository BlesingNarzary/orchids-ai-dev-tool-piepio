import { requireDbUser } from "@/lib/require-db-user";

export default async function SettingsPage() {
  const user = await requireDbUser();

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="max-w-6xl mx-auto py-6 space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Settings
        </h1>
        <p className="text-sm text-muted-foreground">
          Basic profile details for your Piepio account.
        </p>
        <div className="mt-4 border border-border rounded-2xl p-6 bg-card space-y-3 text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              User ID
            </span>
            <span className="font-mono text-xs">
              {user.id}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Email
            </span>
            <span>
              {user.email}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

