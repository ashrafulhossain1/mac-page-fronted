import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

import type { RecentRequest } from "@/types/dashboard";

type RequestItemProps = Omit<RecentRequest, "id" | "status">;

const RequestItem = ({ user, duration, time }: RequestItemProps) => {
  const handleApprove = () => {
    console.log(`Approving request for ${user.name}`);
  };

  const handleChat = () => {
    console.log(`Starting chat with ${user.name}`);
  };

  return (
    <div className="bg-white p-5 rounded-[24px] border border-gray-200">
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-12 h-12 border border-white shadow-sm shrink-0">
          <AvatarImage src={user.avatar} className="object-cover" />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h5 className="text-lg font-bold text-gray-900 leading-tight mb-0.5">{user.name}</h5>
          <p className="text-sm text-gray-500 truncate">{user.role}</p>
        </div>
      </div>

      <div className="space-y-1.5 mb-6 ml-1">
        <div className="flex items-center gap-2.5 text-sm text-gray-500">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-gray-500">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{time}</span>
        </div>
      </div>

      <div className="flex gap-2.5">
        <Button
          onClick={handleApprove}
          className="bg-[#F97316] hover:bg-[#ea580c] text-white flex-1 h-11 rounded-xl text-base font-bold shadow-sm"
        >
          Approve
        </Button>
        <Button
          onClick={handleChat}
          variant="outline"
          className="flex-1 h-11 rounded-xl text-base font-medium text-gray-500 hover:text-gray-900 border-gray-200 hover:bg-gray-50"
        >
          Chat
        </Button>
      </div>
    </div>
  );
};

export default RequestItem;
