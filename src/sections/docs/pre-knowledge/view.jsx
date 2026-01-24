import { paths } from "@/routes/paths";
import { Navigation } from "@/components/navigation";
import { Main } from "@/sections/docs/components/main";
import { InternalNavigation } from "@/components/internal-navigation";

// -----------------------------------------------------------------------

export function PreKnowledgeView() {
  return (
    <Main>
      <div className="flex-1">
        <h1>Pre-Knowledge</h1>

        <p className="mt-3">
          Before diving-in, We'll clear our basic concepts!
        </p>

        <h3 id="why-do-we-code" className="mt-8">
          Why do we code?
        </h3>

        <Navigation>
          <Navigation.Previous
            title="Welcome"
            href={paths.docs.gettingStarted.welcome}
          />
          <Navigation.Next
            title="Source file"
            href={paths.docs.core.sourceFile}
          />
        </Navigation>
      </div>

      <InternalNavigation navList={NavData} />
    </Main>
  );
}

// -----------------------------------------------------------------------

const NavData = [{ title: "Why do we code?", path: "#why-do-we-code" }];
