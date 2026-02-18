import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { X } from "lucide-react";

const ResetEmail = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-7">
      {/* Header */}
      <div className="text-center mb-6 mt-2">
        <h1 className="text-2xl md:text-3xl lg:text-[38px] font-bold text-black mb-2">
          Forgot Password
        </h1>
        <p className="text-secondary-foreground text-sm md:text-base lg:text-lg px-4">
          Please enter your email address to reset your password
        </p>
      </div>

      {/* Form Area */}
      <div className="w-full space-y-6">
        <Input
          type="email"
          placeholder="Enter your email..."
          className="w-full h-12 lg:h-14 rounded-[16px] bg-white border-gray-200 focus-visible:ring-primary pl-4 text-base  border text-secondary-foreground placeholder:text-secondary-foreground placeholder:text-sm md:placeholder:text-base lg:placeholder:text-lg"
        />

        <Button className="w-full h-12 lg:h-[56px] rounded-[16px] text-lg md:text-xl lg:text-[22px] font-medium bg-primary hover:bg-primary/90 text-white transition-all shadow-md active:scale-[0.98]"> 
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ResetEmail;
