import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = React.ComponentProps<typeof Button> & {
  textClassName?: string;
};

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children = "Sell Now", className, textClassName, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "cursor-pointer text-background rounded-full py-3.5",
          className
        )}
        {...props}
      >
        <span className={cn("px-5", textClassName)}>{children}</span>
      </Button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
