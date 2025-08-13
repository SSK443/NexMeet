import { useTheme } from "next-themes"; // Remove this if not using Next.js
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme(); // Remove or replace with Tailwind logic

  // Since we're not using next-themes, hardcode theme and rely on Tailwind's dark mode
  const effectiveTheme = "system"; // Default to system; Tailwind handles via 'dark' class

  return (
    <Sonner
      theme={effectiveTheme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)", // Matches shadcn/ui popover
          "--normal-text": "var(--popover-foreground)", // Matches shadcn/ui text
          "--normal-border": "var(--border)", // Matches shadcn/ui border
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
