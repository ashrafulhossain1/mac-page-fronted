import hosthow1 from "@/assets/home/host-how-1.svg";
import hosthow2 from "@/assets/home/host-how-2.svg";
import hosthow3 from "@/assets/home/host-how-3.svg";
import hosthow4 from "@/assets/home/host-how-4.svg";

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    title: "Create Your Host Account",
    description:
      "Sign up as a host using your email and phone number. Verify your email and phone to continue.",
    icon: hosthow2,
  },
  {
    title: "Complete Your Profile & Verification",
    description:
      "Add your basic details, home address, and upload your government ID with a selfie for verification.",
    icon: hosthow3,
  },
  {
    title: "List Your Room",
    description:
      "Add room details, price per week, bills included, bathroom type, pets info, and house rules. Upload photos anytime.",
    icon: hosthow4,
  },
  {
    title: "Receive Booking Requests",
    description:
      "Chat with guests before accepting. Once confirmed, your booking calendar updates automatically.",
    icon: hosthow1,
  },
];

const HowHostWorks = () => {
  return (
    <section className="bg-white py-20 px-6" id="how-it-works">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[48px] font-semibold leading-[48px] mb-10  text-center text-black">
          How it works?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#EAEAEA] p-6 rounded-[24px] flex flex-col items-center text-center h-full min-h-[320px]"
            >
              <div className="bg-white/80 w-24 h-24 rounded-full flex items-center justify-center mb-8 mt-4">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-medium mb-4 leading-tight text-black">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowHostWorks;
