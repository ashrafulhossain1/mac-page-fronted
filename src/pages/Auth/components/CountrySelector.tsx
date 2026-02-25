"use client";

import { useMemo } from "react";
import Select, { type StylesConfig } from "react-select";
import { Country, State, City } from "country-state-city";

type Option = { value: string; label: string };

interface CountryCitySelectorProps {
  countryValue: string;
  cityValue: string;
  onCountryChange: (countryCode: string) => void;
  onCityChange: (cityName: string) => void;
}

export default function CountryCitySelector({
  countryValue,
  cityValue,
  onCountryChange,
  onCityChange,
}: CountryCitySelectorProps) {

  const countryOptions = useMemo(
    () =>
      Country.getAllCountries().map((c) => ({
        value: c.isoCode,
        label: c.name,
      })),
    [],
  );

  const cityOptions = useMemo(() => {
    if (!countryValue) return [];

    const states = State.getStatesOfCountry(countryValue);
    return states.flatMap((s) =>
      City.getCitiesOfState(countryValue, s.isoCode).map((c) => ({
        value: c.name,
        label: c.name,
      })),
    );
  }, [countryValue]);

  const selectedCountry =
    countryOptions.find((c) => c.value === countryValue) || null;
  const selectedCity = cityOptions.find((c) => c.value === cityValue) || null;

  const customStyles: StylesConfig<Option, false> = {
    control: (provided) => ({
      ...provided,
      borderRadius: "1rem",
      minHeight: "3.5rem",
      paddingLeft: "8px",
      // borderColor: "#e5e7eb",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#e5e7eb",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#ADADAD",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FF7A1A" : state.isFocused ? "#fff6f0" : "transparent",
      color: state.isSelected ? "white" : "#333",
      "&:active": {
        backgroundColor: "#FF7A1A",
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-2">
        <p className="text-gray-700 font-semibold">Country</p>
        <Select<Option>
          options={countryOptions}
          value={selectedCountry}
          onChange={(opt) => onCountryChange(opt?.value || "")}
          placeholder="Select Country"
          styles={customStyles}
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-700 font-semibold">City</p>
        <Select<Option>
          options={cityOptions}
          value={selectedCity}
          onChange={(opt) => onCityChange(opt?.value || "")}
          placeholder="Select City"
          isDisabled={!countryValue}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
