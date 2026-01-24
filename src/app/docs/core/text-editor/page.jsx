import { Navigation } from "@/components/navigation";
import { Main } from "../../components/main";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export default function Page() {
  return (
    <Main>
      <div className="mt-16 mb-8 flex gap-4">
        <Navigation.Previous
          title="Source file"
          href={paths.docs.core.sourceFile}
        />
        <Navigation.Next title="Git" href={paths.docs.core.git} />
      </div>
    </Main>
  );
}
