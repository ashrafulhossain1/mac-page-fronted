import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import type { RecentRequest } from "@/types/dashboard";
import { Calendar, Clock } from "lucide-react";

type RequestListItemProps = Omit<RecentRequest, "id" | "status">;

const RequestListItem = ({ user, duration, time }: RequestListItemProps) => {
  return (
    <div className="bg-white p-6 rounded-[20px] border border-gray-200 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-12 h-12 border border-gray-100 shrink-0">
          <AvatarImage src={user.avatar} className="object-cover" />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-[18px] font-bold text-gray-900 leading-tight mb-1">{user.name}</h3>
          <p className="text-secondary-foreground text-sm">{user.role}</p>
        </div>
      </div>

      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-secondary-foreground text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center gap-2 text-secondary-foreground text-sm">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{time}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Link to="/dashboard/all-requests/1" className="w-[65%]">
          <Button
            variant="outline"
            className="w-full h-11 rounded-xl text-base font-medium text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-900"
          >
            About this Guest
          </Button>
        </Link>
        <div className="flex gap-4 flex-1 sm:flex-none">
          <Button className="bg-[#F97316] hover:bg-[#ea580c] text-white px-8 h-11 rounded-xl text-base font-bold flex-1 sm:flex-none">
            Approve
          </Button>
          <Button
            variant="outline"
            className="px-8 h-11 rounded-xl text-base font-medium text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-900 flex-1 sm:flex-none"
          >
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestListItem;
