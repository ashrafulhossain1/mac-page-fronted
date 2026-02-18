import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const NewPassword = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClickNext = () => {
    setStep((prev) => prev + 1);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full py-7">
      {/* Header */}
      <div className="text-center mb-6 mt-2">
        <h1 className="text-2xl md:text-3xl lg:text-[38px] font-bold text-primary-foreground mb-3">
          Enter new password
        </h1>
        <p className="text-secondary-foreground text-sm md:text-base lg:text-lg px-4">
          Please enter your email address to reset your password
        </p>
      </div>

      {/* Form Area */}
      <div className="w-full space-y-6">
        {/* New Password */}
        <div className="space-y-2">
          <label className="text-sm md:text-base font-medium text-primary-foreground  mb-2.5">
            New Password
          </label>
          <div className="relative mt-1 md:mt-2.5">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              className="w-full h-12 lg:h-[56px] rounded-[16px] bg-white border-gray-200 focus-visible:ring-primary pl-4 pr-10 text-base border text-secondary-foreground placeholder:text-secondary-foreground placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="text-sm md:text-base font-medium text-primary-foreground ">
            Confirm Password
          </label>
          <div className="relative mt-1 md:mt-2.5">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className="w-full h-12 lg:h-[56px] rounded-[16px] bg-white border-gray-200 focus-visible:ring-primary pl-4 pr-10 text-base border text-secondary-foreground placeholder:text-secondary-foreground placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <Button
          onClick={handleClickNext}
          className="w-full h-12 lg:h-[56px] rounded-[16px] text-lg md:text-xl lg:text-[22px] font-medium bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default NewPassword;
