import { Button } from "@/components/ui/button";
import okay from "@/assets/icons/okay.svg";

const ResetSuccess = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClickNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-7">
      {/* Icon */}
      <div className="mb-6 md:mb-8 w-[140px] md:max-w-[180px]">
        <img src={okay} alt="Success" />
      </div>

      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-bold text-primary-foreground max-w-[300px] md:max-w-md mx-auto">
          Your password has been successfully reset.
        </h1>
      </div>

      {/* Button */}
      <div className="w-full">
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

export default ResetSuccess;
