import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { City } from "country-state-city";
import { useState, useMemo, useRef, useEffect } from "react";

function SearchCard() {
  const [searchParams, setSearchParams] = useState({
    maxPrice: "",
    minPrice: "",
    city: "",
  });
  const [isCityOpen, setIsCityOpen] = useState(false);
  const cityRef = useRef<HTMLDivElement>(null);

  // Load Irish cities (IE is the country code for Ireland)
  const cityOptions = useMemo(() => {
    return (
      City.getCitiesOfCountry("IE")?.map((city) => ({
        value: city.name,
        label: city.name,
      })) || []
    );
  }, []);

  // Filter cities based on typed input
  const filteredCities = useMemo(() => {
    if (!searchParams.city) return cityOptions;
    return cityOptions.filter((c) =>
      c.label.toLowerCase().includes(searchParams.city.toLowerCase())
    );
  }, [searchParams.city, cityOptions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setIsCityOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    console.log("Search Parameters:", searchParams);
  };

  return (
    <div className="bg-[#eff1f3] backdrop-blur-sm p-8 rounded-[32px] w-full max-w-[1050px] ">
      <h2 className="text-lg md:text-xl lg:text-2xl  font-semibold text-gray-900 mb-4 ml-1">
        Find Your Perfect Room (Ireland)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Max Price Input */}
        <div className="space-y-1">
          <Input
            type="number"
            min={0}
            placeholder="Max price"
            className="h-10 md:h-12 bg-white border-none rounded-xl text-sm sm:text-[16px] md:text-[16px] px-4 hover:shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
            value={searchParams.maxPrice}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                maxPrice: e.target.value,
              }))
            }
          />
        </div>

        {/* Min Price Input */}
        <div className="space-y-1">
          <Input
            type="number"
            min={0}
            placeholder="Min price"
            className="h-10 md:h-12 bg-white border-0 rounded-xl text-sm sm:text-[16px] md:text-[18px] px-4 hover:shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
            value={searchParams.minPrice}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                minPrice: e.target.value,
              }))
            }
          />
        </div>

        {/* City Input with Dropdown Suggestions */}
        <div className="space-y-1 relative" ref={cityRef}>
          <Input
            type="text"
            placeholder="Type city..."
            className="h-10 md:h-12 bg-white border-0 rounded-xl text-sm sm:text-[16px] md:text-[16px] px-4 hover:shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316] w-full"
            value={searchParams.city}
            onChange={(e) => {
              setSearchParams((prev) => ({
                ...prev,
                city: e.target.value,
              }));
              setIsCityOpen(true);
            }}
            onFocus={() => setIsCityOpen(true)}
            autoComplete="off"
          />
          {isCityOpen && filteredCities.length > 0 && (
            <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg max-h-52 overflow-y-auto border border-gray-100">
              {filteredCities.map((city) => (
                <li
                  key={city.value}
                  className="px-4 py-2.5 text-sm text-gray-700 cursor-pointer hover:bg-orange-50 hover:text-[#F97316] transition-colors first:rounded-t-xl last:rounded-b-xl"
                  onMouseDown={() => {
                    setSearchParams((prev) => ({
                      ...prev,
                      city: city.value,
                    }));
                    setIsCityOpen(false);
                  }}
                >
                  {city.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="h-10 md:h-12 bg-[#F97316] hover:bg-[#e06510] text-white text-sm sm:text-[16px] md:text-[18px] font-semibold rounded-xl shadow-md transition-colors w-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchCard;

