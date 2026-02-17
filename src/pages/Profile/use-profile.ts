import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
// import { useGetMeQuery, useUpdateProfileMutation, useUploadPhotoMutation } from "@/store/api/user.api";
import { useEffect, useMemo } from "react";

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().optional(),
    university: z.string().optional(),
    bio: z.string().optional(),
});

export type ProfileFormValues = z.infer<typeof formSchema>;

export default function useProfile() {
    const user = useMemo(() => ({
        firstName: "",
        lastName: "",
        avatar: "/profile.jpg",
        phone: "",
        university: "",
        bio: ""
    }), []);

    // Mock loading states
    const isUserLoading = false;
    const isUpdating = false;
    const isUploading = false;

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            university: "",
            bio: "",
        },
    });

    useEffect(() => {
        if (user) {
            form.reset({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                phone: user.phone || "",
                university: user.university || "",
                bio: user.bio || "",
            });
        }
    }, [form, user]);

    const onSubmit = async (values: ProfileFormValues) => {
        console.log("Form Values Submitted:", values);
        toast.success("Profile settings updated! (Check Console)");

    };

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        console.log("File Selected for Upload:", file);
        toast.success("Profile photo selected! (Check Console)");


    };

    return { form, onSubmit, isUserLoading, isUpdating, user, handleUpload, isUploading };
}
