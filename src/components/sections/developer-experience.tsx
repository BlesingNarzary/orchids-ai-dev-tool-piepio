import React from 'react';
import Image from 'next/image';
import { Terminal, Clipboard, Copy } from 'lucide-react';

const DeveloperExperience = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-brand-orange mb-16">
          Docs For Engineers.
        </h2>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Framework Agnostic Card */}
          <div className="bento-card overflow-hidden group">
            <div className="mb-8">
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-3">Framework Agnostic</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[400px]">
                Official support for Next.js, Tanstack Start, React Router, Waku — portable to any React.js framework.
              </p>
            </div>
            <div className="relative h-48 md:h-64 mt-4 -mx-6 -mb-6 bg-gradient-to-t from-orange-50/50 to-transparent flex items-end justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_3.png"
                  alt="Framework logos illustration"
                  fill
                  className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 flex gap-2">
                <div className="size-8 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">N</span>
                </div>
                <div className="size-8 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">R</span>
                </div>
                <div className="size-8 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">T</span>
                </div>
              </div>
            </div>
          </div>

          {/* Composable Architecture Card */}
          <div className="bento-card overflow-hidden">
            <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-3">A truly composable framework.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Separated as <span className="text-brand-orange">Content</span> → <span className="text-brand-orange">Core</span> → <span className="text-brand-orange">UI</span>, offering the high composability that engineers love — you can use Piepio as a library, without adapting the entire framework.
            </p>
            
            <div className="space-y-px rounded-xl border overflow-hidden bg-muted/30">
              {[
                { name: 'fumadocs-mdx', desc: 'Use MDX in your React framework elegantly.' },
                { name: 'fumadocs-core', desc: 'Headless library for building docs + handling content.' },
                { name: 'fumadocs-ui', desc: 'UI library for building docs.' },
                { name: 'fumadocs-openapi', desc: 'Extend Piepio to render OpenAPI docs.' },
                { name: 'fumadocs-obsidian', desc: 'Extend Piepio to handle Obsidian-style Markdown.' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-3 px-4 bg-white/80 hover:bg-white transition-colors cursor-default ${i >= 3 ? 'opacity-40 grayscale' : ''}`}
                >
                  <span className="font-mono text-[13px] text-foreground font-medium">{item.name}</span>
                  <span className="text-[11px] text-muted-foreground text-right">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Adopts your content Card */}
          <div className="bento-card group">
            <div className="mb-6">
              <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-3">Adopts your content.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designed to integrate with any <span className="text-brand-orange">content source</span>, Piepio works on MDX, Content Collections, and even your own CMS.
              </p>
              <div className="flex gap-4 mt-4 text-xs font-medium text-brand-orange/60">
                <span className="hover:text-brand-orange cursor-pointer">BaseHub CMS</span>
                <span className="hover:text-brand-orange cursor-pointer">Sanity</span>
                <span className="hover:text-brand-orange cursor-pointer">Payload CMS</span>
              </div>
            </div>

            <div className="relative rounded-xl border bg-card overflow-hidden shadow-inner">
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
                <span className="text-[12px] font-medium text-muted-foreground">Piepio MDX</span>
                <Clipboard className="size-3 text-muted-foreground" />
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre">
                <p><span className="text-pink-500">import</span> &#123; loader &#125; <span className="text-pink-500">from</span> <span className="text-green-600">&apos;fumadocs-core/source&apos;</span>;</p>
                <p><span className="text-pink-500">import</span> &#123; docs &#125; <span className="text-pink-500">from</span> <span className="text-green-600">&apos;fumadocs-mdx:collections/server&apos;</span>;</p>
                <br />
                <p><span className="text-pink-500">export const</span> <span className="text-blue-500">source</span> = <span className="text-orange-500">loader</span>(&#123;</p>
                <p>&nbsp;&nbsp;source: <span className="text-orange-500">docs.toPiepioSource</span>(),</p>
                <p>&nbsp;&nbsp;baseUrl: <span className="text-green-600">&apos;/docs&apos;</span>,</p>
                <p>&#125;);</p>
              </div>
            </div>
          </div>

          {/* CMS Integration Visualization Card */}
          <div className="bento-card bg-black flex items-center justify-center p-0 overflow-hidden min-h-[300px] relative">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_5.png"
              alt="CMS Integration visual"
              fill
              className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* Overlay simulation of the UI boxes in screenshot */}
            <div className="relative z-10 w-full max-w-[320px] space-y-4">
               <div className="glass-effect rounded-lg p-3 text-[12px] shadow-2xl translate-x-[-20px] translate-y-[-20px]">
                  <div className="flex justify-between items-center mb-2 border-b pb-1">
                    <span className="font-bold">My CMS</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-muted-foreground"><div className="size-2 rounded bg-muted"></div> My Page</div>
                    <div className="flex items-center gap-2 bg-secondary rounded p-1"><div className="size-2 rounded bg-brand-orange"></div> Another Page</div>
                  </div>
               </div>
               <div className="bg-white rounded-lg p-4 shadow-2xl translate-x-[20px] translate-y-[10px]">
                 <div className="text-[10px] uppercase text-muted-foreground font-bold mb-1">MDX Editor</div>
                 <h4 className="font-bold text-sm mb-1">title: Hello World</h4>
                 <div className="h-px bg-border my-2"></div>
                 <p className="text-[12px] font-mono"># Hello World!</p>
                 <p className="text-[12px] mt-1 text-muted-foreground">This is my first document.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;