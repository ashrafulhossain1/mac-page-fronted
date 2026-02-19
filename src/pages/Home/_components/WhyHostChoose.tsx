import hostWhy1 from "@/assets/home/host -why.svg";
import hostWhy2 from "@/assets/home/host -why-1.svg";
import hostWhy3 from "@/assets/home/host -why-2.svg";
import hostWhy4 from "@/assets/home/host -why-3.svg";
import { motion } from "framer-motion";
import {
  headingVariants,
  headingViewport,
  sequentialStaggerVariants,
  fastCardVariants,
  innerStaggerVariants,
  innerItemVariants,
  defaultViewport,
} from "@/lib/animations";

interface Feature {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const features: Feature[] = [
  {
    title: "Trust & Safety First",
    description:
      "All hosts are verified through ID and address checks, and guests go through profile verification before booking.",
    icon: hostWhy1,
    className: "md:col-span-2",
  },
  {
    title: "Talk Before You Accept",
    description:
      "Built-in messaging allows you to communicate with guests before confirming any booking.",
    icon: hostWhy2,
    className: "md:col-span-3",
  },
  {
    title: "You're in Control",
    description:
      "Set your price per week, availability, booking length, and house preferences anytime.",
    icon: hostWhy3,
    className: "md:col-span-3",
  },
  {
    title: "Respect for Your Home",
    description:
      "We focus on long-term stays, not short-term traffic, designed for peace of mind.",
    icon: hostWhy4,
    className: "md:col-span-2",
  },
];

const WhyHostChoose = () => {
  return (
    <section className="bg-secondary py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title — matches GuestSays style */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[56px] font-bold leading-tight">
            Why Hosts <span className="text-[#F97316]">Choose</span> Warmwelcome?
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Experience the benefits of joining our trusted hosting community
          </p>
        </motion.div>

        {/* Sequential Stagger Grid — matches GuestSays / WhyWarmWelcome pattern */}
        <motion.div
          variants={sequentialStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fastCardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 200, damping: 22 },
              }}
              className={`bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 ${item.className}`}
            >
              <motion.div
                variants={innerStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col h-full"
              >
                <motion.div
                  variants={innerItemVariants}
                  className="bg-[#F2F2F2] w-16 h-14 rounded-2xl flex items-center justify-center mb-6"
                >
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </motion.div>
                <motion.h3 variants={innerItemVariants} className="text-2xl font-bold mb-4 text-black">
                  {item.title}
                </motion.h3>
                <motion.p variants={innerItemVariants} className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHostChoose;
