import type { TAuthDataType } from "@/types/auth";
import ImageUploadBox from "../components/ImageUploadBox";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function VerifiedBadge({
  setStep,
  authData,
  setAuthData
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {


  const handleFileSetup = (file: File | null, forWhich: string) => {
    setAuthData((prev) => ({
      ...prev,
      hostData: {
        ...prev.hostData,
        [forWhich]: file,
      },
    }));
  };


  const handeNext = () => {

    if (!authData.hostData.governmentIdFile) {
      toast.warning("Government ID is required.");
      return
    };

    if (!authData.hostData.selfieWithIdFile) {
      toast.warning("Selfie with ID is required.");
      return
    };

    setStep((prev) => prev + 1);
  };


  return (
    <div className="w-full    rounded-2xl p-6 relative ">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-center mb-6">
        Get Verified Host <br /> Badge
      </h2>

      {/* Upload Field */}
      <div className="space-y-5">
        <ImageUploadBox
          label="Government ID"
          sub="Passport / National ID / Driving License"
          onFileSelect={(file) => handleFileSetup(file, "governmentIdFile")}
        />

        <ImageUploadBox label="Upload Selfie with ID" onFileSelect={(file) => handleFileSetup(file, "selfieWithIdFile")} />
      </div>

      {/* Note */}
      <p className="text-sm text-gray-500 mt-5">
        Verification usually takes 24–48 hours.
      </p>

      {/* Button */}
      <Button onClick={handeNext} className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">
        Submit for Verification
      </Button>
    </div>
  );
}
