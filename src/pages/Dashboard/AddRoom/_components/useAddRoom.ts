import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router";

export const MIN_STAY_OPTIONS = [
    "1 Month",
    "2 Months",
    "3 Months",
    "6 Months",
    "1 Year",
    "Flexi",
] as const;

export const ROOM_TYPES = ["single", "double", "studio", "ensuite"] as const;

export const roomSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    roomType: z.enum(ROOM_TYPES),
    roomSize: z
        .string()
        .min(1, "Please enter room size")
        .regex(/^\d+$/, "Size must be a valid number"),
    minStay: z.string().min(1, "Please select minimum stay"),
    weeklyPrice: z
        .string()
        .min(1, "Please enter weekly price")
        .regex(/^\d+$/, "Price must be a valid number"),
    aboutRoom: z.string().min(20, "Description must be at least 20 characters"),
    locationName: z.string().min(5, "Town and County is required"),
    mapLink: z.string().url("Please enter a valid URL").or(z.literal("")),
    aboutLocation: z
        .string()
        .min(20, "Location description must be at least 20 characters"),
    amenities: z.array(z.object({ value: z.string() })),
    rules: z.array(z.object({ value: z.string() })),
});

export type RoomFormValues = z.infer<typeof roomSchema>;

export const useAddRoom = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState<string[]>([]);

    const form = useForm<RoomFormValues>({
        resolver: zodResolver(roomSchema),
        defaultValues: {
            title: "",
            roomType: "single",
            roomSize: "",
            minStay: "1 Month",
            weeklyPrice: "",
            aboutRoom: "",
            locationName: "",
            mapLink: "",
            aboutLocation: "",
            amenities: [{ value: "" }],
            rules: [{ value: "" }],
        },
    });

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
        name: "rules",
    });

    const onSubmit = (data: RoomFormValues) => {
        console.log("Form Data:", data);
        alert(
            "Room added successfully! Note: After any guest payment, an automated receipt with all booking details will be sent to them immediately."
        );
        navigate("/dashboard");
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages = Array.from(files).map((file) =>
                URL.createObjectURL(file),
            );
            setImages((prev) => [...prev, ...newImages]);
        }
    };

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    return {
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
    };
};
