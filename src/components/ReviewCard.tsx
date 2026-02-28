import { Star } from "lucide-react";

interface ReviewCardProps {
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export function ReviewCard({
  rating,
  text,
  author,
  role,
  avatar,
}: ReviewCardProps) {
  return (
    <div className="bg-gray-100 rounded-xl hover:shadow-sm p-5 lg:p-6 flex flex-col transition transform hover:-translate-y-2 duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-2 md:mb-3 lg:mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-[#FF9807] text-[#FF9807]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 italic text-base lg:text-lg  grow">{text}</p>

      {/* Guest Profile */}
      <div className="flex items-center gap-4 mt-4">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
        />
        <div>
          <p className="font-medium text-gray-900  text-base md:text-[18px]">{author}</p>
          <p className="text-secondary-foreground text-sm md:text-[16px]">{role}</p>
        </div>
      </div>
    </div>
  );
}
