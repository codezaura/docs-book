import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------

export function Container({ children, maxWidth = "md", className }) {
  const maxWidthClasses = {
    sm: "max-w-3xl",
    md: "max-w-6xl",
    lg: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-2 md:px-6",
        maxWidthClasses[maxWidth] || "max-w-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
