import { PlusCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

const QuickAction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Create New Listing */}
      <Link to="/dashboard/add-room" className="bg-primary/95 p-8 rounded-[16px] flex items-center gap-6 cursor-pointer hover:bg-primary transition-all group">
        <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
          <PlusCircle className="w-8 h-8 text-white" />
        </div>
        <div className="text-white">
          <h4 className="text-lg font-bold mb-1">Create new listing</h4>
          <p className="text-white/80 text-sm">List a new room</p>
        </div>
      </Link>

      {/* Manage Listing */}
      <Link to="/dashboard/manage-rooms" className="block">
        <div className="bg-white border border-gray-100 p-8 rounded-[16px] shadow-sm flex items-center gap-6 hover:shadow-md transition-shadow cursor-pointer h-full">
          <div className="w-16 h-16 rounded-[24px] bg-[#EEF2FF] flex items-center justify-center text-[#4F46E5]">
            <LayoutGrid className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Manage Listing
            </h3>
            <p className="text-gray-400 text-sm">Update room info & availability</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default QuickAction;
