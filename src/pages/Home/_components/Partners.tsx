import { motion } from "framer-motion";
import logo1 from "@/assets/home/logo-1.svg";
import logo2 from "@/assets/home/logo-2.svg";
import logo3 from "@/assets/home/logo-3.svg";
import logo4 from "@/assets/home/logo-4.svg";

const partners = [
  { name: "Logo 1", logo: logo1 },
  { name: "Logo 2", logo: logo2 },
  { name: "Logo 3", logo: logo3 },
  { name: "Logo 4", logo: logo4 },
  { name: "Logo 1", logo: logo1 },
  { name: "Logo 2", logo: logo2 },
  { name: "Logo 3", logo: logo3 },
  { name: "Logo 4", logo: logo4 },
  { name: "Logo 1", logo: logo1 },
  { name: "Logo 2", logo: logo2 },
  { name: "Logo 3", logo: logo3 },
  { name: "Logo 4", logo: logo4 },
];

import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { headingVariants, fastCardVariants } from "@/lib/animations";

const Partners = ({ className }: { className?: string }) => {
  const role = useSelector((state: RootState) => state.userRole.role);
  const isHost = role === "host";

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        "bg-black py-10 overflow-hidden w-full",
        isHost ? "mt-10 md:mt-20" : "mt-64 md:mt-40",
        className,
      )}
    >
      <div className="container mx-auto px-4 mb-8 text-center">
        <motion.h3
          variants={headingVariants}
          className="text-white text-lg tracking-[0.2em] font-medium uppercase"
        >
          Where <span className="text-[#F97316]">Guests</span> are Based
        </motion.h3>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <motion.div
          className="flex items-center gap-16 min-w-full"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10, // slightly slower for smoother loop
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners, ...partners, ...partners].map(
            (partner, index) => (
              <motion.div
                key={index}
                variants={fastCardVariants}
                className="shrink-0 flex items-center justify-center w-[150px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;
