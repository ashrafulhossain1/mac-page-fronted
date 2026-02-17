import { useSearchParams } from "react-router";
import { DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUpGuest/SignupForm";
import {  useState } from "react";
import type { TAuthDataType } from "@/types/auth";

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  const authType = searchParams.get("authType") || "guest";
  const [step , setStep] = useState<number>(1);
  const [authData, setAuthData] = useState<TAuthDataType | null>({
    authType: authType, 
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
      governmentIdFile: "",
      selfieWithIdFile: "",
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
      emailVerificationCode: "",
    },
  });

 


  return (
    <div className="bg-white rounded-4xl py-4 md:py-6 px-6 md:px-8 w-full md:w-119.5 relative">
      <DialogClose className="absolute top-6 right-6 md:right-14">
        <X className="h-4 w-4" />
      </DialogClose>

      {tab === "login" && <SignInForm />}
      {tab === "signup" && step === 1 && authData?.authType === "normal" && <SignUpForm />}
      {tab === "signup" && step === 1 && authData?.authType === "host" && <SignUpForm />}
      {/* {tab === "signup" && step === 2 && <SignUpForm />} */}
    </div>
  );
}
