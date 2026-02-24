import React from "react";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import RoleToggle from "./RoleToggle";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { headingViewport, innerItemVariants } from "@/lib/animations";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
          >
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-bold mb-2">
                Warm <span className="text-[#F97316]">Welcome</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
              Trusted Mid-Term Room Rentals in Ireland
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <motion.h3
              variants={innerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={headingViewport}
              className="text-xl font-semibold mb-6"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-4 text-gray-300">
              {[
                "Browse",
                "List Room",
                "Our Story",
                "Host Blog",
                "Guest Blog",
              ].map((text, i) => (
                <motion.li
                  key={text}
                  variants={innerItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={
                      text === "Our Story"
                        ? "/our-story"
                        : text === "List Room"
                          ? "/dashboard/all-listings"
                          : text === "Host Blog"
                            ? "/host-blog"
                            : text === "Guest Blog"
                              ? "/guest-blog"
                              : "/browse"
                    }
                    className="hover:text-white transition"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <motion.h3
              variants={innerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={headingViewport}
              className="text-xl font-semibold mb-6"
            >
              Connect
            </motion.h3>
            <ul className="space-y-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "X" },
              ].map((social, i) => (
                <motion.li
                  key={social.label}
                  variants={innerItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="bg-[#F97316] p-2 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ea580c]">
                    <social.icon size={20} className="text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={innerItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
          >
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
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
        >
          <div className="flex items-center gap-8">
            <p>hello@warmwelcome.ie</p>
            <Link
              to="/support#contact-us"
              className="text-[#F97316] hover:text-[#ea580c] font-medium transition"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/term-condition" className="hover:text-white transition">
              Terms & conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <RoleToggle />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
