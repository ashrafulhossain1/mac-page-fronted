import { useEffect, useRef } from "react";
import { gsapAnimate } from "@/lib/gsapAnimations";

interface BlogHeroProps {
    title: string;
    heroImage: string;
}

export default function BlogHero({ title, heroImage }: BlogHeroProps) {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsapAnimate.sectionEnter(heroRef);
        return () => ctx.revert();
    }, [title, heroImage]);

    return (
        <section
            ref={heroRef}
            className="max-w-7xl mx-auto relative flex flex-col justify-center items-center text-center px-4 h-[350px] rounded-[30px] overflow-hidden m-4"
        >
            {/* Background with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={heroImage}
                    alt="Blog Hero background"
                    className="gsap-image absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-3xl">
                <h1 className="gsap-title text-white font-bold text-[36px] md:text-[56px] leading-[1.1] drop-shadow-md">
                    {title}
                </h1>
                <div className="gsap-subtitle mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>
        </section>
    );
}
