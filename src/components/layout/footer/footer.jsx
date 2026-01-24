import { Logo } from "@/components/logo";
import { Heart } from "lucide-react";

// -----------------------------------------------------------------------

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 w-full border-t border-zinc-200 bg-white  dark:border-zinc-800 dark:bg-zinc-950">
      <div className="md:px-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <p className="mt-0 text-sm text-zinc-500 dark:text-zinc-400">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
