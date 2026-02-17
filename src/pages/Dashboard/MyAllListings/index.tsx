import { useState } from "react";
import ListingItem from "../_components/ListingItem";
import { listings } from "@/data/dashboard";

type ListingStatus = "Active" | "Draft" | "Paused";

const MyAllListings = () => {
    const [activeTab, setActiveTab] = useState<ListingStatus>("Active");

    const filteredListings = listings.filter(l => l.status === activeTab);
    const getCount = (status: ListingStatus) => listings.filter(l => l.status === status).length;

    const tabs: ListingStatus[] = ["Active", "Draft", "Paused"];

    return (
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10 pb-32">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6">
                <h1 className="text-[26px] font-bold text-gray-900">My All Listings</h1>

                <div className="flex bg-[#F5F5F5] p-1.5 rounded-[16px] w-full sm:w-auto overflow-x-auto no-scrollbar">
                    {tabs.map((status) => (
                        <button
                            key={status}
                            onClick={() => setActiveTab(status)}
                            className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold rounded-[12px] whitespace-nowrap transition-all ${activeTab === status
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                                }`}
                        >
                            {status} ({getCount(status)})
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                {filteredListings.length > 0 ? (
                    filteredListings.map((listing) => (
                        <ListingItem key={listing.id} {...listing} />
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-[24px] border border-gray-100 shadow-sm">
                        <p className="text-gray-500">No {activeTab.toLowerCase()} listings found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAllListings;
