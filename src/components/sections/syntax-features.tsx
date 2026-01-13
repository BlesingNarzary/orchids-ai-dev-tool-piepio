import React from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';

const SyntaxFeatures = () => {
  return (
    <section className="py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-primary">
            Anybody can write.
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed">
            Native support for Markdown & MDX, offering intuitive, convenient and extensive syntax for non-dev writers, developers, and AI agents.
          </p>
          
          {/* Persona Switcher - Static Desktop Version */}
          <div className="flex items-center justify-center gap-6 pt-4 text-sm font-medium">
            <span className="text-primary flex items-center gap-1.5 cursor-default">
              Writer <ArrowRight className="size-4" />
            </span>
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Developer
            </span>
            <ArrowRight className="size-4 text-border" />
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              Automation
            </span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Code Editor Preview Block */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative flex flex-col rounded-2xl border bg-card shadow-2xl overflow-hidden min-h-[400px]">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="size-2.5 rounded-full bg-border" />
                    <div className="size-2.5 rounded-full bg-border" />
                    <div className="size-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">MDX Editor</span>
                </div>
                <button className="p-1 hover:bg-accent rounded-md transition-colors">
                  <Copy className="size-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto bg-white">
                <div className="space-y-1">
                  <p className="text-muted-foreground">---</p>
                  <p className="text-foreground"><span className="text-blue-600">title</span>: Hello World</p>
                  <p className="text-muted-foreground">---</p>
                  <br />
                  <p className="text-blue-600 font-bold">## Overview</p>
                  <br />
                  <p className="text-foreground">I love <span className="font-bold">**Piepio**</span>!</p>
                  <br />
                  <div className="text-foreground">
                    <span className="text-muted-foreground">```ts tab="Tab 1"</span>
                    <p className="pl-4"><span className="text-blue-600">console</span>.<span className="text-orange-600">log</span>(<span className="text-green-600">"Hello World"</span>)</p>
                    <span className="text-muted-foreground">```</span>
                  </div>
                  <br />
                  <div className="text-foreground">
                    <span className="text-muted-foreground">```ts tab="Tab 2"</span>
                    <p className="pl-4"><span className="text-primary">return</span> <span className="text-orange-600">0</span>;</p>
                    <span className="text-muted-foreground">```</span>
                  </div>
                  <p className="text-muted-foreground">...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List Column */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-4">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium tracking-tight">The familiar syntax.</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                It is just Markdown, with additional features seamlessly composing into the syntax.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Markdown features, including images",
                "Syntax highlighting (Powered by Shiki)",
                "Codeblock Groups",
                "Callouts",
                "Cards",
                "Custom Heading Anchors",
                "Auto Table of Contents",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="size-1 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Info Grid for Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors shadow-sm">
            <h4 className="text-xl font-medium mb-3">Extensive but simple.</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              MDX for developers authoring content, use JavaScript in content. Define components once, reuse them across your entire documentation site with ease.
            </p>
          </div>
          <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors shadow-sm">
            <h4 className="text-xl font-medium mb-3">Content, always up-to-date.</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Combining the power of MDX and React Server Components, use the latest data from database, server — anywhere, to be part of your content without rebuilds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyntaxFeatures;