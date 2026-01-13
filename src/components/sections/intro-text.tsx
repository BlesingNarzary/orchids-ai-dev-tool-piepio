import React from 'react';

const IntroText = () => {
  return (
    <section className="px-6 mx-auto w-full max-w-[1400px] md:px-12 mt-12 mb-24 lg:mb-40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <p className="text-[24px] md:text-[32px] lg:text-[42px] tracking-tight leading-[1.1] font-medium col-span-full text-[#171717]">
          Experience a <span className="text-[#fd7e14]">workflow</span> that feels like magic. 
          No more boilerplate. No more context switching. Just you and the code, powered by an AI that works as your pair engineer.
        </p>
      </div>
    </section>
  );
};

export default IntroText;