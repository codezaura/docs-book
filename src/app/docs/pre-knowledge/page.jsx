import { Navigation } from "@/components/navigation";
import { Main } from "../components/main";
import { paths } from "@/routes/paths";

// -----------------------------------------------------------------------

export default function Page() {
  return (
    <Main>
      <h1>Pre-Knowledge</h1>

      <div className="mt-16 mb-8 flex gap-4">
        <Navigation.Previous
          title="Welcome"
          href={paths.docs.gettingStarted.welcome}
        />
        <Navigation.Next
          title="Source file"
          href={paths.docs.core.sourceFile}
        />
      </div>
    </Main>
  );
}
