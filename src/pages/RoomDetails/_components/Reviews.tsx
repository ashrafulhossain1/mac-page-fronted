import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatarImg from "@/assets/home/Ellipse 1.png";
import { ReviewCard } from "@/components/ReviewCard";

const reviewsData = [
  // ... (keeping existing data)
  {
    id: 1,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Atif Islam",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 2,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Sanjay M.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 3,
    rating: 5,
    text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
    author: "Emma L.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 4,
    rating: 4,
    text: "Great location and the host was very responsive. The room was clean and well-maintained. Would definitely recommend to anyone looking for a stay.",
    author: "David K.",
    role: "Professional in Dublin",
    avatar: avatarImg,
  },
  {
    id: 5,
    rating: 5,
    text: "Excellent stay! Everything was exactly as described. The neighbourhood is safe and quiet, perfect for studying and relaxing.",
    author: "Maria S.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 6,
    rating: 5,
    text: "Very comfortable room with all the amenities I needed. The host made me feel very welcome from day one. Highly recommend!",
    author: "James O.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 7,
    rating: 5,
    text: "Perfect for my internship stay. Close to public transport, clean shared spaces, and a friendly host. Would book again without hesitation.",
    author: "Sophie R.",
    role: "Intern in Dublin",
    avatar: avatarImg,
  },
  {
    id: 8,
    rating: 4,
    text: "Nice and affordable room. The kitchen was well-equipped and the area felt very safe. Only minor issue was street noise at night.",
    author: "Liam T.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
  {
    id: 9,
    rating: 5,
    text: "Stayed here for 3 months and it felt like home. The host is super accommodating and the room is exactly as shown in the photos.",
    author: "Priya N.",
    role: "Student in Ireland",
    avatar: avatarImg,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerView(1);
      } else if (window.innerWidth < 1024) {
        setPerView(2);
      } else {
        setPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = reviewsData.length;
  const maxIndex = Math.max(0, totalItems - perView);

  // Safety check for index out of bounds after resize or perView change
  const currentIndex = Math.min(index, maxIndex);

  const next = () => {
    if (currentIndex < maxIndex) {
      setIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setIndex(prev => prev - 1);
    }
  };

  const gap = 32; // gap-8 = 32px
  const itemWidthPercent = 100 / perView;

  return (
    <section className="w-full mt-16 mb-8 overflow-hidden px-4 md:px-0">
      <div className="w-full">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary-foreground text-center md:text-left">Reviews</h2>

        {/* Carousel Viewport */}
        <div className="relative">
          <motion.div
            animate={{ x: `calc(-${currentIndex * itemWidthPercent}% - ${currentIndex * (gap / perView)}px)` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="flex gap-8"
          >
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="shrink-0"
                style={{
                  width: `calc(${itemWidthPercent}% - ${(perView - 1) * gap / perView}px)`
                }}
              >
                <ReviewCard
                  rating={review.rating}
                  text={review.text}
                  author={review.author}
                  role={review.role}
                  avatar={review.avatar}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[20px] transition-all duration-300 ${currentIndex === 0
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-pointer shadow-sm hover:shadow-md"
              }`}
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-[20px] transition-all duration-300 ${currentIndex >= maxIndex
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-pointer shadow-sm hover:shadow-md"
              }`}
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

