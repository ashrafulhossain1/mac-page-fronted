import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BookingCardProps {
    pricePerWeek: number;
}

export default function BookingCard({ pricePerWeek }: BookingCardProps) {
    const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
    const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
    const [checkInOpen, setCheckInOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);

    // Calculate days between dates
    const days =
        checkIn && checkOut
            ? Math.max(
                1,
                Math.ceil(
                    (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24),
                ),
            )
            : 0;

    // Price breakdown
    const pricePerDay = pricePerWeek / 7;
    const subtotal = Math.round(pricePerDay * days);
    const platformFee = 2 * days; // €2/day
    const bookingFee = days > 0 ? 100 : 0;
    const total = subtotal + platformFee + bookingFee;

    const today = new Date();

    const handleBookNow = () => {
        const bookingData = {
            checkIn: checkIn ? format(checkIn, "dd/MM/yyyy") : null,
            checkOut: checkOut ? format(checkOut, "dd/MM/yyyy") : null,
            pricePerWeek,
            days,
            subtotal,
            platformFee,
            bookingFee,
            total,
        };
        console.log("Booking Data:", bookingData);
    };



    return (
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-6">Book This Room</h3>

            {/* Check-in Date */}
            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-800 mb-1.5 block">
                    Check-in Date
                </label>
                <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                    <PopoverTrigger asChild>
                        <button
                            className={cn(
                                "flex items-center justify-between w-full h-12 rounded-xl bg-gray-50 border border-gray-200 px-3 text-sm text-left transition-colors hover:bg-gray-100",
                                checkIn ? "text-gray-700" : "text-gray-400",
                            )}
                        >
                            <span>
                                {checkIn ? format(checkIn, "dd/MM/yyyy") : "Select date"}
                            </span>
                            <CalendarDays size={18} className="text-gray-400" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={(date) => {
                                setCheckIn(date);
                                setCheckInOpen(false);
                            }}
                            disabled={(date) => date < today}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            {/* Check-out Date */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-gray-800 mb-1.5 block">
                    Check-out Date
                </label>
                <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                    <PopoverTrigger asChild>
                        <button
                            className={cn(
                                "flex items-center justify-between w-full h-12 rounded-xl bg-gray-50 border border-gray-200 px-3 text-sm text-left transition-colors hover:bg-gray-100",
                                checkOut ? "text-gray-700" : "text-gray-400",
                            )}
                        >
                            <span>
                                {checkOut ? format(checkOut, "dd/MM/yyyy") : "Select date"}
                            </span>
                            <CalendarDays size={18} className="text-gray-400" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={(date) => {
                                setCheckOut(date);
                                setCheckOutOpen(false);
                            }}
                            disabled={(date) =>
                                date < today || (checkIn ? date <= checkIn : false)
                            }
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            {/* Price Breakdown */}
            <div className="rounded-xl bg-[#FFF8F3] border border-orange-100 p-4 mb-6">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">
                        €{Math.round(pricePerDay)} × {days} days
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                        €{subtotal}
                    </span>
                </div>

                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">
                        Platform Service & Support Fee (€2/day)
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                        €{platformFee}
                    </span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">
                        Booking & Protection Fee
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                        €{bookingFee}
                    </span>
                </div>

                <Separator className="bg-orange-200/50 mb-4" />

                <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-[#F97316]">
                        €{total.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Book Now Button */}
            <Button
                onClick={handleBookNow}
                disabled={!checkIn || !checkOut}
                className="w-full h-12 rounded-xl bg-[#F97316] hover:bg-[#ea580c] text-white text-base font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Book Now
            </Button>
        </div>
    );
}
