import React from 'react';
import Image from 'next/image';

const CorePrinciples = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-[100px] lg:py-[140px]">
      {/* Decorative Grid and Borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container h-full border-x border-brand-border-faint relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-border-faint" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-border-faint" />
          {/* Section Marker */}
          <div className="absolute top-40 left-0 -translate-x-[50%] flex items-center gap-2 bg-white px-2 z-10">
            <div className="w-[1px] h-12 bg-brand-primary" />
            <span className="font-mono text-[10px] text-brand-mono-ghost uppercase tracking-widest">02 / 07 [ CORE ]</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-[1112px] mx-auto">
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-80 px-24">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-2 mb-16">
                <div className="px-10 py-4 border border-brand-border-faint rounded-full flex items-center gap-2 bg-white shadow-sm">
                  <div className="size-14 bg-brand-primary rounded-sm flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14H11V21L20 10H13Z" /></svg>
                  </div>
                  <span className="text-[12px] font-medium text-brand-accent">Built to outperform</span>
                </div>
              </div>
              <h2 className="text-[48px] leading-[1.1] font-bold text-brand-accent tracking-tight mb-20">
                Core principles, <br />
                <span className="text-brand-primary">proven performance</span>
              </h2>
              <p className="text-[18px] text-brand-body leading-relaxed max-w-[480px]">
                Built from the ground up to outperform traditional scrapers.
              </p>
            </div>
            
            {/* Background ASCII decor hidden on mobile */}
            <div className="hidden lg:block absolute right-0 top-0 opacity-20 pointer-events-none">
              <pre className="ascii-decor text-[8px] leading-[1] text-brand-border-faint select-none">
                {`.                                                                                        
                                                                  .                                                                              
                                               .               ....`}
              </pre>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-brand-border-faint">
            
            {/* Reliability Comparison Card */}
            <div className="p-40 lg:p-60 border-b lg:border-r border-brand-border-faint relative">
              <div className="flex items-center gap-3 mb-24">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-mono-ghost"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span className="text-[14px] text-brand-mono-ghost">No proxy headaches</span>
              </div>
              <h3 className="text-[20px] font-semibold text-brand-accent mb-16">
                Reliable. <span className="text-brand-body font-normal">Covers 96% of the web, including JS-heavy and protected pages. No proxies, no puppets, just clean data.</span>
              </h3>

              <div className="space-y-12 mt-48">
                {/* Firecrawl Row */}
                <div className="flex items-center gap-16">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF4A00"><path d="M13 10V3L4 14H11V21L20 10H13Z" /></svg>
                  </div>
                  <span className="w-80 text-[14px] font-medium text-brand-accent">Firecrawl</span>
                  <div className="flex-1 h-32 bg-brand-secondary rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-brand-primary rounded-full transition-all duration-1000 w-[96%] flex items-center justify-end pr-12 shadow-[0_0_20px_rgba(255,74,0,0.3)]">
                      <span className="text-[12px] font-bold text-white">96%</span>
                    </div>
                  </div>
                </div>

                {/* Puppeteer Row */}
                <div className="flex items-center gap-16 opacity-60">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#4d4d4d"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  </div>
                  <span className="w-80 text-[14px] font-medium text-brand-accent">Puppeteer</span>
                  <div className="flex-1 h-32 bg-brand-secondary rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-[#E5E5E5] rounded-full w-[78%] flex items-center justify-end pr-12">
                      <span className="text-[12px] font-bold text-brand-body">78%</span>
                    </div>
                  </div>
                </div>

                {/* cURL Row */}
                <div className="flex items-center gap-16 opacity-40">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <span className="font-mono text-[10px] font-bold text-brand-body">{"{ }"}</span>
                  </div>
                  <span className="w-80 text-[14px] font-medium text-brand-accent">cURL</span>
                  <div className="flex-1 h-32 bg-brand-secondary rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-[#E5E5E5] rounded-full w-[15%] flex items-center justify-end pr-12">
                      <span className="text-[12px] font-bold text-brand-body">15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Card */}
            <div className="p-40 lg:p-60 border-b border-brand-border-faint bg-white">
              <div className="flex items-center gap-3 mb-24">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-mono-ghost"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                <span className="text-[14px] text-brand-mono-ghost">Speed that feels invisible</span>
              </div>
              <h3 className="text-[20px] font-semibold text-brand-accent mb-16">
                Blazingly fast. <span className="text-brand-body font-normal">Delivers results in less than 1 second, fast for real-time agents and dynamic apps.</span>
              </h3>

              <div className="mt-40 overflow-hidden border border-brand-border-faint rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-secondary">
                      <th className="px-16 py-12 text-[12px] font-mono text-brand-mono-ghost border-b border-brand-border-faint uppercase font-medium">URL</th>
                      <th className="px-16 py-12 text-[12px] font-mono text-brand-mono-ghost border-b border-brand-border-faint text-right uppercase font-medium">Crawl</th>
                      <th className="px-16 py-12 text-[12px] font-mono text-brand-mono-ghost border-b border-brand-border-faint text-right uppercase font-medium">Scrape</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-[13px]">
                    <tr className="hover:bg-brand-black-alpha-4 transition-colors">
                      <td className="px-16 py-10 text-brand-body border-b border-brand-border-faint">firecrawl.dev/docs</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">52 ms</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">52 ms</td>
                    </tr>
                    <tr className="hover:bg-brand-black-alpha-4 transition-colors">
                      <td className="px-16 py-10 text-brand-body border-b border-brand-border-faint">firecrawl.dev/login</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">50 ms</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">49 ms</td>
                    </tr>
                    <tr className="hover:bg-brand-black-alpha-4 transition-colors">
                      <td className="px-16 py-10 text-brand-body border-b border-brand-border-faint">firecrawl.dev/features</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">50 ms</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">49 ms</td>
                    </tr>
                    <tr className="hover:bg-brand-black-alpha-4 transition-colors">
                      <td className="px-16 py-10 text-brand-body border-b border-brand-border-faint">firecrawl.dev/support</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">62 ms</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">61 ms</td>
                    </tr>
                    <tr className="hover:bg-brand-black-alpha-4 transition-colors">
                      <td className="px-16 py-10 text-brand-body border-b border-brand-border-faint">firecrawl.dev/github</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">49 ms</td>
                      <td className="px-16 py-10 text-brand-accent text-right border-b border-brand-border-faint">48 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Floating fire icon decorative element matching screenshots */}
              <div className="relative mt-24 flex justify-center">
                 <div className="absolute -bottom-10 flex flex-col items-center">
                    <div className="size-56 bg-white border border-brand-border-faint rounded-full shadow-lg flex items-center justify-center z-20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF4A00"><path d="M13 10V3L4 14H11V21L20 10H13Z" /></svg>
                    </div>
                    <div className="ascii-decor mt-8 opacity-40">
                      {"{ ... }"}
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

export default CorePrinciples;