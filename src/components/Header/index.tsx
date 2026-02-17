import { NavLink, Link } from "react-router";
import { Button } from "../ui/button";
import useModal from "../Modal/useModal";
import {
  Bell,

} from "lucide-react";
import UserNav from "./_components/UserNav";

const host = true;

export default function Header() {
  const { open } = useModal();
  const isUser = false; // Toggle this to switch between guest and user view
  const isHost = true;

  const openModal = () => {
    open([
      {
        modalId: "modal",
        openId: "authentication",
      },
      {
        modalId: "tab",
        openId: "login",
      },
    ]);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    isHost
      ? { name: "Dashboard", path: "/dashboard" }
      : { name: "Browse", path: "/Browse" },
    { name: "Our Story", path: "/macbook-air" },
    { name: "How it works", path: "/macbook-pro" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="w-full bg-white  border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between  py-6">
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/" className="cursor-pointer">
            <h1 className="text-[26px] font-bold tracking-tight">
              <span className="text-primary text-[26px]">Warm</span>{" "}
              <span className="text-primary-foreground text-[26px]">
                Welcome
              </span>
            </h1>
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[18px] font-semibold  transition-all ${isActive
                  ? "text-primary"
                  : "text-secondary-foreground hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right - Buttons or User Profile */}
        <div className="flex items-center gap-6">
          {isUser ? (
            <>
              {/* Notification Bell */}
              <div className="relative cursor-pointer">
                <Bell className="h-6 w-6 text-gray-700" />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </div>

              <UserNav />
            </>
          ) : (
            <>
              <Button
                variant="login"
                className="hidden md:inline-flex text-[18px] font-semibold rounded-[16px]"
                onClick={openModal}
              >
                Login
              </Button>
              <Button
                variant="host"
                className="text-[18px] font-semibold rounded-[16px]"
                onClick={openModal}
              >
                Become a Host Partner
              </Button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu - Simple version */}
      <div className="md:hidden border-t border-gray-100 px-6 py-3">
        <div className="flex overflow-x-auto gap-2 no-scrollbar">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `whitespace-nowrap text-lg font-semibold  ${isActive
                  ? "text-primary"
                  : "text-secondary-foreground hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
