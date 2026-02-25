import { useSearchParams } from "react-router";
import { DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import SignInForm from "./SignIn/SignInForm";
// import SignUpForm from "./SignUpGuest/SignupForm";
import { useState } from "react";
import type { TAuthDataType } from "@/types/auth";

//
import HostProfileSet from "./SignUpHost/Profile";
import AddressInfo from "./SignUpHost/AddressInfo";
import VerifiedBadge from "./SignUpHost/VerifiedBadge";
import StartSignup from "./SignUpHost/StartSignup";
import VerifyOPThost from "./SignUpHost/VerifyOPThost";
import GuestProfileSet from "./SignUpGuest/GuestProfileSet";
import SelectUserType from "./components/SelectUserType";
import ResetEmail from "./Forget/ResetEmail";
import ResetCode from "./Forget/ResetCode";
import NewPassword from "./Forget/NewPassword";
import ResetSuccess from "./Forget/ResetSuccess";
import NumberEmailPassword from "./SignUpGuest/NumberEmailPassword";
import VerifyOTPGuest from "./SignUpGuest/VerifyOTPGuest";
import SignUpSuccess from "./SignUpGuest/SignUpSuccess";

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  const isUserSelector = searchParams.get("user-type-selector") || "false";
  const isUserSelected = searchParams.get("user-type-selected") || "false";
  const authType = searchParams.get("authType") || "normal";

  const [step, setStep] = useState<number>(1);
  const [authData, setAuthData] = useState<TAuthDataType>({
    authType: authType === "normal" ? "guest" : "host",
    guestData: {
      fullName: "",
      university: "",
      dateOfBirth: "",
      nationality: "",
      selfDescription: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
      emailVerificationCode: "",
    },

    hostData: {
      fullName: "",
      phoneNumber: "",
      bio: "",
      country: "",
      city: "",
      fullAddress: "",
      postalCode: "",
      isLegalResidenceConfirmed: false,
      governmentIdFile: null,
      selfieWithIdFile: null,
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
      emailVerificationCode: "",
    },
  });

  return (
    <div className="bg-white rounded-4xl py-4 md:py-6 px-6 md:px-8 w-full  relative">
      <DialogClose className="absolute top-2 right-2 md:right-2">
        <X className=" w-10 text-orange-500  " />
      </DialogClose>

      {tab === "login" && <SignInForm />}

      {tab === "signup" && isUserSelector === "true" && (
        <SelectUserType setAuthData={setAuthData} />
      )}

      {authType === "host" &&
        isUserSelector === "false" &&
        isUserSelected === "true" && (
          <div className="">
            {tab === "signup" && step === 1 && (
              <HostProfileSet
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 2 && (
              <AddressInfo
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 3 && (
              <VerifiedBadge
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 4 && (
              <StartSignup
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 5 && (
              <VerifyOPThost setStep={setStep} />
            )}
            {tab === "signup" && step === 6 && <SignUpSuccess />}
          </div>
        )}

      {authType === "normal" &&
        isUserSelector === "false" &&
        isUserSelected === "true" && (
          <div className="">
            {tab === "signup" && step === 1 && (
              <GuestProfileSet
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 2 && (
              <NumberEmailPassword
                setStep={setStep}
                authData={authData}
                setAuthData={setAuthData}
              />
            )}
            {tab === "signup" && step === 3 && (
              <VerifyOTPGuest setStep={setStep} />
            )}
            {tab === "signup" && step === 4 && <SignUpSuccess />}

          </div>
        )}

      {/* forgot-password */}
      {tab === "forgot-password" && (
        <div className="">
          {step === 1 && <ResetEmail setStep={setStep} />}
          {step === 2 && <ResetCode setStep={setStep} />}
          {step === 3 && <NewPassword setStep={setStep} />}
          {step === 4 && <ResetSuccess />}
        </div>
      )}
    </div>
  );
}
