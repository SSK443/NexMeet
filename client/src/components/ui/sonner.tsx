import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  // Fallback to 'system' theme, relying on Tailwind's dark mode
  const theme = "system"; // Default to system; Tailwind handles dark mode via 'dark' class

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)", // Matches shadcn/ui popover background
          "--normal-text": "var(--popover-foreground)", // Matches shadcn/ui text
          "--normal-border": "var(--border)", // Matches shadcn/ui border
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
