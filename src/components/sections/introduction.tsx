import React from 'react';
import { Terminal, Clipboard } from 'lucide-react';

const Introduction = () => {
  return (
    <section className="mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12">
      {/* Introduction Paragraph */}
      <div className="grid grid-cols-1 gap-10">
        <p className="text-2xl tracking-tight leading-snug font-light col-span-full md:text-3xl xl:text-4xl">
          Piepio is a <span className="text-brand-orange font-medium">React.js</span> documentation framework for <span className="text-brand-orange font-medium">Developers</span>, beautifully designed by <span className="text-brand-orange font-medium"></span>. Bringing powerful features for your docs workflows, with high customizability to fit your preferences, works seamlessly with any React.js framework, CMS — anything.
        </p>
      </div>

      {/* Try It Out Section */}
      <div className="mt-12 p-8 bg-brand-cream/50 rounded-xl col-span-full flex flex-col items-center">
        <h2 className="text-xl text-center text-brand-orange font-mono font-bold uppercase mb-6 tracking-widest">
          Try it out.
        </h2>

        <div className="w-full max-w-[800px] space-y-4">
          {/* Top Code Block */}
          <div className="group relative bg-white border border-border rounded-xl shadow-sm overflow-hidden text-[0.8125rem]">
            <div className="absolute top-3 right-3 z-10">
              <button 
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md border bg-background/50 backdrop-blur-sm"
                aria-label="Copy Text"
              >
                <Clipboard className="size-4" />
              </button>
            </div>
            <div className="py-4 px-6 font-mono">
              <pre className="text-foreground">
                <code className="flex gap-2">
                  <span className="text-muted-foreground">pnpm</span>
                  <span>create fumadocs-app</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Terminal Interactive Representation */}
          <div className="relative w-full">
            {/* Notification Popup */}
            <div className="absolute bottom-6 right-4 z-20 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="overflow-hidden rounded-lg border border-border bg-white shadow-2xl w-48">
                <div className="relative flex h-7 flex-row items-center border-b bg-muted/30 px-4 text-[11px] text-muted-foreground">
                  <p className="absolute inset-x-0 text-center">localhost:3000</p>
                </div>
                <div className="p-4 text-sm font-medium text-foreground">
                  New App launched!
                </div>
              </div>
            </div>

            {/* Main Terminal Window */}
            <div className="rounded-xl border border-border bg-white shadow-xl overflow-hidden font-mono text-[13px]">
              {/* Terminal Header */}
              <div className="flex flex-row items-center gap-2 border-b border-border px-4 py-2.5 bg-card">
                <Terminal className="size-4 text-muted-foreground" />
                <span className="font-bold text-xs uppercase tracking-tight">Terminal</span>
                <div className="grow"></div>
                <div className="size-2 rounded-full bg-destructive/60"></div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 min-h-[220px] bg-white leading-relaxed">
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <span className="text-foreground">pnpm create fumadocs-app</span>
                  </div>
                  <div className="h-2"></div>
                  <div className="flex flex-col">
                    <span className="font-bold">◇ Project name</span>
                    <span className="text-muted-foreground">│ my-app</span>
                    <span className="text-muted-foreground">│</span>
                    <span className="font-bold">◆ Choose a framework</span>
                    <div className="flex flex-col">
                      <span className="flex items-center gap-2">
                        <span className="text-muted-foreground">│</span>
                        <span className="text-foreground">● Next.js</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-muted-foreground">│</span>
                        <span className="text-muted-foreground">○ Tanstack Start</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="text-muted-foreground">│</span>
                        <span className="text-muted-foreground">○ React Router</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;