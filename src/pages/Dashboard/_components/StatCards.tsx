import { dashboardStats } from "@/data/dashboard";
import { Home, Calendar, Clock } from "lucide-react";

// Map string keys to Lucide components
const iconMap: Record<string, React.FC<{ className?: string }>> = {
    home: Home,
    calendar: Calendar,
    clock: Clock,
};

const StatCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardStats.map((stat, idx) => {
                const Icon = iconMap[stat.icon] || Home;

                return (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 flex flex-col justify-between min-h-[160px]"
                    >
                        <div className={`${stat.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                            <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                        </div>
                        <div>
                            <p className="text-gray-600 text-base font-medium mb-1">
                                {stat.label}
                            </p>
                            <h3 className="text-[38px] font-bold text-primary-foreground mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-lg text-secondary-foreground">{stat.subValue}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatCards;
