import { useState } from "react";
import { motion } from "framer-motion";
import RoomCard from "../../Home/_components/RoomCard";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowLeft, ArrowRight } from "lucide-react";
import AdvanceFilters from "@/pages/Home/_components/AdvanceFilters";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  sequentialStaggerVariants,
  fastCardVariants,
  decentHover,
} from "@/lib/animations";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Rooms() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const isMobile = useIsMobile();

  const totalPages = Math.ceil(rooms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRooms = rooms.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-[80px]">
      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
        className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
      >
        <div className="text-xl md:text-2xl font-bold text-black text-center md:text-left">
          <span className="font-extrabold text-black">09</span>{" "}
          <span className="text-gray-600 font-normal">rooms available</span>
        </div>

        <div className="flex items-center gap-3">
          {isMobile ? (
            <Drawer open={openFilter} onOpenChange={setOpenFilter}>
              <DrawerTrigger asChild>
                <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-3 md:px-6 py-2.5 h-auto text-xs sm:text-sm font-medium flex items-center gap-2">
                  Advance Filter
                  <SlidersHorizontal size={16} className="rotate-90" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-0 border-none bg-transparent">
                <div className="flex justify-center w-full">
                  <AdvanceFilters onClose={() => setOpenFilter(false)} />
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Popover open={openFilter} onOpenChange={setOpenFilter}>
              <PopoverTrigger asChild>
                <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-3 md:px-6 py-2.5 h-auto text-xs sm:text-sm font-medium flex items-center gap-2">
                  Advance Filter
                  <SlidersHorizontal size={16} className="rotate-90" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 border-none shadow-none bg-transparent"
                align="end"
              >
                <AdvanceFilters onClose={() => setOpenFilter(false)} />
              </PopoverContent>
            </Popover>
          )}

          <Button
            variant="outline"
            className="rounded-full px-3 md:px-6 py-2.5 h-auto text-xs sm:text-sm font-medium border-gray-300 text-gray-500 hover:text-black hover:border-black bg-transparent"
          >
            Clear all filters
          </Button>
        </div>
      </motion.div>

      {/* Rooms Grid — one by one with shared framer-motion variants */}
      <motion.div
        key={currentPage} // re-triggers animation on page change
        variants={sequentialStaggerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
      >
        {currentRooms.map((room) => (
          <motion.div
            key={room.id}
            variants={fastCardVariants}
            whileHover={decentHover}
            className="w-full"
          >
            <RoomCard
              id={room.id}
              image={room.image}
              title={room.title}
              price={room.price}
              location={room.location}
              description={room.description}
              rating={room.rating}
              reviews={room.reviews}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="relative flex items-center justify-center mt-12 mb-8">
        {/* Dot Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentPage === index + 1 ? "bg-[#F97316] w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-0 flex items-center gap-4">
          <button
            className="rounded-[16px] px-6 py-2.5 text-base md:text-lg border-2 border-gray-300 text-gray-600 bg-white flex items-center justify-center transition-all duration-300 ease-in-out hover:text-black hover:border-black hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 shadow-sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </button>

          <button
            className="bg-[#F97316] text-base md:text-lg text-white rounded-[16px] px-6 py-2.5 flex items-center gap-1 transition-all duration-300 ease-in-out hover:bg-[#ea580c] hover:scale-105 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
