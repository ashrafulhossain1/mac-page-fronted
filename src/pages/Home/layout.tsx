import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modals from "@/components/Modal";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header></Header>
      <Modals />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
