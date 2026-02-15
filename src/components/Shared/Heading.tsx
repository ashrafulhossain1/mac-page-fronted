import { cn } from "@/lib/utils";

type HeadingProps = {
  title: string;
  subtitle?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badge?: string;
  badgeClassName?: string;
};

export default function Heading({
  title,
  subtitle,
  containerClassName,
  titleClassName,
  subtitleClassName,
  badge,
  badgeClassName,
}: HeadingProps) {
  return (
    <div className={cn("px-4 text-center", containerClassName)}>
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 mb-5 text-sm font-medium text-primary bg-secondary rounded-full",
            badgeClassName
          )}
        >
          Simple 4-Step Process
        </span>
      )}

      <h1
        className={cn(
          "text-4xl lg:text-[40px] text-primary-foreground font-semibold mb-3 md:mb-4",
          titleClassName
        )}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl text-secondary-foreground",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
