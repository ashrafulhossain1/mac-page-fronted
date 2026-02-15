import FAQ from "./_components/FAQ";
import FeaturedRooms from "./_components/FeaturedRooms";
import { GuestsSay } from "./_components/GuestsSay";
import Hero from "./_components/Hero";
import HowToWorks from "./_components/HowToWorks";
import Partners from "./_components/Partners";
import WhyWarmWelcome from "./_components/WhyWarmWelcome";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <FeaturedRooms></FeaturedRooms>
      <WhyWarmWelcome></WhyWarmWelcome>
      <FAQ></FAQ>
      <HowToWorks></HowToWorks>
      <GuestsSay></GuestsSay>
    </div>
  );
}
