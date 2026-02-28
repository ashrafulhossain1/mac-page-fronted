import { motion } from "framer-motion";
import how1 from "@/assets/home/how (1).svg";
import how2 from "@/assets/home/how (2).svg";
import how3 from "@/assets/home/how (3).svg";
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

const steps = [
  {
    icon: how1,
    alt: "Search Rooms",
    title: "Search Rooms",
    description:
      "Find rooms that match your needs. No account required to browse. Use filters to narrow down by location, room type and budget.",
  },
  {
    icon: how2,
    alt: "Request & chat",
    title: "Request & chat",
    description:
      "Send a booking request. Talk to your host before any payment. Ask questions, discuss terms and build trust first.",
  },
  {
    icon: how3,
    alt: "Pay & move in",
    title: "Pay & move in",
    description:
      "Host approves? Pay securely via Stripe. Dates auto-block on the calendar. You're in! Simple, safe and transparent.",
  },
];

const HowToWorks = () => {
  return (
    <div className="bg-[#FFF6F0] " id="how-it-works">
      <div className="mx-4 md:mx-auto lg:px-0 pb-10 md:pb-16 lg:pb-[120px] ">

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-3xl md:text-4xl lg:text-[48px] font-semibold leading-[48px] pt-10 md:pt-16 lg:pt-[120px] mb-6 md:mb-8 lg:mb-[50px] text-center text-black"
        >
          How it works?
        </motion.h2>

        {/* Steps — one by one */}
        <motion.div
          variants={sequentialStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-4 md:gap-5 lg:gap-[30px] mb-5  md:px-4 lg:px-6"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fastCardVariants}
              whileHover={decentHover}
              className=" bg-white px-5 md:px-6 py-5 h-auto md:h-[255px] rounded-[16px] hover:shadow-sm transition-shadow duration-300 "
            >
              <motion.div
                variants={innerStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={innerItemVariants} className="flex justify-center">
                  <img src={step.icon} alt={step.alt} className="bg-[#DBDBDB] w-[70px] h-[70px] rounded-full p-3" />
                </motion.div>
                <motion.h3 variants={innerItemVariants} className="text-[18px] md:text-[22px] font-semibold text-black leading-[26.4px] my-2 md:my-3 lg:my-5 text-center">
                  {step.title}
                </motion.h3>
                <motion.h5 variants={innerItemVariants} className="text-[14px] md:text-[16px] font-normal leading-[20.8px] text-[#3C3C3C] mb-6 md:mb-[24px] text-center">
                  {step.description}
                </motion.h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default HowToWorks;
