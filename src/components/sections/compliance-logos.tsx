import React from 'react';

const ComplianceLogos = ({ className = "" }: { className?: string }) => {
  const orange = "#FF4D00";
  
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {/* SOC 2 Logo Approximation */}
      <div className="flex flex-col items-center gap-1">
        <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" rx="4" stroke={orange} strokeWidth="6" />
          <path d="M30 40H70V46H30V40Z" fill={orange} />
          <path d="M30 52H70V58H30V52Z" fill={orange} />
          <path d="M30 64H55V70H30V64Z" fill={orange} />
          <text x="50" y="32" textAnchor="middle" fill={orange} fontSize="14" fontWeight="bold" fontFamily="sans-serif">AICPA</text>
          <text x="50" y="85" textAnchor="middle" fill={orange} fontSize="10" fontWeight="bold" fontFamily="sans-serif">SOC 2</text>
        </svg>
      </div>

      {/* ISO 27001 Logo Approximation */}
      <div className="flex flex-col items-center gap-1">
        <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke={orange} strokeWidth="6" />
          <text x="50" y="45" textAnchor="middle" fill={orange} fontSize="18" fontWeight="bold" fontFamily="sans-serif">ISO</text>
          <text x="50" y="65" textAnchor="middle" fill={orange} fontSize="14" fontWeight="bold" fontFamily="sans-serif">27001</text>
        </svg>
      </div>
    </div>
  );
};

export default ComplianceLogos;
