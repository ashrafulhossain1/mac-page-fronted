"use client"

import { useMemo  } from "react"
import Select from "react-select"
import { Country, State, City } from "country-state-city"

// type Option = { value: string; label: string }

interface CountryCitySelectorProps {
  countryValue: string
  cityValue: string
  onCountryChange: (countryCode: string) => void
  onCityChange: (cityName: string) => void
}

export default function CountryCitySelector({
  countryValue,
  cityValue,
  onCountryChange,
  onCityChange,
}: CountryCitySelectorProps) {
  // Compute countries once, memoized
  const countryOptions = useMemo(
    () =>
      Country.getAllCountries().map((c) => ({
        value: c.isoCode,
        label: c.name,
      })),
    []
  )

  // Compute cities dynamically based on country
  const cityOptions = useMemo(() => {
    if (!countryValue) return []

    const states = State.getStatesOfCountry(countryValue)
    return states.flatMap((s) =>
      City.getCitiesOfState(countryValue, s.isoCode).map((c) => ({
        value: c.name,
        label: c.name,
      }))
    )
  }, [countryValue])

  const selectedCountry = countryOptions.find((c) => c.value === countryValue) || null
  const selectedCity = cityOptions.find((c) => c.value === cityValue) || null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
            <p className="text-base">Country</p>
            <Select
                options={countryOptions}
                value={selectedCountry}
                onChange={(opt) => onCountryChange(opt?.value || "")}
                placeholder="Select Country"
            />
        </div>
        <div className="">
            <p className="text-base">City</p>
            <Select
                options={cityOptions}
                value={selectedCity}
                onChange={(opt) => onCityChange(opt?.value || "")}
                placeholder="Select City"
                isDisabled={!countryValue}
            />
        </div>
    </div>
  )
}
