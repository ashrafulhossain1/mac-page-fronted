import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router";
import bannerImg from "@/assets/home/banner.jpg";
import SearchCard from "./SearchCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        scale: 1.2,
        duration: 2,
        ease: "power2.out",
      });

      gsap.from(".search-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="max-w-[1280px] mx-auto relative h-[800px] w-full "
    >
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Hero background"
          className="hero-image absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#f9741528]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center pt-32 px-6 md:px-16 max-w-[1000px] mx-auto text-center">
        <h1 className="hero-title text-3xl sm:text-[42px] md:text-[56px] lg:text-[70px] font-bold text-white leading-[1.1] md:leading-[78px] drop-shadow-md">
          Affordable Mid-Term Room Rentals in Ireland You Can Trust
        </h1>

        <h3 className="hero-subtitle mt-6 text-lg md:text-[26px] font-medium text-white leading-relaxed md:leading-[33.8px] max-w-4xl drop-shadow-sm">
          Warmwelcome connects Guests with verified Home Partners for safe,
          affordable, and respectful living across Ireland.
        </h3>

        <div className="hero-buttons flex flex-col md:flex-row items-center gap-6 mt-12">
          <Button
            variant="host"
            className="px-6 py-3 text-sm sm:text-[16px] md:text-[18px] font-semibold rounded-[12px] md:rounded-[16px] flex items-center gap-2 bg-[#8A9A5B]/95 hover:bg-[#5F6B3E] hover:opacity-100 text-white transition-all duration-300"
            asChild
          >
            <Link to="#">
              <Search className="w-5 h-5" />
              I’m a Guest → Find a Room
            </Link>
          </Button>

          <Button
            variant="host"
            className="px-6 py-3 text-sm sm:text-[16px] md:text-[18px] font-semibold rounded-[12px] md:rounded-[16px] bg-primary/90 text-white hover:bg-primary hover:brightness-75 transition-all duration-300"
            asChild
          >
            <Link to="#">Become a Host Partner</Link>
          </Button>
        </div>
      </div>

      <div className="search-card absolute left-0 right-0 top-full -translate-y-1/2 z-30 px-4 flex justify-center">
        <SearchCard />
      </div>
    </section>
  );
};

export default Hero;
