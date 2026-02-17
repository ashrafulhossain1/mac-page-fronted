import useModal from "@/components/Modal/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(1, { message: "Full name is required." }),
    university: z.string().optional(),
    dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
    nationality: z.string().min(1, { message: "Please select your nationality." }),
    selfDescription: z.string().optional(),
});

export type SignUpFormValues = z.infer<typeof formSchema>;

export default function useSignUp() {
    const { close } = useModal();

    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            university: "",
            dateOfBirth: "",
            nationality: "",
            selfDescription: "",
        },
    });

    async function onSubmit(values: SignUpFormValues) {
        console.log("Sign Up Form Values:", values);

        // TODO: Add API integration here in future
        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Close modal after successful sign up
        close(["modal", "tab"]);
    }

    return { form, onSubmit };
}
