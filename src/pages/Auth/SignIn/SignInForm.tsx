import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
      authType === "normal" ? "false" : "true"
    );
    return params;
  });

  open([{ modalId: "tab", openId: "signup" }]);
};


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Email Field */}
        <h1 className="text-2xl font-semibold text-center py-4 md:py-6 ">
          Sign In
        </h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-ring  mt-4 md:mt-6 ">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[50px] md:h-[55px] rounded-[8px] border border-border  placeholder:text-ring"
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
            <FormItem>
              <FormLabel className="text-sm text-ring mt-4 md:mt-5">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-[50px] md:h-[55px] rounded-[8px] border border-border p-4 placeholder:text-ring pr-10"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <Eye className="h-4 w-4 text-black" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mt-4 md:mt-5">
          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-primary bg-white"
                  />
                </FormControl>
                <FormLabel className=" font-normal text-sm text-ring  cursor-pointer">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />

          <button
            type="button"
            className="text-sm text-primary-foreground font-medium hover:text-primary underline"
            onClick={() =>
              open([{ modalId: "tab", openId: "forgot-password" }])
            }
          >
            Forgot Password
          </button>
        </div>

        {/* Divider */}
        <div className="relative  my-6 md:my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-ring">Or Sign in with</span>
          </div>
        </div>

        {/* Google Sign In */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-11 rounded-lg border-border hover:bg-gray-50"
          onClick={() => console.log("Google sign in clicked")}
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Google
        </Button>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 bg-primary/90 hover:bg-primary text-white rounded-lg font-medium text-base  my-6 md:my-10"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Login"}
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-secondary-foreground mt-4 font-medium ">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => handleAuthParamsSet() }
            className="text-primary/95 hover:text-primary font-medium"
          >
            Sign Up
          </button>
        </p>
      </form>
    </Form>
  );
}




 
