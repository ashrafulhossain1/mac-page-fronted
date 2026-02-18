import { Button } from "@/components/ui/button";
import type { TAuthDataType } from "@/types/auth";
import { useSearchParams } from "react-router";

const SelectUserType = ({ 
    setAuthData
}:{ 
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
                    onClick={()=> handleUserTypeSelect("normal")}
                    className="w-full  rounded-xl text-xl   font-bold bg-gray-100 hover:bg-gray-200 text-secondary-foreground transition-all shadow-sm active:scale-[0.98]  "
                >
                    Guest
                </Button>

                {/* Host Option */}
                <Button
                    onClick={()=> handleUserTypeSelect("host")}
                    className="w-full    rounded-xl  text-xl  font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98]   "
                >
                    Become a Host
                </Button>
            </div>
        </div>
    );
};

export default SelectUserType;
