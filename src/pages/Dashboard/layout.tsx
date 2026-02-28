import Modals from "@/components/Modal";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Outlet } from "react-router";
import DashboardHeader from "./_components/DashboardHeader";
import Footer from "@/components/Footer";

export default function DashboardLayout() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <ScrollToTop />
      <DashboardHeader />
      <Modals />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
