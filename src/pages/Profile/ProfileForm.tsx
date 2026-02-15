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
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import useProfile from "./use-profile";
import useModal from "@/components/Modal/useModal";
import defaultPlaceholder from "@/assets/default-placeholder.jpg";
import { useRef } from "react";

export default function ProfileForm() {
    const { form, onSubmit, isUpdating, user, handleUpload, isUploading } = useProfile();
    const { close } = useModal();
    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full max-w-[800px] mx-auto p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your account and preferences</p>
                </div>
                <button
                    onClick={() => close(["modal"])}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                    <X className="w-6 h-6 text-red-500" />
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Profile Photo */}
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                        <AvatarImage src={user?.avatar || defaultPlaceholder} className="object-cover" />
                        <AvatarFallback className="text-2xl font-bold">
                            {user?.firstName?.charAt(0) || "U"}
                            {user?.lastName?.charAt(0) || "N"}
                        </AvatarFallback>
                    </Avatar>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleUpload}
                    />
                    <Button
                        variant="secondary"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-900 gap-2"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                    >
                        {isUploading ? "Uploading..." : "Change Photo"}
                    </Button>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-medium text-gray-900">First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Mr Smith" {...field} className="h-14 px-4 py-[19px] flex items-center gap-2.5 self-stretch rounded-xl border-gray-200 bg-white" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-medium text-gray-900">Last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Khan" {...field} className="h-14 px-4 py-[19px] flex items-center gap-2.5 self-stretch rounded-xl border-gray-200 bg-white" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-medium text-gray-900">Phone Number</FormLabel>
                                        <div className="flex gap-2">
                                            <div className="flex items-center justify-center px-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 text-sm font-medium h-14 min-w-14">
                                                +88
                                            </div>
                                            <FormControl>
                                                <Input placeholder="0172548989" {...field} className="h-14 px-4 py-[19px] flex items-center gap-2.5 self-stretch rounded-xl border-gray-200 bg-white flex-1" />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="university"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-medium text-gray-900">University</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Oxford University" {...field} className="h-14 px-4 py-[19px] flex items-center gap-2.5 self-stretch rounded-xl border-gray-200 bg-white" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-medium text-gray-900">Self Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="My name is Mr Smith, I am a student."
                                                className="min-h-[120px] bg-white border-gray-200 resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="px-6 border-gray-300 text-gray-600 hover:bg-gray-50"
                                    onClick={() => form.reset()}
                                    disabled={isUpdating}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm transition-colors"
                                    disabled={isUpdating}
                                >
                                    {isUpdating ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
