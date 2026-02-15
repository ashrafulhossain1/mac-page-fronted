import useModal from "@/components/Modal/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberMe: z.boolean().optional(),
});

export default function useSignIn() {
  const { close } = useModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Sign In Form Values: Ash:", values);

    // TODO: Add API integration here in future
    // For now, just log and close modal

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Close modal after successful "login"
    close(["modal", "tab"]);
  }

  return { form, onSubmit };
}
