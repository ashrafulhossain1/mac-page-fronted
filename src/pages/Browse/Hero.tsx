
import bannerImg from "@/assets/home/banner-browse.jpg";
import SearchCard from "../Home/_components/SearchCard";

export default function Hero() {
    return (
        <section className="max-w-[1280px] mx-auto relative h-[350px] w-full mt-6">
            {/* Background Container */}
            <div className="absolute inset-0 w-full h-full rounded-[32px] overflow-hidden">
                <img
                    src={bannerImg}
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <SearchCard />
        </section>
    );
}