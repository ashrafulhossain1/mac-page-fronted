import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, MapPin, Calendar, Clock } from "lucide-react";
import room1 from "@/assets/home/room-1.png";
import { useNavigate } from "react-router";

const AboutGuest = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="w-24 h-24 sm:w-32 h-32 border-4 border-white shadow-lg overflow-hidden">
            <AvatarImage src="https://i.pravatar.cc/150?u=sarah" className="object-cover" />
            <AvatarFallback className="text-4xl">SM</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Sarah Murphy</h1>
            <p className="text-gray-500 text-base sm:text-lg mb-4">Study at North South University</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>19 years</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="w-full md:w-auto rounded-xl border-gray-200 px-8 h-12 flex items-center justify-center gap-2 font-bold text-gray-700 hover:bg-gray-50 bg-white border">
          <MessageSquare className="w-5 h-5" />
          Message
        </Button>
      </div>

      {/* About Section */}
      <div className="mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About</h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          Hi, I’m a student moving to Ireland for my studies. I’m a quiet, respectful, and tidy person who values a calm and friendly home environment. I spend most of my time studying or working part-time, and I always take good care of the space I live in. I’m looking for a comfortable room where I can feel safe, settled, and at home.
        </p>
      </div>

      {/* Room Summary Card */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-48 h-32 rounded-[20px] overflow-hidden flex-shrink-0">
            <img src={room1} alt="Room preview" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4 sm:mb-2">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900">Cozy Single Room in Dublin City Center</h4>
              <div className="text-left sm:text-right">
                <p className="text-2xl sm:text-3xl font-bold text-orange-500">€650</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">per week</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              A cozy room in a quiet residential area. 10 mins walk to city center, includes high-speed WiFi and a study desk...
            </p>
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-8 mb-12 text-gray-400 text-sm">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5" />
          <span>Duration: 6 months</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5" />
          <span>2 hours ago</span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 pt-8 sm:pt-10 border-t border-gray-100 mb-20 md:mb-0">
        <Button 
          variant="outline" 
          className="bg-red-50 hover:bg-red-100 text-red-500 border-none px-12 h-14 rounded-xl font-bold text-lg w-full sm:w-auto"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button className="bg-[#F97316] hover:bg-[#ea580c] text-white px-20 h-14 rounded-xl font-bold text-lg w-full sm:w-auto">
          Approve
        </Button>
      </div>
    </div>
  );
};

export default AboutGuest;
