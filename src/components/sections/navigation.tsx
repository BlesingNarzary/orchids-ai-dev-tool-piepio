import React from 'react';
import Image from 'next/image';
import { Search, Sun, Moon, Github, ChevronDown } from 'lucide-react';

const Navigation = () => {
  return (
    <header 
      id="nd-nav" 
      className="sticky h-14 top-0 z-40 w-full" 
      aria-label="Main"
    >
      <div className="glass-effect border-b bg-background/80 backdrop-blur-lg transition-colors">
        <div className="mx-auto max-w-[1400px]">
          <nav className="flex h-14 w-full items-center px-4">
            {/* Logo Section */}
            <a className="inline-flex items-center gap-2.5 font-semibold" href="/">
              <div className="relative size-5 overflow-hidden rounded-full bg-gradient-to-br from-primary to-[#ffb17a]">
                {/* SVG Fallback for the sphere icon seen in screenshots */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="url(#logograd)"/>
                  <defs>
                    <linearGradient id="logograd" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fd8e3d" />
                      <stop offset="1" stopColor="#ffb17a" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-medium text-[14px] leading-tight text-foreground">
                Piepio
              </span>
            </a>

            {/* Main Navigation Links */}
            <ul className="flex flex-row items-center gap-2 px-6 max-sm:hidden">
              <li className="list-none">
                <a 
                  href="/docs" 
                  className="text-sm p-2 text-muted-foreground transition-colors hover:text-foreground rounded-md inline-flex items-center"
                >
                  Documentation
                </a>
              </li>
              <li className="list-none">
                <a 
                  href="/blog" 
                  className="text-sm p-2 text-muted-foreground transition-colors hover:text-foreground rounded-md inline-flex items-center"
                >
                  Blog
                </a>
              </li>
              <li className="list-none">
                <a 
                  href="/showcase" 
                  className="text-sm p-2 text-muted-foreground transition-colors hover:text-foreground rounded-md inline-flex items-center"
                >
                  Showcase
                </a>
              </li>
              <li className="list-none">
                <a 
                  href="/sponsors" 
                  className="text-sm p-2 text-muted-foreground transition-colors hover:text-foreground rounded-md inline-flex items-center"
                >
                  Sponsors
                </a>
              </li>
            </ul>

            {/* Search and Social/Theme Section */}
            <div className="flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden">
              {/* Search Bar */}
              <button 
                data-search-full="" 
                className="inline-flex items-center gap-2 border bg-secondary/50 p-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground w-full rounded-full ps-2.5 max-w-[240px]"
              >
                <Search className="size-4" />
                <span>Search</span>
                <div className="ms-auto inline-flex gap-0.5 pointer-events-none select-none">
                  <kbd className="rounded-md border bg-background px-1.5 text-[10px] font-sans">⌘</kbd>
                  <kbd className="rounded-md border bg-background px-1.5 text-[10px] font-sans">K</kbd>
                </div>
              </button>

              {/* GitHub Link */}
              <ul className="flex flex-row gap-2 items-center ml-1">
                <li className="list-none">
                  <a 
                    href="https://github.com/piepio-org/piepio" 
                    aria-label="github" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 p-1.5 hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="size-5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Navigation Icons */}
            <ul className="flex flex-row items-center ms-auto lg:hidden">
              <button 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors p-2 hover:bg-accent text-muted-foreground"
                aria-label="Open Search"
              >
                <Search className="size-[18px]" />
              </button>
              <li className="list-none">
                <button 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors p-1.5 hover:bg-accent group"
                  aria-label="Toggle Menu"
                >
                  <ChevronDown className="size-[22px] transition-transform duration-300" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;