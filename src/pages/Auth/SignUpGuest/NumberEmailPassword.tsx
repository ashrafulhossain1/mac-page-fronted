import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import type { TAuthDataType } from "@/types/auth";

const schema = z
  .object({
    email: z.email("Please enter a valid email address"),
    phoneNumber: z.string().min(10, "Please enter a valid phone number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    isTermsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function NumberEmailPassword({
  setStep,
  authData,
  setAuthData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: authData.hostData.email || "",
      phoneNumber: authData.hostData.phoneNumber || "",
      password: authData.hostData.password || "",
      confirmPassword: authData.hostData.confirmPassword || "",
      isTermsAccepted: authData.hostData.isTermsAccepted || false,
    },
  });

  // Handle form submit
  function onSubmit(values: z.infer<typeof schema>) {
    setAuthData({
      ...authData,
      hostData: {
        ...authData.hostData,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        confirmPassword: values.confirmPassword,
        isTermsAccepted: values.isTermsAccepted,
      },
    });

    setStep((prev) => prev + 1);
  }

  return (
    <div className=" rounded-3xl w-full max-w-md mx-auto relative">
      <h2 className="text-[28px] md:text-[32px] font-bold text-center mb-6 mt-2 text-black leading-tight">
        Let's get started
      </h2>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="h-12 rounded-xl border-gray-200 text-base px-5 placeholder:text-[#ADADAD]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="phone-input-wrapper relative">
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={(phone: string) =>
                        form.setValue("phoneNumber", phone, {
                          shouldValidate: true,
                        })
                      }
                      placeholder="Enter your phone number"
                      inputClass="!h-12 !w-full !rounded-xl !border-gray-200 !pl-[85px] !text-base !placeholder:text-[#ADADAD] !font-normal"
                      buttonClass="!h-12 !rounded-l-xl !border-gray-200 !bg-[#F4F4F4] !w-[75px] !border-r-0"
                      containerClass="!h-12"
                      dropdownClass="!rounded-xl"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                      className="h-12 rounded-xl border-gray-200 text-base px-5 pr-12 placeholder:text-[#ADADAD]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ADADAD]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...field}
                      className="h-12 rounded-xl border-gray-200 text-base px-5 pr-12 placeholder:text-[#ADADAD]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ADADAD]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms and Conditions */}
          <FormField
            control={form.control}
            name="isTermsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 py-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-gray-300 rounded w-5 h-5 data-[state=checked]:bg-[#FF7A1A] data-[state=checked]:border-[#FF7A1A]"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <p className="text-sm text-[#7E7E7E] font-medium">
                    I agree to the terms and conditions and privacy policy.
                  </p>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white h-12 text-lg font-bold rounded-xl mt-2 transition-all"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
