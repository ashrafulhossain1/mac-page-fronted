import { useEffect, useRef } from "react";
import storyBg from "@/assets/our-stroy/our-story.jpg";
import { gsapAnimate } from "@/lib/gsapAnimations";

function OurStoryHero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsapAnimate.sectionEnter(heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="max-w-7xl mx-auto relative flex flex-col justify-center items-center text-center px-4 h-[350px] rounded-[30px] overflow-hidden m-4"
        >
            {/* Background with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={storyBg}
                    alt="Our Story background"
                    className="gsap-image absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-3xl space-y-4">
                <h1 className="gsap-title text-white font-bold text-[36px] md:text-[56px] leading-[1.1]">
                    Our Story
                </h1>
                <p className="gsap-subtitle text-white/80 text-base md:text-xl font-medium">
                    A decade of connecting people with homes across Ireland.
                </p>
            </div>
        </section>
    );
}

export default OurStoryHero;
