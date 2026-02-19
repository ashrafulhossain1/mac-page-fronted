import { motion } from "framer-motion";
import {
  headingVariants,
  headingViewport,
  defaultViewport,
} from "@/lib/animations";

const HostCTA = () => {
  return (
    <section className="bg-white py-24 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight"
        >
          Ready to Welcome Your First Guest?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Join a trusted hosting community built on respect, safety, and long-term stays.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={defaultViewport}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            y: -4,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#F97316] text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-[#ea580c] transition-shadow shadow-lg hover:shadow-xl cursor-pointer"
        >
          List Your Room
        </motion.button>
      </div>
    </section>
  );
};

export default HostCTA;
