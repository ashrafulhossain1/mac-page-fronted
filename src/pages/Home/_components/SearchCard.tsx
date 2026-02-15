import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function SearchCard() {
  const [searchParams, setSearchParams] = useState({
    maxPrice: "",
    minPrice: "",
    city: "",
  });

  const handleSearch = () => {
    console.log("Search Parameters:", searchParams);
  };

  return (
    <div className="absolute -bottom-20 left-0 right-0 z-500 flex justify-center px-4 pb-10">
      <div className="bg-[#eff1f3] backdrop-blur-sm p-8 rounded-[32px] w-full max-w-[1050px] shadow-2xl">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 ml-1">
          Find Your Perfect Room
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Max Price Input */}
          <Input
            type="number"
            placeholder="Max price"
            className="h-12 bg-white border-0 rounded-xl text-lg px-4 shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
            value={searchParams.maxPrice}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, maxPrice: e.target.value }))
            }
          />

          {/* Min Price Input */}
          <Input
            type="number"
            placeholder="Min price"
            className="h-12 bg-white border-0 rounded-xl text-lg px-4 shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
            value={searchParams.minPrice}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, minPrice: e.target.value }))
            }
          />

          {/* City Select */}
          <Select
            value={searchParams.city}
            onValueChange={(value) =>
              setSearchParams((prev) => ({ ...prev, city: value }))
            }
          >
            <SelectTrigger className="h-12 w-full bg-white border-0 rounded-xl text-lg px-4 shadow-sm focus:ring-1 focus:ring-[#F97316] text-muted-foreground data-[state=checked]:text-black">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dublin">Dublin</SelectItem>
              <SelectItem value="cork">Cork</SelectItem>
              <SelectItem value="galway">Galway</SelectItem>
              <SelectItem value="limerick">Limerick</SelectItem>
              <SelectItem value="waterford">Waterford</SelectItem>
            </SelectContent>
          </Select>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="h-12 bg-[#F97316] hover:bg-[#e06510] text-white text-lg font-semibold rounded-xl shadow-md transition-colors"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
