import { listings } from "@/data/dashboard";
import ListingItem from "./ListingItem";
import { Link } from "react-router";
import { useState } from "react";

type ListingStatus = "Active" | "Draft" | "Paused";

function MyListingDashboard() {
  const [activeTab, setActiveTab] = useState<ListingStatus>("Active");

  const filteredListings = listings.filter((l) => l.status === activeTab);
  const displayedListings = filteredListings.slice(0, 3);

  const getCount = (status: ListingStatus) =>
    listings.filter((l) => l.status === status).length;

  const tabs: ListingStatus[] = ["Active", "Draft", "Paused"];

  return (
    <div className="lg:col-span-2 bg-gray-50 p-3 sm:p-4 md:p-6 rounded-[30px] border border-gray-100 shadow-sm h-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 w-full">
        <h2 className="text-[26px] font-bold text-gray-900">My Listings</h2>
        <div className="flex bg-[#F5F5F5] p-1.5 rounded-[16px] w-full sm:w-auto overflow-x-auto no-scrollbar">
          {tabs.map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`flex-1 sm:flex-none px-6 py-2.5 text-sm font-bold rounded-[12px] whitespace-nowrap transition-all ${
                activeTab === status
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {status} ({getCount(status)})
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {displayedListings.length > 0 ? (
          displayedListings.map((listing) => (
            <ListingItem key={listing.id} {...listing} />
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No {activeTab.toLowerCase()} listings found.
          </div>
        )}
      </div>

      <Link
        to="/dashboard/all-listings"
        className="block w-full text-center py-6 text-gray-900 font-bold text-lg hover:text-orange-500 transition-colors mt-4"
      >
        View All Listing
      </Link>
    </div>
  );
}

export default MyListingDashboard;
