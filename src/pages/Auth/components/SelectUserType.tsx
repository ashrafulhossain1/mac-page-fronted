import { Button } from "@/components/ui/button";

const SelectUserType = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-7">
            {/* Header */}
            <div className="text-center mb-6 mt-2">
                <h1 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-primary-foreground mb-3">
                    Select user type
                </h1>
            </div>

            {/* Options */}
            <div className="w-full space-y-4">
                {/* Guest Option */}
                <Button
                    className="w-full  rounded-[16px] text-xl md:text-3xl lg:text-[48px] font-bold bg-gray-100 hover:bg-gray-200 text-secondary-foreground transition-all shadow-sm active:scale-[0.98]"
                >
                    Guest
                </Button>

                {/* Host Option */}
                <Button
                    className="w-full h-16 md:h-20 lg:h-[80px] rounded-[16px]  text-xl md:text-3xl lg:text-[48px] font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98]"
                >
                    Become a Host
                </Button>
            </div>
        </div>
    );
};

export default SelectUserType;
