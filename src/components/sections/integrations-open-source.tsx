import React from 'react';
import Image from 'next/image';
import { LucideGithub, LucideExternalLink, LucideGitBranch, LucideCode2, LucideNetwork } from 'lucide-react';

const IntegrationsOpenSource = () => {
  return (
    <section className="relative w-full overflow-hidden border-t border-brand-border-faint bg-white">
      {/* Container with exact max-width from design system */}
      <div className="container max-w-[1314px] mx-auto px-6 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border border-brand-border-faint rounded-xl overflow-hidden bg-white">
          
          {/* Left Column: Integrations */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-brand-border-faint">
            {/* Visual Header for Integrations */}
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden bg-[#fafafa]">
              <div className="grid-overlay absolute inset-0 opacity-40"></div>
              
              {/* Integration Visualization */}
              <div className="relative z-10 flex items-center gap-12">
                <div className="w-16 h-16 rounded-full bg-white border border-brand-border-faint flex items-center justify-center shadow-sm">
                   <div className="w-8 h-8 opacity-80">
                      {/* Simple Zapier-like icon placeholder as per guidelines */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                   </div>
                </div>
                
                <div className="relative">
                   <div className="w-8 h-[1px] bg-brand-border-faint"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-brand-border-faint bg-white flex items-center justify-center text-[10px] text-brand-mono-ghost font-mono">
                     <LucideExternalLink size={10} />
                   </div>
                </div>

                <div className="w-16 h-16 rounded-full bg-white border border-brand-border-faint flex items-center justify-center shadow-sm ring-4 ring-brand-heat-100">
                   <div className="w-8 h-8 text-brand-primary">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                      </svg>
                   </div>
                </div>
              </div>

              {/* Technical Corners - Custom decorative elements */}
              <div className="absolute top-0 left-0 p-4 font-mono text-[10px] text-brand-mono-ghost">
                [ CONNECT_SDK_v2 ]
              </div>
            </div>

            {/* Content for Integrations */}
            <div className="p-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-brand-mono-ghost">
                <LucideNetwork size={16} className="text-brand-mono-ghost" />
                <span className="font-mono text-xs uppercase tracking-wider">Integrations</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-accent">Use well-known tools</h3>
              <p className="text-brand-body text-base max-w-sm">
                Already fully integrated with the greatest existing tools and workflows.
              </p>
              <div className="mt-4">
                <a 
                  href="/integrations" 
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-brand-border-faint rounded-md bg-white hover:bg-brand-black-alpha-4 transition-colors"
                >
                  See all integrations
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Open Source */}
          <div className="flex flex-col">
            {/* Github Activity Feed UI mockup */}
            <div className="relative h-[300px] bg-white overflow-hidden p-6">
              <div className="border border-brand-border-faint rounded-lg h-full flex flex-col bg-white shadow-sm">
                {/* Header of Github Card */}
                <div className="flex items-center justify-between p-4 border-b border-brand-border-faint bg-[#fcfcfc]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center text-white">
                      <LucideGithub size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-accent">mendableai/<span className="font-bold">firecrawl</span></div>
                      <div className="text-[10px] px-1.5 border border-brand-border-faint rounded bg-white text-brand-body inline-block">Public</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border border-brand-border-faint rounded px-2 py-1 bg-white">
                    <span className="text-xs text-brand-body flex items-center gap-1"><LucideGitBranch size={12} /> Star</span>
                    <span className="text-xs font-bold text-brand-accent border-l border-brand-border-faint pl-2">74.5K</span>
                  </div>
                </div>

                {/* PR/Commit feed simulation */}
                <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
                  <div className="flex flex-col gap-1 border-b border-brand-border-faint pb-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-brand-accent">
                      <span className="text-[#0ea5e9]"><LucideGitBranch size={12} className="inline mr-1" /></span>
                      [python-SDK] improvs/async
                    </div>
                    <div className="text-[10px] text-brand-mono-ghost">#1337 · Apr 18, 2025 · rafaelsideguide</div>
                  </div>
                  <div className="flex flex-col gap-1 border-b border-brand-border-faint pb-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-brand-accent">
                      <span className="text-[#0ea5e9]"><LucideGitBranch size={12} className="inline mr-1" /></span>
                      feat(extract): cost limit
                    </div>
                    <div className="text-[10px] text-brand-mono-ghost">#1413 · Apr 17, 2025 · mogery</div>
                  </div>
                  
                  {/* Contributors avatars stacked */}
                  <div className="mt-2 flex items-center">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                         <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/5-6.png" width={32} height={32} alt="Contributor" />
                       </div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                         <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-firecrawl-dev/assets/images/6-7.png" width={32} height={32} alt="Contributor" />
                       </div>
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-muted text-xs flex items-center justify-center font-bold text-brand-accent">
                         +90
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technical Label */}
              <div className="absolute bottom-2 right-8 font-mono text-[9px] text-brand-mono-ghost opacity-40 uppercase">
                open_source_compliance_active
              </div>
            </div>

            {/* Content for Open Source */}
            <div className="p-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-brand-mono-ghost">
                <LucideCode2 size={16} className="text-brand-mono-ghost" />
                <span className="font-mono text-xs uppercase tracking-wider">Open Source</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-accent">Code you can trust</h3>
              <p className="text-brand-body text-base max-w-sm">
                Developed transparently and collaboratively. Join our community of contributors.
              </p>
              <div className="mt-4">
                <a 
                  href="https://github.com/firecrawl/firecrawl" 
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-brand-border-faint rounded-md bg-white hover:bg-brand-black-alpha-4 transition-colors gap-2"
                >
                  <LucideGithub size={16} />
                  Check out our repo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorative Grid Line */}
      <div className="absolute top-0 left-1/2 -ml-[1px] w-[1px] h-full bg-brand-border-faint hidden lg:block -z-10"></div>
    </section>
  );
};

export default IntegrationsOpenSource;