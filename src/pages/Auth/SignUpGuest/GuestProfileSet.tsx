import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Camera } from "lucide-react";

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
import "react-phone-input-2/lib/style.css";
import type { TAuthDataType } from "@/types/auth";

const profileSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  // phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  university: z.string().min(2, "University must be at least 2 characters"),
  dateOfBirth: z.string().refine(
    (date) => {
      const dob = new Date(date);
      const age = new Date().getFullYear() - dob.getFullYear();
      return !isNaN(dob.getTime()) && age >= 13;
    },
    { message: "You must be at least 13 years old" },
  ),
  nationality: z.string().min(2, "Nationality must be at least 2 characters"),
  bio: z.string().min(10, "Self Description must be at least 10 characters"),
});

export default function GuestProfileSet({
  setStep,
  authData,
  setAuthData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {
  const [avatar, setAvatar] = useState<string | null>(null);

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      // phoneNumber: "",
      university: "",
      dateOfBirth: "",
      nationality: "",
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);

    if (
      avatar &&
      values.fullName &&
      values.university &&
      values.dateOfBirth &&
      values.nationality &&
      values.bio
    ) {
      setAuthData({
        ...authData,
        guestData: {
          ...authData.guestData,
          ...values,
        },
      });

      setStep((prev) => prev + 1);
    }
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className=" rounded-3xl w-full relative p-2 md:p-6 overflow-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>

      {/* Avatar Upload */}
      <div className="flex justify-center mb-8">
        <label className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center  border-gray-300 cursor-pointer hover:bg-gray-200 transition-colors ">
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="text-gray-400" size={32} />
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </label>
      </div>

      {/* Form */}
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="h-10 md:h-12 rounded-[16px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* University */}
          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">University</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your university"
                    {...field}
                    className="h-12 rounded-[16px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date of Birth */}
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Date of Birth</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="h-12 rounded-[16px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nationality */}
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Nationality</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your nationality"
                    {...field}
                    className="h-12 rounded-[16px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Self Description */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Self Description
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tell us about yourself"
                    {...field}
                    className="h-24 rounded-[16px] overflow-y-scroll"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white h-12 text-lg font-semibold rounded-xl"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
