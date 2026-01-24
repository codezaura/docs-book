import { paths } from "@/routes/paths";
import { Main } from "../components/main";
import { Navigation } from "@/components/navigation";
import { InternalNavigation } from "@/components/internal-navigation";

// -----------------------------------------------------------------------

export function WelcomeView() {
  return (
    <Main>
      <div className="flex-1">
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
          <code>Git</code>, <code>GitHub</code>, <code>Next.js</code> and
          beyond.
        </p>

        <Navigation>
          <Navigation.Next
            title="Pre Knowledge"
            href={paths.docs.gettingStarted.preKnowledge}
          />
        </Navigation>
      </div>

      <InternalNavigation navList={NavData} />
    </Main>
  );
}

// -----------------------------------------------------------------------

const NavData = [
  { title: "Welcome", path: "#" },
  { title: "Quick overview", path: "#quick-overview" },
];
