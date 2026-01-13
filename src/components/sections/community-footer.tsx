import React from 'react';
import Image from 'next/image';
import { Heart, Battery, Github, Timer } from 'lucide-react';

const CommunityFooter = () => {
  const contributors = [
    "https://avatars.githubusercontent.com/u/124599",
    "https://avatars.githubusercontent.com/u/35677084",
    "https://avatars.githubusercontent.com/u/38025074",
    "https://avatars.githubusercontent.com/u/10645823",
    "https://avatars.githubusercontent.com/u/82253636",
    "https://avatars.githubusercontent.com/u/10232457",
    "https://avatars.githubusercontent.com/u/47111222",
    "https://avatars.githubusercontent.com/u/23249112",
    "https://avatars.githubusercontent.com/u/15025983",
    "https://avatars.githubusercontent.com/u/20676451",
    "https://avatars.githubusercontent.com/u/1723363",
    "https://avatars.githubusercontent.com/u/3335555",
    "https://avatars.githubusercontent.com/u/4446666",
    "https://avatars.githubusercontent.com/u/7778888",
    "https://avatars.githubusercontent.com/u/9990000",
    "https://avatars.githubusercontent.com/u/11122233",
    "https://avatars.githubusercontent.com/u/44455566",
    "https://avatars.githubusercontent.com/u/77722211",
    "https://avatars.githubusercontent.com/u/66633311",
  ];

  return (
    <section className="mt-24 pb-20 px-6 mx-auto w-full max-w-[1400px]">
      <div className="text-center mb-16">
        <h2 className="text-[#fd8e3d] font-medium text-2xl md:text-3xl tracking-tight">
          A Framework of Dream.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Made Possible by You Section */}
        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-[24px] p-8 flex flex-col justify-between shadow-sm min-h-[360px]">
          <div>
            <Heart className="text-[#ff4e9e] fill-[#ff4e9e] size-5 mb-4" />
            <h3 className="text-2xl font-medium tracking-tight mb-4">Made Possible by You.</h3>
            <p className="text-[#737373] text-[14px] leading-relaxed mb-8">
              Piepio is 100% powered by passion and open source community.
            </p>
            <div className="flex gap-3 mb-10">
              <button className="bg-[#fd8e3d] text-white px-6 py-2.5 rounded-full text-[14px] font-medium transition-colors hover:bg-[#fd8e3d]/90">
                Sponsors
              </button>
              <button className="bg-[#f4f4f5] text-[#171717] px-6 py-2.5 rounded-full text-[14px] font-medium border border-[#e5e5e5] transition-colors hover:bg-[#e5e5e5]">
                Contributors
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center -space-x-2">
              {contributors.slice(0, 18).map((src, i) => (
                <div key={i} className="relative size-8 rounded-full border-2 border-white overflow-hidden bg-gray-100 shrink-0">
                  <img src={src} alt="Contributor" className="size-full object-cover" />
                </div>
              ))}
              <div className="flex flex-wrap -space-x-2 mt-2 w-full">
                 {contributors.slice(0, 3).map((src, i) => (
                    <div key={`2-${i}`} className="relative size-8 rounded-full border-2 border-white overflow-hidden bg-gray-100 shrink-0">
                      <img src={src} alt="Contributor" className="size-full object-cover" />
                    </div>
                  ))}
                  <div className="bg-[#f5f5f5] text-[#737373] size-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-medium shrink-0">
                    +28
                  </div>
              </div>
            </div>
            <p className="text-[#737373] text-[12px]">Some of our best contributors.</p>
          </div>
        </div>

        {/* Build Your Docs CTA Card */}
        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-[24px] overflow-hidden flex flex-col items-center justify-center relative p-8 shadow-sm min-h-[360px]">
           <div className="z-10 text-center">
            <h3 className="text-[28px] font-mono font-bold tracking-[0.2em] text-[#4d5b31] uppercase mb-4">
              BUILD YOUR DOCS
            </h3>
            <p className="text-[#a3a3a3] text-[13px] font-mono">
              light and gorgeous, just like the moon.
            </p>
          </div>
          
          {/* Abstract Moon/Light Design */}
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#fdebdc]/40 to-transparent flex items-center justify-center overflow-hidden">
             <div 
              className="absolute bottom-[-150px] w-[500px] h-[400px] rounded-[100%] bg-gradient-to-b from-[#fdebdc] to-[#ffffff] opacity-80 blur-[2px]"
              style={{
                boxShadow: '0 -20px 80px rgba(253, 235, 220, 0.4)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Final Feature List & Buttons */}
      <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-[24px] p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#171717] font-medium text-[14px]">
              <Battery className="size-4" />
              <span>Battery guaranteed.</span>
            </div>
            <p className="text-[#737373] text-[14px] leading-snug">
              Actively maintained, open for contributions.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#171717] font-medium text-[14px]">
              <Github className="size-4" />
              <span>Fully open-source.</span>
            </div>
            <p className="text-[#737373] text-[14px] leading-snug">
              Open source, available on Github.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#171717] font-medium text-[14px]">
              <Timer className="size-4" />
              <span>Within seconds.</span>
            </div>
            <p className="text-[#737373] text-[14px] leading-snug">
              Initialize a new project instantly with CLI.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-[#e5e5e5] pt-8">
          <a 
            href="/docs" 
            className="bg-[#fd8e3d] text-white px-8 py-3 rounded-full text-[14px] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Read docs
          </a>
          <a 
            href="https://github.com/piepio-org/piepio" 
            className="bg-[#f4f4f5] text-[#171717] px-8 py-3 rounded-full text-[14px] font-medium border border-[#e5e5e5] hover:bg-[#e5e5e5] transition-colors"
          >
            Open GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityFooter;