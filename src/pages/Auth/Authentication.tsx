import { useSearchParams } from "react-router";
import { DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUpGuest/SignupForm";
import { useState } from "react";

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  const [authData , setAuthData] = useState(null)

  return (
    <div className="bg-white rounded-4xl py-4 md:py-6 px-6 md:px-8 w-full md:w-119.5 relative">
      <DialogClose className="absolute top-6 right-6 md:right-14">
        <X className="h-4 w-4" />
      </DialogClose>

      {tab === "login" && <SignInForm />}
      {tab === "signup" && <SignUpForm />}
    </div>
  );
}
