"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

type GeneratedFileMap = Record<string, string>;

export default function BuilderPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<GeneratedFileMap | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  const handleSubmit = async () => {
    if (!prompt.trim() || !user) return;
    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/agent/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      setError("Failed to generate app. Please try again.");
      setStatus("idle");
      return;
    }

    const data = (await res.json()) as {
      projectId: string;
      files: GeneratedFileMap;
    };

    setProjectId(data.projectId);
    setFiles(data.files);
    setStatus("done");
  };

  if (!isLoaded || (!user && !error && status === "idle")) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Checking your session...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <section>
          <h1 className="text-3xl font-bold mb-4">
            Describe what you want Piepio to build
          </h1>
          <p className="text-muted-foreground mb-8">
            Bring your idea — Piepio will wire up the frontend, backend, auth, database, and payments for this project.
          </p>

          <div className="space-y-4">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: A SaaS dashboard with user login, team workspaces, Stripe billing, and an admin API..."
              rows={5}
              className="w-full"
            />

            <div className="flex items-center gap-4">
              <Button onClick={handleSubmit} disabled={status === "submitting" || !prompt.trim()}>
                {status === "submitting" ? "Generating..." : "Ask Piepio to build this"}
              </Button>
              {status === "done" && (
                <span className="text-sm text-emerald-500">
                  App generated. Browse the files below or export the project.
                </span>
              )}
              {error && (
                <span className="text-sm text-red-500">
                  {error}
                </span>
              )}
            </div>
          </div>
        </section>

        {files && projectId && (
          <section className="border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">Generated files</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = `/api/agent/export?projectId=${encodeURIComponent(projectId)}`;
                  window.open(url, "_blank");
                }}
              >
                Download ZIP
              </Button>
            </div>
            <ScrollArea className="h-80 rounded border border-dashed border-border/60 bg-muted/30">
              <div className="p-3 space-y-1 text-sm font-mono">
                {Object.keys(files).map((path) => (
                  <div key={path} className="py-1 px-2 rounded hover:bg-muted cursor-default">
                    {path}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </section>
        )}
      </div>
    </main>
  );
}

