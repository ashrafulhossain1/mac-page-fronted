export type MessageStatus = "online" | "offline";

export interface MessageUser {
    id: string;
    name: string;
    avatar: string;
    status: MessageStatus;
    lastActive?: string;
    role?: string; // e.g. "Cozy single room in City Center, Owner"
}

export interface Conversation {
    id: string;
    user: MessageUser;
    lastMessage: string;
    time: string;
    unreadCount: number;
}

export interface Message {
    id: string;
    content: string;
    senderId: string;
    timestamp: string;
    isOwn: boolean;
}