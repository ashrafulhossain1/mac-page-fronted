import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { headingVariants, headingViewport } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const initialFaqs: FAQItem[] = [
  {
    question: "What is Warmwelcome?",
    answer: "WarmWelcome is a trusted accommodation platform...",
  },
  {
    question: "How do I book a room safely?",
    answer: "You can book safely through our verified payment system...",
  },
  {
    question: "Where is Warmwelcome available?",
    answer: "We are currently operating throughout Ireland...",
  },
  {
    question: "Who can use this platform?",
    answer: "The platform is designed for students and local hosts...",
  },
];

const extraFaqs: FAQItem[] = [
  {
    question: "Are there any service fees?",
    answer:
      "We maintain a transparent fee structure for both hosts and guests...",
  },
  {
    question: "How does the verification process work?",
    answer:
      "Every host undergoes a strict identity check and property verification...",
  },
];

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hasMore, setHasMore] = useState(true);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMore = () => {
    setFaqs([...faqs, ...extraFaqs]);
    setHasMore(false);
  };

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-center text-3xl md:text-4xl lg:text-[48px] font-semibold mb-6 sm:mb-8 md:mb-12 text-primary-foreground"
        >
          <span className="text-primary">Frequently</span> Asked Questions
        </motion.h2>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={headingViewport}
              className="bg-gray-100 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden cursor-pointer px-4  lg:px-6 py-3 md:py-4 lg:py-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center   text-left group"
              >
                <span className="text-[18px] md:text-[22px] lg:text-[26px] font-semibold text-black transition-colors duration-300 group-hover:text-primary mb-2">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4 transition-transform duration-500">
                  {openIndex === index ? (
                    <Minus className="w-6 md:w-8 h-6 md:h-8 border-2 rounded-full p-0.5 text-black border-black" />
                  ) : (
                    <Plus className="w-6 md:w-8 h-6 md:h-8 border-2 border-black rounded-full p-0.5" />
                  )}
                </div>
              </button>

              {/* Only animate each FAQ content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="">
                      <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <motion.button
              onClick={loadMore}
              className="bg-[#F97316] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#ea580c] transition shadow-sm"
            >
              See more FAQs
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
