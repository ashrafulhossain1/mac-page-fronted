import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modals from "@/components/Modal";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export default function HomeLayout() {
  return (
    <div>
      <Toaster position="top-right" />

      <Header />
      <Modals />

      <Outlet />
      <Footer />
    </div>
  );
}
