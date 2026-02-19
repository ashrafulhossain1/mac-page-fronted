import hosthow1 from "@/assets/home/host-how-1.svg";
import hosthow2 from "@/assets/home/host-how-2.svg";
import hosthow3 from "@/assets/home/host-how-3.svg";
import hosthow4 from "@/assets/home/host-how-4.svg";
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

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: "Create Your Host Account",
    description:
      "Sign up as a host using your email and phone number. Verify your email and phone to continue.",
    icon: hosthow2,
  },
  {
    title: "Complete Your Profile & Verification",
    description:
      "Add your basic details, home address, and upload your government ID with a selfie for verification.",
    icon: hosthow3,
  },
  {
    title: "List Your Room",
    description:
      "Add room details, price per week, bills included, bathroom type, pets info, and house rules. Upload photos anytime.",
    icon: hosthow4,
  },
  {
    title: "Receive Booking Requests",
    description:
      "Chat with guests before accepting. Once confirmed, your booking calendar updates automatically.",
    icon: hosthow1,
  },
];

const HowHostWorks = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Title Group — matches GuestSays / HowToWorks style */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] font-bold leading-tight text-black">
            How it <span className="text-primary italic">works?</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Follow these four simple steps to start hosting
          </p>
        </motion.div>

        {/* Step Cards Group — one by one stagger */}
        <motion.div
          variants={sequentialStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fastCardVariants}
              whileHover={decentHover}
              className="bg-[#EAEAEA] p-6 rounded-[24px] shadow-sm transform transition-all duration-300 h-full min-h-[320px]"
            >
              <motion.div
                variants={innerStaggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center w-full"
              >
                <motion.div
                  variants={innerItemVariants}
                  className="bg-white/80 w-24 h-24 rounded-full flex items-center justify-center mb-8 mt-4 shadow-sm"
                >
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </motion.div>
                <motion.h3 variants={innerItemVariants} className="text-[22px] font-medium mb-4 leading-tight text-black">
                  {item.title}
                </motion.h3>
                <motion.p variants={innerItemVariants} className="text-gray-600 text-[15px] leading-relaxed px-2">
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

export default HowHostWorks;
