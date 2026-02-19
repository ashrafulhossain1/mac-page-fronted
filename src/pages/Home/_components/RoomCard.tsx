import { Star, MapPin, Wifi, BedDouble, ShowerHead, Wind, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Room } from "@/types/room";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator"

type RoomCardProps = Pick<
  Room,
  | "id"
  | "image"
  | "title"
  | "price"
  | "location"
  | "description"
  | "rating"
  | "reviews"
>;

const amenities = [
  { icon: Wifi, label: "WiFi" },
  { icon: BedDouble, label: "Bed" },
  { icon: ShowerHead, label: "Bath" },
  { icon: Wind, label: "AC" },
];

// Stagger container — children animate one after another
const bodyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // 80ms between each child
    },
  },
};

// Each inner item: slides in from a few px above, fades in
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      damping: 18,
      mass: 1,
    },
  },
};

const RoomCard = ({
  id,
  image,
  title,
  price,
  location,
  description,
  rating,
  reviews,
}: RoomCardProps) => {
  return (
    <Link to={`/browse/${id}`} className="block group">
      <div className="relative w-full overflow-hidden rounded-[28px] bg-white border p-4 border-gray-300 hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.13)] transition-shadow duration-500">

        {/* ── Image ── */}
        <div className="relative overflow-hidden rounded-[16px] h-[220px] md:h-[270px] mb-4">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-[16px] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

          {/* Price badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-black text-sm font-bold px-3.5 py-1.5 rounded-full shadow-md">
            {price}
          </div>

          {/* Arrow icon top-right on hover */}
          <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <ArrowUpRight size={16} className="text-gray-800" />
          </div>
        </div>

        {/* ── Body — stagger container ── */}
        <motion.div
          className=" flex flex-col gap-3"
          variants={bodyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 text-primary"
          >
            <MapPin size={13} className="shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              {location}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className="text-[17px] font-bold text-gray-900 leading-snug line-clamp-1 group-hover:text-primary transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 leading-relaxed line-clamp-2"
          >
            {description}
          </motion.p>

          {/* Amenity pills */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 flex-wrap mt-1"
          >
            {amenities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs text-gray-500 font-medium"
              >
                <Icon size={13} strokeWidth={1.8} />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-b mb-4 md:mb-6 mt-4 md:mt-7" />

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between pt-0.5"
          >
            <div className="flex items-center gap-1.5">
              <Star size={15} className="fill-[#F97316] text-[#F97316]" />
              <span className="font-bold text-sm text-gray-800">{rating}</span>
              <span className="text-gray-400 text-sm">({reviews} reviews)</span>
            </div>
            <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full">
              View Room →
            </span>
          </motion.div>
        </motion.div>

      </div>
    </Link>
  );
};

export default RoomCard;
