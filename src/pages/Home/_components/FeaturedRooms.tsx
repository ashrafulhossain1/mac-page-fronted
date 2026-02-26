import RoomCard from "./RoomCard";
import room1 from "@/assets/home/room-1.png";
import room2 from "@/assets/home/room-2.png";
import room3 from "@/assets/home/room-3.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { decentHover, fastCardVariants } from "@/lib/animations";

const rooms = [
  {
    id: 1,
    image: room1,
    title: "Sunny room near Trinity College",
    price: "€250/week",
    location: "Dublin 2",
    description:
      "A cozy room in a quiet residential area. 10 mins walk to city center. Includes high-speed WiFi and a study desk.",
    rating: 4.9,
    reviews: 54,
  },
  {
    id: 2,
    image: room2,
    title: "Spacious Ensuite in City Centre",
    price: "€300/week",
    location: "Dublin 1",
    description:
      "Modern student accommodation with private bathroom. Shared kitchen and living area. Close to transport links.",
    rating: 4.8,
    reviews: 32,
  },
  {
    id: 3,
    image: room3,
    title: "Studio Apartment near UCD",
    price: "€350/week",
    location: "Dublin 4",
    description:
      "Fully furnished studio with kitchenette. Perfect for postgraduate students. Gym access included.",
    rating: 5.0,
    reviews: 12,
  },
];

// Apple-style spring config — slow, heavy, premium feel
const appleSpring = {
  type: "spring",
  stiffness: 38,
  damping: 22,
  mass: 1.4,
} as const;

export default function FeaturedRooms() {
  return (
    <div className="max-w-[1280px] mx-auto py-[120px] px-4 md:px-6 lg:px-0">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...appleSpring, delay: 0.05 }}
        className="flex flex-col md:flex-row justify-between items-end mb-[38px]"
      >
        <h2 className="text-[32px] md:text-4xl lg:text-[48px] font-semibold leading-[48px] text-left text-black">
          Featured <span className="text-primary">Student</span> Accommodations
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, idx) => (
          <motion.div
            key={idx}
            variants={fastCardVariants}
            whileHover={decentHover}
            className="w-full"
          >
            <RoomCard
              id={room.id}
              image={room.image}
              title={room.title}
              price={room.price}
              location={room.location}
              description={room.description}
              rating={room.rating}
              reviews={room.reviews}
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ ...appleSpring, delay: 0.35 }}
        className="flex flex-col md:flex-row justify-center mt-6 md:mt-8 items-center"
      >
        <Button
          variant="host"
          className="px-8 py-3 text-[18px] w-[247px] h-[60px] font-semibold rounded-[16px] flex items-center gap-2 bg-primary text-white hover:bg-primary/80 transition-colors mt-6 md:mt-0"
          asChild
        >
          <Link to="/browse">
            <span> View All Rooms</span>
            <FaArrowRightLong />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
