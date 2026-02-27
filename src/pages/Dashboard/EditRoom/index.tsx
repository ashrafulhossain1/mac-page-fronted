import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Minus, X } from "lucide-react";
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

import room1 from "@/assets/home/room-1.png";
import room2 from "@/assets/home/room-2.png";
import room3 from "@/assets/home/room-3.png";
import BookingStatusWidget from "./_components/BookingStatusWidget";

const roomSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  type: z.string().min(1, "Please select a room type"),
  size: z.string().min(1, "Please enter room size").refine((val) => Number(val) >= 0, "Size cannot be negative"),
  minStay: z.string().min(1, "Please enter minimum stay"),
  price: z.string().min(1, "Please enter weekly price").refine((val) => { const num = parseFloat(val.replace(/[^0-9.]/g, '')); return !isNaN(num) && num >= 0; }, "Price cannot be negative"),
  about: z.string().min(20, "Please provide a more detailed description"),
  locationName: z.string().min(3, "Location name is required"),
  locationMap: z.string().url("Please enter a valid Google Maps URL"),
  aboutLocation: z.string().min(20, "Please provide location details"),
  amenities: z.array(z.object({ value: z.string() })).min(1, "Add at least one amenity"),
  houseRules: z.array(z.object({ value: z.string() })).min(1, "Add at least one rule"),
});

import { useParams } from "react-router";
import { listings } from "@/data/dashboard";
import { useEffect, useState } from "react";

type RoomFormValues = z.infer<typeof roomSchema>;

