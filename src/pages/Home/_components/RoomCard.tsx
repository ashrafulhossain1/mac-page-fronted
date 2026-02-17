import { Star, MapPin, Wifi, Bed, Bath, Wind } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import type { Room } from "@/types/room";

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
    <Link to={`/browse/${id}`} className="block">
      <Card className="max-w-[416px] overflow-hidden rounded-[32px] p-4 group hover:shadow-xl transition-all duration-100 border">
        {/* Image Section */}
        <CardHeader className="p-0 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-[270px] w-full object-cover transition-transform duration-500 group-hover:scale-103 rounded-[16px]"
          />
          <Badge className="absolute top-4 right-4 bg-white text-black hover:bg-white rounded-full px-3 py-1 font-semibold text-xs shadow-sm">
            {price}
          </Badge>
        </CardHeader>

        <CardContent className="p-0">
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-500 mb-2">
            <MapPin size={14} />
            <span className="text-xs font-medium uppercase tracking-wider">
              {location}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-black mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 leading-[20.8px] line-clamp-2">
            {description}
          </p>

          {/* Amenities Icons */}
          <div className="flex items-center gap-5 mt-4  text-gray-400">
            <Wifi size={18} strokeWidth={1.5} />
            <Bed size={18} strokeWidth={1.5} />
            <Bath size={18} strokeWidth={1.5} />
            <Wind size={18} strokeWidth={1.5} />
          </div>
        </CardContent>

        <Separator className="bg-gray-100 py-0 my-0" />

        {/* Footer / Rating */}
        <CardFooter className="p-0 flex justify-between items-center bg-white ">
          <div className="flex items-center gap-1.5">
            <Star size={16} className="fill-[#F97316] text-[#F97316]" />
            <span className="font-bold text-sm">{rating}</span>
          </div>
          <span className="text-gray-400 text-sm">{reviews} reviews</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RoomCard;
