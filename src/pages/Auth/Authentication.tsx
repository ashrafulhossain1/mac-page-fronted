import { useSearchParams } from "react-router";
import { SignIn } from "./SignIn/SignIn";
import { DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "login";

  return (
    <div className="bg-white rounded-4xl py-4 md:py-6 px-6 md:px-8 w-full md:w-119.5 relative">
      <DialogClose className="absolute top-6 right-6 md:right-14">
        <X className="h-4 w-4" />
      </DialogClose>

      {tab === "login" && <SignIn />}
    </div>
  );
}
