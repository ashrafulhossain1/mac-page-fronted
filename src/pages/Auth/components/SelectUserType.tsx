import { Button } from "@/components/ui/button";
import type { TAuthDataType } from "@/types/auth";
import { useSearchParams } from "react-router";

import Line1 from "@/assets/auth/Line 1.png";
import Line2 from "@/assets/auth/Line 2.png";
import HostLine1 from "@/assets/auth/Line 2.svg";
import HostLine2 from "@/assets/auth/Line 3.svg";


const SelectUserType = ({
    setAuthData
}: {
    setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const handleUserTypeSelect = (userType: string) => {
        setAuthData((prev) => ({
            ...prev,
            authType: userType === "normal" ? "guest" : "host",
        }));

        // Update the query param properly
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("user-type-selector", "false");
        newParams.set("user-type-selected", "true");
        newParams.set("authType", userType);
        setSearchParams(newParams);
    };

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
                    onClick={() => handleUserTypeSelect("normal")}
                    className="relative w-full h-[150px] md:h-[170px] lg:h-[207px] rounded-2xl text-xl font-bold bg-gray-100 hover:bg-gray-200 text-secondary-foreground transition-all shadow-sm active:scale-[0.98] overflow-hidden"
                >
                    <img src={Line2} alt="" className="absolute top-0 right-[60%] w-[40%] pointer-events-none " />
                    <span className="z-10 text-2xl md:text-3xl lg:text-[48px] font-bold text-gray-500">Guest</span>
                    <img src={Line1} alt="" className="absolute bottom-1 left-[25%] w-[80%] pointer-events-none " />
                </Button>

                {/* Host Option */}
                <Button
                    onClick={() => handleUserTypeSelect("host")}
                    className="relative w-full h-[150px] md:h-[170px] lg:h-[207px] rounded-2xl text-xl font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98] overflow-hidden"
                >
                    <img src={HostLine2} alt="" className="absolute top-0 right-[60%] w-[40%] pointer-events-none " />
                    <span className="z-10 text-2xl md:text-3xl lg:text-[48px] font-bold text-white">Become a Host</span>
                    <img src={HostLine1} alt="" className="absolute bottom-1 left-[25%] w-[80%] pointer-events-none " />
                </Button>
            </div>
        </div>
    );
};

export default SelectUserType;
