import { useEffect, useRef } from "react";
import supportHostBg from "@/assets/support/support.jpg";
import supportGuestBg from "@/assets/support/support-guest.jpg";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { gsapAnimate } from "@/lib/gsapAnimations";

function Hero() {
  const role = useSelector((state: RootState) => state.userRole.role);
  const isHost = role === "host";
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsapAnimate.sectionEnter(heroRef);
    return () => ctx.revert();
  }, [role]);

  const bgImage = isHost ? supportHostBg : supportGuestBg;
  const subtitle = isHost
    ? "Whether you're opening your doors to guests or managing your listings, get answers, support and guidance anytime you need."
    : "Whether you're looking for your new home or opening your doors to guests, get answers, support and guidance anytime you need.";

  return (
    <section
      ref={heroRef}
      className="max-w-7xl mx-auto relative flex flex-col justify-center items-center text-center px-4 h-[350px] rounded-[30px] overflow-hidden m-4"
    >
      {/* Background with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImage}
          alt="Support background"
          className="gsap-image absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl space-y-4">
        <h1 className="gsap-title text-white font-bold text-[36px] md:text-[56px] leading-[1.1]">
          We're Here to Help
        </h1>

        <p className="gsap-subtitle text-white/90 font-medium text-[16px] md:text-[20px] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default Hero;
