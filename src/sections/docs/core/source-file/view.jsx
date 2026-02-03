import { Navigation } from "@/components/navigation";
import { Main } from "../../components/main";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export function CoreSourceFileView() {
  return (
    <Main>
      <div className="flex-1">
        <Navigation>
          <Navigation.Previous
            title="Core Knowledge"
            href={paths.docs.gettingStarted.coreKnowledge}
          />
          <Navigation.Next
            title="Text Editor"
            href={paths.docs.core.textEditor}
          />
        </Navigation>
      </div>
    </Main>
  );
}
