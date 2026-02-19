import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import { headingVariants, headingViewport } from "@/lib/animations";

interface FAQItem {
    question: string;
    answer: string;
}

export default function SupportFAQ() {
    const role = useSelector((state: RootState) => state.userRole.role);
    const faqs = role === "host" ? hostFaqs : guestFaqs;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white mt-20 mb-[120px] px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Heading — using shared headingVariants */}
                <motion.h2
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={headingViewport}
                    className="text-center text-4xl md:text-5xl font-bold mb-12 text-primary-foreground"
                >
                    <span className="text-primary">Frequently</span> Asked Questions
                </motion.h2>

                {/* FAQ List — matches the pattern fixed in FAQ.tsx */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            variants={headingVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={headingViewport}
                            className="bg-[#EDEDED] rounded-[20px] overflow-hidden cursor-pointer"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                            >
                                <span className="text-xl md:text-2xl font-semibold text-black transition-colors duration-300 group-hover:text-primary">
                                    {faq.question}
                                </span>
                                <div className="shrink-0 ml-4 transition-transform duration-500">
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 border-2 rounded-full p-0.5 text-primary border-primary" />
                                    ) : (
                                        <Plus className="w-6 h-6 border-2 border-black rounded-full p-0.5" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 md:px-8 pb-8">
                                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const hostFaqs: FAQItem[] = [
    {
        question: "How do i list a room?",
        answer:
            "WarmWelcome is a trusted accommodation platform that connects students with verified hosts offering safe, comfortable places to stay. We focus on transparency, trust, and community to ensure a welcoming experience for both guests and hosts.",
    },
    {
        question: "How do i manage availiabity?",
        answer:
            "You can manage your room availability through your host dashboard. Set available dates, block out periods, and update your calendar anytime.",
    },
    {
        question: "How do i verify my account?",
        answer:
            "To verify your account, go to your profile settings and submit the required documents including a government-issued ID and a selfie for identity confirmation.",
    },
    {
        question: "Can i pause or delete a room?",
        answer:
            "Yes, you can pause your listing at any time from the dashboard. Pausing hides it from search results without deleting it. You can also permanently delete a listing if needed.",
    },
    {
        question: "How do i communicate with guests?",
        answer:
            "Use the built-in messaging system on WarmWelcome to communicate directly with guests. All conversations are kept on the platform for safety and transparency.",
    },
    {
        question: "When will my listing go live?",
        answer:
            "Once your listing is submitted and your account is verified, it typically goes live within 24-48 hours after our team reviews it.",
    },
];

const guestFaqs: FAQItem[] = [
    {
        question: "How do i book a room?",
        answer:
            "WarmWelcome is a trusted accommodation platform that connects students with verified hosts offering safe, comfortable places to stay. We focus on transparency, trust, and community to ensure a welcoming experience for both guests and hosts.",
    },
    {
        question: "Can i contact the host before booking?",
        answer:
            "Yes, you can message any host directly through the platform before making a booking. This helps you ask questions and feel confident about your stay.",
    },
    {
        question: "What fees do i need to pay?",
        answer:
            "The listing price includes the room rate. A small service fee is added at checkout to cover platform costs and support services.",
    },
    {
        question: "Are bills included in the rent?",
        answer:
            "This depends on the listing. Each host specifies whether utilities and bills are included in the rent. You can check this in the room details before booking.",
    },
    {
        question: "What if i want to cancel my booking?",
        answer:
            "Cancellation policies vary by listing. You can view the specific cancellation terms on each room's page before you book. Refunds are processed based on the host's policy.",
    },
    {
        question: "How does host verification work?",
        answer:
            "Every host on WarmWelcome goes through a strict verification process including identity checks and property verification to ensure your safety and comfort.",
    },
];