import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";



interface AdvanceFiltersProps {
  onClose: () => void;
}

export default function AdvanceFilters({ onClose }: AdvanceFiltersProps) {
  const isMobile = useIsMobile();

  // State for single selection (Room Type)
  const [selectedRoom, setSelectedRoom] = useState("all");

  // State for multiple selection (Amenities)
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "wifi",
    "furnished",
    "kitchen_access",
  ]);

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    );
  };

  const handleFilter = () => {
    const result = {
      roomType: selectedRoom,
      amenities: selectedAmenities,
    };
    console.log("Filter values applied:", result);
    onClose();
  };

  const handleReset = () => {
    setSelectedRoom("all");
    setSelectedAmenities([]);
  };

  // ─── Mobile Layout (Bottom Sheet / Full-Width) ─────────────────────────
  if (isMobile) {
    return (
      <div className="w-full max-w-[100vw] bg-white rounded-t-[28px] px-5 pt-4 pb-6 shadow-2xl font-sans relative">
        {/* Drag Handle */}
        <div className="flex justify-center mb-3">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight">
            Advance Filters
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-red-50 rounded-full transition-colors group"
          >
            <X className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="space-y-5 overflow-y-auto max-h-[55vh] pr-1 custom-scrollbar">
          {/* Room Types Section */}
          <div className="space-y-3">
            <p className="text-[13px] font-bold text-gray-900 uppercase tracking-wide">
              Room Types
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {roomTypes.map((room) => (
                <div
                  key={room.id}
                  className={cn(
                    "flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all ",
                    selectedRoom === room.id
                      ? "bg-black/5 border-black/20"
                      : "bg-gray-50 border-transparent hover:bg-gray-100",
                  )}
                  onClick={() => setSelectedRoom(room.id)}
                >
                  <Checkbox
                    id={`mobile-${room.id}`}
                    checked={selectedRoom === room.id}
                    onCheckedChange={() => setSelectedRoom(room.id)}
                    className="w-4.5 h-4.5 rounded-[4px] border-none bg-gray-200 data-[state=checked]:bg-black data-[state=checked]:text-white transition-colors"
                  />
                  <Label
                    htmlFor={`mobile-${room.id}`}
                    className={cn(
                      "text-[13px] font-medium transition-colors cursor-pointer leading-tight",
                      selectedRoom === room.id
                        ? "text-gray-900"
                        : "text-gray-500",
                    )}
                  >
                    {room.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100" />

          {/* Amenities Section */}
          <div className="space-y-3">
            <p className="text-[13px] font-bold text-gray-900 uppercase tracking-wide">
              Amenities
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {amenitiesList.map((amenity) => (
                <div
                  key={amenity.id}
                  className={cn(
                    "flex items-center gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all border",
                    selectedAmenities.includes(amenity.id)
                      ? "bg-black/5 border-black/20"
                      : "bg-gray-50 border-transparent hover:bg-gray-100",
                  )}
                  onClick={() => toggleAmenity(amenity.id)}
                >
                  <Checkbox
                    id={`mobile-${amenity.id}`}
                    checked={selectedAmenities.includes(amenity.id)}
                    onCheckedChange={() => toggleAmenity(amenity.id)}
                    className="w-4.5 h-4.5 rounded-[4px] border-none bg-gray-200 data-[state=checked]:bg-black data-[state=checked]:text-white transition-colors"
                  />
                  <Label
                    htmlFor={`mobile-${amenity.id}`}
                    className={cn(
                      "text-[13px] font-medium transition-colors cursor-pointer leading-tight",
                      selectedAmenities.includes(amenity.id)
                        ? "text-gray-900"
                        : "text-gray-500",
                    )}
                  >
                    {amenity.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-3">
          <Button
            onClick={handleReset}
            variant="outline"
            className="flex-1 py-2.5 rounded-[16px] text-[14px] font-semibold border-gray-300 text-gray-600 hover:text-black hover:border-black transition-all active:scale-[0.98]"
          >
            Reset
          </Button>
          <Button
            onClick={handleFilter}
            className="flex-2 py-2.5 bg-black hover:bg-gray-900 text-white rounded-[16px] text-[14px] font-bold transition-all active:scale-[0.98] shadow-lg shadow-black/10"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    );
  }

  // ─── Desktop Layout (Popover Card) ────────────────────────────────────
  return (
    <div className="w-[340px] bg-white rounded-[24px] p-7 shadow-2xl font-sans relative border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[26px] font-bold text-gray-900 tracking-tight">
          Advance Filters
        </h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-red-50 rounded-full transition-colors group"
        >
          <X className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
        {/* Room Types Section */}
        <div className="space-y-4">
          <p className="text-[15px] font-bold text-gray-900">
            Room Types
          </p>
          <div className="flex flex-col gap-3.5">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => setSelectedRoom(room.id)}
              >
                <Checkbox
                  id={room.id}
                  checked={selectedRoom === room.id}
                  onCheckedChange={() => setSelectedRoom(room.id)}
                  className="w-5 h-5 rounded-[4px] border-none bg-gray-200 data-[state=checked]:bg-black data-[state=checked]:text-white transition-colors"
                />
                <Label
                  htmlFor={room.id}
                  className={cn(
                    "text-[16px] font-medium transition-colors cursor-pointer",
                    selectedRoom === room.id
                      ? "text-gray-900"
                      : "text-gray-500",
                  )}
                >
                  {room.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="space-y-4">
          <p className="text-[15px] font-bold text-gray-900">
            Amenities
          </p>
          <div className="flex flex-col gap-3.5">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => toggleAmenity(amenity.id)}
              >
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={() => toggleAmenity(amenity.id)}
                  className="w-5 h-5 rounded-[4px] border-none bg-gray-200 data-[state=checked]:bg-black data-[state=checked]:text-white transition-colors"
                />
                <Label
                  htmlFor={amenity.id}
                  className={cn(
                    "text-[16px] font-medium transition-colors cursor-pointer",
                    selectedAmenities.includes(amenity.id)
                      ? "text-gray-900"
                      : "text-gray-500",
                  )}
                >
                  {amenity.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-3">
        <Button
          onClick={handleReset}
          variant="outline"
          className="flex-1 py-2 rounded-[16px] text-[15px] font-semibold border-gray-300 text-gray-600 hover:text-black hover:border-black transition-all active:scale-[0.98]"
        >
          Reset
        </Button>
        <Button
          onClick={handleFilter}
          className="flex-2 py-2 bg-black hover:bg-gray-900 text-white rounded-[16px] text-[17px] font-bold transition-all active:scale-[0.98] shadow-lg shadow-black/10"
        >
          Filter
        </Button>
      </div>
    </div>
  );
}


const roomTypes = [
  { id: "all", label: "All Types" },
  { id: "single", label: "Single Room" },
  { id: "double", label: "Double Room" },
  { id: "studio", label: "Studio" },
  { id: "ensuite", label: "Ensuite" },
];

const amenitiesList = [
  { id: "wifi", label: "Wifi" },
  { id: "furnished", label: "Furnished" },
  { id: "private_bathroom", label: "Private Bathroom" },
  { id: "kitchen_access", label: "Kitchen Access" },
  { id: "laundry", label: "Laundry" },
  { id: "laundry_with_dryer", label: "Laundry with Dryer" },
  { id: "parking", label: "Parking" },
];