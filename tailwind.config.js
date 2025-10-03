@import "tailwindcss/preflight";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Optional global resets */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
