import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

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

export const useMessages = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Generate mock data using faker
        const generateMockData = () => {
            const mockConversations: Conversation[] = Array.from({ length: 5 }).map(() => {
                const isOnline = faker.datatype.boolean();
                return {
                    id: faker.string.uuid(),
                    user: {
                        id: faker.string.uuid(),
                        name: faker.person.fullName(),
                        avatar: faker.image.avatar(),
                        status: isOnline ? "online" : "offline",
                        lastActive: !isOnline ? `Active ${faker.number.int({ min: 1, max: 5 })} day ago` : undefined,
                        role: "Cozy single room in City Center, Owner"
                    },
                    lastMessage: faker.lorem.sentence({ min: 3, max: 6 }),
                    time: faker.date.recent().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    unreadCount: faker.number.int({ min: 0, max: 5 }),
                };
            });

            // Hardcode a few specific ones to match the screenshot if needed, but faker is fine generally.
            // Let's add the specific ones from the image manually for closer match if desired, 
            // but dynamic is better for "faker js for info" request.

            // Override first few to look nice like the design
            if (mockConversations[0]) {
                mockConversations[0].user.name = "Mr James";
                mockConversations[0].unreadCount = 3;
                mockConversations[0].time = "04:45 am";
                mockConversations[0].user.status = "online";
            }

            if (mockConversations[1]) {
                mockConversations[1].user.name = "Smith Khan";
                mockConversations[1].unreadCount = 0;
                mockConversations[1].time = "Active 1 day ago"; // This is actually status in the design, handled in UI logic
                mockConversations[1].user.status = "offline";
                mockConversations[1].user.lastActive = "Active 1 day ago";
            }

            if (mockConversations[2]) {
                mockConversations[2].user.name = "Samir Ahsan";
                mockConversations[2].unreadCount = 0;
                mockConversations[2].time = "04:45 am";
                mockConversations[2].user.status = "online";
                mockConversations[2].lastMessage = "You sent a message";
            }

            setConversations(mockConversations);
            setIsLoading(false);
        };

        generateMockData();
    }, []);

    const getMessagesForConversation = (_conversationId: string): Message[] => {
        void _conversationId; // Silence unused variable warning
        // Mock messages for the selected conversation
        // In a real app, this would fetch from an API
        return [
            {
                id: "1",
                content: "Hello Samir,\nIs this room availabel?",
                senderId: "me",
                timestamp: "04:36 am",
                isOwn: true,
            },
            {
                id: "2",
                content: "Yes, This room is available",
                senderId: "other",
                timestamp: "05:08 am",
                isOwn: false,
            },
            {
                id: "3",
                content: "How much time you want to stay here?",
                senderId: "other",
                timestamp: "05:09 am",
                isOwn: false,
            },
            {
                id: "4",
                content: "I want to stay here 6 month 😊",
                senderId: "me",
                timestamp: "04:36 am",
                isOwn: true,
            },
        ];
    };

    return { conversations, isLoading, getMessagesForConversation };
};
