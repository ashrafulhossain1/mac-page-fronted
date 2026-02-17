import { MessageSquare, Star, Home } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react"; // For the verified icon

export default function HostProfile() {
  return (
    <div className="w-full space-y-6">
      {/* Meet your Host */}
      <Card className="bg-[#fbfbfb] rounded-[30px] border border-gray-300 p-6 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Meet your Host</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Avatar Section */}
              <Avatar className="h-20 w-20 border-2 border-white shadow-sm">
                <AvatarImage
                  src="/path-to-max-image.jpg"
                  alt="Max Van Der Berg"
                />
                <AvatarFallback>MV</AvatarFallback>
              </Avatar>

              {/* Name and Stats */}
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-lg font-bold text-zinc-900">
                    Max Van Der Berg
                  </h3>
                  <BadgeCheck className="h-5 w-5 fill-blue-500 text-white" />
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                    <span className="font-medium text-zinc-700">4.9</span> rating
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span className="font-medium text-zinc-700">3</span> Listings
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              className="rounded-xl border-zinc-300 px-6 py-6 font-semibold"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Message
            </Button>
          </div>

          {/* Description */}
          <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
            This room is part of a safe, quiet, and friendly home, ideal for
            students and short-term guests. The space is kept clean, comfortable,
            and exactly as described. Located in a convenient area with easy
            access to transport, shops, and local amenities. Privacy is respected,
            with support always available to help you feel at home.
          </p>
        </CardContent>
      </Card>

      {/* Location */}
      <div className="bg-[#fbfbfb] rounded-[30px] border border-gray-300 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7098308477498!2d-6.260309684153064!3d53.34980597997789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e844f3e6dcb%3A0x981086c2a5765c66!2sDublin%20City%20Centre!5e0!3m2!1sen!2sie!4v1700000000000!5m2!1sen!2sie"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Room Location"
          />
        </div>
      </div>
    </div>
  );
}
