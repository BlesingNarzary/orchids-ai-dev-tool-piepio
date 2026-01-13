import React from 'react';
import Image from 'next/image';
import { Clipboard, Terminal } from 'lucide-react';

const ArchitectureGrid = () => {
  return (
    <section className="py-24 px-6 mx-auto w-full max-w-[1400px]">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-medium tracking-tight text-primary mb-4">
          Docs For Engineers.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
        {/* Framework Agnostic Card */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col relative overflow-hidden h-full">
          <div className="relative z-10">
            <h3 className="text-xl font-medium tracking-tight mb-2">Framework Agnostic</h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm">
              Official support for Next.js, Tanstack Start, React Router, Waku — portable to any React.js framework.
            </p>
          </div>
          <div className="mt-auto relative h-40">
            {/* Visual background element for Agnostic section */}
            <div className="absolute inset-0 opacity-40">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_11.png"
                alt="Architecture Illustration"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Composable Framework Card */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col h-full">
          <h3 className="text-xl font-medium tracking-tight mb-2">A truly composable framework.</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Separated as <span className="text-primary/80">Content</span> → <span className="text-primary/80">Core</span> → <span className="text-primary/80">UI</span>, offering the high composability that engineers love — you can use Piepio as a library, without adapting the entire framework.
          </p>
          
          <div className="space-y-1 text-[13px]">
            {[
              { name: 'fumadocs-mdx', desc: 'Use MDX in your React framework elegantly.' },
              { name: 'fumadocs-core', desc: 'Headless library for building docs + handling content.' },
              { name: 'fumadocs-ui', desc: 'UI library for building docs.' },
              { name: 'fumadocs-openapi', desc: 'Extend Piepio to render OpenAPI docs.' },
              { name: 'fumadocs-obsidian', desc: 'Extend Piepio to handle Obsidian-style Markdown.' },
            ].map((pkg, idx) => (
              <div 
                key={pkg.name} 
                className={`flex items-center justify-between p-2.5 border-b last:border-0 ${idx > 2 ? 'opacity-40' : ''}`}
              >
                <span className="font-mono text-foreground/80">{pkg.name}</span>
                <span className="text-muted-foreground text-right">{pkg.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Adopts Content Card */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col h-full">
          <h3 className="text-xl font-medium tracking-tight mb-2">Adopts your content.</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Designed to integrate with any <span className="text-primary/80">content source</span>, Piepio works on MDX, Content Collections, and even your own CMS.
          </p>
          
          <div className="flex gap-4 mb-4 text-xs font-medium text-muted-foreground">
            <span className="text-primary/80 cursor-default">BaseHub CMS</span>
            <span className="hover:text-foreground cursor-pointer transition-colors text-muted-foreground/60">Sanity</span>
            <span className="hover:text-foreground cursor-pointer transition-colors text-muted-foreground/60">Payload CMS</span>
          </div>

          <div className="mt-auto bg-muted/30 rounded-xl overflow-hidden border">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50 text-xs">
              <span className="text-muted-foreground">Piepio MDX</span>
              <Clipboard className="size-3 text-muted-foreground" />
            </div>
            <div className="p-4 font-mono text-[11px] leading-relaxed">
              <div className="text-[#a11]"><span className="text-[#000]">import &#123; loader &#125; </span>from <span className="text-[#055]">'fumadocs-core/source'</span>;</div>
              <div className="text-[#a11]"><span className="text-[#000]">import &#123; docs &#125; </span>from <span className="text-[#055]">'fumadocs-mdx:collections/server'</span>;</div>
              <div className="mt-3">
                <span className="text-[#a11]">export const </span>
                <span className="text-[#000]">source = loader(&#123;</span>
              </div>
              <div className="pl-4">
                <span className="text-[#000]">source: docs.toPiepioSource(),</span>
              </div>
              <div className="pl-4 text-[#000]">baseUrl: <span className="text-[#055]">'/docs'</span>,</div>
              <div className="text-[#000]">});</div>
            </div>
          </div>
        </div>

        {/* CMS Integration Visuals Card */}
        <div className="rounded-2xl border bg-card shadow-sm flex flex-col h-full relative overflow-hidden bg-[#0c0c0c]">
          {/* Background image component from assets */}
          <div className="absolute inset-0 opacity-60">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_25.png"
              alt="CMS Visual Gradient"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating UI Elements */}
          <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full min-h-[300px]">
             {/* CMS Sidebar Panel */}
             <div className="absolute top-1/2 left-1/2 -translate-x-full -translate-y-[60%] w-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl">
                <div className="text-[10px] text-white/50 mb-3 uppercase tracking-wider">My CMS</div>
                <div className="space-y-2">
                  {[
                    { icon: '📄', label: 'My Page' },
                    { icon: '📄', label: 'Another Page' },
                    { icon: '📦', label: 'Components' },
                    { icon: '⚙️', label: 'Getting Started' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-white/80 border-b border-white/5 pb-1">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* Editor Panel Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[20%] w-60 bg-white border shadow-2xl rounded-xl overflow-hidden">
                <div className="bg-muted/50 px-3 py-1.5 border-b text-[10px] text-muted-foreground flex justify-between items-center">
                  <span>MDX Editor</span>
                  <div className="flex gap-1">
                    <div className="size-1.5 rounded-full bg-border" />
                    <div className="size-1.5 rounded-full bg-border" />
                  </div>
                </div>
                <div className="p-4 font-mono text-[10px] space-y-2">
                  <div className="text-muted-foreground">---</div>
                  <div className="text-foreground">title: Hello World</div>
                  <div className="text-muted-foreground">---</div>
                  <div className="text-foreground font-bold pt-2"># Hello World!</div>
                  <div className="text-foreground pt-1">This is my first document.</div>
                </div>
             </div>
          </div>
        </div>

        {/* Search Experience Card */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col h-full lg:col-span-1">
          <h3 className="text-xl font-medium tracking-tight mb-2">Enhance your search experience.</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Integrate with Orama Search and Algolia Search in your docs easily.
          </p>
          <button className="pill-button bg-primary text-primary-foreground text-sm py-2 px-4 w-fit mb-8 hover:opacity-90 transition-opacity">
            Learn More
          </button>
          
          {/* Mock Search UI */}
          <div className="border bg-background rounded-lg shadow-sm overflow-hidden">
             <div className="p-3 border-b flex items-center gap-2 text-muted-foreground text-sm">
                <svg width="24" height="24" className="lucide lucide-search size-4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span className="text-xs">Search...</span>
             </div>
             <div className="p-2 space-y-1">
                <div className="p-2 bg-muted/50 rounded-md">
                   <div className="font-medium text-xs">Getting Started</div>
                   <div className="text-[10px] text-muted-foreground">Use Piepio in your project.</div>
                </div>
                <div className="p-2">
                   <div className="font-medium text-xs">Components</div>
                   <div className="text-[10px] text-muted-foreground">The UI Components for your docs.</div>
                </div>
             </div>
          </div>
        </div>

        {/* Shadcn UI for Docs Card */}
        <div className="rounded-2xl border bg-card p-8 shadow-sm flex flex-col h-full lg:col-span-1 relative overflow-hidden">
          <h3 className="text-xl font-medium tracking-tight mb-2">The shadcn/ui for docs</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Piepio CLI creates interactive components for your docs, offering a rich experience to your users.
          </p>
          <button className="pill-button bg-primary text-primary-foreground text-xs py-1.5 px-3 w-fit mb-6 hover:opacity-90 transition-opacity">
            Commands
          </button>

          <div className="mt-auto relative">
             <div className="rounded-xl bg-black border border-white/10 p-5 shadow-2xl rotate-[-2deg] translate-y-4">
                <div className="flex items-center gap-2 font-mono text-sm text-white">
                  <Terminal className="size-4 text-primary" />
                  <span className="text-white/40">npx</span>
                  <span>@fumadocs/cli add</span>
                </div>
             </div>
             {/* Background branding subtle color */}
             <div className="absolute -bottom-8 -right-8 size-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureGrid;