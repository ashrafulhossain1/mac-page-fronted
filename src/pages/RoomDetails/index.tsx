import { useParams } from "react-router";
import { rooms } from "@/data/rooms";
import RoomImageCarousel from "./_components/RoomImageCarousel";
import RoomInfo from "./_components/RoomInfo";
import BookingCard from "./_components/BookingCard";
import HostProfile from "./_components/HostProfile";
import Reviews from "./_components/Reviews";
import RelevantRooms from "./_components/RelevantRooms";
import { motion } from "framer-motion";
import {
  headingVariants,
} from "@/lib/animations";

// Room detail images from assets/rooms
import roomImg1 from "@/assets/rooms/room-details (1).png";
import roomImg2 from "@/assets/rooms/room-details (1).jpg";
import roomImg3 from "@/assets/rooms/room-details (2).jpg";
import roomImg4 from "@/assets/rooms/room-details (3).jpg";
import roomImg5 from "@/assets/rooms/room-details (4).jpg";
import roomImg6 from "@/assets/rooms/room-details (5).jpg";
import roomImg7 from "@/assets/rooms/room-details (6).jpg";

const roomDetailImages = [
  roomImg1,
  roomImg2,
  roomImg3,
  roomImg4,
  roomImg5,
  roomImg6,
  roomImg7,
];

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Room not found</h1>
        <p className="text-gray-500 mt-2">
          The room you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  // Use room's own image as first, then fill with room detail images
  const carouselImages = [
    room.image,
    ...roomDetailImages.filter((img) => img !== room.image),
  ].slice(0, 6);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-0 pt-8 pb-20">
      {/* Top Section: Carousel + Booking Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Carousel takes 2 cols */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2"
        >
          <RoomImageCarousel images={carouselImages} title={room.title} />
        </motion.div>

        {/* Right side - Booking Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          className="hidden lg:block"
        >
          <div className="sticky top-8">
            <BookingCard
              pricePerWeek={parseInt(room.price.replace(/[^0-9]/g, ""))}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Section: Room Info (left) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <RoomInfo
            title={room.title}
            price={room.price}
            location={room.location}
            rating={room.rating}
            reviews={room.reviews}
            type={room.type}
            amenities={
              room.amenities.length >= 6
                ? room.amenities
                : [
                  ...room.amenities,
                  "Kitchen Access",
                  "Heating",
                  "Furnished",
                  "Laundry",
                  "Personal Washroom",
                ].slice(0, 6)
            }
          />
          <HostProfile />
        </div>
      </div>

      {/* Reviews - Full Width */}
      <Reviews />

      {/* Relevant Rooms - Full Width */}
      <RelevantRooms />
    </div>
  );
}
