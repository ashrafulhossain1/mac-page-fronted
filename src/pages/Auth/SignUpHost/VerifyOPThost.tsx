 

import {  useRef } from "react";
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

const codeSchema = z.object({
  code: z
    .string()
    .length(6, "Code must be exactly 6 digits")
    .regex(/^\d{6}$/, "Code must contain only numbers"),
});

type FormValues = z.infer<typeof codeSchema>;

export default function VerifyOPThost({
  setStep
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: "",
    },
  });

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // auto focus next input
  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // only allow single digit
    const codeArray = form.getValues("code").split("");
    codeArray[index] = value;
    form.setValue("code", codeArray.join("").padEnd(6, ""));
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !form.getValues("code")[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setStep((prev) => prev + 1);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
  e.preventDefault();
  const pasteData = e.clipboardData.getData("text").trim();
  if (!/^\d{1,6}$/.test(pasteData)) return;

  const codeArray = pasteData.split("").slice(0, 6);
  form.setValue("code", codeArray.join("").padEnd(6, ""));

  // fill inputs and focus last pasted
  codeArray.forEach((digit, i) => {
    if (inputRefs.current[i]) {
      inputRefs.current[i]!.value = digit;
    }
  });
  const lastIndex = codeArray.length - 1;
  inputRefs.current[lastIndex]?.focus();
};


  return (
    <div className="max-w-110 mx-auto  bg-white p-6 rounded-2xl  ">
      <h2 className="text-3xl font-bold text-center mb-2">
        Enter 6 digit code
      </h2>
      <p className="text-sm text-center text-muted-foreground mb-6">
        We’ve sent verification code to your email
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex justify-between gap-2">
                    {[...Array(6)].map((_, i) => (
                      <Input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center text-lg rounded-xl border border-muted-foreground"
                        value={field.value[i] || ""}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                        onPaste={handlePaste}
                        ref={(el) => void (inputRefs.current[i] = el!)}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-lg"
          >
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
}
