import Modals from "@/components/Modal";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Outlet } from "react-router";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <ScrollToTop />
      <DashboardHeader />
      <Modals />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
