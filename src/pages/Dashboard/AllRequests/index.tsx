import RequestListItem from "../_components/RequestListItem";
import { recentRequests } from "@/data/dashboard";

const AllRequests = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[26px] font-bold text-gray-900">All Requests</h1>
        <span className="bg-[#FFF6F0] text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold">
          4 pending
        </span>
      </div>

      <div className="space-y-6">
        {recentRequests.map((request, idx) => (
          <RequestListItem key={idx} {...request} />
        ))}
      </div>
    </div>
  );
};

export default AllRequests;
