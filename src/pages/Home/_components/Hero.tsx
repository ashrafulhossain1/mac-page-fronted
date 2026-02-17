import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router";
import bannerImg from "@/assets/home/banner.jpg";
import SearchCard from "./SearchCard";

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto relative h-[800px] w-full">
      {/* Background Container with Rounded Corners and Overflow Hidden */}
      <div className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden">
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f9741528]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center pt-32 px-6 md:px-16 max-w-[1000px] mx-auto text-center">
        <h1 className="text-3xl md:text-[70px] font-bold text-white leading-[1.1] md:leading-[78px] drop-shadow-md">
          Affordable Mid-Term Room Rentals in Ireland You Can Trust
        </h1>

        <h3 className="mt-6 text-lg md:text-[26px] font-medium text-white leading-relaxed md:leading-[33.8px] max-w-4xl drop-shadow-sm">
          Warmwelcome connects Guests with verified Home Partners for safe,
          affordable, and respectful living across Ireland.
        </h3>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-12">
          <Button
            variant="host"
            className="px-6 py-3 text-[18px] font-semibold rounded-[16px] flex items-center gap-2 bg-[#8A9A5B]"
            asChild
          >
            <Link to="#">
              <Search className="w-5 h-5" />
              I’m a Guest → Find a Room
            </Link>
          </Button>

          <Button
            variant="host"
            className="px-6 py-3 text-[18px] font-semibold rounded-[16px]"
            asChild
          >
            <Link to="#">Become a Host Partner</Link>
          </Button>
        </div>
      </div>

      <SearchCard />
    </section>
  );
};

export default Hero;
