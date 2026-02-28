import { motion } from "framer-motion";
import { GiThreeFriends } from "react-icons/gi";
import { ClipboardCheck } from "lucide-react";
import whyWarm1 from "@/assets/home/why-warm-1.svg";
import whyWarm2 from "@/assets/home/why-warm-2.svg";
import whyWarm3 from "@/assets/home/why-warm-3.svg";
import whyWarm4 from "@/assets/home/why-warm-4.svg";
import whyWarm5 from "@/assets/home/why-warm-5.svg";
import whyWarm6 from "@/assets/home/why-warm-6.svg";
import whyWarm7 from "@/assets/home/why-warm-7.svg";
import { innerStaggerVariants, innerItemVariants } from "@/lib/animations";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

// ── Same Apple spring used in FeaturedRooms ──
const appleSpring = {
  type: "spring",
  stiffness: 38,
  damping: 22,
  mass: 1.4,
} as const;

// ── Card grid stagger container ──
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ── Each card enters: drifts up from below ──
const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...appleSpring },
  },
};

const WhyWarmWelcome = () => {
  return (
    <div className="bg-secondary  font-sans text-[#1A1A1A]">
      <section className="py-10 md:py-16 lg:py-20 px-4 lg:px-6 max-w-7xl mx-auto">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...appleSpring, delay: 0.05 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold mb-6 leading-tight">
            Why <span className="text-primary">Guests</span> Choose Warm
            Welcome?
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-medium">
            Trusted by students, young professionals, and mid-term guests
            looking for safe, affordable accommodation across Ireland.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[30px]"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white lg:h-[320px] xl:h-[303px] p-5 md:p-6 rounded-[24px] border-none border-gray-100  hover:shadow-md transition-shadow duration-500"
            >
              <motion.div
                variants={innerStaggerVariants}

                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col"
              >
                <motion.div
                  variants={innerItemVariants}
                  className={`w-14 h-14 lg:h-[70px] lg:w-[70px] border p-2 bg-gray-200 rounded-2xl flex items-center justify-center mb-3 md:mb-4 xl:mb-6`}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  variants={innerItemVariants}
                  className="text-lg md:text-xl lg:text-[22px] font-bold mb-2 md:mb-3 lg:mb-4"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={innerItemVariants}
                  className="text-gray-500 leading-relaxed text-sm md:text-base"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default WhyWarmWelcome;

const features: Feature[] = [
  {
    title: "Safe, Verified Homes",
    description:
      "Trusted listings give you peace of mind from booking to moving in.",
    icon: (
      <img
        src={whyWarm7}
        alt="Safe, Verified Homes"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-blue-50",
  },
  {
    title: "All-Inclusive, Transparent Pricing",
    description:
      "Weekly price — no extra bills, no hidden fees — so you always know what you're paying.",
    icon: (
      <img
        src={whyWarm6}
        alt="All-Inclusive, Transparent Pricing"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-orange-50",
  },
  {
    title: "Move-In Ready",
    description: "Fully furnished rooms for a stress-free start.",
    icon: (
      <img
        src={whyWarm5}
        alt="Move-In Ready"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-green-50",
  },
  {
    title: "Responsive Support",
    description: "Local, reliable help whenever you need it.",
    icon: (
      <img
        src={whyWarm4}
        alt="Responsive Support"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-purple-50",
  },
  {
    title: "Warm & Inclusive Community",
    description: "Inclusive environment helping you feel at home from day one.",
    icon: (
      <img
        src={whyWarm3}
        alt="Warm & Inclusive Community"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-cyan-50",
  },
  {
    title: "Safe & Respectful Living Standards",
    description:
      "Enjoy comfortable, private accommodation where respectful house rules and clear communication make settling in effortless.",
    icon: (
      <img
        src={whyWarm2}
        alt="Safe & Respectful Living Standards"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-red-50",
  },
  {
    title: "Practical Guidance",
    description:
      "Helpful guidance on essentials like banking, transport, orientation, and local services.",
    icon: (
      <img
        src={whyWarm1}
        alt="Practical Guidance"
        className="w-full h-full object-contain"
      />
    ),
    iconBg: "bg-yellow-50",
  },
  {
    title: "Cultural Sensitivity & Diversity Friendly",
    description:
      "Homes that respect different cultures, religions, and lifestyles — something international guests deeply value.",
    icon: <GiThreeFriends className="w-full h-full text-emerald-600" />,
    iconBg: "bg-emerald-50",
  },
  {
    title: "Clear Expectations From Day One",
    description:
      "Transparent house rules and communication standards to avoid misunderstandings.",
    icon: <ClipboardCheck className="w-full h-full text-indigo-600" />,
    iconBg: "bg-indigo-50",
  },
];
