import React from 'react';
import Image from 'next/image';
import { ChevronRight, MessageSquare, Target, Cpu, LayoutGrid, Search } from 'lucide-react';

const UseCaseCard = ({ 
  label, 
  title, 
  description, 
  icon: Icon, 
  imageSrc, 
  isReversed = false 
}: { 
  label: string; 
  title: string; 
  description: string; 
  icon: any; 
  imageSrc: string;
  isReversed?: boolean;
}) => {
  return (
    <div className="group border-b border-brand-border-faint last:border-b-0">
      <div className={`container grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px]`}>
        {/* Text Content */}
        <div className={`flex flex-col justify-center py-60 lg:py-100 px-24 lg:px-60 ${isReversed ? 'lg:order-2 lg:border-l border-brand-border-faint' : 'lg:border-r border-brand-border-faint'}`}>
          <div className="flex items-center gap-8 mb-16">
            <Icon className="size-16 text-brand-mono-ghost" />
            <span className="font-mono-technical uppercase tracking-wider">{label}</span>
          </div>
          <h3 className="text-[32px] leading-[1.2] font-bold mb-12 text-brand-accent">{title}</h3>
          <p className="text-brand-body text-lg mb-32 max-w-[400px]">{description}</p>
          <a 
            href="/use-cases" 
            className="flex items-center gap-4 text-sm font-medium hover:text-brand-primary transition-colors group/link"
          >
            Learn more
            <ChevronRight className="size-14 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>

        {/* Visual Content */}
        <div className={`relative bg-[#FAFAFA] overflow-hidden flex items-center justify-center p-24 lg:p-0 ${isReversed ? 'lg:order-1' : ''}`}>
          <div className="grid-overlay absolute inset-0 opacity-40"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-[16/10] technical-card shadow-sm">
              <Image 
                src={imageSrc} 
                alt={title}
                fill
                className="object-contain p-4 lg:p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCases = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-[100px]" id="use-cases">
      {/* Section Header */}
      <div className="container relative py-100 border-x border-brand-border-faint">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto z-10 relative">
          <div className="flex items-center gap-12 px-12 py-6 border border-brand-border-faint rounded-full bg-white mb-24 shadow-sm">
            <LayoutGrid className="size-14 text-brand-primary" />
            <span className="font-mono-technical uppercase tracking-widest text-[10px]">Use cases</span>
          </div>
          <h2 className="text-[48px] lg:text-[64px] leading-[1.1] mb-24 text-brand-accent">
            Transform web data into <br />
            <span className="text-brand-primary">AI-powered</span> solutions
          </h2>
          <p className="text-brand-body text-lg mb-40 max-w-[540px]">
            Discover how Firecrawl customers are getting the most out of our API.
          </p>
          <button className="btn-primary">
            View all use cases
          </button>
        </div>
        
        {/* Background Grid Elements */}
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none"></div>
      </div>

      {/* Use Case Cards Grid */}
      <div className="border-y border-brand-border-faint">
        <UseCaseCard 
          label="Chat with context"
          title="Smarter AI chats"
          description="Power your AI assistants with real-time, accurate web content."
          icon={MessageSquare}
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/12-13.png"
        />
        <UseCaseCard 
          label="Know your leads"
          title="Lead enrichment"
          description="Enhance your sales data with deep web information."
          icon={Target}
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/13-14.png"
          isReversed
        />
        <UseCaseCard 
          label="Developer tools"
          title="MCPs"
          description="Add powerful scraping to your code editors and developer workflows."
          icon={Cpu}
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/14-15.png"
        />
        <UseCaseCard 
          label="Build with context"
          title="AI platforms"
          description="Let your customers build AI apps with seamless web data integration."
          icon={LayoutGrid}
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/15-16.png"
          isReversed
        />
        <UseCaseCard 
          label="No insight missed"
          title="Deep research"
          description="Extract comprehensive information for in-depth market or academic research."
          icon={Search}
          imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/12-13.png"
        />
      </div>
      
      {/* Bottom spacer with grid border */}
      <div className="border-x border-brand-border-faint container h-48 mx-auto"></div>
    </section>
  );
};

export default UseCases;