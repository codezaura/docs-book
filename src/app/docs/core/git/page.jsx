import { Navigation } from "@/components/navigation";
import { Main } from "../../components/main";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export default function Page() {
  return (
    <Main>
      <div className="mt-16 mb-8 flex gap-4">
        <Navigation.Previous
          title="Text Editor"
          href={paths.docs.core.textEditor}
        />
      </div>
    </Main>
  );
}
