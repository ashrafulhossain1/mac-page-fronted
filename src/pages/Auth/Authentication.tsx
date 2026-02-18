import { useSearchParams } from "react-router";
import { DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import SignInForm from "./SignIn/SignInForm";
// import SignUpForm from "./SignUpGuest/SignupForm";
import { useState } from "react";
import type { TAuthDataType } from "@/types/auth";
import HostProfileSet from "./SignUpHost/Profile";
import AddressInfo from "./SignUpHost/AddressInfo";

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
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
      governmentIdFile: "",
      selfieWithIdFile: "",
      email: "",
      password: "",
      confirmPassword: "",
      isTermsAccepted: false,
      emailVerificationCode: "",
    },
  });

  console.log(setStep, setAuthData);


  return (
    <div className="bg-white rounded-4xl py-4 md:py-6 px-6 md:px-8 w-full md:w-119.5 relative">
      <DialogClose className="absolute top-2 right-2 md:right-2">
        <X className="h-4 w-4" />
      </DialogClose>

      {tab === "login" && <SignInForm />}

      {authType  === "host" ?
        
        <div className="">
          { tab === "signup" && step === 1 && <HostProfileSet setStep={setStep} authData={authData} setAuthData={setAuthData} /> }
          {tab === "signup" && step === 2 && <AddressInfo setStep={setStep} authData={authData} setAuthData={setAuthData}  />}
        </div>
      
         
         :
         ""
       
    }

 
    </div>
  );
}
