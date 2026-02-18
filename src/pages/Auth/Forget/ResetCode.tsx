import { Button } from "@/components/ui/button";
import { InputOTP } from "@/components/ui/input-otp";

const ResetCode = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-7">
            {/* Header */}
            <div className="text-center mb-6 mt-2">
                <h1 className="text-2xl md:text-3xl lg:text-[38px] font-bold text-primary-foreground mb-3">
                    Enter 6 digit code
                </h1>
                <p className="text-secondary-foreground text-sm md:text-base lg:text-lg px-4">
                    We’ve sent verification your email
                </p>
            </div>

            {/* Form Area */}
            <div className="w-full flex flex-col items-center space-y-6">
                <div className="w-full flex justify-center">
                    <InputOTP length={6} />
                </div>

                <Button
                    className="w-full h-12 lg:h-[56px] rounded-[16px] text-lg md:text-xl lg:text-[22px] font-medium bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98]"
                >
                    Verify
                </Button>
            </div>
        </div>
    );
};

export default ResetCode;
