import RoomCard from "./RoomCard";
import room1 from "@/assets/home/room-1.png";
import room2 from "@/assets/home/room-2.png";
import room3 from "@/assets/home/room-3.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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

function FeaturedRooms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".featured-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".room-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".featured-btn",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1280px] mx-auto py-[120px] px-4 md:px-6 lg:px-0"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-[38px]">
        <h2 className="featured-title text-[32px] md:text-4xl lg:text-[48px] font-semibold leading-[48px] text-left text-black">
          Featured <span className="text-primary">Student</span> Accommodations
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
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
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-6 items-center">
        <Button
          variant="host"
          className="featured-btn px-8 py-3 text-[18px] font-semibold rounded-[16px] flex items-center gap-2 bg-primary text-white hover:bg-primary/80 transition-colors mt-6 md:mt-0"
          asChild
        >
          <Link to="/browse">
            <span> View All Rooms</span>
            <FaArrowRightLong />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default FeaturedRooms;
