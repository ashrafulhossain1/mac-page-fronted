import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import useModal from "@/components/Modal/useModal";
import { useSearchParams } from "react-router";

export default function BookingModal() {
    const { close } = useModal();
    const [searchParams] = useSearchParams();

    // Get params from URL
    const checkInStr = searchParams.get("checkIn");
    const checkOutStr = searchParams.get("checkOut");
    const pricePerWeekStr = searchParams.get("pricePerWeek");

    // Parse values
    const pricePerWeek = pricePerWeekStr ? parseFloat(pricePerWeekStr) : 0;

    // Calculate price breakdown (duplicate logic from BookingCard for display)
    // In a real app, this should be a hook or utility
    // For now, simple parsing or mock if data missing

    // Helper to parse DD/MM/YYYY
    const parseDate = (dateStr: string | null) => {
        if (!dateStr) return undefined;
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day);
    };

    const checkIn = parseDate(checkInStr);
    const checkOut = parseDate(checkOutStr);

    const days = checkIn && checkOut
        ? Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)))
        : 15; // Default to 15 if no dates for preview

    const pricePerDay = pricePerWeek / 7;
    const subtotal = Math.round(pricePerDay * days);
    const platformFee = 2 * days;
    const bookingFee = 100; // Fixed as per screenshot example logic
    const total = subtotal + platformFee + bookingFee;

    // If we have actual params, use calculated total. Otherwise mock from screenshot.
    // Actually let's use the calculated one if params exist.

    const finalTotal = pricePerWeek > 0 ? total.toFixed(2) : "417.50";
    const finalSubtotal = pricePerWeek > 0 ? subtotal : 375; // Screenshot values
    const finalPlatformFee = pricePerWeek > 0 ? platformFee : 37.5;
    const finalDays = pricePerWeek > 0 ? days : 15;

    return (
        <div className="flex flex-col h-full bg-white rounded-t-[10px] sm:rounded-[20px] ">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-[26px] font-bold text-gray-900">Complete Your Booking</h2>
                <button
                    onClick={() => close(["modal", "checkIn", "checkOut", "pricePerWeek"])}
                    className="p-2 transition-colors rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6 text-red-500" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                {/* Room Summary Card */}
                <div className="rounded-xl bg-[#FFF8F3] p-6 mb-8">
                    <h3 className="text-base font-bold text-gray-900 mb-4">Cozy single room in City Center</h3>

                    <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">€25 × {finalDays} days</span>
                            <span className="font-bold text-gray-900">€{finalSubtotal}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Platform Service & Support Fee (€2/day)</span>
                            <span className="font-bold text-gray-900">€{finalPlatformFee}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Booking & Protection Fee</span>
                            <span className="font-bold text-gray-900">€100</span>
                        </div>
                    </div>

                    <Separator className="bg-gray-200 mb-4" />

                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-[#F97316]">€{finalTotal}</span>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900">Your Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="Enter your first name" className="h-12 bg-gray-50 border-gray-200" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" placeholder="Enter your last name" className="h-12 bg-gray-50 border-gray-200" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email number" className="h-12 bg-gray-50 border-gray-200" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="flex gap-2">
                                <Select defaultValue="+88">
                                    <SelectTrigger className="w-[80px] h-12 bg-gray-50 border-gray-200">
                                        <SelectValue placeholder="+88" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="+88">+88</SelectItem>
                                        <SelectItem value="+1">+1</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input id="phone" placeholder="Enter your phone number" className="flex-1 h-12 bg-gray-50 border-gray-200" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of birth</Label>
                            <Input id="dob" placeholder="Enter your birth date" className="h-12 bg-gray-50 border-gray-200" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select>
                                <SelectTrigger className="h-12 bg-gray-50 border-gray-200 text-gray-500">
                                    <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nationality">Nationality</Label>
                            <Select>
                                <SelectTrigger className="h-12 bg-gray-50 border-gray-200 text-gray-500">
                                    <SelectValue placeholder="Select your nationality" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="bd">Bangladesh</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="university">University</Label>
                        <Input id="university" placeholder="Enter your university name" className="h-12 bg-gray-50 border-gray-200" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Self Description</Label>
                        <Textarea id="description" className="min-h-[120px] bg-gray-50 border-gray-200 resize-none" />
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <Checkbox id="terms" className="mt-1" />
                        <label htmlFor="terms" className="text-sm text-gray-500 leading-tight cursor-pointer">
                            I agree to the <span className="text-orange-500">terms and conditions</span> and <span className="text-orange-500">privacy policy</span>. I understand that payment will be processed securely.
                        </label>
                    </div>

                    <Button className="w-full h-14 text-lg font-bold bg-[#F97316] hover:bg-[#ea580c] text-white rounded-xl mt-4">
                        Confirm Booking & Pay
                    </Button>
                </div>
            </div>
        </div>
    );
}
