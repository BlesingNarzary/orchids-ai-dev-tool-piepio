import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-piepio-com/assets/images/images_2.png",
    quote: "Piepio helped us launch our MVP in 2 days instead of 2 months. Absolutely game-changing."
  },
  {
    name: "Marcus Johnson",
    role: "Senior Engineer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-piepio-com/assets/images/images_3.png",
    quote: "I was skeptical, but Piepio writes cleaner code than most junior devs. It's become essential."
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3d6ecce6-cc10-46fc-af6f-e55871f87b8c-piepio-com/assets/images/images_4.png",
    quote: "Non-technical founders can finally build real products. This democratizes software creation."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1314px] px-6 lg:px-14">
        {/* Header Metadata */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#A3A3A3]">
              [ 05 / 07 ] · TESTIMONIALS
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F1] border border-[#FF4D00]/10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF4D00]">COMMUNITY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                Loved by <span className="text-[#FF4D00]">Developers</span>
              </h2>
              <p className="text-[#666666] text-lg">
                Join thousands of developers who are building faster with Piepio.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E5E5E5] divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 md:p-10 flex flex-col gap-8 transition-colors hover:bg-[#F5F5F5]/30 group"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-[#E5E5E5]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-black leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="font-mono text-[12px] text-[#A3A3A3] uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <blockquote className="relative">
                <p className="text-[17px] italic text-[#333333] leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Technical Footer Decoration */}
        <div className="mt-16 flex justify-center opacity-10 pointer-events-none select-none">
          <div className="text-[10px] font-mono leading-tight text-center">
            {`+-------------------------------------------------------------+`}
            <br />
            {`| NODE: FEEDBACK_SERVICE | STATUS: 200 | UPTIME: 99.9% |`}
            <br />
            {`+-------------------------------------------------------------+`}
          </div>
        </div>
      </div>
    </section>
  );
}