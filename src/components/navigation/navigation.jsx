import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

// -----------------------------------------------------------------------

function NavigationNext({ href, title }) {
  return (
    <Link href={href}>
      <Card className="min-w-72 hover:outline-2 hover:outline-rose-600/32">
        <CardContent className="flex gap-4 items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl">Next</span>
            <span className="text-sm text-zinc-700 font-medium">{title}</span>
          </div>

          <MoveUpRight size={20} />
        </CardContent>
      </Card>
    </Link>
  );
}

// -----------------------------------------------------------------------

function NavigationPrevious({ href, title }) {
  return (
    <Link href={href}>
      <Card className="min-w-72 hover:outline-2 hover:outline-rose-600/32">
        <CardContent className="flex gap-4 items-center justify-between">
          <MoveDownLeft size={20} />

          <div className="flex flex-col items-end">
            <span className="text-2xl">Previous</span>
            <span className="text-sm text-zinc-700 font-medium">{title}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// -----------------------------------------------------------------------

export const Navigation = {
  Next: NavigationNext,
  Previous: NavigationPrevious,
};
