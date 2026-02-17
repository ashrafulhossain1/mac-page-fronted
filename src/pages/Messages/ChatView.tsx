import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import useModal from "@/components/Modal/useModal";
import { type Conversation, type Message, useMessages } from "./use-messages";
import { useState } from "react";

interface ChatViewProps {
    conversation: Conversation;
    onBack: () => void;
}

export default function ChatView({ conversation, onBack }: ChatViewProps) {
    const { close } = useModal();
    const { getMessagesForConversation } = useMessages();
    const [messages, setMessages] = useState<Message[]>(() => getMessagesForConversation(conversation.id));
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        // Mock sending message
        const msg = {
            id: Date.now().toString(),
            content: newMessage,
            senderId: "me",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isOwn: true,
        };

        setMessages([...messages, msg]);
        setNewMessage("");
    };

    return (
        <div className="flex flex-col h-full bg-white rounded-t-[10px] sm:rounded-none min-h-[600px]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="p-2 transition-colors rounded-full hover:bg-gray-100"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <div className="relative">
                        <Avatar className="w-10 h-10 border border-gray-200">
                            <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                            <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.user.status === "online" && (
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                            {conversation.user.name}
                        </h3>
                        {/* {conversation.user.role && ( */}
                        <p className="text-xs text-gray-500">
                            Cozy single room in City Center, Owner
                        </p>
                        {/* )} */}
                    </div>
                </div>

                <button
                    onClick={() => close(["modal"])}
                    className="p-2 transition-colors rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6 text-red-500" />
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-6">
                {messages.map((msg) => {
                    // Primitive check to group messages or just spacing
                    // For now, simpler implementation

                    const isOwn = msg.isOwn;

                    return (
                        <div key={msg.id} className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                            {/* Timestamp above message sometimes? The design shows timestamp above simple text */}
                            <span className="text-[10px] text-gray-400 mb-1 px-1">{msg.timestamp}</span>

                            <div
                                className={`max-w-[80%] p-3 rounded-xl text-sm ${isOwn
                                    ? 'bg-orange-500 text-white rounded-tr-none'
                                    : 'bg-gray-100 text-gray-900 rounded-tl-none'
                                    }`}
                            >
                                <p className="whitespace-pre-line leading-relaxed">{msg.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="type your message here..."
                        className="flex-1 bg-transparent border-none outline-none text-sm placeholder-gray-400"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSendMessage();
                        }}
                    />
                    <Button
                        onClick={handleSendMessage}
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 h-9 text-sm font-medium"
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}
