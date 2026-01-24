import { Container } from "@/components/layout/core";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { BookOpen, Braces, Heart } from "lucide-react";
import Link from "next/link";

// -----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="md:py-36 flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-8xl text-left text-zinc-700 font-medium">
              <span className="text-zinc-950 font-bold">Docs</span>Book
            </h1>
          </div>
          <h2 className="mt-2 text-zinc-500 border-b-0">
            We're building a
            <span className="text-rose-600 font-bold italic"> cluster</span> of
            programming & coding.
          </h2>

          <div className="md:mt-12 flex gap-4">
            <Link href="/docs/introduction">
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

          <div className="md:mt-8">
            <h5 className="flex gap-1 items-center">
              Written with{" "}
              <Heart size={16} className="fill-rose-600 text-red-600" />!
            </h5>
          </div>
        </div>
      </Container>
    </>
  );
}
