import { motion } from "framer-motion";
import { ReviewCard } from "@/components/ReviewCard";
import avatar1 from "@/assets/home/Ellipse 1.png";
import avatar2 from "@/assets/home/Ellipse 01.png";
import avatar3 from "@/assets/home/Ellipse 2.svg";
import {
  headingViewport,
  sequentialStaggerVariants,
  fastCardVariants,
  defaultViewport,
  headingVariants,
} from "@/lib/animations";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Atif Islam",
    role: "Student in Ireland",
    avatar: avatar1,
  },
  {
    id: 2,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Sanjay M.",
    role: "Student in Ireland",
    avatar: avatar2,
  },
  {
    id: 3,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Emma L.",
    role: "Student in Ireland",
    avatar: avatar3,
  },
];

export function GuestsSay() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-24 xl:py-[120px]">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        {/* Title */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
          className="text-center mb-[20px] md:mb-[24px] lg:mb-[34px]"
        >
          <h2 className=" text-3xl md:text-4xl lg:text-[48px] font-semibold">
            What Our <span className="text-orange-500">Guests</span> Say
          </h2>
        </motion.div>

        {/* Review cards — one by one */}
        <motion.div
          variants={sequentialStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fastCardVariants}
            >
              <ReviewCard
                rating={testimonial.rating}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
