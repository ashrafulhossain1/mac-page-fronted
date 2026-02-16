import QuickAction from "./_components/QuickAction";
import HostWelcome from "./_components/HostWelcome";
import StatCards from "./_components/StatCards";
import MyListingDashboard from "./_components/MyListingDashboard";
import RecentRequestsDashboard from "./_components/RecentRequestsDashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans pb-20">
      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8">
        <HostWelcome />
        <StatCards />

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Quick Actions</h2>
        <QuickAction />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          <MyListingDashboard />
          <RecentRequestsDashboard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
