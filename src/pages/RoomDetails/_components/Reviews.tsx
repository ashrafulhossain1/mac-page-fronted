import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import avatarImg from "@/assets/home/Ellipse 1.png";
import { ReviewCard } from "@/components/ReviewCard";

const reviewsData = [
    {
        id: 1,
        rating: 5,
        text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
        author: "Atif Islam",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 2,
        rating: 5,
        text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
        author: "Sanjay M.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 3,
        rating: 5,
        text: "A cozy room in a quiet residential area. 10 mins walk to city center, Includes high-speed WiFi and a study desk...",
        author: "Emma L.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 4,
        rating: 4,
        text: "Great location and the host was very responsive. The room was clean and well-maintained. Would definitely recommend to anyone looking for a stay.",
        author: "David K.",
        role: "Professional in Dublin",
        avatar: avatarImg,
    },
    {
        id: 5,
        rating: 5,
        text: "Excellent stay! Everything was exactly as described. The neighbourhood is safe and quiet, perfect for studying and relaxing.",
        author: "Maria S.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 6,
        rating: 5,
        text: "Very comfortable room with all the amenities I needed. The host made me feel very welcome from day one. Highly recommend!",
        author: "James O.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 7,
        rating: 5,
        text: "Perfect for my internship stay. Close to public transport, clean shared spaces, and a friendly host. Would book again without hesitation.",
        author: "Sophie R.",
        role: "Intern in Dublin",
        avatar: avatarImg,
    },
    {
        id: 8,
        rating: 4,
        text: "Nice and affordable room. The kitchen was well-equipped and the area felt very safe. Only minor issue was street noise at night.",
        author: "Liam T.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
    {
        id: 9,
        rating: 5,
        text: "Stayed here for 3 months and it felt like home. The host is super accommodating and the room is exactly as shown in the photos.",
        author: "Priya N.",
        role: "Student in Ireland",
        avatar: avatarImg,
    },
];

export default function Reviews() {
    const [page, setPage] = useState(0);
    const perPage = 3;
    const totalPages = Math.ceil(reviewsData.length / perPage);
    const currentReviews = reviewsData.slice(
        page * perPage,
        page * perPage + perPage
    );

    return (
        <section className="w-full mt-16 mb-8">
            <div className="w-full">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Reviews</h2>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {currentReviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            rating={review.rating}
                            text={review.text}
                            author={review.author}
                            role={review.role}
                            avatar={review.avatar}
                        />
                    ))}
                </div>

                {/* Pagination Arrows */}
                <div className="flex justify-center items-center gap-3 mt-8">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="rounded-full w-10 h-10 border-gray-300"
                    >
                        <ArrowLeft size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                        className="rounded-full w-10 h-10 border-gray-300"
                    >
                        <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
