import { Star } from "lucide-react";
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
    <section className="w-full py-24 bg-gray-50">
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
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF9807] text-[#FF9807]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 italic text-lg my-5 flex-grow">
                {testimonial.text}
              </p>

              {/* Guest Profile */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[18px]">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-[16px]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
