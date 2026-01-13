import React from 'react';
import { Search, Terminal as TerminalIcon, FileText, Component, Hash, BookOpen, ChevronRight } from 'lucide-react';

const SearchAndCli = () => {
  return (
    <section className="grid grid-cols-1 gap-10 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-2">
      {/* Search Experience Card */}
      <div className="rounded-2xl text-sm p-8 bg-origin-border shadow-lg border border-border bg-card flex flex-col justify-between">
        <div className="mb-8">
          <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-4 text-foreground">
            Enhance your search experience.
          </h3>
          <p className="mb-6 text-muted-foreground text-[16px]">
            Integrate with Orama Search and Algolia Search in your docs easily.
          </p>
          <a
            href="#"
            className="inline-flex justify-center px-5 py-2.5 rounded-full font-medium tracking-tight transition-colors bg-primary text-primary-foreground hover:bg-orange-600 mb-8"
          >
            Learn More
          </a>
        </div>

        <div className="relative group">
          <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="p-3 border-b flex items-center gap-2 text-muted-foreground">
              <Search className="size-4" />
              <div className="text-sm">Search...</div>
            </div>
            <div className="p-1">
              {[
                { icon: <FileText className="size-4" />, title: "Getting Started", desc: "Use Piepio in your project." },
                { icon: <Component className="size-4" />, title: "Components", desc: "The UI Components for your docs." },
                { icon: <Hash className="size-4" />, title: "MDX Content", desc: "Using MDX for content." },
                { icon: <BookOpen className="size-4" />, title: "User Guide", desc: "How to use Piepio." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                    idx === 0 ? 'bg-accent/50 text-accent-foreground' : 'hover:bg-muted'
                  }`}
                >
                  <div className="mt-0.5 text-muted-foreground">{item.icon}</div>
                  <div>
                    <div className="font-medium text-[14px] leading-tight">{item.title}</div>
                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CLI/Interactive Card */}
      <div className="rounded-2xl text-sm p-0 bg-origin-border shadow-lg border border-border bg-card overflow-hidden flex flex-col">
        <div className="p-8 pb-4">
          <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-4 text-foreground">
            The shadcn/ui for docs
          </h3>
          <p className="mb-6 text-muted-foreground text-[16px]">
            Piepio CLI creates interactive components for your docs, offering a rich experience to your users.
          </p>
          <a
            href="#"
            className="inline-flex justify-center px-5 py-2.5 rounded-full font-medium tracking-tight transition-colors bg-primary text-primary-foreground hover:bg-orange-600"
          >
            Commands
          </a>
        </div>

        <div className="relative mt-auto">
          {/* Decorative Mesh Background for the CLI area */}
          <div className="h-[240px] w-full bg-[#171717] relative flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'radial-gradient(circle at center, #fd7e14 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}
            />
            
            {/* Terminal Mockup */}
            <div className="relative z-10 w-[80%] max-w-[400px] transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <div className="bg-black/90 rounded-xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
                  <div className="size-2.5 rounded-full bg-red-500/80" />
                  <div className="size-2.5 rounded-full bg-amber-500/80" />
                  <div className="size-2.5 rounded-full bg-emerald-500/80" />
                  <div className="mx-auto">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-white/40">Terminal</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-[13px] leading-relaxed">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white">npx @fumadocs/cli add</span>
                  </div>
                  <div className="text-white/60 pl-4 border-l border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">?</span>
                      <span>Select components...</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-white/40">
                      <ChevronRight className="size-3 text-blue-400" />
                      <span className="text-blue-400">Search Dialog</span>
                    </div>
                    <div className="pl-5 text-white/30">Callout</div>
                    <div className="pl-5 text-white/30">Tabs</div>
                  </div>
                </div>
              </div>
              
              {/* Animated Tooltip */}
              <div className="absolute -top-4 -right-4 bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-bounce border border-black/5 uppercase tracking-tighter">
                Try it
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndCli;