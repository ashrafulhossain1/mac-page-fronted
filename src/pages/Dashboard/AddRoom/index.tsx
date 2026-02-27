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
import { useAddRoom, MIN_STAY_OPTIONS } from "./_components/useAddRoom";

const AddRoom = () => {
  const {
    form,
    images,
    amenityFields,
    appendAmenity,
    removeAmenity,
    ruleFields,
    appendRule,
    removeRule,
    onSubmit,
    handleImageUpload,
    removeImage,
    navigate,
  } = useAddRoom();

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans">
      {/* Header Info */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Add your Room</h1>
        <p className="text-gray-500 text-sm">
          Add availability, pricing, and details of all your listed rooms
        </p>
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
                  <FormLabel className="text-sm font-bold text-gray-900">
                    Room Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-14 rounded-xl border-gray-200 bg-white"
                    />
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
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-bold text-gray-900">
                      Room Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-14 w-full rounded-xl border-gray-200 bg-white">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="double">Double</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="ensuite">Ensuite</SelectItem>
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
                    <div className="flex flex-col gap-1">
                      <FormLabel className="text-sm font-bold text-gray-900">
                        Room Size
                      </FormLabel>
                      <p className="text-[12px] text-gray-400">
                        Please specify or add the room size in square feet (sq
                        ft).
                      </p>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="number"
                          min="0"
                          placeholder="0"
                          className="h-14 rounded-xl border-gray-200 bg-white pr-16"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none text-xs">
                          sq ft
                        </span>
                      </div>
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
                    <FormLabel className="text-sm font-bold text-gray-900">
                      Minimum Stay
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-14 w-full rounded-xl border-gray-200 bg-white">
                          <SelectValue placeholder="Select minimum stay" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {MIN_STAY_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weeklyPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-gray-900">
                      Weekly Price
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type="number"
                          min="0"
                          placeholder="0.00"
                          className="h-14 rounded-xl border-gray-200 bg-white pl-12"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none">
                          €
                        </span>
                      </div>
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
                  <FormLabel className="text-sm font-bold text-gray-900">
                    About This Room
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-[120px] rounded-xl border-gray-200 bg-white resize-none overflow-y-auto p-6 leading-relaxed"
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
                    <FormLabel className="text-sm font-bold text-gray-900">
                      Town and County
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-14 rounded-xl border-gray-200 bg-white"
                      />
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
                    <FormLabel className="text-sm font-bold text-gray-900">
                      Location Map Link (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Paste Google Maps link if available"
                        className="h-14 rounded-xl border-gray-200 bg-white"
                      />
                    </FormControl>
                    <p className="text-[12px] text-gray-400 mt-1">
                      If you're unsure how to find this, you can leave it blank.
                    </p>
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
                  <FormLabel className="text-sm font-bold text-gray-900">
                    About The Location
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-[120px] rounded-xl border-gray-200 bg-white resize-none overflow-y-auto p-6 leading-relaxed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amenities */}
            <div className="space-y-4 w-full md:w-1/2">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-sm font-bold text-gray-900">
                  Amenities
                </FormLabel>
                <p className="text-[12px] text-gray-400">
                  Add as many amenities as you need.
                </p>
              </div>
              {amenityFields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center">
                  <FormField
                    control={form.control}
                    name={`amenities.${index}.value`}
                    render={({ field }) => (
                      <FormControl className="flex-1">
                        <Input
                          {...field}
                          className="h-14 rounded-xl border-gray-200 bg-white"
                        />
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
                      onClick={() =>
                        amenityFields.length > 1 && removeAmenity(index)
                      }
                      disabled={amenityFields.length <= 1}
                      className={`w-10 h-10 border rounded-full flex items-center justify-center transition-colors ${amenityFields.length <= 1
                        ? "border-gray-100 text-gray-200 cursor-not-allowed"
                        : "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500"
                        }`}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* House Rules */}
            <div className="space-y-4 w-full md:w-1/2">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-sm font-bold text-gray-900">
                  House Rules
                </FormLabel>
                <p className="text-[12px] text-gray-400">
                  No limit - add as many rules as you need to be clear.
                </p>
              </div>
              {ruleFields.map((field, index) => (
                <div key={field.id} className="flex gap-4 items-center">
                  <FormField
                    control={form.control}
                    name={`rules.${index}.value`}
                    render={({ field }) => (
                      <FormControl className="flex-1">
                        <Input
                          {...field}
                          className="h-14 rounded-xl border-gray-200 bg-white"
                        />
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
                      onClick={() => ruleFields.length > 1 && removeRule(index)}
                      disabled={ruleFields.length <= 1}
                      className={`w-10 h-10 border rounded-full flex items-center justify-center transition-colors ${ruleFields.length <= 1
                        ? "border-gray-100 text-gray-200 cursor-not-allowed"
                        : "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500"
                        }`}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Room Photos */}
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-sm font-bold text-gray-900">
                  Room Photos
                </FormLabel>
                <div className="space-y-1">
                  <p className="text-[12px] text-gray-500 font-medium">
                    Add up to 20 photos. Horizontal (Landscape) photos are
                    highly recommended.
                  </p>
                  <p className="text-[12px] text-orange-600 font-bold italic">
                    Note: Please remove personal items (documents, personal
                    pictures, etc.) before taking photos.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-32 h-32 rounded-xl overflow-hidden group"
                  >
                    <img
                      src={src}
                      alt={`Upload ${idx}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(idx)}
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
