import Link from "next/link";
import { Main } from "../components/main";
import { MoveUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export default function Page() {
  return (
    <Main>
      <h1>
        <a href="#welcome">Welcome</a>
      </h1>

      <p className="mt-3">
        Your Gateway to Mastering Programming & Development Concepts
      </p>

      <p>
        <span className="font-medium italic">DocsBook</span>-alpha is a
        developer documentation platform designed to bridge the gap between
        learning and building. Our mission is to make programming concepts
        accessible, engaging, and practical — no matter your experience level.
      </p>

      <h3 className="mt-8">Quick overview</h3>

      <p className="mt-1">
        Unlock the world of programming with clear explanations, real-world
        examples, and deep dives into core concepts — from{" "}
        <code>JavaScript</code> &<code>React</code> to <code>Node.js</code>,{" "}
        <code>Git</code>, <code>GitHub</code>, <code>Next.js</code> and beyond.
      </p>

      <div className="mt-16 mb-8 flex gap-4">
        <Navigation.Next
          title="Pre Knowledge"
          href={paths.docs.gettingStarted.preKnowledge}
        />
      </div>
    </Main>
  );
}
