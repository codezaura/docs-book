import Link from "next/link";
import { paths } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/core";
import { Header } from "@/components/layout/header";
import { BookOpen, Braces, Heart } from "lucide-react";

// -----------------------------------------------------------------------

export function MainView() {
  return (
    <div>
      <Header />
      <Container>
        <div className="py-44 md:py-36 flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-5xl md:text-8xl text-left text-zinc-700 font-medium">
              <span className="text-zinc-950 font-bold">Docs</span>Book
            </h1>
          </div>
          <h2 className="mt-2 text-2xl md:text-4xl text-center text-zinc-500 border-b-0">
            We're building a
            <span className="text-rose-600 font-bold italic"> cluster</span> of
            programming & coding.
          </h2>

          <div className="mt-12 flex gap-4">
            <Link href={paths.docs.gettingStarted.welcome}>
              <Button size="lg">
                <BookOpen />
                Start Learning
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Braces />
              Contribute
            </Button>
          </div>

          <div className="mt-8">
            <h5 className="flex gap-1 items-center">
              Written with{" "}
              <Heart size={16} className="fill-rose-600 text-red-600" />!
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
}
