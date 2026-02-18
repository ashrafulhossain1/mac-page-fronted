import bannerImg from "@/assets/home/banner-browse.jpg";
import SearchCard from "../../Home/_components/SearchCard";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto mt-6 md:mb-44 px-2">
      {/* Background Container */}
      <div className="relative h-[200px]  md:h-[350px]  w-full rounded-[32px] overflow-hidden ">
        <img
          src={bannerImg}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* SearchCard Positioned Half Outside */}
      <div className="mt-10 md:absolute left-0 right-0  top-96  md:top-full md:-translate-y-1/2 z-30 px-4 flex justify-center">
        <SearchCard />
      </div>
    </section>
  );
}
