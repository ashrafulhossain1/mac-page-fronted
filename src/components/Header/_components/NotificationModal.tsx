import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

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
  {
    id: 4,
    name: "Aashna",
    action: "uploaded a new document",
    time: "2 days ago",
    category: "Client Onboarding",
    avatar: "https://i.pravatar.cc/150?u=aashna2",
    hasHashtag: false,
  },
  {
    id: 5,
    name: "Aashna",
    action: "uploaded a new document",
    time: "2 days ago",
    category: "Client Onboarding",
    avatar: "https://i.pravatar.cc/150?u=aashna3",
    hasHashtag: false,
  },
];

interface NotificationItemProps {
  notification: (typeof notifications)[number];
  compact?: boolean;
}

function NotificationItem({ notification, compact }: NotificationItemProps) {
  return (
    <div
      className={`flex gap-3 ${compact ? "p-3" : "p-4"} border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer`}
    >
      <Avatar className={`${compact ? "h-9 w-9" : "h-10 w-10"} shrink-0`}>
        <AvatarImage src={notification.avatar} alt={notification.name} />
        <AvatarFallback>{notification.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1 min-w-0">
        <div
          className={`flex items-center gap-2 ${compact ? "text-[11px]" : "text-xs"} text-gray-500`}
        >
          <span>{notification.time}</span>
          <span>•</span>
          <span className="text-gray-500 truncate">
            {notification.category}
          </span>
        </div>
        <p
          className={`${compact ? "text-[13px]" : "text-sm"} text-gray-900 leading-snug`}
        >
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
  );
}

const NotificationModal = () => {
  const isMobile = useIsMobile();

  // ─── Mobile Layout (Full-Width Bottom Sheet Style) ──────────────────
  if (isMobile) {
    return (
      <div className="w-full bg-white overflow-hidden flex flex-col max-h-[70vh] rounded-t-[28px]">
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h2 className="text-[17px] font-bold text-gray-900">
            Notifications
          </h2>
          <span className="text-[12px] text-gray-400 font-medium">
            {notifications.length} new
          </span>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              compact
            />
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100">
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 text-[13px] py-2.5"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </Button>
        </div>
      </div>
    );
  }

  // ─── Desktop Layout (Popover Card) ─────────────────────────────────
  return (
    <div className="w-full rounded-[16px] max-w-sm bg-white overflow-hidden flex flex-col h-[400px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
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
