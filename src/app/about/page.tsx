"use client";

import React from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Users, Target, Zap, Shield, Globe, Award } from "lucide-react";

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "User-Centric",
    description: "Everything we build starts with the user. We listen, adapt, and evolve based on real needs.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision Engineering",
    description: "We believe in clean code, robust architectures, and systems that just work.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Velocity with Quality",
    description: "Moving fast shouldn't mean breaking things. We ship high-quality features daily.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security First",
    description: "Your data is sacred. We maintain the highest standards of security and compliance.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Vision",
    description: "We're building tools for the world, from small startups to global enterprises.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "We don't settle for 'good enough'. We strive for excellence in every pixel and line of code.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 pointer-events-none grid-overlay opacity-[0.2]"></div>
        <div className="container relative z-10 mx-auto max-w-[1314px] px-6 lg:px-14">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Building the future of <span className="text-muted-foreground">AI-driven engineering.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Piepio, we're on a mission to empower developers and teams with the next generation of full-stack engineering tools. We combine cutting-edge AI with proven engineering practices to help you build faster, better, and more securely.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto max-w-[1314px] px-6 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We believe that the bottleneck of innovation shouldn't be the complexity of technology. Our goal is to abstract away the repetitive and tedious parts of development, allowing creators to focus on what truly matters: solving problems and providing value.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a solo founder building your first MVP or an enterprise team managing complex microservices, Piepio is designed to be your most reliable teammate.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl border border-border bg-muted/30 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/5 to-transparent"></div>
              <div className="text-center p-8">
                <div className="text-4xl font-bold mb-2">100k+</div>
                <div className="text-muted-foreground uppercase tracking-widest text-sm font-mono">Lines of code automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-[1314px] px-6 lg:px-14">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are the principles that guide us every day as we build Piepio and support our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 text-foreground">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
