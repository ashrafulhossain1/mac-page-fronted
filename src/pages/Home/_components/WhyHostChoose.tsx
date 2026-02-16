import hostWhy1 from "@/assets/home/host -why.svg";
import hostWhy2 from "@/assets/home/host -why-1.svg";
import hostWhy3 from "@/assets/home/host -why-2.svg";
import hostWhy4 from "@/assets/home/host -why-3.svg";

interface Feature {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const features: Feature[] = [
  {
    title: "Trust & Safety First",
    description:
      "All hosts are verified through ID and address checks, and guests go through profile verification before booking.",
    icon: hostWhy1,
    className: "md:col-span-2",
  },
  {
    title: "Talk Before You Accept",
    description:
      "Built-in messaging allows you to communicate with guests before confirming any booking.",
    icon: hostWhy2,
    className: "md:col-span-3",
  },
  {
    title: "You're in Control",
    description:
      "Set your price per week, availability, booking length, and house preferences anytime.",
    icon: hostWhy3,
    className: "md:col-span-3",
  },
  {
    title: "Respect for Your Home",
    description:
      "We focus on long-term stays, not short-term traffic, designed for peace of mind.",
    icon: hostWhy4,
    className: "md:col-span-2",
  },
];

const WhyHostChoose = () => {
  return (
    <section className="bg-secondary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-[56px] font-bold mb-16 text-primary-foreground">
          Why Hosts <span className="text-[#F97316]">Choose</span> Warmwelcome?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 md:p-10 rounded-[32px] flex flex-col items-start justify-between min-h-[300px] ${item.className}`}
            >
              <div>
                <div className="bg-[#F2F2F2] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHostChoose;
