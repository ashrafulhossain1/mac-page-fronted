import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Select, { type StylesConfig } from "react-select";
import { City } from "country-state-city";
import { useState, useMemo } from "react";

type Option = { value: string; label: string };

function SearchCard() {

  console.log("console city", City)
  const [searchParams, setSearchParams] = useState({
    maxPrice: "",
    minPrice: "",
    city: "",
  });

  // Load English cities (GB is UK, ENG is state code for England)
  const cityOptions = useMemo(() => {
    return City.getCitiesOfState("GB", "ENG").map((city) => ({
      value: city.name,
      label: city.name,
    }));
  }, []);

  const handleSearch = () => {
    console.log("Search Parameters:", searchParams);
  };

  const customStyles: StylesConfig<Option, false> = {
    control: (provided) => ({
      ...provided,
      height: "3rem", // Match h-12
      borderRadius: "0.75rem", // Match rounded-xl
      border: "none",
      backgroundColor: "white",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", // Match shadow-sm
      fontSize: "16px",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af", // text-muted-foreground
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "1rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F97316" : state.isFocused ? "#fff6f0" : "transparent",
      color: state.isSelected ? "white" : "#333",
      "&:active": {
        backgroundColor: "#F97316",
      },
    }),
  };

  return (
    <div className="bg-[#eff1f3] backdrop-blur-sm p-8 rounded-[32px] w-full max-w-[1050px] ">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 ml-1">
        Find Your Perfect Room (Ireland)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Max Price Input */}
        <div className="space-y-1">
          <Input
            type="number"
            min={0}
            placeholder="Max price"
            className="h-10 md:h-12 bg-white border-0 rounded-xl text-sm sm:text-[16px] md:text-[18px] px-4 shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
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
            className="h-10 md:h-12 bg-white border-0 rounded-xl text-sm sm:text-[16px] md:text-[18px] px-4 shadow-sm focus-visible:ring-1 focus-visible:ring-[#F97316]"
            value={searchParams.minPrice}
            onChange={(e) =>
              setSearchParams((prev) => ({
                ...prev,
                minPrice: e.target.value,
              }))
            }
          />
        </div>

        {/* City Select (England Only) */}
        <div className="space-y-1">
          <Select<Option>
            options={cityOptions}
            placeholder="City"
            styles={customStyles}
            className="w-full"
            value={cityOptions.find(opt => opt.value === searchParams.city) || null}
            onChange={(opt) => setSearchParams(prev => ({ ...prev, city: opt?.value || "" }))}
          />
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
