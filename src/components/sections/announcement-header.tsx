import React from "react";

/**
 * AnnouncementHeader Component
 * 
 * Clones the top announcement banner of Firecrawl.
 * Features:
 * - Orange background (#FF4A00) with white text.
 * - Rounded-10 container.
 * - Technical minimalistic aesthetic with border lines.
 * - Responsive padding and centered text.
 */
const AnnouncementHeader = () => {
  return (
    <div className="container px-6 py-8 lg:px-6 lg:py-12 relative z-[102]">
      {/* Main Announcement Banner */}
      <div 
        className="p-10 rounded-[10px] overflow-hidden relative text-center bg-[#FF4A00] text-white"
        style={{
          fontSize: "14px",
          lineHeight: "1.6",
          fontWeight: 400
        }}
      >
        {/* Subtle overlay gradient found in original for depth (hidden on mobile) */}
        <div className="overlay pointer-events-none select-none absolute inset-0 bg-gradient-to-r from-black/5 to-transparent lg:block hidden"></div>
        
        <span className="relative z-10 flex flex-wrap items-center justify-center gap-1">
          Introducing /agent. Gather web data with just a prompt.
          <a 
            href="/agent" 
            className="font-medium underline hover:text-white/90 transition-colors inline-flex items-center"
          >
            Try it now →
          </a>
        </span>
      </div>

      {/* Technical Grid Divider - Positioned at bottom of container */}
      <div className="bottom-0 absolute h-[1px] w-screen left-[calc(50%-50vw)] bg-[#E5E5E5]"></div>

      {/* Decorative Technical Corner SVGs (Plus markers) */}
      <svg 
        height="21" 
        width="22" 
        className="pointer-events-none absolute -bottom-[10.5px] -left-[11px]"
      >
        <path 
          d="M11 0V21M0 10.5H22" 
          stroke="#E5E5E5" 
          strokeWidth="1"
        />
      </svg>
      <svg 
        height="21" 
        width="22" 
        className="pointer-events-none absolute -bottom-[10.5px] -right-[11px]"
      >
        <path 
          d="M11 0V21M0 10.5H22" 
          stroke="#E5E5E5" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default AnnouncementHeader;