const EditRoom = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([room1, room2, room3]);
  const { id } = useParams();
  const listing = listings.find((l) => l.id === Number(id));

  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      title: listing?.title || "Shared Room with busy space",
      type: "Single",
      size: "45",
      minStay: "1 month",
      price: listing ? `€${listing.price}` : "€485",
      about: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
      locationName: listing?.location || "Dublin 2, Ireland",
      locationMap: "https://maps.app.goo.gl/hNepxT7u5ygA2rL68A",
      aboutLocation: "It's a stunning location with great access to Limerick’s city centre. The area has great walks and a beautiful garden. Jetland Shopping Centre with a cinema and Dunnes is just 15 mins walk, we are only 25 mins by bus to the city centre so this location will suit many of the students and professionals.",
      amenities: [{ value: "WiFi" }],
      houseRules: [{ value: "No smoking" }],
    },
  });

  // Reset form if listing changes (e.g. if navigating between rooms)
  useEffect(() => {
    if (listing) {
      form.reset({
        title: listing.title,
        type: "Single",
        size: "45",
        minStay: "1 month",
        price: `€${listing.price}`,
        about: "A comfortable single room perfect for students, located in the heart of the city. Close to universities, public transport, and all amenities. The room is fully furnished with a comfortable bed, study desk, and wardrobe. Shared kitchen and bathroom facilities are modern and well-maintained.",
        locationName: listing.location,
        locationMap: "https://maps.app.goo.gl/hNepxT7u5ygA2rL68A",
        aboutLocation: "It's a stunning location with great access to Limerick’s city centre. The area has great walks and a beautiful garden. Jetland Shopping Centre with a cinema and Dunnes is just 15 mins walk, we are only 25 mins by bus to the city centre so this location will suit many of the students and professionals.",
        amenities: [{ value: "WiFi" }],
        houseRules: [{ value: "No smoking" }],
      });
    }
  }, [listing, form]);

  const {
    fields: amenityFields,
    append: appendAmenity,
    remove: removeAmenity,
  } = useFieldArray({
    control: form.control,
    name: "amenities",
  });

  const {
    fields: ruleFields,
    append: appendRule,
    remove: removeRule,
  } = useFieldArray({
    control: form.control,
    name: "houseRules",
  });


  // for images
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("before Array convert", files)

    if (files) {
      const newImages = Array.from(files).map(file => {
        return URL.createObjectURL(file)
      });
      setImages((prev) => [...prev, ...newImages]);
    }
  }

  // remove rooms
  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };


  const onSubmit = (data: RoomFormValues) => {
    // In a real app, you would make an API call here to update the room
    console.log("Saving room data for ID:", id, data);

    // Simulate API delay

    setTimeout(() => {
      // Navigate back to listing management
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-10 pb-32">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10">
        <div>
          <h1 className="text-lg font-medium text-gray-900 mb-1">Manage Your Rooms</h1>
          <p className="text-gray-400 text-sm">Control availability, pricing, and details of all your listed rooms.</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto rounded-xl border-cyan-500 text-cyan-500 hover:bg-cyan-50 px-8 h-11 font-bold">
          Pause your room
        </Button>
      </div>

      <BookingStatusWidget />

      {/* Hero Image Preview */}
      <div className="relative w-full h-[240px] sm:h-[400px] md:h-[445px] rounded-[32px]  mb-12 group  border-gray-100  p-6 border">
        <img src={room1} alt="Room hero" className="w-full h-full object-cover rounded-[14px]" />
        <div className="absolute inset-0 bg-black/5 opacity-100 sm:opacity-0 rounded-[32px] sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button className="bg-white/90 text-gray-900 hover:bg-white rounded-xl px-6 font-bold h-11 border border-gray-200 shadow-sm">
            Change Cover
          </Button>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          {/* Room Basic Details Group */}
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-bold text-sm">Room Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Room Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Single">Single</SelectItem>
                        <SelectItem value="Double">Double</SelectItem>
                        <SelectItem value="Studio">Studio</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Room Size</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min="0" placeholder="sq ft" className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="minStay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Minimum Stay</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Weekly Price</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min="0" className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 font-bold shadow-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-bold text-sm">About This Room</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-[120px] p-4 rounded-xl bg-white border-gray-200 text-gray-500 leading-relaxed resize-none overflow-y-auto shadow-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="h-px bg-gray-100" />

          {/* Location Group */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="locationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Location Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="locationMap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-900 font-bold text-sm">Location Map Link</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-400 text-sm shadow-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="aboutLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 font-bold text-sm">About The Location</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-[120px] p-4 rounded-xl bg-white border-gray-200 text-gray-500 leading-relaxed resize-none overflow-y-auto shadow-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="h-px bg-gray-100" />

          {/* Amenities & Rules */}
          <div className="space-y-8">
            {/* Amenities */}
            <div className="space-y-4">
              <FormLabel className="text-gray-900 font-bold text-sm m-0">Amenities</FormLabel>
              <div className="space-y-3">
                {amenityFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <FormField
                      control={form.control}
                      name={`amenities.${index}.value` as const}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => appendAmenity({ value: "" })}
                      className="h-12 w-12 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-gray-50 bg-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => amenityFields.length > 1 && removeAmenity(index)}
                      disabled={amenityFields.length <= 1}
                      className={`h-12 w-12 rounded-full border bg-white flex items-center justify-center transition-colors ${amenityFields.length <= 1
                        ? "border-gray-100 text-gray-200 cursor-not-allowed"
                        : "border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50"
                        }`}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div className="space-y-4">
              <FormLabel className="text-gray-900 font-bold text-sm m-0">House Rules 01</FormLabel>
              <div className="space-y-3">
                {ruleFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <FormField
                      control={form.control}
                      name={`houseRules.${index}.value` as const}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="h-12 px-4 rounded-xl bg-white border-gray-200 text-gray-900 shadow-sm" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="button"
                      onClick={() => appendRule({ value: "" })}
                      className="h-12 w-12 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-gray-50 bg-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => ruleFields.length > 1 && removeRule(index)}
                      disabled={ruleFields.length <= 1}
                      className={`h-12 w-12 rounded-full border bg-white flex items-center justify-center transition-colors ${ruleFields.length <= 1
                        ? "border-gray-100 text-gray-200 cursor-not-allowed"
                        : "border-gray-200 text-gray-400 hover:text-red-500 hover:bg-red-50"
                        }`}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Upload Section */}
          <div className="space-y-4">
            <FormLabel className="text-gray-900 font-bold text-sm">Room Photos</FormLabel>

            <div className="flex flex-wrap gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative w-28 h-24 rounded-2xl overflow-hidden group shadow-sm border border-gray-100">
                  <img src={img} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeImage(idx)}
                    type="button" className="absolute top-1 right-1 bg-white/60 hover:bg-white rounded-full p-1 transition-colors">
                    <X className="w-3.5 h-3.5 text-gray-600" />
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
                <div className=" p-4 rounded-2xl mb-2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 51 40"
                    fill="none"
                  >
                    <path
                      d="M1 29.125L13.8975 16.2275C14.4198 15.7052 15.0399 15.2908 15.7224 15.0081C16.4049 14.7254 17.1363 14.58 17.875 14.58C18.6137 14.58 19.3451 14.7254 20.0276 15.0081C20.7101 15.2908 21.3302 15.7052 21.8525 16.2275L34.75 29.125M31 25.375L34.5225 21.8525C35.0448 21.3302 35.6649 20.9158 36.3474 20.6331C37.0299 20.3504 37.7613 20.205 38.5 20.205C39.2387 20.205 39.9701 20.3504 40.6526 20.6331C41.3351 20.9158 41.9552 21.3302 42.4775 21.8525L49.75 29.125M4.75 38.5H46C46.9946 38.5 47.9484 38.1049 48.6516 37.4016C49.3549 36.6984 49.75 35.7446 49.75 34.75V4.75C49.75 3.75544 49.3549 2.80161 48.6516 2.09835C47.9484 1.39509 46.9946 1 46 1H4.75C3.75544 1 2.80161 1.39509 2.09835 2.09835C1.39509 2.80161 1 3.75544 1 4.75V34.75C1 35.7446 1.39509 36.6984 2.09835 37.4016C2.80161 38.1049 3.75544 38.5 4.75 38.5ZM31 10.375H31.02V10.395H31V10.375ZM31.9375 10.375C31.9375 10.6236 31.8387 10.8621 31.6629 11.0379C31.4871 11.2137 31.2486 11.3125 31 11.3125C30.7514 11.3125 30.5129 11.2137 30.3371 11.0379C30.1613 10.8621 30.0625 10.6236 30.0625 10.375C30.0625 10.1264 30.1613 9.8879 30.3371 9.71209C30.5129 9.53627 30.7514 9.4375 31 9.4375C31.2486 9.4375 31.4871 9.53627 31.6629 9.71209C31.8387 9.8879 31.9375 10.1264 31.9375 10.375Z"
                      stroke="#707070"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-400 mb-2">
                  Click to upload or drag and drop
                </h4>
                <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-4 z-50">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex justify-between items-center">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-700 text-white px-8 h-11 rounded-xl font-bold text-sm"
              >
                Delete This Room
              </Button>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="px-8 h-11 rounded-xl font-bold text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-8 h-11 rounded-xl font-bold bg-[#F97316] hover:bg-[#ea580c] text-white"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditRoom;
