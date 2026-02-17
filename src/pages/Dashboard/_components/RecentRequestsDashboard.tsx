import { recentRequests } from '@/data/dashboard'
import RequestItem from './RequestItem'
import { Link } from 'react-router'

function RecentRequestsDashboard() {
    return (
        <div className="bg-gray-50 p-6  rounded-[32px] border border-gray-100 shadow-sm h-fit">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-[26px] font-bold text-gray-900">Recent Requests</h2>
                <span className="bg-[#FFF6F0] text-[#F97316] px-4 py-1.5 rounded-full text-sm font-bold">
                    4 pending
                </span>
            </div>

            <div className="space-y-[14px]">
                {recentRequests.slice(0, 3).map((request) => (
                    <RequestItem key={request.id} {...request} />
                ))}
            </div>

            <Link
                to="/dashboard/all-requests"
                className="block w-full text-center py-4 text-gray-900 font-bold text-lg hover:text-[#F97316] transition-colors mt-6"
            >
                View All Requests
            </Link>
        </div>
    )
}

export default RecentRequestsDashboard;