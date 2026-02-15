import how1 from "@/assets/home/how (1).svg";
import how2 from "@/assets/home/how (2).svg";
import how3 from "@/assets/home/how (3).svg";

const HowToWorks = () => {
  return (
    <div className="bg-[#FFF6F0]">
      <div className="pb-[120px]">
        <h2 className="text-[48px] font-semibold leading-[48px] pt-[120px] mb-[50px]  text-center text-black">
          How it works?
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-6 mb-5">
          {/* First Card */}
          <div className="bg-[#FFFFFF] p-6 w-full sm:w-[300px] md:w-[407px] h-auto md:h-[255px] rounded-[16px]">
            <div className="flex justify-center">
              <img
                src={how1}
                alt="Search Rooms"
                className="bg-[#DBDBDB]  w-[70px] h-[70px] rounded-full p-3"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-black leading-[26.4px] my-5 text-center ">
              Search Rooms
            </h3>
            <h5 className="text-[16px] font-normal leading-[20.8px] text-[#3C3C3C] mb-6 md:mb-[24px] text-center ">
              Find rooms that match your needs. No account required to browse.
              Use filters to narrow down by location, room type and budget.
            </h5>
          </div>

          {/* Second Card */}
          <div className="bg-[#FFFFFF] p-6   w-full sm:w-[300px] md:w-[407px] h-auto md:h-[255px] rounded-[16px]">
            <div className="flex justify-center">
              <img
                src={how2}
                alt="Request & chat"
                className="bg-[#DBDBDB] w-[70px] h-[70px] rounded-full p-3"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-black leading-[26.4px] my-5 text-center ">
              Request & chat
            </h3>
            <h5 className="text-[16px] font-normal leading-[20.8px] text-[#3C3C3C] mb-6 md:mb-[24px] text-center ">
              Send a booking request. Talk to your host before any payment. Ask
              questions, discuss terms and build trust first
            </h5>
          </div>

          {/* Third Card */}
          <div className="bg-[#FFFFFF] p-6 w-full sm:w-[300px] md:w-[407px] h-auto md:h-[255px] rounded-[16px]">
            <div className="flex justify-center">
              <img
                src={how3}
                alt="Pay & move in"
                className="bg-[#DBDBDB]  w-[70px] h-[70px] rounded-full p-3"
              />
            </div>
            <h3 className="text-[22px] font-semibold text-black leading-[26.4px] my-5 text-center ">
              Pay & move in
            </h3>
            <h5 className="text-[16px] font-normal leading-[20.8px] text-[#3C3C3C] mb-6 md:mb-[24px] text-center ">
              Host approves? pay securely via Stripe, Dates auto-block on the
              calender. You’re in! Simple, safe and transparent.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWorks;

