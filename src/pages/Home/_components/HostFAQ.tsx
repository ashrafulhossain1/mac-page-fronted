import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const hostFaqs: FAQItem[] = [
  {
    question: "Do I have to accept every booking?",
    answer:
      "No. You can chat with guests and accept only the bookings you're comfortable with. You have full control over who stays in your home.",
  },
  {
    question: "How do I list my space?",
    answer:
      "Listing your space is easy. Just create a host account, provide details about your room (location, price, amenities), upload some photos, and you're ready to go!",
  },
  {
    question: "Is hosting safe?",
    answer:
      "Safety is our priority. We verify all guests through ID checks and profile verification. You can also chat with them beforehand to get to know them.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are processed securely through our platform via Stripe. Once a booking is confirmed and the guest moves in, your payment is sent directly to your account.",
  },
  {
    question: "What happens if a guest cancels?",
    answer:
      "Our cancellation policies are designed to protect hosts. Depending on when the guest cancels, you may be eligible for a payout. You can choose a policy that works best for you.",
  },
  {
    question: "Can I set my own house rules?",
    answer:
      "Absolutely! You can specify house rules regarding pets, smoking, quiet hours, and guests. Guests must agree to your rules before booking.",
  },
  {
    question: "Do I need special insurance?",
    answer:
      "We recommend contacting your insurance provider to ensure you are covered for short-term or mid-term rentals. Some policies may require an add-on.",
  },
  {
    question: "Is there support if something goes wrong?",
    answer:
      "Yes, our 24/7 host support team is always available to assist you with any issues or questions you may have during a stay.",
  },
];

const HostFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? hostFaqs : hostFaqs.slice(0, 4);

  return (
    <section className="bg-secondary py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-black">
          <span className="text-[#F97316]">Frequently</span> Asked Questions
        </h2>

        <div className="space-y-4 mb-10">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#EDEDED] rounded-[20px] overflow-hidden transition-all duration-300"
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
                    <Minus className="w-6 h-6 border-2 border-black rounded-full p-0.5 text-black" />
                  ) : (
                    <Plus className="w-6 h-6 border-2 border-black rounded-full p-0.5 text-black" />
                  )}
                </div>
              </button>

              <div
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ${openIndex === index
                  ? "pb-8 max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#F97316] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ea580c] transition shadow-sm text-lg"
            >
              See more Questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HostFAQ;
