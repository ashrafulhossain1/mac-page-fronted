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

const Partners = ({ className }: { className?: string }) => {
  const role = useSelector((state: RootState) => state.userRole.role);
  const isHost = role === "host";

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "bg-black py-10 overflow-hidden w-full",
        isHost ? "mt-10 md:mt-20" : "mt-64 md:mt-40",
        className,
      )}
    >
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-white text-lg tracking-[0.2em] font-medium uppercase">
          Where <span className="text-[#F97316]">Guests</span> are Based
        </h3>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <motion.div
          className="flex items-center gap-16 min-w-full"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 7, // slower = smoother
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...partners, ...partners, ...partners, ...partners].map(
            (partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-[150px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
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
