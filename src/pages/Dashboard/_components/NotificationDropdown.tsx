import { useState, useRef, useEffect } from "react";
import { Bell, UserCheck, CreditCard, MessageSquare, Home } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";

type Notification = {
    id: number;
    type: "booking" | "payment" | "message" | "verification";
    title: string;
    description: string;
    time: string;
    isRead: boolean;
};

const mockNotifications: Notification[] = [
    {
        id: 1,
        type: "booking",
        title: "New Booking Request",
        description: "John Doe has requested to book your room in Dublin 2.",
        time: "2 min ago",
        isRead: false,
    },
    {
        id: 2,
        type: "payment",
        title: "Payment Received",
        description: "€485 weekly rent received from Sarah Miller.",
        time: "1 hour ago",
        isRead: false,
    },
    {
        id: 3,
        type: "message",
        title: "New Message",
        description: "Emily wrote: 'Hi, is the room still available for March?'",
        time: "3 hours ago",
        isRead: false,
    },
    {
        id: 4,
        type: "verification",
        title: "Verification Approved",
        description: "Your host verification has been approved. You now have a verified badge!",
        time: "1 day ago",
        isRead: true,
    },
    {
        id: 5,
        type: "booking",
        title: "Booking Confirmed",
        description: "Alex Johnson's booking for Cozy Room has been confirmed.",
        time: "2 days ago",
        isRead: true,
    },
];

const iconMap = {
    booking: Home,
    payment: CreditCard,
    message: MessageSquare,
    verification: UserCheck,
};

const iconBgMap = {
    booking: "bg-orange-100 text-orange-500",
    payment: "bg-green-100 text-green-500",
    message: "bg-blue-100 text-blue-500",
    verification: "bg-purple-100 text-purple-500",
};

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(mockNotifications);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    // Close dropdown when clicking outside (desktop only)
    useEffect(() => {
        if (isMobile) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMobile]);

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };



    // Shared notification list
    const notificationList = (
        <>
            {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                    <Bell className="w-10 h-10 mb-3 opacity-40" />
                    <p className="text-sm font-medium">No notifications yet</p>
                    <p className="text-xs mt-1">We'll notify you when something happens</p>
                </div>
            ) : (
                mockNotifications.map((notification) => {
                    const Icon = iconMap[notification.type];
                    const iconStyle = iconBgMap[notification.type];

                    return (
                        <div
                            key={notification.id}
                            className={`flex items-start gap-3 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0 ${!notification.isRead ? "bg-orange-50/40" : ""}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconStyle}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className={`text-sm font-semibold leading-tight ${!notification.isRead ? "text-gray-900" : "text-gray-600"}`}>
                                        {notification.title}
                                    </p>
                                    {!notification.isRead && (
                                        <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                                    )}
                                </div>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                                    {notification.description}
                                </p>
                                <p className="text-[11px] text-gray-400 mt-1.5 font-medium">
                                    {notification.time}
                                </p>
                            </div>

                        </div>
                    );
                })
            )}
        </>
    );

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Bell Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                    <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold leading-none">{unreadCount}</span>
                    </span>
                )}
            </button>

            {/* ─── Mobile: Bottom Drawer ─── */}
            {isMobile && (
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerContent className="max-h-[80vh]">
                        <DrawerHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-3">
                            <div className="flex items-center gap-2">
                                <DrawerTitle className="text-lg font-bold text-gray-900">
                                    Notifications
                                </DrawerTitle>
                                {unreadCount > 0 && (
                                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                                        {unreadCount}
                                    </span>
                                )}
                            </div>
                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="text-xs text-orange-500 hover:text-orange-600 font-semibold"
                                >
                                    Mark all read
                                </button>
                            )}
                        </DrawerHeader>
                        <DrawerDescription className="sr-only">Your recent notifications</DrawerDescription>

                        <div className="overflow-y-auto flex-1">
                            {notificationList}
                        </div>

                        {notifications.length > 0 && (
                            <div className="border-t border-gray-100 px-5 py-3 bg-gray-50">
                                <button className="w-full text-center text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                                    View All Notifications
                                </button>
                            </div>
                        )}
                    </DrawerContent>
                </Drawer>
            )}

            {/* ─── Desktop: Dropdown Panel ─── */}
            {!isMobile && isOpen && (
                <div className="absolute right-0 top-full mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-100 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-gray-900">Notifications</h3>
                            {unreadCount > 0 && (
                                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                                    {unreadCount} new
                                </span>
                            )}
                        </div>
                        {unreadCount > 0 && (
                            <button
                                onClick={markAllAsRead}
                                className="text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                            >
                                Mark all as read
                            </button>
                        )}
                    </div>

                    {/* Desktop List */}
                    <div className="max-h-[400px] overflow-y-auto">
                        {notificationList}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                        <div className="border-t border-gray-100 px-5 py-3">
                            <button className="w-full text-center text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                                View All Notifications
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
