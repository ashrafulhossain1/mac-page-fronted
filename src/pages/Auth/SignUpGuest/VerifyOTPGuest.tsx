import { useRef } from "react";
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

export default function VerifyOTPGuest({
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
        const newCode = codeArray.join("").padEnd(6, "").slice(0, 6);
        form.setValue("code", newCode, { shouldValidate: true });

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
        if (!/^\d+$/.test(pasteData)) return;

        const codeArray = pasteData.split("").slice(0, 6);
        form.setValue("code", codeArray.join("").padEnd(6, "").slice(0, 6), { shouldValidate: true });

        // fill inputs and focus last pasted
        codeArray.forEach((digit, i) => {
            if (inputRefs.current[i]) {
                inputRefs.current[i]!.value = digit;
            }
        });
        const lastIndex = Math.min(codeArray.length, 5);
        inputRefs.current[lastIndex]?.focus();
    };

    return (
        <div className="max-w-md mx-auto  p-2 rounded-3xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-center mb-2 text-black leading-tight">
                Enter 6 digit code
            </h2>
            <p className="text-base md:text-lg text-center text-[#7E7E7E] mb-10">
                We've sent verification your email
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex justify-between gap-2 md:gap-3">
                                        {[...Array(6)].map((_, i) => (
                                            <Input
                                                key={i}
                                                type="text"
                                                maxLength={1}
                                                className="w-12 h-16 md:w-14 md:h-16 text-center text-xl font-medium rounded-2xl border-gray-200 focus:border-[#FF7A1A] focus:ring-[#FF7A1A] transition-all text-[#ADADAD]"
                                                value={field.value[i] || ""}
                                                onChange={(e) => handleChange(i, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(i, e)}
                                                onPaste={handlePaste}
                                                ref={(el) => {
                                                    if (el) inputRefs.current[i] = el;
                                                }}
                                            />
                                        ))}
                                    </div>
                                </FormControl>
                                <FormMessage className="text-center" />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full h-16 rounded-[1.25rem] bg-[#FF7A1A] hover:bg-[#e66d17] text-white text-xl font-bold transition-all shadow-sm"
                    >
                        Verify
                    </Button>
                </form>
            </Form>
        </div>
    );
}
