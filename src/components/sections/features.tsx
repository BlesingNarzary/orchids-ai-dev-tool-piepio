import React from 'react';
import { CodeXml, Zap, Globe } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="container mx-auto h-full relative">
          {/* Vertical Grid Lines */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-border opacity-50"></div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-border opacity-30"></div>
          <div className="absolute inset-y-0 right-0 w-[1px] bg-border opacity-50"></div>
          
          {/* Subtle dots pattern for background texture */}
          <div className="absolute inset-0 opacity-[0.4]" 
            style={{ 
              backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }}
          ></div>
        </div>
      </div>

      <div className="container relative z-10 px-6 lg:px-14 mx-auto max-w-[1314px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/10 bg-accent shadow-sm">
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold">
              01 / FEATURE SET • AI Native
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.2] text-foreground mb-6">
            Everything You Need to <span className="text-primary">Ship Fast</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-[640px] leading-relaxed">
            Piepio combines the power of AI with production-grade tooling 
            to help you build and deploy applications faster than ever.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-border bg-background overflow-hidden">
          
          {/* Feature 1: Full-Stack Generation */}
          <div className="flex flex-col items-center p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-border transition-colors hover:bg-muted/50 group">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8">
              <CodeXml className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-[20px] font-bold text-foreground mb-4">
              Full-Stack Generation
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[260px]">
              Generate complete applications with frontend, backend, APIs, and database in seconds.
            </p>
          </div>

          {/* Feature 2: Lightning Fast */}
          <div className="flex flex-col items-center p-8 lg:p-12 text-center border-b md:border-b-0 md:border-r border-border transition-colors hover:bg-muted/50 group">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-primary" fill="currentColor" />
            </div>
            <h3 className="text-[20px] font-bold text-foreground mb-4">
              Lightning Fast
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[260px]">
              Ship production-ready code 10x faster than traditional development workflows.
            </p>
          </div>

          {/* Feature 3: Instant Deploy */}
          <div className="flex flex-col items-center p-8 lg:p-12 text-center transition-colors hover:bg-muted/50 group">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-8">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-[20px] font-bold text-foreground mb-4">
              Instant Deploy
            </h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[260px]">
              One-click deployment to production with automatic SSL and CDN configuration.
            </p>
          </div>

        </div>
      </div>
      
      {/* Section Divider with Graphic Decor */}
      <div className="mt-24 lg:mt-32 w-full max-w-[1314px] mx-auto px-6 lg:px-14 relative">
        <div className="h-[1px] bg-border w-full"></div>
        {/* Connection Plus symbols often seen in blueprint/technical designs */}
        <div className="absolute left-[24px] lg:left-[56px] -translate-y-1/2 top-0 text-border font-mono text-xl">+</div>
        <div className="absolute right-[24px] lg:right-[56px] -translate-y-1/2 top-0 text-border font-mono text-xl">+</div>
      </div>
    </section>
  );
};

export default Features;