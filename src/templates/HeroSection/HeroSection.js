"use client";

import AnimatedText from "@/components/AnimatedText/AnimatedText";


export default function HeroSection() {
  return (
    <section className="px-4 bg-white dark:bg-gray-900">
      <div className="py-4 px-2 justify-center flex flex-col md:flex-row mx-auto max-w-screen-xl text-center sm:py-8 lg:px-6 font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        <div className="mx-1 inline-block align-baseline">Find the best </div>
        <div className="mx-1"><AnimatedText /></div>
      </div>
     
    </section>
  );
}
