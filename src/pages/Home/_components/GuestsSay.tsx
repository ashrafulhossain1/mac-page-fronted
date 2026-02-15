import { ReviewCard } from "@/components/ReviewCard";
import avatarImg from "@/assets/home/Ellipse 1.png";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

// Direct object paths using public/images/home folder
const testimonials: Testimonial[] = [
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
];

export function GuestsSay() {
  return (
    <section className="w-full py-24 ">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="text-orange-500">Guests</span> Say
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Hear directly from our guests who stayed with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ReviewCard
              key={testimonial.id}
              rating={testimonial.rating}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
