import FAQ from "./FAQ";
import FeaturedRooms from "./FeaturedRooms";
import { GuestsSay } from "./GuestsSay";
import Hero from "./Hero";
import HowToWorks from "./HowToWorks";
import Partners from "./Partners";
import WhyWarmWelcome from "./WhyWarmWelcome";

const HomeWrapper = () => {
  return (
    <>
      <div>
        <Hero />
        <Partners />
        <FeaturedRooms></FeaturedRooms>
        <WhyWarmWelcome></WhyWarmWelcome>
        <FAQ></FAQ>
        <HowToWorks></HowToWorks>
        <GuestsSay></GuestsSay>
      </div>
    </>
  );
};

export default HomeWrapper;
