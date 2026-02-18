import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { X, Check, Download, ArrowLeft } from "lucide-react";
import useModal from "@/components/Modal/useModal";
import { useSearchParams, useNavigate } from "react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingModal() {
    const { close } = useModal();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        nationality: "",
        university: "",
        description: "",
        terms: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSelectChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({ ...prev, terms: checked }));
    };

    // Validation
    const isFormValid = useMemo(() => {
        return (
            formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.email.trim() !== "" &&
            formData.phone.trim() !== "" &&
            formData.dob !== "" &&
            formData.gender !== "" &&
            formData.nationality !== "" &&
            formData.terms === true
        );
    }, [formData]);

    // Get params from URL
    const checkInStr = searchParams.get("checkIn");
    const checkOutStr = searchParams.get("checkOut");
    const pricePerWeekStr = searchParams.get("pricePerWeek");

    const pricePerWeek = pricePerWeekStr ? parseFloat(pricePerWeekStr) : 0;

    const parseDate = (dateStr: string | null) => {
        if (!dateStr) return undefined;
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day);
    };

    const checkIn = parseDate(checkInStr);
    const checkOut = parseDate(checkOutStr);

    const days = checkIn && checkOut
        ? Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)))
        : 15;

    const pricePerDay = pricePerWeek / 7;
    const subtotal = Math.round(pricePerDay * days);
    const platformFee = 2 * days;
    const bookingFee = 100;
    const total = subtotal + platformFee + bookingFee;

    const finalTotal = pricePerWeek > 0 ? total.toFixed(2) : "417.50";
    const finalSubtotal = pricePerWeek > 0 ? subtotal : 375;
    const finalPlatformFee = pricePerWeek > 0 ? platformFee : 37.5;
    const finalDays = pricePerWeek > 0 ? days : 15;

    const handleBackHome = () => {
        close(["modal", "checkIn", "checkOut", "pricePerWeek"]);
        navigate("/");
    };

    return (
        <div className="flex flex-col h-[90vh] sm:h-[85vh] bg-white rounded-t-[24px] sm:rounded-[24px] relative overflow-hidden">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex-1 flex flex-col relative min-h-0"
                    >
                        {/* Confetti Mock Background */}
                        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]" />

                        <div className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-8 relative z-10">
                            {/* Success Header */}
                            <div className="flex flex-col items-center text-center mb-8 pt-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                                >
                                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
                                        <Check className="text-white w-8 h-8" strokeWidth={4} />
                                    </div>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl md:text-3xl font-extrabold text-green-600 mb-3"
                                >
                                    Payment Successful!
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-500 text-sm md:text-base max-w-[400px]"
                                >
                                    Your payment has been processed successfully. You will receive a confirmation email shortly.
                                </motion.p>
                            </div>

                            {/* Receipt Summary */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="rounded-2xl bg-[#FFF8F3] p-5 md:p-6 mb-8 border border-orange-50"
                            >
                                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-4">Cozy single room in City Center</h3>

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
                                    <span className="text-xl md:text-2xl font-bold text-primary">€{finalTotal}</span>
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col gap-4"
                            >
                                <Button
                                    variant="secondary"
                                    className="w-full h-14 text-sm md:text-base font-bold bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl flex items-center justify-center gap-2"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Receipt
                                </Button>
                                <Button
                                    onClick={handleBackHome}
                                    className="w-full h-14 text-sm md:text-base font-bold bg-primary hover:bg-[#ea580c] text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 transition-all active:scale-[0.98]"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Home
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="flex-1 flex flex-col min-h-0"
                    >
                        {/* Header - Fixed at top */}
                        <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 shrink-0 bg-white z-20">
                            <h2 className="text-[20px] md:text-[26px] font-bold text-gray-900">Complete Your Booking</h2>
                            <button
                                onClick={() => close(["modal", "checkIn", "checkOut", "pricePerWeek"])}
                                className="p-2 transition-colors rounded-full hover:bg-gray-100"
                            >
                                <X className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto scrollbar-hide">
                            <div className="p-5 md:p-6 pb-2">
                                {/* Room Summary Card */}
                                <div className="rounded-2xl bg-[#FFF8F3] p-5 md:p-6 mb-8">
                                    <h3 className="text-sm md:text-base font-bold text-gray-900 mb-4">Cozy single room in City Center</h3>

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
                                        <span className="text-xl md:text-2xl font-bold text-[#F97316]">€{finalTotal}</span>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-gray-900">Your Information</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-sm font-semibold">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="Enter your first name"
                                                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-sm font-semibold">Last name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Enter your last name"
                                                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                                            <div className="flex gap-2">
                                                <Select defaultValue="+88">
                                                    <SelectTrigger className="w-[80px] h-12 bg-gray-50 border-gray-200 rounded-xl">
                                                        <SelectValue placeholder="+88" />
                                                    </SelectTrigger>
                                                    <SelectContent className="rounded-xl">
                                                        <SelectItem value="+88">+88</SelectItem>
                                                        <SelectItem value="+1">+1</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <Input
                                                    id="phone"
                                                    placeholder="Enter number"
                                                    className="flex-1 h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dob" className="text-sm font-semibold">Date of birth</Label>
                                            <Input
                                                id="dob"
                                                type="date"
                                                className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                                value={formData.dob}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="gender" className="text-sm font-semibold">Gender</Label>
                                            <Select value={formData.gender} onValueChange={(val) => handleSelectChange('gender', val)}>
                                                <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl text-gray-500">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl">
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="nationality" className="text-sm font-semibold">Nationality</Label>
                                            <Select value={formData.nationality} onValueChange={(val) => handleSelectChange('nationality', val)}>
                                                <SelectTrigger className="h-12 bg-gray-50 border-gray-200 rounded-xl text-gray-500">
                                                    <SelectValue placeholder="Select nationality" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-xl">
                                                    <SelectItem value="us">United States</SelectItem>
                                                    <SelectItem value="bd">Bangladesh</SelectItem>
                                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="university" className="text-sm font-semibold">University</Label>
                                        <Input
                                            id="university"
                                            placeholder="Enter your university name"
                                            className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-primary/20"
                                            value={formData.university}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description" className="text-sm font-semibold">Self Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Tell us about yourself..."
                                            className="min-h-[100px] bg-gray-50 border-gray-200 rounded-xl resize-none focus:ring-primary/20"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <Checkbox
                                            id="terms"
                                            className="mt-0.5 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                            checked={formData.terms}
                                            onCheckedChange={handleCheckboxChange}
                                        />
                                        <label htmlFor="terms" className="text-[13px] text-gray-500 leading-normal cursor-pointer">
                                            I agree to the <span className="text-primary font-semibold">terms and conditions</span> and <span className="text-primary font-semibold">privacy policy</span>. I understand that payment will be processed securely.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Footer Area */}
                        <div className="p-5 md:p-6 border-t border-gray-100 bg-white shrink-0 z-20">
                            <Button
                                onClick={() => {
                                    console.log("Form Data Valid:", isFormValid);
                                    if (isFormValid) setIsSuccess(true);
                                }}
                                disabled={!isFormValid}
                                className={`w-full h-14 text-lg font-bold rounded-[16px] transition-all active:scale-[0.98] ${isFormValid
                                    ? "bg-[#F97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-200"
                                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Confirm Booking & Pay
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
