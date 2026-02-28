import { Link, useNavigate, useRouteError, isRouteErrorResponse } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();

    let title = "Page Not Found";
    let message = "Sorry, the page you're looking for doesn't exist or has been moved.";

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "Page Not Found";
            message = "Sorry, the page you're looking for doesn't exist or has been moved.";
        } else if (error.status === 500) {
            title = "Server Error";
            message = "Something went wrong on our end. Please try again later.";
        } else {
            title = `Error ${error.status}`;
            message = error.statusText || "An unexpected error occurred.";
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header with Logo */}


            {/* Error Content */}
            <main className="flex-1 flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    {/* 404 Number */}
                    <h1 className="text-[120px] md:text-[160px] font-extrabold leading-none text-gray-100 select-none">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 -mt-4 mb-3">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 text-base md:text-lg mb-10">
                        {message}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button
                            onClick={() => navigate(-1)}
                            variant="outline"
                            className="w-full sm:w-auto h-12 px-6 rounded-[16px] border-gray-200 text-gray-700 font-semibold text-base hover:bg-gray-50 gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </Button>

                        <Button
                            asChild
                            className="w-full sm:w-auto h-12 px-6 rounded-[16px] bg-primary/90 hover:bg-primary text-white font-semibold text-base gap-2"
                        >
                            <Link to="/">
                                <Home className="w-5 h-5" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} WarmWelcome. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
