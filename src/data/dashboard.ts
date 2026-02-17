import room1 from "@/assets/home/room-1.png";
import room2 from "@/assets/home/room-2.png";
import room3 from "@/assets/home/room-3.png";
import type {
  DashboardStat,
  Listing,
  RecentRequest,
} from "../types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    label: "Active Listings",
    value: "03",
    subValue: "+1 this week",
    icon: "home",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    label: "Total Bookings",
    value: "12",
    subValue: "+3 this week",
    icon: "calendar",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    label: "Pending Requests",
    value: "05",
    subValue: "Requires Action",
    icon: "clock",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

export const listings: Listing[] = [
  {
    id: 1,
    title: "Cozy Single Room in Dublin City Center",
    location: "Dublin 2, Ireland",
    price: 650,
    views: 245,
    bookings: 58,
    status: "Active",
    image: room1,
  },
  {
    id: 2,
    title: "Cozy Single Room in Dublin City Center",
    location: "Dublin 2, Ireland",
    price: 720,
    views: 245,
    bookings: 58,
    status: "Active",
    image: room2,
  },
  {
    id: 3,
    title: "Cozy Single Room in Dublin City Center",
    location: "Dublin 2, Ireland",
    price: 330,
    views: 245,
    bookings: 58,
    status: "Active",
    image: room3,
  },
  {
    id: 4,
    title: "Modern Apartment near Tech Hub",
    location: "Dublin 4, Ireland",
    price: 850,
    views: 120,
    bookings: 0,
    status: "Draft",
    image: room1,
  },
  {
    id: 5,
    title: "Spacious Studio in City Center",
    location: "Dublin 1, Ireland",
    price: 900,
    views: 450,
    bookings: 12,
    status: "Paused",
    image: room2,
  },
];

export const recentRequests: RecentRequest[] = [
  {
    id: 1,
    user: {
      name: "Sarah Murphy",
      role: "Cozy single room...",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    duration: "6 months",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    user: {
      name: "Michael O'Brien",
      role: "Cozy single room...",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
    duration: "11 months",
    time: "5 hours ago",
    status: "pending",
  },
  {
    id: 3,
    user: {
      name: "Emma Walsh",
      role: "Cozy single room...",
      avatar: "", // for fallback
    },
    duration: "11 months",
    time: "5 hours ago",
    status: "pending",
  },
  {
    id: 4,
    user: {
      name: "John Doe",
      role: "Cozy mingle room...",
      avatar: "", // for fallback
    },
    duration: "11 months",
    time: "5 hours ago",
    status: "pending",
  },
];
