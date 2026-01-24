import { Navigation } from "@/components/navigation";
import { Main } from "../../components/main";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export function CoreTextEditorView() {
  return (
    <Main>
      <div className="flex-1">
        <Navigation>
          <Navigation.Previous
            title="Source file"
            href={paths.docs.core.sourceFile}
          />
          <Navigation.Next title="Git" href={paths.docs.core.git} />
        </Navigation>
      </div>
    </Main>
  );
}
