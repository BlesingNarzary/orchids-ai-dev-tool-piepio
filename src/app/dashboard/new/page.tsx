"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import JSZip from "jszip";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type GeneratedFileMap = Record<string, string>;

export default function NewAppPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<GeneratedFileMap | null>(null);
  const [editedFiles, setEditedFiles] = useState<GeneratedFileMap | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

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

    setFiles(data.files);
    setEditedFiles(data.files);
    const firstPath = Object.keys(data.files)[0] ?? null;
    setSelectedPath(firstPath);
    setStatus("done");
  };

  const handleChangeFile = (value: string) => {
    if (!editedFiles || !selectedPath) return;
    setEditedFiles({
      ...editedFiles,
      [selectedPath]: value,
    });
  };

  const handleDownload = async () => {
    if (!editedFiles) return;

    const zip = new JSZip();

    for (const [path, content] of Object.entries(editedFiles)) {
      const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
      zip.file(normalizedPath, content);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "piepio-project.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const previewHtml = useMemo(() => {
    if (!editedFiles) return null;
    const entry = Object.entries(editedFiles).find(([path]) =>
      path.toLowerCase().endsWith(".html")
    );
    return entry ? entry[1] : null;
  }, [editedFiles]);

  if (!isLoaded || (!user && !error && status === "idle")) {
    return (
      <main className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background">
        <p className="text-muted-foreground text-sm">
          Checking your session...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              New app
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Describe what you want Piepio to build. Piepio will wire up the frontend, backend, auth, database, and payments.
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: A SaaS dashboard with user login, team workspaces, Stripe billing, and an admin API..."
            rows={4}
            className="w-full"
          />

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={handleSubmit} disabled={status === "submitting" || !prompt.trim()}>
              {status === "submitting" ? "Generating..." : "Ask Piepio to build this"}
            </Button>
            {status === "done" && (
              <span className="text-xs text-emerald-500">
                App generated. Browse, edit, and download the project below.
              </span>
            )}
            {error && (
              <span className="text-xs text-red-500">
                {error}
              </span>
            )}
          </div>
        </section>

        {editedFiles && (
          <section className="border border-border rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold">
                Workspace
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
              >
                Download ZIP
              </Button>
            </div>
            <Tabs defaultValue="editor" className="space-y-3">
              <TabsList className="grid grid-cols-2 w-full max-w-xs">
                <TabsTrigger value="editor">
                  Editor
                </TabsTrigger>
                <TabsTrigger value="preview">
                  Preview
                </TabsTrigger>
              </TabsList>
              <TabsContent value="editor">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
                  <ScrollArea className="h-80 rounded border border-dashed border-border/60 bg-muted/30">
                    <div className="p-2 space-y-1 text-xs font-mono">
                      {Object.keys(editedFiles).map((path) => (
                        <button
                          key={path}
                          type="button"
                          onClick={() => setSelectedPath(path)}
                          className={
                            "w-full text-left px-2 py-1.5 rounded border border-transparent hover:bg-muted " +
                            (selectedPath === path
                              ? "bg-muted border-border font-semibold"
                              : "")
                          }
                        >
                          {path}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="h-80 border border-border rounded bg-card">
                    {selectedPath ? (
                      <Textarea
                        value={editedFiles[selectedPath] ?? ""}
                        onChange={(e) => handleChangeFile(e.target.value)}
                        className="h-full w-full border-0 rounded-none resize-none font-mono text-xs"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-xs text-muted-foreground">
                        Select a file to view and edit its contents.
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="preview">
                <div className="h-80 border border-border rounded bg-muted/40 flex items-center justify-center">
                  {previewHtml ? (
                    <iframe
                      title="App preview"
                      srcDoc={previewHtml}
                      className="w-full h-full rounded"
                    />
                  ) : (
                    <p className="text-xs text-muted-foreground px-4 text-center">
                      No HTML entry file was generated. Add an .html file to the project to see a live preview here.
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}
      </div>
    </main>
  );
}

