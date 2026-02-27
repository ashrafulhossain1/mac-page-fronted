
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

import type { TAuthDataType } from "@/types/auth";

const formSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    isTermsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function StartSignup({
  setStep,
  authData,
  setAuthData,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  authData: TAuthDataType;
  setAuthData: React.Dispatch<React.SetStateAction<TAuthDataType>>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: authData.hostData.email || "",
      password: authData.hostData.password || "",
      confirmPassword: authData.hostData.confirmPassword || "",
      isTermsAccepted: authData.hostData.isTermsAccepted || false,
    },
    // mode: "onChange",
  });



  const onSubmit = (data: FormValues) => {

    if (data.email && data.password && data.confirmPassword) {
      setAuthData((prev) => ({
        ...prev,
        hostData: {
          ...prev.hostData,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          isTermsAccepted: data.isTermsAccepted,
        },
      }));
    }

    setStep((prev) => prev + 1);
  };

  return (
    <div className="w-full rounded-2xl p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Let’s get started
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="h-12 rounded-xl"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="h-12 rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      className="absolute right-3 top-3 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="h-12 rounded-xl pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirm((prev) => !prev)
                      }
                      className="absolute right-3 top-3 text-muted-foreground"
                    >
                      {showConfirm ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms */}
          <FormField
            control={form.control}
            name="isTermsAccepted"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="flex flex-col ">
                  <p className="text-sm text-muted-foreground">
                    I agree to the terms and conditions and privacy policy.
                  </p>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* <FormMessage /> */}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-lg"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
