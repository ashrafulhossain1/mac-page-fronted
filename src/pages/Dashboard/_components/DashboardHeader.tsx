import { Link } from "react-router";
import UserNav from "@/components/Header/_components/UserNav";
import NotificationDropdown from "./NotificationDropdown";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white border-b border-gray-100 sticky top-0 z-50 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Link to="/">
          <span className="text-[#F97316] font-bold text-2xl">Warm</span>
          <span className="font-bold text-2xl text-primary-foreground">
            Welcome
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <NotificationDropdown />

        <div className="pl-3 sm:pl-4 border-l border-gray-100">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
