import React from 'react';

/**
 * Logos component displaying a continuous marquee of tech company logos.
 * Features a "Trusted by" sticky-style header on the left in desktop view
 * and a horizontally scrolling marquee of industry-leader logos.
 */

const Logos = () => {
  const logos = [
    { name: 'Netflix', href: 'https://netflix.com', color: '#FACC15' },
    { name: 'Airbnb', href: 'https://airbnb.com', color: '#FBBF24' },
    { name: 'Google', href: 'https://google.com', color: '#FB923C' },
    { name: 'Meta', href: 'https://meta.com', color: '#F87171' },
    { name: 'Amazon', href: 'https://amazon.com', color: '#E879F9' },
    { name: 'Microsoft', href: 'https://microsoft.com', color: '#A78BFA' },
    { name: 'Stripe', href: 'https://stripe.com', color: '#818CF8' },
    { name: 'Vercel', href: 'https://vercel.com', color: '#60A5FA' },
    { name: 'OpenAI', href: 'https://openai.com', color: '#34D399' },
    { name: 'GitHub', href: 'https://github.com', color: '#4ADE80' },
    { name: 'Discord', href: 'https://discord.com', color: '#A3E635' },
  ];

  return (
    <section 
      className="relative w-full border-y border-[#E5E5E5] py-0 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3d6ecce6-cc10-46fc-af6f-e55871f87b8c/image-1768289225131.png?width=8000&height=8000&resize=contain")' }}
    >
      <div className="flex flex-col lg:flex-row items-stretch max-w-[1314px] mx-auto border-x border-[#E5E5E5]">
        {/* Left Column: Trusted By Text */}
        <div className="flex items-center justify-center lg:justify-start border-b lg:border-b-0 lg:border-r border-[#E5E5E5] px-12 py-8 lg:py-0 lg:min-h-[100px] lg:w-[260px] shrink-0 bg-white/20 backdrop-blur-md z-10">
          <h2 className="text-[13px] font-medium leading-[1.4] text-[#666666] uppercase tracking-[0.05em] lg:normal-case lg:tracking-normal text-center lg:text-left">
            Trusted by <span className="text-[#FF4D00]">10,000+</span>
            <br className="hidden lg:block" /> developers at industry leaders
          </h2>
        </div>

        {/* Right Column: Scrolling Marquee */}
        <div className="flex-1 min-h-[100px] flex items-center overflow-hidden">
          <div className="relative flex overflow-hidden group">
            <div className="flex animate-marquee hover:pause whitespace-nowrap">
              {/* Double mapping for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <LogoItem key={`${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
            {/* Overlay gradients to fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/10 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const LogoItem = ({ logo }: { logo: { name: string; href: string; color: string } }) => {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-12 h-[100px] border-r border-[#E5E5E5]/30 group transition-all duration-300 gap-3"
      style={{ backgroundColor: logo.color }}
    >
      <LogoIcon name={logo.name} color={logo.color} />
      <span className="text-lg font-bold text-black/40 group-hover:text-black/70 transition-colors select-none">
        {logo.name}
      </span>
    </a>
  );
};

// Simplified icon component to match the technical visual language in screenshots
const LogoIcon = ({ name, color }: { name: string; color: string }) => {
  const iconClass = "w-5 h-5 text-black/40 group-hover:text-black/70 transition-colors fill-current";
  const strokeClass = "w-5 h-5 text-black/40 group-hover:text-black/70 transition-colors fill-none stroke-current stroke-2";
  
  switch (name) {
    case 'Meta':
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="M15.5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm15.4-3.5C21.6 5.3 19.1 4 16.5 4c-1.8 0-3.4.6-4.5 1.5C10.9 4.6 9.3 4 7.5 4 4.9 4 2.4 5.3.1 7c-1.2 1.3-1.2 3.3 0 4.6l.4.4c.5.5 1.3.5 1.8 0l.4-.4C3.8 10.4 5.5 9.5 7.5 9.5c1.4 0 2.6.4 3.5 1.1-.9.7-2.1 1.1-3.5 1.1-2 0-3.7-.9-4.8-2.1l-.4-.4c-.5-.5-1.3-.5-1.8 0l-.4.4c-1.2 1.3-1.2 3.3 0 4.6 2.3 1.7 4.8 3 7.4 3 1.8 0 3.4-.6 4.5-1.5 1.1.9 2.7 1.5 4.5 1.5 2.6 0 5.1-1.3 7.4-3 1.2-1.3 1.2-3.3 0-4.6l-.4-.4c-.5-.5-1.3-.5-1.8 0l-.4.4c-1.1 1.2-2.8 2.1-4.8 2.1-1.4 0-2.6-.4-3.5-1.1 1-.7 2.2-1.1 3.5-1.1 2 0 3.7.9 4.8 2.1l.4.4c.5.5 1.3.5 1.8 0l.4-.4c1.2-1.3 1.2-3.3 0-4.6z" />
        </svg>
      );
    case 'Microsoft':
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
        </svg>
      );
    case 'Amazon':
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="M15.93 17.09c-.41 0-.74-.3-.79-.7l-.46-3.83c-1.07.72-2.31 1.09-3.71 1.09-3.23 0-5.85-2.22-5.85-5.59s2.62-5.59 5.85-5.59c1.4 0 2.64.37 3.71 1.09l.46-3.83c.05-.4.38-.7.79-.7.46 0 .82.4.77.85l-1.33 11c-.05.45-.41.85-.85.85z" />
        </svg>
      );
    case 'Vercel':
      return (
        <svg viewBox="0 0 24 24" className={iconClass}>
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={strokeClass} stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
};

export default Logos;