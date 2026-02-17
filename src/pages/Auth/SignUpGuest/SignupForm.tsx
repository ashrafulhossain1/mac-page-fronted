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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera,  CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useRef, useState } from "react";
import useSignUp from "./use-sign-up";
// import useModal from "@/components/Modal/useModal";

const nationalities = [
  "Bangladeshi",
  "American",
  "British",
  "Canadian",
  "Australian",
  "Indian",
  "Chinese",
  "Japanese",
  "Korean",
  "German",
  "French",
  "Italian",
  "Spanish",
  "Brazilian",
  "Mexican",
  "Russian",
  "Turkish",
  "Saudi",
  "Egyptian",
  "Nigerian",
  "South African",
  "Other",
];

export default function SignUpForm() {
  // const { close } = useModal();
  const { form, onSubmit } = useSignUp();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex-1" />
          <h1 className="text-2xl font-bold text-center flex-1">Profile</h1>
          <div className="flex-1 flex justify-end">
            {/* <button
              type="button"
              onClick={() => close(["modal", "tab"])}
              className="text-red-500 hover:text-red-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button> */}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center py-4">
          <div
            className="relative cursor-pointer group"
            onClick={() => fileInputRef.current?.click()}
          >
            <Avatar className="w-24 h-24 bg-gray-100 border-0">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <AvatarFallback className="bg-gray-100">
                  <Camera className="w-8 h-8 text-gray-400" />
                </AvatarFallback>
              )}
            </Avatar>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
        </div>

        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-900 mt-2">
                Full name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  className="h-[50px] md:h-[55px] rounded-[8px] border border-border placeholder:text-ring"
                  {...field}
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
              <FormLabel className="text-sm font-semibold text-gray-900 mt-3">
                University
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your university name"
                  className="h-[50px] md:h-[55px] rounded-[8px] border border-border placeholder:text-ring"
                  {...field}
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
              <FormLabel className="text-sm font-semibold text-gray-900 mt-3">
                Date of birth
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full h-[50px] md:h-[55px] rounded-[8px] border border-border px-4 text-sm ${field.value ? "text-gray-900" : "text-ring"
                        }`}
                    >
                      <span>
                        {field.value
                          ? format(new Date(field.value), "PPP")
                          : "Enter your first name"}
                      </span>
                      <CalendarIcon className="h-5 w-5 text-gray-400" />
                    </button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) =>
                      field.onChange(date ? date.toISOString() : "")
                    }
                    captionLayout="dropdown"
                    fromYear={1950}
                    toYear={new Date().getFullYear()}
                  />
                </PopoverContent>
              </Popover>
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
              <FormLabel className="text-sm font-semibold text-gray-900 mt-3">
                Nationality
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-[50px] md:h-[55px] rounded-[8px] border border-border text-sm">
                    <SelectValue placeholder="Select your nationality" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {nationalities.map((nationality) => (
                    <SelectItem key={nationality} value={nationality}>
                      {nationality}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Self Description */}
        <FormField
          control={form.control}
          name="selfDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-gray-900 mt-3">
                Self Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hosts trust Guest who share a little about themselves"
                  className="min-h-[100px] rounded-[8px] border border-border resize-none placeholder:text-ring"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Continue Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium text-base mt-6"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Continue"}
        </Button>
      </form>
    </Form>
  );
}
