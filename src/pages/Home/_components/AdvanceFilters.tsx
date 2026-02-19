import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const roomTypes = [
  { id: "all", label: "All Types" },
  { id: "single", label: "Single Room" },
  { id: "shared", label: "Shared Room" },
  { id: "studio", label: "Studio" },
  { id: "ensuite", label: "Ensuite" },
];

const amenitiesList = [
  { id: "wifi", label: "Wifi" },
  { id: "furnished", label: "Furnished" },
  { id: "private_bathroom", label: "Private Bathroom" },
  { id: "kitchen_access", label: "Kitchen Access" },
  { id: "laundry", label: "Laundry" },
  { id: "parking", label: "Parking" },
];

interface AdvanceFiltersProps {
  onClose: () => void;
}

export default function AdvanceFilters({ onClose }: AdvanceFiltersProps) {
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
  };

  return (
    <div className="w-[340px] bg-[#f7f7f5] rounded-[20px] p-6 shadow-xl font-sans relative border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          Advance Filters
        </h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-red-50 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-red-500" />
        </button>
      </div>

      {/* Room Types Section */}
      <div className="space-y-4 mb-6">
        <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider">
          Room Types
        </p>
        <div className="flex flex-col gap-3">
          {roomTypes.map((room) => (
            <div key={room.id} className="flex items-center space-x-3">
              <Checkbox
                id={room.id}
                checked={selectedRoom === room.id}
                onCheckedChange={() => setSelectedRoom(room.id)}
                className="w-5 h-5 border-secondary-foreground data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
              <Label
                htmlFor={room.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {room.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6 bg-gray-200" />

      {/* Amenities Section */}
      <div className="space-y-4 mb-8">
        <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider">
          Amenities
        </p>
        <div className="flex flex-col gap-3">
          {amenitiesList.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-3">
              <Checkbox
                id={amenity.id}
                checked={selectedAmenities.includes(amenity.id)}
                onCheckedChange={() => toggleAmenity(amenity.id)}
                className="w-5 h-5 border-secondary-foreground data-[state=checked]:bg-black data-[state=checked]:border-black"
              />
              <Label
                htmlFor={amenity.id}
                className="text-sm font-medium leading-none cursor-pointer"
              >
                {amenity.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleFilter}
        className="w-full py-2 roundded-[16px] bg-primary-foreground/95 hover:bg-primary-foreground text-white rounded-xl text-base font-semibold transition-all active:scale-[0.98]"
      >
        Filter
      </Button>
    </div>
  );
}
