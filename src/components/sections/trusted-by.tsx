import React from "react";
import Marquee from "react-fast-marquee";
import { 
  SiGoogle, 
  SiMeta, 
  SiAmazon, 
  SiStripe, 
  SiVercel, 
  SiOpenai, 
  SiGithub, 
  SiDiscord,
  SiNetflix,
  SiAirbnb
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

/**
 * TrustedBySection Component
 * 
 * Displays a social proof section with "Trusted by 10,000+ developers" heading
 * and monochrome logos of prominent companies in an infinite flow.
 */
const TrustedBySection = () => {
  const logos = [
    { name: "Google", url: "https://google.com", icon: SiGoogle },
    { name: "Meta", url: "https://meta.com", icon: SiMeta },
    { name: "Amazon", url: "https://amazon.com", icon: SiAmazon },
    { name: "Microsoft", url: "https://microsoft.com", icon: FaMicrosoft },
    { name: "Stripe", url: "https://stripe.com", icon: SiStripe },
    { name: "Vercel", url: "https://vercel.com", icon: SiVercel },
    { name: "OpenAI", url: "https://openai.com", icon: SiOpenai },
    { name: "GitHub", url: "https://github.com", icon: SiGithub },
    { name: "Discord", url: "https://discord.com", icon: SiDiscord },
    { name: "Netflix", url: "https://netflix.com", icon: SiNetflix },
    { name: "Airbnb", url: "https://airbnb.com", icon: SiAirbnb },
  ];

  return (
    <section className="relative w-full border-y border-brand-border-faint bg-white py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch max-w-[1314px] mx-auto border-x border-brand-border-faint">
        {/* Label Container */}
        <div className="flex items-center justify-center lg:justify-start border-b lg:border-b-0 lg:border-r border-brand-border-faint px-12 py-8 lg:py-0 lg:min-h-[100px] lg:w-[260px] shrink-0 bg-white z-10">
          <h2 className="text-[13px] font-medium leading-[1.4] text-brand-body uppercase tracking-[0.05em] lg:normal-case lg:tracking-normal text-center lg:text-left">
            Trusted by <span className="text-brand-primary">10,000+</span>
            <br className="hidden lg:block" />
            {" "}developers at industry leaders
          </h2>
        </div>

        {/* Logos Flow Container */}
        <div className="flex-1 min-h-[100px] flex items-center">
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {logos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-12 h-[100px] border-r border-brand-border-faint group hover:bg-brand-background transition-colors gap-3"
              >
                <logo.icon className="text-2xl text-brand-accent/30 group-hover:text-brand-primary/80 transition-colors" />
                <span className="text-lg font-bold text-brand-accent/30 group-hover:text-brand-primary/80 transition-colors select-none">
                  {logo.name}
                </span>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
