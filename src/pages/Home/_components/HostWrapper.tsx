import Partners from "./Partners";
import WhyHostChoose from "./WhyHostChoose";
import HowHostWorks from "./HowHostWorks";
import HostFAQ from "./HostFAQ";
import HostCTA from "./HostCTA";
import HostHero from "./HostHero";

const HostWrapper = () => {
  return (
    <div>
      <HostHero />
      <Partners />
      <WhyHostChoose />
      <HowHostWorks />
      <HostFAQ />
      <HostCTA />
    </div>
  );
};

export default HostWrapper;
