import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------------

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-700"
      >
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
      <span className="text-xl font-sans tracking-tighter text-zinc-700 dark:text-zinc-50">
        <span className="font-medium text-zinc-950">Docs</span>
        Book
      </span>
    </Link>
  );
}
