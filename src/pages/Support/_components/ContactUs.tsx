import { useState } from "react";
import { ChevronDown } from "lucide-react";

const supportOptions = [
    "General Inquiry",
    "Booking Issue",
    "Account Verification",
    "Listing Help",
    "Payment Question",
    "Report a Problem",
    "Other",
];

export default function ContactUs() {
    const [selectedOption, setSelectedOption] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <section className="py-[120px] px-6 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className=" rounded-[16px] px-8 md:px-16 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Title */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                                Contact Support
                            </h2>
                            <p className="text-secondary-foreground text-base leading-relaxed max-w-sm">
                                Our team typically responds within 24 hours. We're here to help
                                make your warmwelcome experience as smooth as possible.
                            </p>
                        </div>

                        {/* Right Side - Form */}
                        <div>
                            <p className="text-gray-500 text-lg mb-4">
                                What can we help you with today?
                            </p>

                            {/* Dropdown */}
                            <div className="relative mb-6">
                                <button
                                    type="button"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-left text-base transition-all duration-200 focus:outline-none focus:border-[#F97316] cursor-pointer"
                                >
                                    <span className={selectedOption ? "text-gray-900" : "text-gray-400"}>
                                        {selectedOption || "select an option"}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                                        {supportOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedOption(option);
                                                    setDropdownOpen(false);
                                                }}
                                                className="w-full text-left px-5 py-3 text-base text-gray-700 hover:bg-[#FFF5EE] hover:text-[#F97316] transition-colors duration-150 cursor-pointer"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Form Fields */}
                            <div className="border border-gray-200 rounded-2xl p-6 space-y-5 bg-white">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors duration-200"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors duration-200"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="What can we help you with?"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors duration-200"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Please describe your question or issue in detail..."
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#F97316] transition-colors duration-200 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="w-full bg-[#F97316] text-white font-semibold text-base py-3.5 rounded-xl hover:bg-[#ea580c] transition-colors duration-200 cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
