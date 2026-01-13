"use client";

import React from "react";
import { Terminal, Clipboard, Check } from "lucide-react";

const TerminalDemo: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
      navigator.clipboard.writeText("pnpm create orchids-app");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

  return (
    <div className="p-8 bg-neutral-50/50 rounded-2xl col-span-full mb-16 border border-neutral-200">
      <h2 className="text-xl text-center text-neutral-900 font-sans font-semibold mb-8 tracking-tight">
        Initialize your next project in seconds.
      </h2>

      {/* Static Code Block */}
      <figure className="bg-neutral-900 rounded-xl relative border border-neutral-800 shadow-2xl overflow-hidden text-sm my-0 mx-auto w-full max-w-[800px]">
        <div className="absolute top-3 right-3 z-10 flex items-center justify-center">
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:text-white hover:bg-neutral-800"
            aria-label="Copy Text"
          >
            {copied ? (
              <Check className="size-4 text-green-400" />
            ) : (
              <Clipboard className="size-4" />
            )}
          </button>
        </div>

          <div className="text-[0.875rem] py-5 px-6 overflow-auto font-mono text-neutral-300">
            <pre className="flex gap-2">
              <span className="text-white">pnpm</span>
              <span className="text-neutral-400">create</span>
              <span className="text-white">orchids-app</span>
            </pre>
          </div>
      </figure>

      {/* Interactive Terminal Mockup */}
      <div className="relative mt-4 w-full mx-auto max-w-[800px]">
        {/* Floating Notification */}
        <div className="overflow-hidden rounded-lg border border-border bg-white shadow-2xl absolute bottom-8 right-6 z-20 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative flex h-7 flex-row items-center border-b bg-muted px-4 text-[10px] text-muted-foreground">
            <p className="absolute inset-x-0 text-center">localhost:3000</p>
          </div>
          <div className="px-6 py-4 text-sm font-medium text-foreground">
            New App launched!
          </div>
        </div>

        {/* Console Container */}
        <div className="overflow-hidden rounded-xl border border-border text-sm shadow-xl bg-white font-mono">
          {/* Terminal Header */}
          <div className="flex flex-row items-center gap-2 border-b bg-muted/30 px-4 py-2.5">
            <Terminal className="size-4 text-muted-foreground" />
            <span className="font-bold text-xs text-foreground/80 lowercase">
              Terminal
            </span>
            <div className="grow"></div>
            <div className="size-2.5 rounded-full bg-red-400"></div>
          </div>

            {/* Terminal Content */}
            <div className="min-h-[240px] p-6 leading-relaxed">
              <div className="flex gap-2 text-foreground mb-4">
                <span className="opacity-50 inline-block w-4"></span>
                <span>pnpm create orchids-app</span>
              </div>
            
            <div className="space-y-1">
              <div className="flex gap-2">
                <span className="text-primary font-bold">◇</span>
                <span className="font-bold text-foreground">Project name</span>
              </div>
              <div className="flex gap-2 bg-accent/20">
                <span className="opacity-40 border-l border-border ml-2 mr-2 pl-4 pb-2">│</span>
                <span className="text-muted-foreground">my-app</span>
              </div>
              
              <div className="flex gap-2">
                <span className="text-primary font-bold">◆</span>
                <span className="font-bold text-foreground">Choose a framework</span>
              </div>
              
              <div className="ml-2 pl-4 border-l border-border space-y-1 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-foreground font-medium">Next.js</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>○</span>
                  <span>Tanstack Start</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>○</span>
                  <span>React Router</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom-4 {
          from { transform: translateY(16px); }
          to { transform: translateY(0); }
        }
        .animate-in {
          animation-duration: 400ms;
          animation-fill-mode: both;
        }
        .fade-in {
          animation-name: fade-in;
        }
        .slide-in-from-bottom-4 {
          animation-name: slide-in-from-bottom-4;
        }
      `}</style>
    </div>
  );
};

export default TerminalDemo;