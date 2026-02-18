import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modals from "@/components/Modal";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export default function HomeLayout() {
  return (
    <div>
      <Toaster position="top-right" />
      <ScrollToTop />
      <Header />
      <Modals />

      <Outlet />
      <Footer />
    </div>
  );
}
