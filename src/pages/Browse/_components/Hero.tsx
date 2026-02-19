import { useEffect, useRef } from "react";
import bannerImg from "@/assets/home/banner-browse.jpg";
import SearchCard from "../../Home/_components/SearchCard";
import { gsapAnimate } from "@/lib/gsapAnimations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsapAnimate.sectionEnter(heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative max-w-7xl mx-auto mt-6 md:mb-44 px-2">
      {/* Background Image */}
      <div className="relative h-[200px] md:h-[350px] w-full rounded-[32px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Browse Hero background"
          className="gsap-image absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay text — same GSAP classes as home hero */}
        <div className="absolute inset-0 bg-black/20 rounded-[32px] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="gsap-title text-white text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md leading-tight">
            Find Your Perfect <span className="text-[#F97316]">Room</span> in Ireland
          </h1>
          <p className="gsap-subtitle text-white/90 mt-3 text-sm md:text-lg font-medium max-w-xl drop-shadow-sm">
            Browse verified, affordable student & professional accommodation.
          </p>
        </div>
      </div>

      {/* SearchCard — same GSAP class as home hero search card */}
      <div className="mt-10 md:absolute left-0 right-0 top-96 md:top-full md:-translate-y-1/2 z-30 px-4 flex justify-center">
        <div className="gsap-card w-full flex justify-center">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}
