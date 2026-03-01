import { MessageSquare, Star, Home } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react"; // For the verified icon
import { motion } from "framer-motion";
import { headingViewport, innerItemVariants } from "@/lib/animations";

export default function HostProfile() {
  return (
    <div className="w-full space-y-6">
      {/* Meet your Host card is standard div now */}

      <motion.div
        variants={innerItemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={headingViewport}
        className="w-full max-w-4xl p-6 bg-white rounded-3xl border border-zinc-200 shadow-sm"
      >
        <CardHeader className="px-0 pt-0 pb-6">
          <CardTitle className="text-xl font-bold text-zinc-900">
            Meet your Host
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 pb-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar Section */}
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24 border-none">
                <AvatarImage
                  src="/path-to-max-image.jpg"
                  alt="Max Van Der Berg"
                  className="object-cover"
                />
                <AvatarFallback>MV</AvatarFallback>
              </Avatar>
            </div>

            {/* Right Side Content */}
            <div className="flex-1 space-y-4">
              {/* Header: Name + Stats and Message Button */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-zinc-900">
                      Max Van Der Berg
                    </h3>
                    <BadgeCheck className="h-6 w-6 fill-[#00A2FF] text-white" />
                  </div>

                  <div className="flex items-center gap-4 text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                      <span className="text-sm font-medium">4.9 rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Home className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm font-medium">3 Listings</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="rounded-2xl border-zinc-900 px-8 py-4 text-base font-bold text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Message
                </Button>
              </div>

              {/* Description Text */}
              <p className="text-zinc-500 leading-relaxed text-[15px] max-w-3xl">
                This room is part of a safe, quiet, and friendly home, ideal for
                students and short-term guests. The space is kept clean,
                comfortable, and exactly as described. Located in a convenient
                area with easy access to transport, shops, and local amenities.
                Privacy is respected, with support always available to help you
                feel at home.
              </p>
            </div>
          </div>
        </CardContent>
      </motion.div>


      {/* Location card is standard div now (dont need location) */}
      {/* <div className="bg-[#fbfbfb] rounded-[30px] border border-gray-300 p-6 shadow-sm">
        <motion.div
          variants={innerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={headingViewport}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              src={`https://maps.google.com/maps?q=${23.7742661},${90.3529205}&hl=es&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Room Location"
            />
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}
