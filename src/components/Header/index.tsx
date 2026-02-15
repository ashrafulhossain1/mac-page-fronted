import { NavLink, Link } from "react-router";
import { Button } from "../ui/button";
import useModal from "../Modal/useModal";

export default function Header() {
  const { open } = useModal();

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

        {/* Right - Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="login"
            className="hidden md:inline-flex px-6 py-3 text-[18px] font-semibold rounded-[16px]"
            onClick={openModal}
          >
            Login
          </Button>
          <Button
            variant="host"
            className="px-6 py-3 text-[18px] font-semibold rounded-[16px]"
            onClick={openModal}
          >
            Become a Host Partner
          </Button>
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
