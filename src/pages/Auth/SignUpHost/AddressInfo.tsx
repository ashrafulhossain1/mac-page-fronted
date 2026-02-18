"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import type { TAuthDataType } from "@/types/auth";
import CountryCitySelector from "../components/CountrySelector";

// 1. Validation Schema
const addressSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  city: z.string().min(1, "Please select a city"),
  address: z.string().min(5, "Please enter a full address"),
  postalCode: z.string().min(3, "Invalid postal code"),
  isLegalResidence: z.boolean().refine((val) => val === true, {
    message: "You must confirm this is your legal residence",
  }),
});

export default function AddressInfo({
  setStep,
  authData,
  setAuthData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {
  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      country: "",
      city: "",
      address: "",
      postalCode: "",
      isLegalResidence: false,
    },
  });

  function onSubmit(values: z.infer<typeof addressSchema>) {
    console.log("Submitted Address:", values);

    setAuthData({ ...authData, hostData: { ...authData.hostData, country: values.country, city: values.city , fullAddress: values.address, postalCode: values.postalCode , isLegalResidenceConfirmed: values.isLegalResidence } });

    setStep((prev) => prev + 1);

  }

  return (
    <div className="bg-white rounded-[32px] w-full relative ">
      <h2 className="text-[30px] font-semibold text-center mb-10 tracking-tight">
        Address & Residency Info
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Country & City Row */}
            <CountryCitySelector
              countryValue={form.watch("country")}
              cityValue={form.watch("city")}
              onCountryChange={(val) => form.setValue("country", val)}
              onCityChange={(val) => form.setValue("city", val)}
            />  

          {/* Address Field */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">
                  Full home address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter full address"
                    {...field}
                    className="h-14 rounded-2xl border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Postal Code Field */}
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">
                  Postal Code
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter postal code"
                    {...field}
                    className="h-14 rounded-2xl border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Checkbox Field */}
          <FormField
            control={form.control}
            name="isLegalResidence"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-gray-300 rounded-md h-5 w-5"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-gray-400 font-normal">
                    I confirm this is my legal residence.
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white h-14 text-xl font-bold rounded-2xl transition-all"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
