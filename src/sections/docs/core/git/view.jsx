import { Navigation } from "@/components/navigation";
import { Main } from "../../components/main";
import { InternalNavigation } from "@/components/internal-navigation";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export function CoreGitView() {
  return (
    <Main>
      <div className="flex-1">
        <h1>Git</h1>
        <Navigation>
          <Navigation.Previous
            title="Text Editor"
            href={paths.docs.core.textEditor}
          />
        </Navigation>
      </div>

      <InternalNavigation navList={NavData} />
    </Main>
  );
}

// -----------------------------------------------------------------------

const NavData = [{ title: "What is git?", path: "#what-is-git" }];
