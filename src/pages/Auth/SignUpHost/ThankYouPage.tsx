import { Link } from "react-router";
import thamkyouimg from "../../../assets/auth/thankyouimg.png";


export default function ThankYouPage() {
  return (
    <div className=" rounded-2xl  w-full text-center relative py-15  ">


      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-[38px] font-semibold mb-4">
        Thank you for submitting your details.
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 mb-6">
        We’ve received all your information successfully and it has been sent to our team for review and approval.
      </p>

      {/* Hourglass Image */}
      <img
        src={thamkyouimg} // replace with your image path
        alt="Hourglass"
        className="mx-auto mb-6 w-32 h-32 object-contain"
      />

      {/* Review Note */}
      <p className="text-gray-400 text-sm mb-6">
        This review usually takes 24–48 hours. <br />
        You’ll be notified by email as soon as the approval is complete.
      </p>

      {/* Return Button */}
      <Link to="/" className="w-full inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 rounded-xl transition">
        Return to Home
      </Link>
    </div>
  );
}
