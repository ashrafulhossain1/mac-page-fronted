import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Mock data based on the provided image
const notifications = [
  {
    id: 1,
    name: "Alfred",
    action: "has asked for Gordan's approval",
    time: "9 hours ago",
    category: "Arkham Designs",
    avatar: "https://i.pravatar.cc/150?u=alfred",
    hasHashtag: false,
  },
  {
    id: 2,
    name: "Irfan",
    action: "commented under",
    target: "#Landing Pages",
    time: "12 hours ago",
    category: "#Landing Pages",
    avatar: "https://i.pravatar.cc/150?u=irfan",
    hasHashtag: true,
  },
  {
    id: 3,
    name: "Aashna",
    action: "uploaded a new document",
    time: "2 days ago",
    category: "Client Onboarding",
    avatar: "https://i.pravatar.cc/150?u=aashna",
    hasHashtag: false,
  },
];

const NotificationModal = () => {
  return (
    <div className="w-full max-w-sm bg-white overflow-hidden flex flex-col h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-4 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={notification.avatar} alt={notification.name} />
              <AvatarFallback>{notification.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{notification.time}</span>
                <span>•</span>
                <span
                  className={
                    notification.hasHashtag ? "text-gray-500" : "text-gray-500"
                  }
                >
                  {notification.category}
                </span>
              </div>
              <p className="text-sm text-gray-900 leading-snug">
                <span className="font-bold">{notification.name}</span>{" "}
                {notification.action}{" "}
                {notification.target && (
                  <span className="text-gray-600 font-medium">
                    {notification.target}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <Button
          variant="ghost"
          className="w-full justify-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
        >
          <CheckCheck className="w-4 h-4" />
          Mark all as read
        </Button>
      </div>
    </div>
  );
};

export default NotificationModal;
