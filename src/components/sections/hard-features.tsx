import React from 'react';
import Image from 'next/image';
import { FileText, MousePointer2, ShieldCheck, Timer } from 'lucide-react';

const CardHeader = ({ 
  icon: Icon, 
  title, 
  label, 
  description 
}: { 
  icon: any, 
  title: string, 
  label: string, 
  description: string 
}) => (
  <div className="p-32 pb-0">
    <div className="flex items-center gap-8 mb-16">
      <Icon className="size-16 text-muted-foreground" />
      <span className="text-[12px] font-mono text-black-alpha-12 uppercase tracking-wider">{label}</span>
    </div>
    <h3 className="text-[20px] font-bold mb-12">
      <span className="text-foreground">{title}.</span>
      {" "}
      <span className="text-muted-foreground font-normal">{description}</span>
    </h3>
  </div>
);

const HardStuffSection = () => {
  return (
    <section className="relative overflow-hidden py-80 lg:py-160 bg-background">
      {/* Background Decorative Grid Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container h-full border-x border-border-faint relative">
          <div className="absolute top-0 left-0 w-full h-px bg-border-faint" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-border-faint" />
        </div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-80">
          <div className="flex items-center gap-8 px-12 py-4 rounded-full border border-border-faint bg-white/50 mb-24">
            <div className="size-8 rounded-full bg-accent-orange shadow-[0_0_8px_rgba(255,79,17,0.5)]" />
            <span className="text-[12px] font-mono text-black-alpha-12 uppercase tracking-widest leading-none">Zero configuration</span>
          </div>
          <h2 className="text-[48px] font-bold tracking-tight mb-24">
            We handle the <span className="text-accent-orange">hard stuff</span>
          </h2>
          <p className="max-w-[540px] text-muted-foreground">
            Rotating proxies, orchestration, rate limits, js-blocked content and more.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Media Parsing Card */}
          <div className="border border-border-faint relative group">
            <CardHeader 
              icon={FileText}
              label="Docs to data"
              title="Media parsing"
              description="Firecrawl can parse and output content from web hosted pdfs, docx, and more."
            />
            <div className="relative h-[300px] overflow-hidden mt-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-faint opacity-50" />
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/9-10.png"
                alt="Media parsing illustration"
                width={400}
                height={260}
                className="relative z-10 object-contain"
              />
              <div className="absolute top-0 left-0 curvy-rect size-24 border-t border-l border-accent-orange/30 -ml-px -mt-px pointer-events-none" />
            </div>
          </div>

          {/* Smart Wait Card */}
          <div className="border border-border-faint lg:border-l-0 relative group">
            <CardHeader 
              icon={Timer}
              label="Knows the moment"
              title="Smart wait"
              description="Firecrawl intelligently waits for content to load, making scraping faster and more reliable."
            />
            <div className="relative h-[300px] overflow-hidden mt-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-faint opacity-50" />
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/10-11.png"
                alt="Smart wait illustration"
                width={400}
                height={260}
                className="relative z-10 object-contain"
              />
               <div className="absolute top-0 right-0 size-24 border-t border-r border-accent-orange/30 -mr-px -mt-px pointer-events-none" />
            </div>
          </div>

          {/* Stealth Mode Card */}
          <div className="border border-border-faint border-t-0 relative group">
            <CardHeader 
              icon={ShieldCheck}
              label="Invisible access"
              title="Stealth mode"
              description="Crawls the web, including the sites other services can't. Get what you need without sharing your personal info."
            />
            <div className="relative h-[300px] overflow-hidden mt-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-faint opacity-50" />
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/11-12.png"
                alt="Stealth mode illustration"
                width={400}
                height={260}
                className="relative z-10 object-contain"
              />
              <div className="absolute bottom-0 left-0 size-24 border-b border-l border-accent-orange/30 -ml-px -mb-px pointer-events-none" />
            </div>
          </div>

          {/* Actions Card */}
          <div className="border border-border-faint lg:border-l-0 border-t-0 relative group">
            <CardHeader 
              icon={MousePointer2}
              label="Interactive scraping"
              title="Actions"
              description="Click, scroll, write, wait, press and more before extracting content."
            />
            <div className="relative h-[300px] overflow-hidden mt-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-faint opacity-50" />
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/12-13.png"
                alt="Actions illustration"
                width={400}
                height={260}
                className="relative z-10 object-contain"
              />
              <div className="absolute bottom-0 right-0 size-24 border-b border-r border-accent-orange/30 -mr-px -mb-px pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom indicator (Visual spacer from original layout) */}
        <div className="mt-64 flex flex-col items-center">
          <div className="flex items-center gap-12 text-black-alpha-12 font-mono text-[10px] uppercase tracking-widest mb-16">
            <FileText className="size-12" />
            Scrapes the real thing
          </div>
          <p className="text-center text-muted-foreground text-[14px] max-w-[400px]">
            <span className="font-bold text-foreground">Cached, when you need it.</span> Selective caching, you choose your caching patterns, growing web index.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HardStuffSection;