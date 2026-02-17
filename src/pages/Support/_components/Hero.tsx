import supportHostBg from "@/assets/support/support.jpg";
import supportGuestBg from "@/assets/support/support-guest.jpg";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

function Hero() {
  const role = useSelector((state: RootState) => state.userRole.role);
  const isHost = role === "host";

  const bgImage = isHost ? supportHostBg : supportGuestBg;
  const subtitle = isHost
    ? "Whether you're opening your doors to guests or managing your listings, get answers, support and guidance anytime you need."
    : "Whether you're looking for your new home or opening your doors to guests, get answers, support and guidance anytime you need.";

  return (
    <section
      className="
      max-w-7xl mx-auto
        relative 
        flex 
        flex-col 
        justify-center 
        items-center 
        text-center
        px-8 
        md:px-16 
        h-[350px] 
        rounded-[30px] 
        overflow-hidden 
        m-4 
        bg-center 
        bg-cover 
        bg-no-repeat
      "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bgImage})`,
      }}
    >
      <div className="max-w-3xl space-y-4">
        <h1 className="text-white font-bold text-[36px] md:text-[56px] leading-[1.1]">
          We're Here to Help
        </h1>

        <p className="text-white/90 font-medium text-[16px] md:text-[20px] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default Hero;
