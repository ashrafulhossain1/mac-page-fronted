export interface DashboardStat {
    label: string;
    value: string;
    subValue: string;
    icon: string;
    iconBg: string;
    iconColor: string;
}

export interface Listing {
    id: number;
    title: string;
    location: string;
    price: number;
    views: number;
    bookings: number;
    status: string;
    image: string;
}

export interface RequestUser {
    name: string;
    role: string;
    avatar: string;
}

export interface RecentRequest {
    id: number;
    user: RequestUser;
    duration: string;
    time: string;
    status: string;
}
