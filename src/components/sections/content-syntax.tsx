import React from 'react';
import { ArrowRight, Clipboard } from 'lucide-react';

const SyntaxSection = () => {
  return (
    <section className="py-20 px-6 mx-auto w-full max-w-[1400px]">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-[30px] font-medium tracking-tight text-brand-orange mb-4 leading-[1.2]">
          Anybody can write.
        </h2>
        <p className="max-w-[700px] text-muted-foreground text-sm leading-[1.6]">
          Native support for Markdown & MDX, offering intuitive, convenient and extensive syntax for non-dev writers, developers, and AI agents.
        </p>
        
        <div className="flex flex-row items-center gap-6 mt-10 text-[14px] font-medium">
          <button className="flex items-center gap-1.5 text-brand-orange hover:opacity-80 transition-opacity">
            Writer <ArrowRight className="size-3.5" />
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Developer <ArrowRight className="size-3.5" />
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            Automation <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Code Editor Block */}
        <div className="relative group">
          <div className="bg-[#fafafa] border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b bg-white/50">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-border" />
                <div className="size-2.5 rounded-full bg-border" />
                <div className="size-2.5 rounded-full bg-border" />
              </div>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Clipboard className="size-4" />
              </button>
            </div>
            
            <div className="p-6 font-mono text-[13px] leading-[1.7] overflow-x-auto">
              <div className="text-[#a1a1aa]">---</div>
              <div><span className="text-[#3b82f6]">title</span>: <span className="text-[#10b981]">Hello World</span></div>
              <div className="text-[#a1a1aa]">---</div>
              <br />
              <div className="text-[#3b82f6] font-bold">## Overview</div>
              <br />
              <div>I love <span className="text-[#fd8e3d] font-bold">**Piepio**</span>!</div>
              <br />
              <div>
                <span className="text-[#a1a1aa] items-center inline-flex">```ts tab=&quot;Tab 1&quot;</span><br />
                <span className="text-[#3b82f6]">console</span>.<span className="text-[#3b82f6]">log</span>(<span className="text-[#10b981]">&quot;Hello World&quot;</span>)<br />
                <span className="text-[#a1a1aa]">```</span>
              </div>
              <br />
              <div>
                <span className="text-[#a1a1aa]">```ts tab=&quot;Tab 2&quot;</span><br />
                <span className="text-[#f43f5e]">return</span> <span className="text-[#3b82f6]">0</span>;<br />
                <span className="text-[#a1a1aa]">```</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="lg:pl-8 py-4">
          <h3 className="text-xl font-medium mb-4">The familiar syntax.</h3>
          <p className="text-muted-foreground text-sm mb-8 leading-[1.6]">
            It is just Markdown, with additional features seamlessly composing into the syntax.
          </p>
          
          <ul className="space-y-3">
            {[
              'Markdown features, including images',
              'Syntax highlighting (Powered by Shiki)',
              'Codeblock Groups',
              'Callouts',
              'Cards',
              'Custom Heading Anchors',
              'Auto Table of Contents'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                <div className="size-1 rounded-full bg-brand-orange shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">
        <div className="p-6 rounded-2xl bg-[#fafafa] border border-border hover:shadow-md transition-all">
          <h4 className="font-medium text-[15px] mb-2">Extensive but simple.</h4>
          <p className="text-muted-foreground text-[14px]">
            MDX for developers authoring content, use JavaScript in content.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-[#fafafa] border border-border hover:shadow-md transition-all md:col-span-2">
          <h4 className="font-medium text-[15px] mb-2">Content, always up-to-date.</h4>
          <p className="text-muted-foreground text-[14px]">
            Combining the power of MDX and React Server Components, use the latest data from database, server — anywhere, to be part of your content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SyntaxSection;