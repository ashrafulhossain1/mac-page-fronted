import guestHero from "@/assets/blogs/guest-hero-blog.jpg";
import hostHero from "@/assets/blogs/host-hero-blog.jpg";

import guestBlog1 from "@/assets/blogs/guest-blog (1).jpg";
import guestBlog2 from "@/assets/blogs/guest-blog (2).jpg";
import guestBlog3 from "@/assets/blogs/guest-blog (3).jpg";
import guestBlog4 from "@/assets/blogs/guest-blog (4).jpg";
import guestBlog5 from "@/assets/blogs/guest-blog (5).jpg";
import guestBlog6 from "@/assets/blogs/guest-blog (6).jpg";
import guestBlog7 from "@/assets/blogs/guest-blog (7).jpg";

import hostBlog1 from "@/assets/blogs/host-blog (1).jpg";
import hostBlog2 from "@/assets/blogs/host-blog (2).jpg";
import hostBlog3 from "@/assets/blogs/host-blog (3).jpg";
import hostBlog4 from "@/assets/blogs/host-blog (4).jpg";
import hostBlog5 from "@/assets/blogs/host-blog (5).jpg";
import hostBlog6 from "@/assets/blogs/host-blog (6).jpg";
import hostBlog7 from "@/assets/blogs/host-blog (5).jpg";
import hostBlog8 from "@/assets/blogs/host-blog (6).jpg";

export interface BlogSection {
    title: string;
    content: string;
}

export interface BlogPost {
    id: number;
    title: string;
    description: string;
    image: string;
    views: number;
    date: string;
    fullContent?: {
        intro: string;
        sections: BlogSection[];
        conclusion: string;
    };
}

export const heroImages = {
    guest: guestHero,
    host: hostHero,
};

const SAMPLE_SECTIONS: BlogSection[] = [
    {
        title: "1. Unlocking the Value of Your Self-Contained Unit/Studio",
        content: "You own a valuable asset: a self-contained unit such as a converted garage, basement flat, or an annex attached to or separate from your main residence. This unit is private, featuring a bed, bathroom, and kitchen, offering guests maximum independence.\n\nWe strongly recommend using this unit for medium-term stays (28 days to 24 months). For homeowners, this is the optimal approach, providing consistent and predictable income while allowing you to retain full control of your property, as you know the exact length of each stay before accepting a booking. It is a simple, secure solution that offers complete peace of mind."
    },
    {
        title: "2. The Smart Choice: Making the Most of Your Existing Asset",
        content: "Focusing on generating income from your self-contained unit, rather than leaving it empty, is a practical and financially astute choice for resident homeowners.\n\ni) Maximising Profit from an Existing Asset: The focus is on generating reliable income from a space you already own, one that has already been built and required a financial investment in the past. This approach allows you to turn that investment into a steady return.\n\nii) High Rental Demand: Self-contained units in urban areas such as Dublin, Cork, Galway, and Limerick are in constant demand from independent students and professionals. In addition, a growing trend shows strong demand for self-contained units in rural areas as well. This high level of demand allows you to command higher rates for the privacy your unit offers while maximising occupancy.\n\niii) In addition, you provide a valuable service to students and young professionals seeking a private place to stay for a few months during their time in Ireland. They are often busy individuals, working hard and looking for a quiet, comfortable place to rest at the end of the day."
    },
    {
        title: "3. The Host Advantage: Maximum Control, Minimum Effort",
        content: "Beyond the financial case, renting an annex unit offers clear, ongoing advantages for you as the resident host:\n\ni) Maximum Privacy: A self-contained unit provides guests with their own fully equipped space, including private cooking and washing facilities. This ensures maximum independence for your guest, which is exactly what most self-sufficient, busy individuals are looking for. For you as the host, this also means minimal involvement after check-in, beyond ensuring your guest feels welcome and can contact you if any specific issue arises.\n\nii) The Ideal Guest Profile: Our medium-term guests are highly-vetted, self-sufficient students and professionals who seek total independence. They are busy, respectful of boundaries, and are booked for a fixed duration, leading to a stable and predictable hosting experience.\n\niii) Control Over Duration: With our medium-term model, you set the rental period (starting at 28 days), providing the flexibility and control over your property's availability that a long-term lease cannot match."
    },
    {
        title: "4. Maximising the Financial Benefit: Tax Clarity",
        content: "Navigating the financial landscape is critical for unit owners in Ireland. The benefits are highest when your unit is attached and you live in the main house.\n\nThe Power of the Rent-a-Room Relief Scheme\nThe Rent-a-Room Relief Scheme allows you to earn up to €14,000 per year tax-free from your self-contained unit, not just from a room inside your main home.\n\nTo qualify for this lucrative benefit, your unit must meet two main criteria:\nIt must be physically attached to your primary residence (for example, a converted garage or basement flat), and the letting must be for a period of 28 consecutive days or more.\nOnce these conditions are met, availing of this excellent scheme is straightforward. Full details are available here."
    }
];

const SAMPLE_GUEST_INTRO = "Renting out your attached self-contained unit through a medium-term model is one of the most profitable approaches to property rental in Ireland, while allowing you to retain full control over the duration of each let. It offers an ideal balance of strong, tax-efficient income and low day-to-day maintenance.";
const SAMPLE_CONCLUSION = "Ready to list your self-contained unit? At Hosting Power, we take care of all the advertising, help you find your guests, and maintain availability – all for free on our platform.\n\nBecome a Host Today and unlock your unit's full potential.";

export const guestBlogs: BlogPost[] = [
    {
        id: 1,
        title: "How to spot scams in accommodation - a guide for guests",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog1,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 2,
        title: "What you need to know when learning English in Ireland",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog2,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 3,
        title: "Living in Dublin: a guide for newcomers",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog3,
        views: 180,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 4,
        title: "Practical tips for relocating to Ireland",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog4,
        views: 190,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 5,
        title: "A guide to erasmus in Ireland",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog5,
        views: 190,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 6,
        title: "Relocating to Ireland? Everything you need to know",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog6,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 7,
        title: "Student life in Ireland: tips and tricks",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: guestBlog7,
        views: 120,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
];

export const hostBlogs: BlogPost[] = [
    {
        id: 1,
        title: "How to avoid frictions while hosting",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog1,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 2,
        title: "Hosting: a solution to lonelyness",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog2,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 3,
        title: "Hosting while a holydays",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog3,
        views: 180,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 4,
        title: "Renting out your space room",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog4,
        views: 190,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 5,
        title: "Hosting & home insurance",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog5,
        views: 190,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 6,
        title: "6 steps to become a host",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog6,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 7,
        title: "Hosting & home insurance",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog7,
        views: 190,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
    {
        id: 8,
        title: "6 steps to become a host",
        description:
            "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk...",
        image: hostBlog8,
        views: 100,
        date: "January 15, 2025",
        fullContent: {
            intro: SAMPLE_GUEST_INTRO,
            sections: SAMPLE_SECTIONS,
            conclusion: SAMPLE_CONCLUSION
        }
    },
];

