import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface BlogSortProps {
    sortOrder: "newest" | "oldest";
    onSortChange: (order: "newest" | "oldest") => void;
}

export default function BlogSort({ sortOrder, onSortChange }: BlogSortProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSort = (order: "newest" | "oldest") => {
        onSortChange(order);
        setIsOpen(false);
    };

    return (
        <div className="flex justify-end items-center gap-4 mb-8">
            {/* Label */}
            <span className="text-gray-600 text-lg font-medium">Sort by</span>

            <div className="relative" ref={dropdownRef}>
                {/* Trigger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between gap-8 min-w-[180px] bg-[#F3F4F6] hover:bg-gray-200 transition-colors rounded-[16px] px-6 py-3 text-[#374151] cursor-pointer w-[210px]"
                >
                    <span className="text-lg font-normal">
                        {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                    </span>
                    <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden py-2">
                        <button
                            onClick={() => handleSort("newest")}
                            className={`block w-full text-left px-6 py-3 text-base transition-colors hover:bg-gray-50 ${sortOrder === "newest" ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                        >
                            Newest First
                        </button>
                        <button
                            onClick={() => handleSort("oldest")}
                            className={`block w-full text-left px-6 py-3 text-base transition-colors hover:bg-gray-50 ${sortOrder === "oldest" ? "text-blue-600 font-semibold" : "text-gray-700"
                                }`}
                        >
                            Oldest First
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}