import React from 'react';
import Image from 'next/image';
import { Heart, Battery, Github, Zap } from 'lucide-react';

const ContributorsFooter = () => {
  // Mock contributor avatars based on the screenshot
  const contributors = [
    { id: 1, src: "https://avatars.githubusercontent.com/u/124599" },
    { id: 2, src: "https://avatars.githubusercontent.com/u/35677084" },
    { id: 3, src: "https://avatars.githubusercontent.com/u/38025074" },
    { id: 4, src: "https://avatars.githubusercontent.com/u/10645823" },
    { id: 5, src: "https://avatars.githubusercontent.com/u/6238128" },
    { id: 6, src: "https://avatars.githubusercontent.com/u/17232230" },
    { id: 7, src: "https://avatars.githubusercontent.com/u/4742207" },
    { id: 8, src: "https://avatars.githubusercontent.com/u/20041231" },
    { id: 9, src: "https://avatars.githubusercontent.com/u/28220748" },
    { id: 10, src: "https://avatars.githubusercontent.com/u/11054238" },
    { id: 11, src: "https://avatars.githubusercontent.com/u/81014381" },
    { id: 12, src: "https://avatars.githubusercontent.com/u/13217277" },
    { id: 13, src: "https://avatars.githubusercontent.com/u/59228569" },
    { id: 14, src: "https://avatars.githubusercontent.com/u/55504616" },
    { id: 15, src: "https://avatars.githubusercontent.com/u/30156533" },
    { id: 16, src: "https://avatars.githubusercontent.com/u/7403175" },
    { id: 17, src: "https://avatars.githubusercontent.com/u/3432021" },
    { id: 18, src: "https://avatars.githubusercontent.com/u/8494747" },
    { id: 19, src: "https://avatars.githubusercontent.com/u/10707740" },
    { id: 20, src: "https://avatars.githubusercontent.com/u/23306470" },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col gap-16 bg-background">
      <div className="text-center">
        <h2 className="text-[2rem] font-medium tracking-tight text-primary leading-tight">
          A Framework of Dream.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Community Card */}
        <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Heart className="size-5 text-[#ff4c9a] fill-[#ff4c9a]" />
            <h3 className="text-2xl font-medium tracking-tight text-foreground">
              Made Possible by You.
            </h3>
            <p className="text-muted-foreground text-sm max-w-[400px]">
              Piepio is 100% powered by passion and open source community.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              Sponsors
            </button>
            <button className="px-5 py-2.5 bg-secondary text-secondary-foreground border rounded-full text-sm font-medium hover:bg-accent transition-colors">
              Contributors
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {contributors.slice(0, 15).map((avatar) => (
                <div key={avatar.id} className="relative size-8 rounded-full overflow-hidden border bg-muted">
                  <Image
                    src={avatar.src}
                    alt="Contributor"
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
              ))}
              <div className="flex -space-x-4 items-center pl-2">
                {contributors.slice(15, 18).map((avatar) => (
                  <div key={avatar.id} className="relative size-8 rounded-full overflow-hidden border-2 border-card bg-muted">
                     <Image src={avatar.src} alt="Contributor" fill className="object-cover" />
                  </div>
                ))}
                <span className="text-xs font-medium text-muted-foreground pl-6">+28</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-medium text-center lg:text-left">
              Some of our best contributors.
            </p>
          </div>
        </div>

        {/* Moon CTA Card */}
        <div className="relative overflow-hidden rounded-2xl border bg-[#fdfcf8] p-8 shadow-sm group">
            <div className="relative z-10 flex flex-col items-center text-center gap-2">
              <h3 className="text-[2.5rem] font-bold tracking-tighter text-[#4a4a40] uppercase leading-none">
                Build Your App
              </h3>
              <p className="text-muted-foreground text-sm font-mono italic opacity-60">
                light and gorgeous, just like the moon.
              </p>
            </div>
          
          {/* Moon Gradient Background */}
          <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#fde68a] via-[#fef3c7] to-transparent opacity-40 blur-3xl transform group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-120px] w-[400px] h-[400px] rounded-full bg-[#fef3c7] opacity-60 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Trust & OSS Info Card */}
      <div className="rounded-2xl border bg-card shadow-sm p-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Battery className="size-4" />
              Battery guaranteed.
            </div>
            <p className="text-sm text-muted-foreground">
              Actively maintained, open for contributions.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Github className="size-4" />
              Fully open-source.
            </div>
            <p className="text-sm text-muted-foreground">
              Open source, available on Github.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Zap className="size-4" />
              Within seconds.
            </div>
            <p className="text-sm text-muted-foreground">
              Initialize a new project instantly with CLI.
            </p>
          </div>
        </div>

          <div className="flex items-center gap-3 pt-4 border-t">
            <a 
              href="/docs" 
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Get Started
            </a>
            <a 
              href="https://github.com/piepio-org/piepio" 
              className="px-6 py-2.5 bg-secondary text-secondary-foreground border rounded-full text-sm font-medium hover:bg-accent transition-all"
            >
              Open GitHub
            </a>
          </div>
      </div>
    </section>
  );
};

export default ContributorsFooter;