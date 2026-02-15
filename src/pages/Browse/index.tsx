

import { useState } from "react";
import RoomCard from "../Home/_components/RoomCard";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowLeft, ArrowRight } from "lucide-react";

export default function Browse() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calculate pagination values
    const totalPages = Math.ceil(rooms.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRooms = rooms.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 350, behavior: 'smooth' }); // Scroll to top of list
        }
    };

    return (
        <div className="pb-20">


            {/* Main Content */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-[100px]"> {/* Added top margin to clear SearchCard overlap if any, or just spacing */}

                {/* Filter Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="text-xl md:text-2xl font-bold text-black">
                        <span className="font-extrabold text-black">09</span> <span className="text-gray-600 font-normal">rooms available</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-2.5 h-auto text-sm font-medium flex items-center gap-2"
                        >
                            Advance Filter
                            <SlidersHorizontal size={16} className="rotate-90" />
                        </Button>

                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-2.5 h-auto text-sm font-medium border-gray-300 text-gray-500 hover:text-black hover:border-black bg-transparent"
                        >
                            Clear all filters
                        </Button>
                    </div>
                </div>


                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentRooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            image={room.image}
                            title={room.title}
                            price={room.price}
                            location={room.location}
                            description={room.description}
                            rating={room.rating}
                            reviews={room.reviews}
                        />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-12 mb-8">
                    {/* Dot Indicators */}
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === index + 1 ? "bg-[#F97316] w-6" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons section */}
                    <div className="flex gap-3">
                        {/* Previous Button */}
                        <Button
                            variant="outline"
                            className="rounded-full px-6 py-2.5 h-auto text-sm font-medium border-gray-300 text-gray-500 hover:text-black hover:border-black bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>

                        {/* Next Button */}
                        <Button
                            className="bg-[#F97316] text-white hover:bg-[#e06714] rounded-full px-6 py-2.5 h-auto text-sm font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
