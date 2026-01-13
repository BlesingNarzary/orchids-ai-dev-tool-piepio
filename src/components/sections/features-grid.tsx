import React from 'react';
import Image from 'next/image';
import { Github, Code2, Layers, Search, Globe, ChevronRight, Copy } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <section className="relative w-full bg-[#FCFCFC] overflow-hidden">
      {/* Background Grid System Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1314px] h-px bg-[#EEEEEE]" />
      
      <div className="container mx-auto max-w-[1314px] px-6 lg:px-24 pt-24 pb-32">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-6 px-3 py-1 bg-white border border-[#EEEEEE] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="w-4 h-4 rounded-full bg-[#FF4F11]/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F11]" />
            </div>
            <span className="text-[12px] font-mono font-medium text-black/40 tracking-wider">DEVELOPER FIRST</span>
          </div>
          <h2 className="text-[48px] leading-[1.2] font-bold tracking-tight text-black mb-4">
            Start <span className="text-[#FF4F11]">scraping</span> today
          </h2>
          <p className="text-[#737373] max-w-[540px] text-lg">
            Enhance your apps with industry leading web scraping and crawling capabilities.
          </p>
        </div>

        {/* Feature Cards Grid (Scrape, Search, Crawl) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#EEEEEE] rounded-xl overflow-hidden bg-white mb-24">
          {/* Scrape Card */}
          <div className="p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#EEEEEE] relative group hover:bg-black-[0.01] transition-colors">
            <div className="mb-8 w-12 h-12 bg-[#FF4F11]/5 rounded-lg flex items-center justify-center">
              <Layers className="text-[#FF4F11] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Scrape</h3>
            <p className="text-[#737373] text-sm leading-relaxed max-w-[200px]">
              Get llm-ready data from websites. Markdown, JSON, screenshot, etc.
            </p>
          </div>

          {/* Search Card */}
          <div className="p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#EEEEEE] relative group hover:bg-black-[0.01] transition-colors">
            <div className="mb-8 w-12 h-12 bg-[#FF4F11]/5 rounded-lg flex items-center justify-center">
              <Search className="text-[#FF4F11] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Search <span className="bg-[#FF4F11]/10 text-[#FF4F11] text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">New</span>
            </h3>
            <p className="text-[#737373] text-sm leading-relaxed max-w-[200px]">
              Search the web and get full content from results.
            </p>
          </div>

          {/* Crawl Card */}
          <div className="p-10 flex flex-col items-center text-center relative group hover:bg-black-[0.01] transition-colors">
            <div className="mb-8 w-12 h-12 bg-[#FF4F11]/5 rounded-lg flex items-center justify-center">
              <Globe className="text-[#FF4F11] w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Crawl</h3>
            <p className="text-[#737373] text-sm leading-relaxed max-w-[200px]">
              Crawl all the pages on a website and get data for each page.
            </p>
          </div>
        </div>

        {/* Code Integration Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#EEEEEE] border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm mb-24">
          {/* Left: Code Snippet */}
          <div className="bg-white p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-black text-white rounded-md text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" /> Python
                </button>
                <button className="px-4 py-1.5 text-[#737373] hover:bg-[#F5F5F5] transition-colors rounded-md text-sm font-medium">Node.js</button>
                <button className="px-4 py-1.5 text-[#737373] hover:bg-[#F5F5F5] transition-colors rounded-md text-sm font-medium">cURL</button>
              </div>
              <button className="text-[#737373] hover:text-[#000000] transition-colors p-2">
                <Copy size={18} />
              </button>
            </div>
            <div className="bg-[#FCFCFC] border border-[#EEEEEE] rounded-lg p-6 font-mono text-sm leading-relaxed flex-grow">
              <div className="text-blue-500 mb-1"># pip install firecrawl-py</div>
              <div className="mb-4">from <span className="text-purple-600">firecrawl</span> import <span className="text-purple-600">Firecrawl</span></div>
              <div className="mb-4">app = <span className="text-purple-600">Firecrawl</span>(api_key=<span className="text-[#FF4F11]">&quot;fc-YOUR_API_KEY&quot;</span>)</div>
              <div className="text-blue-500 mb-1"># Scrape a website:</div>
              <div>app.scrape(<span className="text-[#FF4F11]">&quot;firecrawl.dev&quot;</span>)</div>
            </div>
          </div>

          {/* Right: Output Preview */}
          <div className="bg-white p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-mono text-black/20 uppercase tracking-widest">Output Preview</div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#EEEEEE]" />
                <div className="w-2 h-2 rounded-full bg-[#EEEEEE]" />
              </div>
            </div>
            <div className="bg-[#FCFCFC] border border-[#EEEEEE] rounded-lg p-6 font-mono text-sm overflow-hidden h-full max-h-[220px]">
              <div className="text-[#737373] mb-4"># Firecrawl</div>
              <p className="text-[#000000] mb-6">
                Firecrawl is a powerful web scraping library that makes it easy to extract data from websites.
              </p>
              <div className="text-[#737373] mb-4">## Installation</div>
              <p className="text-[#000000]">To install Firecrawl, run:</p>
            </div>
          </div>
        </div>

        {/* Multi-feature Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Integrations Card */}
          <div className="border border-[#EEEEEE] rounded-xl bg-white p-10 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-black rounded-lg" />
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-[#FF4F11]/5 flex items-center justify-center">
                  <Layers size={18} className="text-[#FF4F11]" />
                </div>
                <span className="text-[12px] font-mono text-black/40 uppercase tracking-widest">Integrations</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Use well-known tools</h3>
              <p className="text-[#737373] mb-8 max-w-[340px]">
                Already fully integrated with the greatest existing tools and workflows.
              </p>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F5F5] hover:bg-[#EEEEEE] text-black text-sm font-medium rounded-lg transition-colors">
                See all integrations <ChevronRight size={16} />
              </button>
            </div>
            
            {/* Logo Cloud Placeholder Visual */}
            <div className="mt-12 flex items-center justify-between opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500">
               <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/5-6.png" alt="Integrations" width={400} height={60} className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Open Source Card */}
          <div className="border border-[#EEEEEE] rounded-xl bg-white p-10 flex flex-col relative overflow-hidden group">
             <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-[#FF4F11]/5 flex items-center justify-center">
                  <Github size={18} className="text-[#FF4F11]" />
                </div>
                <span className="text-[12px] font-mono text-black/40 uppercase tracking-widest">Open Source</span>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-2xl font-bold mb-4">Code you can trust</h3>
                <p className="text-[#737373] mb-8 max-w-[340px]">
                  Developed transparently and collaboratively. Join our community of contributors.
                </p>
              </div>

              {/* GitHub Stats Box */}
              <div className="mt-8 border border-[#EEEEEE] rounded-lg p-6 bg-[#FCFCFC] relative">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white">
                         <Github size={16} />
                       </div>
                       <div>
                         <div className="text-sm font-semibold">mendableai/firecrawl</div>
                         <div className="text-[10px] text-[#737373]">Public</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-white border border-[#EEEEEE] rounded-md text-[12px]">
                       <span className="text-yellow-500">★</span> Star 74.5K
                    </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF4F11]">#1337</span>
                      <span className="text-black font-medium text-xs">[python-SDK] improve async</span>
                    </div>
                    <span className="text-[#737373] text-[11px]">Apr 18, 2024</span>
                  </div>
                  <div className="h-px bg-[#EEEEEE] w-full" />
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF4F11]">#1473</span>
                      <span className="text-black font-medium text-xs">feat(extract): cost limit</span>
                    </div>
                    <span className="text-[#737373] text-[11px]">Apr 17, 2024</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-black/90 transition-colors">
                  <Github size={16} /> Check out our repo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blueprint Corner Decorations */}
      <div className="absolute bottom-0 left-[calc(50%-657px)] w-[11px] h-[11px] border-b border-l border-[#FF4F11] lg:block hidden" />
      <div className="absolute bottom-0 right-[calc(50%-657px)] w-[11px] h-[11px] border-b border-r border-[#FF4F11] lg:block hidden" />
    </section>
  );
};

export default FeaturesGrid;