import { InternalNavigation } from "@/components/internal-navigation";
import { Main } from "../components/main";
import { Navigation } from "@/components/navigation";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export function CoreKnowledgeView() {
  return (
    <Main>
      <div className="flex-1">
        <h1>Core Knowledge</h1>

        <h3>Concepts</h3>

        <p>
          The core concept behind coding is giving instructions to a machine to
          perform tasks.
        </p>

        <Navigation>
          <Navigation.Previous
            title="Pre Knowledge"
            href={paths.docs.gettingStarted.preKnowledge}
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

const NavData = [{ title: "Concepts", path: "#" }];
