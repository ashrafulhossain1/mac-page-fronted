import React from "react";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import RoleToggle from "./RoleToggle";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 font-sans ">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Warm <span className="text-[#F97316]">Welcome</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
              Trusted Mid-Term Room Rentals in Ireland
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link to="/browse" className="hover:text-white transition">
                  Browse
                </Link>
              </li>
              <li>
                <Link to="/browse" className="hover:text-white transition">
                  List Room
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Host Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Guest Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-[#F97316] p-2 rounded-full">
                  <Instagram size={20} className="text-white" />
                </div>
                <span className="text-gray-300">Instagram</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#F97316] p-2 rounded-full">
                  <Facebook size={20} className="text-white" />
                </div>
                <span className="text-gray-300">Facebook</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#F97316] p-2 rounded-full">
                  <Twitter size={20} className="text-white" />
                </div>
                <span className="text-gray-300">X</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news and special offers
            </p>
            <div className="relative max-w-[300px]">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#333333] text-white py-3 px-4 rounded-full outline-none border border-transparent focus:border-[#F97316] transition"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#F97316] px-4 rounded-full hover:bg-[#ea580c] transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>hello@warmwelcome.ie</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/term-condition" className="hover:text-white transition">
              Terms & conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
          <RoleToggle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
