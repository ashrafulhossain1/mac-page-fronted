import { useDispatch, useSelector } from "react-redux";
import { setRole } from "@/store/userRoleSlice";
import type { UserRole } from "@/store/userRoleSlice";
import type { RootState } from "@/store";

const roles: { value: UserRole; label: string }[] = [
    { value: "default", label: "Not Sign" },
    { value: "guest", label: "Guest" },
    { value: "host", label: "Host" },
];

export default function RoleToggle() {
    const dispatch = useDispatch();
    const currentRole = useSelector((state: RootState) => state.userRole.role);

    return (
        <div className="flex items-center gap-3 mt-6 md:mt-0">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                Dev Mode
            </span>
            <div className="flex items-center bg-[#1a1a1a] rounded-full p-1 border border-gray-700">
                {roles.map((r) => (
                    <button
                        key={r.value}
                        onClick={() => dispatch(setRole(r.value))}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${currentRole === r.value
                            ? "bg-[#F97316] text-white shadow-lg shadow-orange-500/25"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {r.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
