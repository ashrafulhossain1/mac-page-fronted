import { Star, MapPin } from "lucide-react";
import RoomTypeIcon from "@/assets/rooms/room-type.svg?react";
import RoomSizeIcon from "@/assets/rooms/room-size.svg?react";
import type { Room } from "@/types/room";
import { Separator } from "@/components/ui/separator";
import ExcIcon from "@/assets/icons/exc.svg?react";
import { motion } from "framer-motion";
import {
  headingViewport,
  innerItemVariants,
} from "@/lib/animations";

interface RoomInfoProps extends Pick<
  Room,
  "title" | "price" | "location" | "rating" | "reviews" | "type" | "amenities"
> {
  aboutRoom?: string;
  aboutLocation?: string;
  roomSize?: string;
  houseRules?: string[];
}

export default function RoomInfo({
  title,
  price,
  location,
  rating,
  reviews,
  type,
  amenities,
  aboutRoom = "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
  aboutLocation = "It's a stunning location with great access to Limerick's city centre. The area has great walks and a beautiful garden. Jetland Shopping Centre with a cinema and Dunnes is just 10 mins walk, am only 25 mins by bus to the city centre so this location will suit most of the students and professionals.",
  roomSize = "12 M²",
  houseRules = [
    "Minimum stay (6 months)",
    "No smoking",
    "Quiet hours: 10 PM - 8 AM",
    "Maximum 2 guests",
  ],
}: RoomInfoProps) {
  return (
    <div className="w-full">
      {/* Header card is a static container now */}
      <div className="bg-[#fbfbfb] rounded-[30px] border border-gray-300 p-6 shadow-sm mb-6">

        {/* Individual elements are animated separately */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
          >
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 text-gray-500">
                <MapPin size={14} className="text-gray-400" />
                <span className="text-sm">{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#F97316] text-[#F97316]" />
                <span className="text-sm font-semibold">{rating}</span>
                <span className="text-sm text-gray-400">
                  ({reviews} reviews)
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-right sm:min-w-[100px]"
          >
            <span className="text-2xl md:text-3xl font-bold text-[#F97316]">
              {price.replace("/week", "")}
            </span>
            <p className="text-sm text-gray-400">Per week</p>
          </motion.div>
        </div>

        <motion.div
          variants={innerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
        >
          <Separator className="my-4" />
        </motion.div>

        {/* About this room */}
        <div className="mt-6">
          <motion.h2
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-lg font-bold text-gray-900 mb-3"
          >
            About this room
          </motion.h2>
          <motion.p
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-sm text-gray-500 leading-relaxed"
          >
            {aboutRoom}
          </motion.p>
        </div>

        {/* About location */}
        <div className="mt-6">
          <motion.h2
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-lg font-bold text-gray-900 mb-3"
          >
            About location
          </motion.h2>
          <motion.p
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-sm text-gray-500 leading-relaxed"
          >
            {aboutLocation}
          </motion.p>
        </div>

        {/* Room Type & Room Size */}
        <div className="flex items-center gap-8 mt-6">
          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="flex items-center gap-3 "
          >
            <RoomTypeIcon className="w-16 h-16 p-3 rounded-lg bg-gray-100" />
            <div>
              <p className="text-base text-secondary-foreground">Room Type</p>
              <p className="text-lg font-bold text-primary-foreground">
                {type}
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="flex items-center gap-3"
          >
            <RoomSizeIcon className="w-16 h-16 p-3 rounded-lg bg-gray-100" />
            <div>
              <p className="text-base text-secondary-foreground">Room Size</p>
              <p className="text-lg font-bold text-primary-foreground">
                {roomSize}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <motion.h2
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-lg font-bold text-gray-900 mb-4"
          >
            Amenities
          </motion.h2>
          <div className="grid grid-cols-2 gap-3">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={innerItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-6   w-full mdw-[60%] lg:w-[50%] py-[14px] rounded-xl bg-gray-100 text-sm text-primary-foreground font-medium hover:bg-gray-200 transition-colors"
              >
                {amenity}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border w-full h-[1px] border-gray-200 my-6" />
        {/* House Rules */}
        <div className="">
          <motion.h2
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
            className="text-lg font-bold text-gray-900 mb-4"
          >
            House Rules
          </motion.h2>
          <div className="flex flex-col gap-3">
            {houseRules.map((rule, index) => (
              <motion.div
                key={index}
                variants={innerItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <ExcIcon className="w-6 h-6 shrink-0" />
                <span className="text-xs md:text-base text-secondary-foreground">
                  {rule}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
