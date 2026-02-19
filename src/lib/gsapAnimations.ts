import { gsap } from "gsap";

/**
 * Reusable GSAP animation presets — mirrors the framer-motion shared system
 * All functions return the gsap tween/timeline for optional chaining
 */

// ─────────────────────────────────────────────
//  Hero-style page enter — title → subtitle → element
//  Usage: gsapAnimate.heroEnter(ref)
// ─────────────────────────────────────────────
export const gsapAnimate = {

    /**
     * Full hero section entrance
     * Animates .gsap-title, .gsap-subtitle, .gsap-actions, .gsap-image, .gsap-card
     */
    heroEnter(containerRef: React.RefObject<HTMLElement | null>) {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".gsap-image", {
                scale: 1.15,
                duration: 2,
                ease: "power2.out",
            })
                .from(
                    ".gsap-title",
                    { y: 80, opacity: 0, duration: 1, ease: "power3.out" },
                    "<0.1"
                )
                .from(
                    ".gsap-subtitle",
                    { y: 40, opacity: 0, duration: 1, ease: "power3.out" },
                    "<0.3"
                )
                .from(
                    ".gsap-actions",
                    { y: 30, opacity: 0, duration: 1, ease: "power3.out" },
                    "<0.3"
                )
                .from(
                    ".gsap-card",
                    { y: 60, opacity: 0, duration: 1, ease: "power3.out" },
                    "<0.3"
                );
        }, containerRef);

        return ctx;
    },

    /**
     * Simple section enter: title + optional subtitle + search card
     * Lighter version for sub-pages (Browse hero, etc.)
     */
    sectionEnter(containerRef: React.RefObject<HTMLElement | null>) {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".gsap-image", {
                scale: 1.08,
                duration: 1.6,
                ease: "power2.out",
            })
                .from(
                    ".gsap-title",
                    { y: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
                    "<0.1"
                )
                .from(
                    ".gsap-subtitle",
                    { y: 30, opacity: 0, duration: 0.9, ease: "power3.out" },
                    "<0.25"
                )
                .from(
                    ".gsap-card",
                    { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
                    "<0.3"
                );
        }, containerRef);

        return ctx;
    },

    /**
     * Staggered cards entrance — wraps a list of .gsap-room-card elements
     */
    staggerCards(containerRef: React.RefObject<HTMLElement | null>) {
        const ctx = gsap.context(() => {
            gsap.from(".gsap-room-card", {
                y: 40,
                opacity: 0,
                duration: 0.55,
                ease: "power3.out",
                stagger: 0.12,
            });
        }, containerRef);

        return ctx;
    },
};
