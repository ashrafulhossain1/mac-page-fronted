import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import {
  headingVariants,
  headingViewport,
  sequentialStaggerVariants,
  fastCardVariants,
  innerStaggerVariants,
  innerItemVariants,
  defaultViewport,
  decentHover,
} from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const initialFaqs: FAQItem[] = [
  {
    question: "What is Warmwelcome?",
    answer:
      "WarmWelcome is a trusted accommodation platform that connects students with verified hosts offering safe, comfortable places to stay. We focus on transparency, trust, and community to ensure a welcoming experience for both guests and hosts.",
  },
  {
    question: "How do I book a room safely?",
    answer:
      "You can book safely through our verified payment system and by reviewing host profiles and student feedback before making a commitment.",
  },
  {
    question: "Where is Warmwelcome available?",
    answer:
      "We are currently operating throughout Ireland, focusing on major student hubs and cities.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "The platform is designed for students seeking mid-term accommodation and local hosts who have spare rooms and want to support the student community.",
  },
];

const extraFaqs: FAQItem[] = [
  {
    question: "Are there any service fees?",
    answer:
      "We maintain a transparent fee structure for both hosts and guests to cover platform maintenance and verification services.",
  },
  {
    question: "How does the verification process work?",
    answer:
      "Every host undergoes a strict identity check and property verification process to ensure the safety of our student community.",
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
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-center text-4xl md:text-5xl font-bold mb-12 text-primary-foreground"
        >
          <span className="text-primary">Frequently</span> Asked Questions
        </motion.h2>

        {/* FAQ rows — one by one */}
        <motion.div
          variants={sequentialStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-4 mb-10"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fastCardVariants}
              whileHover={decentHover}
              className="bg-[#EDEDED] rounded-[20px] overflow-hidden cursor-pointer"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left"
              >
                <span className="text-xl md:text-2xl font-semibold text-black">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 border-2 border-black rounded-full p-0.5" />
                  ) : (
                    <Plus className="w-6 h-6 border-2 border-black rounded-full p-0.5" />
                  )}
                </div>
              </button>

              <motion.div
                variants={innerStaggerVariants}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ${openIndex === index ? "pb-8 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <motion.p
                  variants={innerItemVariants}
                  className="text-gray-600 leading-relaxed text-base md:text-lg"
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="flex justify-center"
          >
            <button
              onClick={loadMore}
              className="bg-[#F97316] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#ea580c] transition shadow-sm"
            >
              see more FAQs
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
