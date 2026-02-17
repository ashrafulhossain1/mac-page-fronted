import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
function BookingStatusWidget() {
    return (
        < div className="bg-white border border-gray-100 p-6 pb-2 rounded-[24px] shadow-sm mb-12 w-full max-w-[360px]" >
            <div className="flex items-center gap-4 mb-5">
                <Avatar className="w-12 h-12 border border-gray-200">
                    <AvatarImage src="https://i.pravatar.cc/150?u=sarah" />
                    <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="text-sm font-bold text-gray-900">Sarah Murphy</h4>
                </div>
            </div>
            <Separator className="mb-5" />
            <div className="space-y-4">
                <div className="flex justify-between text-base text-gray-500 font-medium">
                    <span>Start Date:</span>
                    <span className="text-gray-900 font-medium">28-09-2024</span>
                </div>
                <div className="flex justify-between text-base text-gray-500 font-medium">
                    <span>End Date:</span>
                    <span className="text-gray-900 font-medium">29-01-2025</span>
                </div>
            </div>

            <Button className="w-full h-10 my-4 bg-red-50 text-red-500 hover:bg-red-100 border-none rounded-[10px] font-bold text-base">
                Cancel Booking
            </Button>
        </div >
    )
}

export default BookingStatusWidget