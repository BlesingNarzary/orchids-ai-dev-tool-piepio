import React from 'react';
import Image from 'next/image';
import { Terminal, Copy } from 'lucide-react';

const FeaturesGrid1 = () => {
  return (
    <section className="py-20 px-6 mx-auto w-full max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: UI Preview with Sub-tabs */}
        <div className="group relative bg-[#FAFAFA] border border-[#E5E5E5] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="p-8">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#E5E5E5] bg-[#0A0A0A] shadow-2xl">
              {/* Simulated UI Window */}
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_2.png"
                    alt="Piepio Dashboard Preview"
                    fill
                    className="object-cover object-top opacity-90"
                  />
                </div>
                {/* Custom Sub-tabs Overlaid */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <button className="px-4 py-1.5 text-[13px] font-medium rounded-full bg-[#FD8E3D] text-white">
                    Docs
                  </button>
                  <button className="px-4 py-1.5 text-[13px] font-medium rounded-full text-white/70 hover:text-white transition-colors">
                    Notebook
                  </button>
                  <button className="px-4 py-1.5 text-[13px] font-medium rounded-full text-white/70 hover:text-white transition-colors">
                    OpenAPI
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-8 pb-8">
            <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-2">
              Minimal aesthetics, Maximum customizability.
            </h3>
            <p className="text-[#737373] text-[14px]">
              Piepio offer well-designed themes, with a headless mode to plug your own UI.
            </p>
          </div>
        </div>

        {/* Right Card: Customization with CLI */}
        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
          <div>
            <h3 className="text-xl lg:text-2xl font-medium tracking-tight mb-4">
              Step into the future.
            </h3>
            <p className="text-[#737373] text-[15px] mb-8 leading-relaxed">
              Pro designer? Customise the theme using Piepio CLI. Create interactive components for your docs, offering a rich experience to your users.
            </p>
            
            {/* Terminal Snippet */}
            <div className="relative w-full rounded-xl border border-[#E5E5E5] bg-white overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#E5E5E5] bg-white">
                <div className="flex items-center gap-2">
                  <Terminal className="size-4 text-[#737373]" />
                  <span className="text-[13px] font-mono text-[#737373]">Terminal</span>
                </div>
                <button className="p-1 hover:bg-[#F5F5F5] rounded transition-colors" aria-label="Copy code">
                  <Copy className="size-3.5 text-[#737373]" />
                </button>
              </div>
              <div className="p-4 font-mono text-[13px] leading-relaxed">
                <div className="flex gap-2">
                  <span className="text-[#FD8E3D]">pnpm</span>
                  <span className="text-[#171717]">dlx @fumadocs/cli customise</span>
                </div>
                <div className="mt-2 flex gap-2">
                  <span className="text-[#FD8E3D] animate-pulse">❯</span>
                  <span className="text-[#737373]">Choose a layout to customise...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3">
              <div className="size-2 rounded-full bg-[#FD8E3D]" />
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#FD8E3D]">
                Interactive CLI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid1;