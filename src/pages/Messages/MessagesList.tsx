import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useMessages } from "./use-messages";
import { X } from "lucide-react";
import useModal from "@/components/Modal/useModal";
import ChatView from "./ChatView";
import { useSearchParams } from "react-router";

export default function MessagesList() {
    const { conversations } = useMessages();
    const { close } = useModal();
    const [searchParams, setSearchParams] = useSearchParams();

    const openChatId = searchParams.get("chatId");
    const selectedConversation = openChatId
        ? conversations.find(c => c.id === openChatId)
        : null;

    const handleSelectChat = (id: string) => {
        searchParams.set("chatId", id);
        setSearchParams(searchParams);
    };

    const handleBack = () => {
        searchParams.delete("chatId");
        setSearchParams(searchParams);
    };

    if (selectedConversation) {
        return (
            <ChatView
                key={selectedConversation.id}
                conversation={selectedConversation}
                onBack={handleBack}
            />
        );
    }

    return (
        <div className="flex flex-col h-full bg-white rounded-t-[10px] sm:rounded-none min-h-[600px]">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100">
                <div>
                    <h2 className="text-[26px] font-bold text-gray-900">Messages</h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Meassage with your hosts directly, Dont provide any personal information for safety.
                    </p>
                </div>
                <button
                    onClick={() => close(["modal"])}
                    className="p-2 transition-colors rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6 text-red-500" />
                </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
                {conversations.map((chat) => (
                    <div
                        key={chat.id}
                        onClick={() => handleSelectChat(chat.id)}
                        className="flex items-center gap-4 p-4 transition-colors hover:bg-gray-50 cursor-pointer"
                    >
                        {/* Avatar with Status */}
                        <div className="relative">
                            <Avatar className="w-12 h-12 border border-gray-200">
                                <AvatarImage src={chat.user.avatar} alt={chat.user.name} />
                                <AvatarFallback>{chat.user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {chat.user.status === "online" && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            )}
                            {chat.user.status === "offline" && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 border-2 border-white rounded-full"></span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                                <h3 className="text-[18px] font-semibold text-gray-900 truncate">
                                    {chat.user.name}
                                </h3>
                                {/* Time / Status (Top Right) */}
                                {chat.user.status === "online" && chat.unreadCount > 0 && (
                                    <span className="text-[14px] text-gray-500">{chat.time}</span>
                                )}
                                {chat.user.status !== "online" && (
                                    <span className="text-[14px] text-gray-500">{chat.user.lastActive}</span>
                                )}
                                {chat.user.status === "online" && chat.unreadCount === 0 && (
                                    <span className="text-[14px] text-gray-500">{chat.time}</span>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                {/* Last Message or Status Text */}
                                <p className="text-[14px] text-gray-500 truncate">
                                    {chat.unreadCount > 0 ? chat.user.name : (chat.lastMessage || "Active recently")}
                                </p>

                                {/* Unread Badge */}
                                {chat.unreadCount > 0 && (
                                    <Badge className="flex items-center justify-center p-0 text-xs text-white bg-orange-500 rounded-full w-6 h-6 hover:bg-orange-600">
                                        {chat.unreadCount}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
