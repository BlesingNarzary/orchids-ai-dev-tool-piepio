import React from 'react';
import { Search, FileText, Layout, Book, User, Terminal } from 'lucide-react';
import Image from 'next/image';

const SearchAndComponents = () => {
  return (
    <section className="grid grid-cols-1 gap-6 mt-12 px-6 mx-auto w-full max-w-[1400px] md:px-12 lg:grid-cols-2">
      {/* Search Experience Card */}
      <div className="rounded-2xl text-sm p-8 bg-white shadow-lg border border-border flex flex-col">
        <div className="mb-6">
          <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-2 text-[#171717]">
            Enhance your search experience.
          </h3>
          <p className="text-[#737373] text-[14px]">
            Integrate with Orama Search and Algolia Search in your docs easily.
          </p>
        </div>

        <div className="mb-8">
          <a
            href="/docs/ui/search"
            className="inline-flex justify-center px-5 py-2.5 rounded-full font-medium tracking-tight transition-all duration-300 bg-[#FD8E3D] text-white hover:opacity-90 active:scale-95 text-[14px]"
          >
            Learn More
          </a>
        </div>

        {/* Mock Search UI */}
        <div className="relative mt-auto border rounded-xl overflow-hidden bg-[#FAFAFA] shadow-sm">
          <div className="p-4 border-b bg-white flex items-center gap-2">
            <Search className="size-4 text-[#737373]" />
            <span className="text-[#737373] text-[14px]">Search...</span>
          </div>
          <div className="p-2 space-y-1">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F5F5] border border-border">
              <FileText className="size-4 text-[#FD8E3D]" />
              <div className="flex flex-col">
                <span className="font-medium text-[#171717]">Getting Started</span>
                <span className="text-[12px] text-[#737373]">Use Piepio in your project.</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors cursor-default">
              <Layout className="size-4 text-[#737373]" />
              <div className="flex flex-col">
                <span className="font-medium text-[#171717]">Components</span>
                <span className="text-[12px] text-[#737373]">The UI Components for your docs.</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors cursor-default">
              <Book className="size-4 text-[#737373]" />
              <div className="flex flex-col">
                <span className="font-medium text-[#171717]">MDX Content</span>
                <span className="text-[12px] text-[#737373]">Using MDX for content.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* shadcn/ui CLI Card */}
      <div className="rounded-2xl text-sm p-8 bg-white shadow-lg border border-border flex flex-col">
        <div className="mb-6">
          <h3 className="font-medium tracking-tight text-xl lg:text-2xl mb-2 text-[#171717]">
            The shadcn/ui for docs
          </h3>
          <p className="text-[#737373] text-[14px]">
            Piepio CLI creates interactive components for your docs, offering a rich experience to your users.
          </p>
        </div>

        <div className="mb-8">
          <button
            className="inline-flex justify-center px-5 py-2.5 rounded-full font-medium tracking-tight transition-all duration-300 bg-[#FD8E3D] text-white hover:opacity-90 active:scale-95 text-[14px]"
          >
            Commands
          </button>
        </div>

        {/* CLI Terminal Mockup */}
        <div className="relative mt-auto h-[240px] rounded-xl overflow-hidden bg-black flex items-center justify-center p-8 group">
          {/* Background Visual using the provided asset */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-fumadocs-dev/assets/images/images_7.png"
              alt="CLI background"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Shiny Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 z-10" />

          {/* Code Block */}
          <div className="relative z-20 flex items-center gap-3 px-6 py-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <div className="size-3 rounded-full bg-[#A855F7] animate-pulse shadow-[0_0_10px_purple]" />
            <code className="font-mono text-[15px] text-white tracking-wide">
              npx fumadocs/cli add
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAndComponents;