import { MapPin, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { TbEdit } from "react-icons/tb";

import type { Listing } from "@/types/dashboard";

interface ListingItemProps extends Omit<Listing, "id"> {
  showActions?: boolean;
}

const ListingItem = ({
  title,
  location,
  price,
  views,
  bookings,
  status,
  image,
  showActions = true,
}: ListingItemProps) => {
  return (
    <div className="bg-white p-4 rounded-[20px] border border-gray-200 relative flex flex-col md:flex-row gap-6">
      {/* Image */}
      <div className="w-full md:w-[240px] h-[148px] rounded-[14px] overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start">
          <div className=" max-w-[70%]">
            <h4 className=" text-base md:text-lg font-semibold text-primary-foreground leading-tight">
              {title}
            </h4>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 py-1.5">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Eye className="w-4 h-4" />
                <span>{views} views</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{bookings} bookings</span>
              </div>
            </div>
          </div>

          {/* Price - Desktop (Hidden on mobile, shown here for flex layout) */}
          <div className="hidden md:block text-right">
            <p className="text-[34px] font-bold text-primary">€{price}</p>
            <p className="text-lg text-secondary-foreground">per week</p>
          </div>
        </div>

        {/* Actions & Status Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-4 md:mt-2 gap-4">
          {showActions && (
            <div className="flex gap-3">
              <Link to="/dashboard/edit-room/1">
                <Button className="bg-primary/95 hover:bg-primary text-white px-6 h-10  font-medium text-base gap-2">
                  <div className="w-4 h-4 flex items-center justify-center border-white/40">
                    <TbEdit size={16} />
                  </div>
                  Edit
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="text-gray-500 hover:text-gray-900  px-4 h-10 rounded-xl font-medium text-sm gap-2 hover:bg-gray-100"
              >
                <Calendar className="w-4 h-4" />
                Calendar
              </Button>
            </div>
          )}

          {/* Status Badge - Desktop */}
          <div className="hidden md:flex bg-green-100 text-green-700 px-6 py-1.5 rounded-full text-sm font-bold items-center justify-center">
            {status}
          </div>
        </div>

        {/* Mobile Only: Price & Status */}
        <div className="flex md:hidden items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-[#F97316]">€{price}</p>
            <p className="text-lg text-secondary-foreground">per week</p>
          </div>
          <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
