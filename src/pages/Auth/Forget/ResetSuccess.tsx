import okay from "@/assets/icons/okay.svg";

const ResetSuccess = () => {
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
    </div>
  );
};

export default ResetSuccess;
