import { NavLink, Link } from "react-router";
import { Button } from "../ui/button";
import useModal from "../Modal/useModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  ChevronDown,
  LogOut,
  Mail,
  User,
} from "lucide-react";

export default function Header() {
  const { open } = useModal();
  const isUser = true; // Toggle this to switch between guest and user view

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
    { name: "Browse", path: "/Browse" },
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

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer outline-none">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-bold text-gray-900 leading-none">
                        Mr James
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Guest Account</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2 rounded-[22px] p-2 space-y-1">
                  <DropdownMenuItem
                    className="cursor-pointer rounded-lg py-2.5 font-medium text-gray-600 focus:text-gray-900"
                    onClick={() => open([{ modalId: "modal", openId: "profile-settings" }])}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 font-medium text-gray-600 focus:text-gray-900">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Message's</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 font-medium text-red-500 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
