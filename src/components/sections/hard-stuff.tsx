import React from 'react';
import { 
  FileText, 
  Clock, 
  EyeOff, 
  MousePointerClick, 
  Fingerprint, 
  Globe,
  Plus,
  ArrowRight,
  MousePointer2,
  Navigation,
  Keyboard,
  ScrollVertical,
  Maximize,
  LayoutGrid
} from 'lucide-react';

const HardStuff = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden border-t border-brand-border-faint">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="container relative z-10 px-6 sm:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4 px-3 py-1 bg-brand-heat-100 rounded-full border border-brand-primary/10">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[12px] font-mono font-medium text-brand-primary tracking-wider uppercase">Zero configuration</span>
          </div>
          <h2 className="text-[48px] font-bold tracking-tight text-black mb-6">
            We handle the <span className="text-brand-primary italic">hard stuff</span>
          </h2>
          <p className="max-w-2xl text-[18px] text-brand-body leading-relaxed">
            Rotating proxies, orchestration, rate limits, js-blocked content and more.
          </p>
        </div>

        {/* Technical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-brand-border-faint p-[1px] rounded-xl border border-brand-border-faint shadow-sm overflow-hidden">
          
          {/* Media Parsing Card */}
          <div className="group bg-white p-10 flex flex-col min-h-[500px] technical-corner">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded bg-secondary/50">
                <FileText className="size-5 text-brand-body" strokeWidth={1.5} />
              </div>
              <span className="font-mono-technical uppercase">Docs to data</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4">
              Media parsing. <span className="font-normal text-brand-body">Firecrawl can parse and output content from web hosted pdfs, docx, and more.</span>
            </h3>

            <div className="flex-grow mt-8 relative flex items-center justify-center">
              {/* Schematic Wireframe for Media Parsing */}
              <div className="w-full max-w-sm aspect-[4/3] rounded-lg border border-brand-border-faint bg-secondary/20 relative overflow-hidden flex flex-col">
                <div className="flex gap-1.5 p-3 border-b border-brand-border-faint bg-white">
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="ml-4 flex-1 h-3 rounded-full bg-secondary/50 flex items-center px-3">
                    <span className="text-[8px] font-mono text-brand-mono-ghost">https://example.com/files/brief.docx</span>
                  </div>
                </div>
                <div className="flex-1 p-6 relative flex flex-col items-center justify-center">
                   <div className="relative w-24 h-32 bg-white border border-brand-border-faint shadow-sm rounded-tr-3xl">
                      <div className="absolute inset-x-3 top-6 space-y-2">
                        <div className="h-1 bg-brand-heat-100 w-full" />
                        <div className="h-1 bg-brand-heat-100 w-3/4" />
                        <div className="h-1 bg-brand-heat-100 w-full" />
                      </div>
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-secondary text-[10px] font-mono text-brand-mono-ghost rounded border border-brand-border-faint">
                        DOCX
                      </div>
                   </div>
                   {/* Parsing Tag */}
                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white border border-brand-border-faint shadow-md rounded-md z-10 transition-transform group-hover:scale-105">
                     <span className="ascii-decor tracking-tighter">::</span>
                     <span className="font-mono-technical !text-black font-bold">Parsing</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Wait Card */}
          <div className="group bg-white p-10 flex flex-col min-h-[500px] technical-corner">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded bg-secondary/50">
                <Clock className="size-5 text-brand-body" strokeWidth={1.5} />
              </div>
              <span className="font-mono-technical uppercase">Knows the moment</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4">
              Smart wait. <span className="font-normal text-brand-body">Firecrawl intelligently waits for content to load, making scraping faster and more reliable.</span>
            </h3>

            <div className="flex-grow mt-8 relative flex items-center justify-center">
              {/* Schematic Wireframe for Smart Wait */}
              <div className="w-full max-w-sm aspect-[4/3] rounded-lg border border-brand-border-faint bg-secondary/20 relative overflow-hidden flex flex-col">
                <div className="flex gap-1.5 p-3 border-b border-brand-border-faint bg-white">
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="ml-4 flex-1 h-3 rounded-full bg-secondary/50 flex items-center px-3">
                    <span className="text-[8px] font-mono text-brand-mono-ghost">https://example-spa.com</span>
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col items-center justify-center">
                  <div className="w-full h-full bg-white/60 border border-dashed border-brand-border-faint rounded-lg flex flex-col items-center justify-center">
                    <div className="size-16 rounded-full border-2 border-brand-heat-100 border-t-brand-primary animate-spin mb-4" />
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-brand-border-faint shadow-sm rounded-full">
                       <div className="size-2 rounded-full bg-brand-primary/40" />
                       <span className="text-[11px] font-medium text-brand-body">Page is loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stealth Mode Card */}
          <div className="group bg-white p-10 flex flex-col min-h-[500px] technical-corner">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded bg-secondary/50">
                <EyeOff className="size-5 text-brand-body" strokeWidth={1.5} />
              </div>
              <span className="font-mono-technical uppercase">Invisible access</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4">
              Stealth mode. <span className="font-normal text-brand-body">Crawls the web, including the sites other services cannot. Get what you need without sharing your personal info.</span>
            </h3>

            <div className="flex-grow mt-8 relative flex items-center justify-center overflow-hidden">
               {/* Decorative Radar/Scanning Visualization */}
               <div className="relative size-64 flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border border-brand-border-faint animate-ping duration-[3000ms]" />
                 <div className="absolute inset-0 rounded-full border border-brand-border-faint translate-x-4 translate-y-2" />
                 <div className="absolute inset-[-40px] rounded-full border border-brand-border-faint opacity-40" />
                 
                 <div className="relative z-10 size-24 rounded-2xl bg-white border border-brand-border-faint shadow-xl flex items-center justify-center">
                    <div className="p-3 bg-brand-heat-100 rounded-lg">
                      <Fingerprint className="size-10 text-brand-primary" strokeWidth={1.5} />
                    </div>
                 </div>

                 <div className="absolute top-0 right-4 p-2 bg-white border border-brand-border-faint rounded-full shadow-sm">
                   <Globe className="size-4 text-brand-mono-ghost" strokeWidth={1.5} />
                 </div>
                 <div className="absolute bottom-8 left-2 p-2 bg-white border border-brand-border-faint rounded-full shadow-sm">
                   <Fingerprint className="size-4 text-brand-mono-ghost" strokeWidth={1.5} />
                 </div>
               </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="group bg-white p-10 flex flex-col min-h-[500px] technical-corner">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded bg-secondary/50">
                <MousePointerClick className="size-5 text-brand-body" strokeWidth={1.5} />
              </div>
              <span className="font-mono-technical uppercase">Interactive scraping</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4">
              Actions. <span className="font-normal text-brand-body">Click, scroll, write, wait, press and more before extracting content.</span>
            </h3>

            <div className="flex-grow mt-8 relative flex items-center justify-center">
              {/* Actions Grid Wireframe */}
              <div className="w-full max-w-sm rounded-lg border border-brand-border-faint bg-secondary/10 relative overflow-hidden flex flex-col">
                <div className="flex gap-1.5 p-3 border-b border-brand-border-faint bg-white">
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="size-2 rounded-full bg-brand-border-faint" />
                  <div className="ml-4 flex-1 h-3 rounded-full bg-secondary/50 flex items-center px-3">
                    <span className="text-[8px] font-mono text-brand-mono-ghost">https://example.com</span>
                  </div>
                </div>
                <div className="p-2 grid grid-cols-4 gap-1">
                  {[
                    { icon: Navigation, label: 'Navigate' },
                    { icon: MousePointer2, label: 'Click' },
                    { icon: Keyboard, label: 'Type' },
                    { icon: Clock, label: 'Wait' },
                    { icon: ScrollVertical, label: 'Scroll' },
                    { icon: MousePointerClick, label: 'Press' },
                    { icon: Maximize, label: 'Screenshot' },
                    { icon: LayoutGrid, label: 'Scrape' },
                  ].map((action, i) => (
                    <div key={i} className="bg-white border border-brand-border-faint rounded aspect-square flex flex-col items-center justify-center gap-2 p-1 hover:border-brand-primary/50 transition-colors group/item cursor-default">
                      <action.icon className="size-4 text-brand-mono-ghost group-hover/item:text-brand-primary" strokeWidth={1.5} />
                      <span className="text-[9px] font-medium text-brand-body">{action.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global CTA Footer Info (Subtle) */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-8 py-4 px-8 border border-brand-border-faint rounded-full bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
               <div className="size-4 rounded-sm border border-brand-border-faint bg-secondary/50 flex items-center justify-center">
                 <div className="size-1.5 bg-brand-mono-ghost rounded-full" />
               </div>
               <span className="font-mono-technical">Rotating Proxies</span>
            </div>
            <div className="w-[1px] h-4 bg-brand-border-faint" />
            <div className="flex items-center gap-2">
               <div className="size-4 rounded-sm border border-brand-border-faint bg-secondary/50 flex items-center justify-center">
                 <div className="size-1.5 bg-brand-mono-ghost rounded-full" />
               </div>
               <span className="font-mono-technical">Anti-Bot Bypass</span>
            </div>
            <div className="w-[1px] h-4 bg-brand-border-faint" />
            <div className="flex items-center gap-2">
               <div className="size-4 rounded-sm border border-brand-border-faint bg-secondary/50 flex items-center justify-center">
                 <div className="size-1.5 bg-brand-mono-ghost rounded-full" />
               </div>
               <span className="font-mono-technical">JS Rendering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardStuff;