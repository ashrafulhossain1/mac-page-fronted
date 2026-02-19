import { motion } from "framer-motion";
import whyWarm1 from "@/assets/home/why-warm-1.svg";
import whyWarm2 from "@/assets/home/why-warm-2.svg";
import whyWarm3 from "@/assets/home/why-warm-3.svg";
import whyWarm4 from "@/assets/home/why-warm-4.svg";
import whyWarm5 from "@/assets/home/why-warm-5.svg";
import whyWarm6 from "@/assets/home/why-warm-6.svg";
import whyWarm7 from "@/assets/home/why-warm-7.svg";
import {
  innerStaggerVariants,
  innerItemVariants,

} from "@/lib/animations";

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
    <div className="bg-secondary min-h-screen font-sans text-[#1A1A1A]">
      <section className="py-20 px-6 max-w-7xl mx-auto">

        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...appleSpring, delay: 0.05 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why <span className="text-primary">Students</span> and{" "}
            <span className="text-primary">Professionals</span> <br />
            Choose Warm Welcome?
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -3,
                transition: { type: "spring", stiffness: 150, damping: 25 },
              }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-500"
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
                  className={`${item.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                >
                  {item.icon}
                </motion.div>
                <motion.h3 variants={innerItemVariants} className="text-xl font-bold mb-3">
                  {item.title}
                </motion.h3>
                <motion.p variants={innerItemVariants} className="text-gray-500 leading-relaxed text-sm">
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
    description: "Trusted listings give you peace of mind from booking to moving in.",
    icon: (<img src={whyWarm7} alt="Safe, Verified Homes" className="w-full h-full object-contain" />),
    iconBg: "bg-blue-50",
  },
  {
    title: "All-Inclusive, Transparent Pricing",
    description: "Weekly price — no extra bills, no hidden fees — so you always know what you're paying.",
    icon: (<img src={whyWarm6} alt="All-Inclusive, Transparent Pricing" className="w-full h-full object-contain" />),
    iconBg: "bg-orange-50",
  },
  {
    title: "Move-In Ready",
    description: "Fully furnished rooms for a stress-free start.",
    icon: (<img src={whyWarm5} alt="Move-In Ready" className="w-full h-full object-contain" />),
    iconBg: "bg-green-50",
  },
  {
    title: "Responsive Support",
    description: "Local, reliable help whenever you need it.",
    icon: (<img src={whyWarm4} alt="Responsive Support" className="w-full h-full object-contain" />),
    iconBg: "bg-purple-50",
  },
  {
    title: "Warm & Inclusive Community",
    description: "Inclusive environment helping you feel at home from day one.",
    icon: (<img src={whyWarm3} alt="Warm & Inclusive Community" className="w-full h-full object-contain" />),
    iconBg: "bg-cyan-50",
  },
  {
    title: "Safe & Respectful Living Standards",
    description: "Enjoy comfortable, private accommodation where respectful house rules and clear communication make settling in effortless.",
    icon: (<img src={whyWarm2} alt="Safe & Respectful Living Standards" className="w-full h-full object-contain" />),
    iconBg: "bg-red-50",
  },
  {
    title: "Practical Guidance",
    description: "Helpful guidance on essentials like banking, transport, orientation, and local services.",
    icon: (<img src={whyWarm1} alt="Practical Guidance" className="w-full h-full object-contain" />),
    iconBg: "bg-yellow-50",
  },
];
