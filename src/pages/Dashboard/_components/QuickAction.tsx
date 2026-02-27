import { PlusCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router";

const QuickAction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Create New Listing */}
      <Link
        to="/dashboard/add-room"
        className="bg-primary/95 h-[143px] p-4 md:p-6 rounded-[16px] flex flex-col gap-2 cursor-pointer hover:bg-primary transition-all group"
      >
        <span className="bg-white/20 w-[38px] h-[38px] flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110">
          <PlusCircle className="w-[18px] h-[18px] text-white" />
        </span>

        <div className="text-white">
          <h4 className="text-lg font-bold mb-1">Create new listing</h4>
          <p className="text-white/80 text-sm">List a new room</p>
        </div>
      </Link>
      {/* mamaged listing */}
      <Link
        to="/dashboard/manage-rooms"
        className="bg-white border border-gray-100 p-8  h-[143px] rounded-[16px] shadow-sm flex flex-col gap-6 cursor-pointer hover:shadow-md transition-all duration-300 group"
      >
        <span className="bg-[#EEF2FF]  w-[38px] h-[38px] flex items-center justify-center rounded-2xl text-[#4F46E5] transition-transform duration-300 group-hover:scale-110">
          <LayoutGrid className="w-[18px] h-[18px]" />
        </span>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            Manage Listing
          </h4>
          <p className="text-gray-400 text-sm">
            Update room info & availability
          </p>
        </div>
      </Link>
    </div>
  );
};

export default QuickAction;
