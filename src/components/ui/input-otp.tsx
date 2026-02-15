"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InputOTPProps extends React.InputHTMLAttributes<HTMLInputElement> {
    length?: number
    onComplete?: (value: string) => void
}

const InputOTP: React.FC<InputOTPProps> = ({ className, length = 6, onComplete, ...props }) => {
    const [values, setValues] = React.useState<string[]>(Array(length).fill(""))
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        // Only allow single digit
        if (value.length > 1) {
            value = value.charAt(value.length - 1)
        }

        // Only allow numbers
        if (value && !/^\d$/.test(value)) return

        const newValues = [...values]
        newValues[index] = value
        setValues(newValues)

        // Auto-focus next input
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus()
        }

        // Call onComplete when all filled
        const fullValue = newValues.join("")
        if (fullValue.length === length && onComplete) {
            onComplete(fullValue)
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Handle backspace
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData("text").slice(0, length)

        if (!/^\d+$/.test(pastedData)) return

        const newValues = [...values]
        pastedData.split("").forEach((char, index) => {
            if (index < length) {
                newValues[index] = char
            }
        })
        setValues(newValues)

        // Focus the next empty input or last input
        const nextIndex = Math.min(pastedData.length, length - 1)
        inputRefs.current[nextIndex]?.focus()

        // Call onComplete if fully filled
        const fullValue = newValues.join("")
        if (fullValue.length === length && onComplete) {
            onComplete(fullValue)
        }
    }

    return (
        <div className={cn("flex gap-2 md:gap-3", className)}>
            {values.map((value, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold rounded-[8px] border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-background"
                    {...props}
                />
            ))}
        </div>
    )
}

InputOTP.displayName = "InputOTP"

export { InputOTP }
