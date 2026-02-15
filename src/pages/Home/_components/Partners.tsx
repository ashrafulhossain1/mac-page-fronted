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

const Partners = () => {
  return (
    <section className="bg-black py-10 overflow-hidden w-full mt-20">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-white text-lg tracking-[0.2em] font-medium uppercase">
          Where <span className="text-[#F97316]">Guests</span> are Based
        </h3>
      </div>

      <div className="flex w-full overflow-hidden relative">
        <motion.div
          className="flex items-center gap-16 min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {/* Double the array to ensure seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
