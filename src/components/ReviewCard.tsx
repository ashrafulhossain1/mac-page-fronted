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
    <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl duration-300 h-[327px]">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-[#FF9807] text-[#FF9807]" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-gray-700 italic text-lg my-5 grow">{text}</p>

      {/* Guest Profile */}
      <div className="flex items-center gap-4 mt-4">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
        />
        <div>
          <p className="font-semibold text-gray-900 text-[18px]">{author}</p>
          <p className="text-gray-600 text-[16px]">{role}</p>
        </div>
      </div>
    </div>
  );
}
