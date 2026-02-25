import { useEffect } from "react";
import { useNavigate } from "react-router";
import okay from "@/assets/icons/okay.svg";

export default function SignUpSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-full py-12 bg-white rounded-3xl">
            <div className="mb-8 w-[150px] md:w-[200px] animate-in zoom-in duration-500">
                <img src={okay} alt="Success" className="w-full h-auto shadow-sm rounded-full" />
            </div>

            {/* Success Message */}
            <div className="text-center px-6">
                <h1 className="text-2xl md:text-4xl font-bold text-black max-w-[400px] mx-auto leading-tight">
                    Congratulations! <br />
                    Your account has been successfully created.
                </h1>
                <p className="mt-6 text-[#7E7E7E] text-lg md:text-xl font-medium">
                    Redirecting you to home page...
                </p>
            </div>

            {/* Optional: Add a subtle loading bar or spinner if desired, but image is simple */}
            <div className="mt-10 w-16 h-1 bg-orange-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 animate-[progress_3s_ease-in-out]" />
            </div>

            <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
        </div>
    );
}
