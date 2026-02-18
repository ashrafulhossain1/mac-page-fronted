import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Button } from "../ui/button";
import useModal from "../Modal/useModal";
import { Bell, Menu, X } from "lucide-react";
import UserNav from "./_components/UserNav";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function Header() {
  const { open } = useModal();
  const role = useSelector((state: RootState) => state.userRole.role);
  const isUser = role !== "default";
  const isHost = role === "host";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const openModal = (type: string) => {
    setMobileMenuOpen(false);
    open([
      {
        modalId: "modal",
        openId: "authentication",
      },
      {
        modalId: "tab",
        openId: "login",
      },
      {
        modalId: "authType",
        openId: type,
      },
    ]);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    isHost
      ? { name: "Dashboard", path: "/dashboard" }
      : { name: "Browse", path: "/browse" },
    { name: "Our Story", path: "/our-story" },
    { name: "How it works", path: "/#how-it-works" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="w-full bg-white border-gray-100 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:py-6">
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/" className="cursor-pointer">
            <h1 className="text-[22px] lg:text-[24px] xl:text-[26px] font-bold tracking-tight leading-tight">
              <span className="text-primary">Warm</span>
              <br className="hidden md:block lg:hidden" />
              <span className="md:inline lg:hidden"> </span>
              <span className="text-primary-foreground">Welcome</span>
            </h1>
          </Link>
        </div>

        {/* Center - Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[14px] lg:text-[16px] xl:text-[18px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-secondary-foreground hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right - Desktop Buttons / User Profile + Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:gap-4">
          {isUser ? (
            <>
              {/* Notification Bell */}
              <div className="relative cursor-pointer">
                <Bell className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700" />
                <span className="absolute top-0 right-0 h-2 w-2 lg:h-2.5 lg:w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
              <UserNav />
            </>
          ) : (
            <>
              <Button
                variant="login"
                className="hidden md:inline-flex text-[14px] lg:text-[16px] xl:text-[18px] font-semibold rounded-[16px] px-3 lg:px-4 py-2 lg:py-3"
                onClick={() => openModal("normal")}
              >
                Login
              </Button>
              <Button
                variant="host"
                className="hidden md:inline-flex text-[14px] lg:text-[16px] xl:text-[18px] font-semibold rounded-[16px] px-3 lg:px-4 py-2 lg:py-3"
                onClick={() => openModal("host")}
              >
                Become a Host{" "}
                <span className="hidden xl:inline-block ml-1">Partner</span>
              </Button>
            </>
          )}

          {/* Hamburger Button - Mobile Only */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <Menu className="h-6 w-6 text-gray-800" />
            </span>
            <span
              className={`absolute transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
            >
              <X className="h-6 w-6 text-gray-800" />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel - slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl z-50 md:hidden transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-tl-2xl rounded-bl-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end px-5 pt-5">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>

          <div className="px-5 pb-6 flex flex-col gap-5 overflow-y-auto flex-1">
            {/* Auth Buttons at top (only when not logged in) */}
            {!isUser && (
              <div
                className="flex flex-col gap-3"
                style={{
                  transform: mobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transition: "all 0.3s ease 100ms",
                }}
              >
                <Button
                  variant="login"
                  className="w-full text-[16px] font-semibold rounded-[16px] py-3"
                  onClick={() => openModal("normal")}
                >
                  Login
                </Button>
                <Button
                  variant="host"
                  className="w-full text-[16px] font-semibold rounded-[16px] py-3 h-[56px]"
                  onClick={() => openModal("host")}
                >
                  Become a Host Partner
                </Button>
              </div>
            )}

            {/* Divider */}
            {!isUser && <div className="border-t border-gray-100" />}

            {/* Nav Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[17px] font-semibold px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-secondary-foreground hover:text-primary hover:bg-gray-50"
                    }`
                  }
                  style={{
                    transform: mobileMenuOpen
                      ? "translateX(0)"
                      : "translateX(20px)",
                    opacity: mobileMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease ${
                      mobileMenuOpen ? (index + 2) * 50 : 0
                    }ms`,
                  }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
