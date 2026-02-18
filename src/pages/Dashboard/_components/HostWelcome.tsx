import { BadgeCheck } from "lucide-react";

const HostWelcome = () => {
  return (
    <div className="bg-[#EDEDED] p-6 sm:p-8 md:p-10 lg:p-12 rounded-[24px] flex flex-col sm:flex-row justify-between items-center gap-6 mb-10 overflow-hidden">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-[32px] font-semibold text-black mb-2 leading-tight">
          Welcome back, Smith!
        </h1>
        <p className="text-secondary-foreground font-medium text-base sm:text-lg">
          Here's what's happening with your listings today...
        </p>
      </div>

      <div className="bg-[#FFF6F0] px-6 py-3 rounded-[18px] flex items-center justify-center gap-2 w-fit mx-auto sm:mx-0">
        <span className="text-black font-bold text-lg">Verified Host</span>
        <BadgeCheck className="w-6 h-6 fill-[#0095F6] text-white" />
      </div>
    </div>
  );
};

export default HostWelcome;
