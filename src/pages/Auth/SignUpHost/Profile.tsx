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
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import type { TAuthDataType } from "@/types/auth";

const profileSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  bio: z.string().optional(),
});

export default function HostProfileSet({
  setStep,
  authData,
  setAuthData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {
  const [avatar, setAvatar] = useState<string | null>(null);

  // Initialize form
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      bio: "",
    },
  });

  // Handle form submit
  function onSubmit(values: z.infer<typeof profileSchema>) {
    if (avatar && values.fullName && values.phoneNumber && values.bio) {
      setAuthData({
        ...authData,
        hostData: {
          ...authData.hostData,
          fullName: values.fullName,
          phoneNumber: values.phoneNumber,
          bio: values.bio,
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
    <div className="bg-white rounded-3xl w-full  relative ">

      <h2 className="text-3xl font-bold text-center mb-6">Profile</h2>

      {/* Avatar Upload */}
      <div className="flex justify-center mb-8">
        <label className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-200 transition-colors overflow-hidden">
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Full name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    {...field}
                    className="h-12 rounded-xl"
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
                <FormLabel className="font-semibold">Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"bd"} // default country Bangladesh
                    value={field.value}
                    onChange={(phone: string) =>
                      form.setValue("phoneNumber", phone, {
                        shouldValidate: true,
                      })
                    }
                    inputClass="h-11! rounded-2xl! w-full! overflow-hidden "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Bio */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Guests trust hosts who share a little about themselves"
                    className="resize-none rounded-xl min-h-25"
                    {...field}
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
