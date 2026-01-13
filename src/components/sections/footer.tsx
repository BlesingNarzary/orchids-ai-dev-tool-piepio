import React from 'react';
import Image from 'next/image';
import { Linkedin, Github, Twitter, Youtube } from 'lucide-react';
import ComplianceLogos from './compliance-logos';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Company: [
          { name: 'About', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
      ],

      Support: [
        { name: 'Help Center', href: 'mailto:Support@piepio.com' },
        { name: 'Status', href: 'https://status.piepio.com/' },
        { name: 'Contact Us', href: 'mailto:Support@piepio.com' },
      ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={14} />, href: '#' },
    { name: 'GitHub', icon: <Github size={14} />, href: '#' },
    { name: 'X (Twitter)', icon: <Twitter size={14} />, href: '#' },
    { name: 'YouTube', icon: <Youtube size={14} />, href: '#' },
  ];

  return (
    <footer className="relative w-full border-t border-border bg-background overflow-hidden font-sans">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none grid-overlay opacity-[0.4]"></div>

      <div className="container relative z-10 mx-auto max-w-[1314px] px-6 lg:px-14">
        {/* Top Branding & Socials Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 min-h-[300px] border-x border-border">
          {/* Logo Column */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6 p-8 lg:p-12 border-b md:border-r border-border flex flex-col justify-start">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/3d6ecce6-cc10-46fc-af6f-e55871f87b8c/image-1768289104761.png?width=8000&height=8000&resize=contain"
                    alt="Piepio Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-[20px] font-bold tracking-tight text-foreground">Piepio</span>
              </div>
            
                  <div className="space-y-1">
                    <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                      AI Fullstack Engineer
                    </p>
                    <p className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-[0.1em]">
                      SOC 2 TYPE 1, SOC 2 TYPE 2, ISO 27001
                    </p>
                    <ComplianceLogos className="mt-4 scale-75 origin-left" />
                  </div>

          </div>

          {/* Social Links Columns */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6 border-b border-border grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 lg:p-12 border-r border-border md:border-r flex flex-col gap-6">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{link.icon}</span>
                  <span className="font-mono text-[13px] tracking-tight">{link.name}</span>
                </a>
              ))}
            </div>
            <div className="p-8 lg:p-12 flex flex-col gap-6">
              {socialLinks.slice(2, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{link.icon}</span>
                  <span className="font-mono text-[13px] tracking-tight">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sitemap Navigation Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 border-x border-border border-b border-border">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div 
              key={category} 
              className={`lg:col-span-3 p-8 lg:p-12 ${index !== 3 ? 'border-r border-border' : ''} ${index > 1 ? 'border-t md:border-t-0' : ''}`}
            >
              <h3 className="font-bold text-[14px] text-foreground mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-8 lg:px-12 border-x border-border bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <span className="text-[14px] text-muted-foreground">
                © {currentYear} Piepio, Inc.
              </span>
            <div className="flex gap-6">
                <a href="/terms" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                <a href="/privacy" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </div>

          </div>
          
            <a 
              href="https://status.piepio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background text-[12px] font-medium text-muted-foreground hover:bg-muted/50 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              All systems normal
            </a>
        </div>
      </div>

      {/* Cross Decor - Top Left Container Edge */}
      <div className="hidden lg:block absolute left-1/2 -ms-[657px] top-[0px] -translate-y-1/2 z-20">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="text-border">
          <path d="M10.5 0V21M0 10.5H21" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      {/* Cross Decor - Top Right Container Edge */}
      <div className="hidden lg:block absolute left-1/2 ms-[636px] top-[0px] -translate-y-1/2 z-20">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="text-border">
          <path d="M10.5 0V21M0 10.5H21" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
