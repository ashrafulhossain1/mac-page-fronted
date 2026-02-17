import ListingItem from "../_components/ListingItem";
import { listings } from "@/data/dashboard";
import { Link } from "react-router";

const ManageRooms = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Select 1 room for manage</h1>
      </div>

      <div className="grid gap-6">
        {listings.map((listing) => (
          <Link
            key={listing.id}
            to="/dashboard/edit-room/1"
            className="block group"
          >
            <ListingItem
              {...listing}
              showActions={false}
              className="transition-all duration-300 group-hover:border-[#09DE7B] group-hover:bg-[rgba(9,222,123,0.06)] group-hover:shadow-[4px_4px_8px_0_rgba(9,222,123,0.25)]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ManageRooms;
