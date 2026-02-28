import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useModal from "@/components/Modal/useModal";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import useSignIn from "./use-sign-in";
import { useSearchParams } from "react-router";

export default function SignInForm() {
  const { open } = useModal();
  const { form, onSubmit } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const authType = searchParams.get("authType") || "normal";

  const handleAuthParamsSet = () => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("user-type-selector", "false");
      params.set(
        "user-type-selected",
        authType === "normal" ? "false" : "true",
      );
      return params;
    });

    open([{ modalId: "tab", openId: "signup" }]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-center pt-4 md:pt-6">
          Welcome back!
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-400 text-center mt-1 lg:mt-2 mb-3 md:mb-4 lg:mb-6">
          Please enter your email & password
        </p>

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-[50px]  md:h-[55px] rounded-[16px]  border-none bg-gray-100 px-3 md:px-5 placeholder:text-gray-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="h-[50px] md:h-[54px] border-none bg-gray-100 rounded-[16px]  px-3 md:px-5 pr-12 placeholder:text-gray-500"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Forgot Password */}
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="text-sm text-primary-foreground font-medium hover:text-primary"
            onClick={() =>
              open([{ modalId: "tab", openId: "forgot-password" }])
            }
          >
            Forgot Password
          </button>
        </div>

        {/* Log In Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 bg-primary/90 hover:bg-primary text-white rounded-[16px] font-medium text-base mt-6 md:mt-8 mb-6 md:mb-10"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Log In"}
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-secondary-foreground font-medium">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => handleAuthParamsSet()}
            className="text-primary/95 hover:text-primary font-medium"
          >
            Sign Up
          </button>
        </p>
      </form>
    </Form>
  );
}
