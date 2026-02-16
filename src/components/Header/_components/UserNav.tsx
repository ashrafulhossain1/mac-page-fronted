


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ChevronDown,
    LogOut,
    Mail,
    User,
} from "lucide-react";
import useModal from "@/components/Modal/useModal";
function UserNav() {
    const { open } = useModal();
    return (

        < DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer outline-none">
                    <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="hidden md:block text-left">
                        <p className="text-sm font-bold text-gray-900 leading-none">
                            Mr James
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Guest Account</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-[22px] p-2 space-y-1">
                <DropdownMenuItem
                    className="cursor-pointer rounded-lg py-2.5 font-medium text-gray-600 focus:text-gray-900"
                    onClick={() => open([{ modalId: "modal", openId: "profile-settings" }])}
                >
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="cursor-pointer rounded-lg py-2.5 font-medium text-gray-600 focus:text-gray-900"
                    onClick={() => open([{ modalId: "modal", openId: "messages" }])}
                >
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Message's</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 font-medium text-red-500 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default UserNav