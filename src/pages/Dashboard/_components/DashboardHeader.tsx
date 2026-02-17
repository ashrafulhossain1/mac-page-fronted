import { Bell } from "lucide-react";
import { Link } from "react-router";
import UserNav from "@/components/Header/_components/UserNav";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white border-b border-gray-100 sticky top-0 z-50 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Link to="/dashboard">
          <span className="text-[#F97316] font-bold text-xl">Warm</span>
          <span className="font-bold text-xl text-black">Welcome</span>
        </Link>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="pl-3 sm:pl-4 border-l border-gray-100">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
