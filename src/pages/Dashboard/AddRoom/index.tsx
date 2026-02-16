import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Minus, Upload, X } from "lucide-react";
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
import { useNavigate } from "react-router";

const roomSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  roomType: z.string().min(1, "Please select a room type"),
  roomSize: z.string().min(1, "Please enter room size"),
  minStay: z.string().min(1, "Please select minimum stay"),
  weeklyPrice: z.string().min(1, "Please enter weekly price"),
  aboutRoom: z.string().min(20, "Description must be at least 20 characters"),
  locationName: z.string().min(5, "Location name is required"),
  mapLink: z.string().url("Please enter a valid URL").or(z.literal("")),
  aboutLocation: z.string().min(20, "Location description must be at least 20 characters"),
  amenities: z.array(z.object({ value: z.string() })),
  rules: z.array(z.object({ value: z.string() })),
});

type RoomFormValues = z.infer<typeof roomSchema>;

const AddRoom = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      title: "Shared Room with Study Space",
      roomType: "Single",
      roomSize: "15",
      minStay: "1 month",
      weeklyPrice: "€445",
      aboutRoom: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
      locationName: "Dublin 2, Ireland",
      mapLink: "https://maps.app.goo.gl/hXxpzTU2ygAZzL8BA",
      aboutLocation: "It's a stunning location with great access to Limerick's city centre. The area has great walks and a beautiful garden. Jetland Shopping Centre with a cinema and Dunnes is just 10 mins walk. am only 25 mins by bus to the city centre so this location will suit most of the students and professionals.",
      amenities: [{ value: "Wifi" }],
      rules: [{ value: "No smoking" }],
    },
  });

  const { fields: amenityFields, append: appendAmenity, remove: removeAmenity } = useFieldArray({
    control: form.control,
    name: "amenities",
  });

  const { fields: ruleFields, append: appendRule, remove: removeRule } = useFieldArray({
    control: form.control,
    name: "rules",
  });

  const onSubmit = (data: RoomFormValues) => {
    console.log("Form Data:", data);
    // Handle submission (e.g., API call)
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      {/* Header Info */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Add your Room</h1>
        <p className="text-gray-500 text-sm">Add availability, pricing, and details of all your listed rooms</p>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 sm:px-8 pb-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Room Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-gray-900">Room Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type & Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Room Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 bg-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Double">Double</SelectItem>
                        <SelectItem value="Shared">Shared</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roomSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Room Size</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Stay & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="minStay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Minimum Stay</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weeklyPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Weekly Price</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* About Room */}
            <FormField
              control={form.control}
              name="aboutRoom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-gray-900">About This Room</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[160px] rounded-xl border-gray-200 bg-white resize-none p-6 leading-relaxed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <FormField
                control={form.control}
                name="locationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Location Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mapLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">Location Map Link</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* About Location */}
            <FormField
              control={form.control}
              name="aboutLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-bold text-gray-900">About The Location</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[160px] rounded-xl border-gray-200 bg-white resize-none p-6 leading-relaxed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amenities */}
            <div className="space-y-4">
              <FormLabel className="text-sm font-bold text-gray-900">Amenities</FormLabel>
              {amenityFields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center">
                  <FormField
                    control={form.control}
                    name={`amenities.${index}.value`}
                    render={({ field }) => (
                      <FormControl className="flex-1">
                        <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                      </FormControl>
                    )}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => appendAmenity({ value: "" })}
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeAmenity(index)}
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* House Rules */}
            <div className="space-y-4">
              <FormLabel className="text-sm font-bold text-gray-900">House Rules Q1</FormLabel>
              {ruleFields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center">
                  <FormField
                    control={form.control}
                    name={`rules.${index}.value`}
                    render={({ field }) => (
                      <FormControl className="flex-1">
                        <Input {...field} className="h-14 rounded-xl border-gray-200 bg-white" />
                      </FormControl>
                    )}
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => appendRule({ value: "" })}
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeRule(index)}
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Room Photos */}
            <div className="space-y-6">
              <FormLabel className="text-sm font-bold text-gray-900">Room Photos</FormLabel>
              
              <div className="flex flex-wrap gap-4">
                {images.map((src, idx) => (
                  <div key={idx} className="relative w-32 h-32 rounded-xl overflow-hidden group">
                    <img src={src} alt={`Upload ${idx}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImages((prev) => prev.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="relative">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 border-dashed border-gray-200 rounded-[24px] sm:rounded-[32px] p-8 sm:p-16 flex flex-col items-center justify-center text-center bg-[#FDFDFD]">
                  <div className="bg-gray-50 p-4 rounded-2xl mb-4 text-gray-400">
                    <Upload className="w-8 h-8 sm:w-10 h-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-600 mb-2">Click to upload or drag and drop</h4>
                  <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </main>

      {/* Sticky Footer Actions */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 py-4 z-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex justify-end gap-3 sm:gap-4">
          <Button
            variant="outline"
            className="flex-1 sm:flex-none h-12 px-6 sm:px-10 rounded-xl font-bold border-gray-200 text-gray-500"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </Button>
          <Button
            className="flex-1 sm:flex-none h-12 px-6 sm:px-10 rounded-xl font-bold bg-[#F97316] hover:bg-[#ea580c] text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default AddRoom;
