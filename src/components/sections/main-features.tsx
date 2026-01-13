import React from 'react';
import { Code2, Zap, Globe, Database, Shield, GitBranch } from 'lucide-react';

const MainFeatures = () => {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Generation",
      description: "Generate complete applications with frontend, backend, APIs, and database in seconds.",
      endpoint: "BUILD /app"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Ship production-ready code 10x faster than traditional development workflows.",
      endpoint: "GEN /code"
    },
    {
      icon: Globe,
      title: "Instant Deploy",
      description: "One-click deployment to production with automatic SSL and CDN configuration.",
      endpoint: "POST /deploy"
    }
  ];

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden border-t border-brand-border-faint">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto max-w-[1314px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-heat-100 border border-brand-primary/10 mb-6">
            <span className="text-[12px] font-mono font-medium text-brand-primary uppercase tracking-wider">01 / FEATURE SET</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[12px] font-sans font-semibold text-brand-primary">AI Native</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-accent mb-6 leading-[1.1]">
            Everything You Need to <span className="text-brand-primary">Ship Fast</span>
          </h2>
          
          <p className="max-w-2xl text-brand-body text-lg leading-relaxed text-balance">
            Piepio combines the power of AI with production-grade tooling to help you build and deploy applications faster than ever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-brand-border-faint rounded-xl overflow-hidden bg-white shadow-sm">
          {features.map((feature, index) => (
            <div key={feature.title} className={`group relative p-10 lg:p-12 flex flex-col items-center text-center border-brand-border-faint hover:bg-zinc-50/50 transition-colors ${index !== 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}>
              <div className="mb-8 relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-primary/5 rounded-lg rotate-3 group-hover:rotate-6 transition-transform" />
                <feature.icon className="w-6 h-6 text-brand-primary relative" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-accent mb-4">{feature.title}</h3>
              <p className="text-brand-body text-[15px] leading-relaxed">
                {feature.description}
              </p>
              
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:border-brand-primary/20 transition-colors" />
              <div className="absolute bottom-4 right-6 font-mono text-[10px] text-brand-mono-ghost opacity-0 group-hover:opacity-100 transition-opacity">
                {feature.endpoint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
