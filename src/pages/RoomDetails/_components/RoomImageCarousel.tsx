import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface RoomImageCarouselProps {
  images: string[];
  title?: string;
}

export default function RoomImageCarousel({
  images,
  title = "Room",
}: RoomImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full relative"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={image}
                  alt={`${title} - Photo ${index + 1}`}
                  className="w-full h-[350px] md:h-[450px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Button Container for bottom centering */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
          <CarouselPrevious
            className="
      static translate-y-0
      flex justify-center items-center gap-[10px]
      w-[52px] h-[52px]
      px-[16px] py-[13px]
      rounded-[16px]
      border border-white/60
      bg-white/20
      backdrop-blur-[4px]
      flex-shrink-0
      text-white
      hover:bg-white/40
      transition-all
    "
          />

          <CarouselNext
            className="
      static translate-y-0
      flex justify-center items-center gap-[10px]
      w-[52px] h-[52px]
      px-[16px] py-[13px]
      rounded-[16px]
      border border-white/60
      bg-white/20
      backdrop-blur-[4px]
      flex-shrink-0
      text-white
      hover:bg-white/40
      transition-all
    "
          />
        </div>
      </Carousel>
      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer",
              current === index
                ? "border-[#F97316] opacity-100 ring-1 ring-[#F97316]/30"
                : "border-transparent opacity-60 hover:opacity-90",
            )}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-[80px] h-[60px] md:w-[100px] md:h-[75px] object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
