import { paths } from "@/routes/paths";
import { Navigation } from "@/components/navigation";
import { Main } from "@/sections/docs/components/main";
import { InternalNavigation } from "@/components/internal-navigation";

// -----------------------------------------------------------------------

export function PreKnowledgeView() {
  return (
    <Main>
      <div className="flex-1">
        <h1>Pre Knowledge</h1>

        <p>
          In the world of programming, It might be difficult to choose and start
          in right way! <br />
          To simplify the process of learning the{" "}
          <span className="italic font-medium">Web</span> and related stuff.
        </p>

        <h3 id="why-do-we-code">Why do we code?</h3>

        <p>
          At its core, we code to make computers do useful work for us.
          <br />
          Computers are very powerful, but they are also{" "}
          <span className="font-medium italic">very dumb</span>. <br />
          They don’t “understand” intentions. They only follow clear, exact
          instructions.
        </p>

        <p>
          Coding is like:
          <ul className="px-4 list-disc list-inside">
            <li>Telling computers what to do</li>
            <li>Telling them how to do it</li>
            <li>Telling them when to do it</li>
          </ul>
        </p>

        <div>
          <blockquote className="font-medium">
            Coding is the art of turning human ideas into instructions a machine
            can follow.
          </blockquote>
        </div>

        <h3 id="who-writes-code">Who writes code?</h3>

        <p>
          In short, <span className="font-medium">We!</span> <br />
          Every app you use, every website you visit, every{" "}
          <span className="italic font-medium">smart</span> feature you see—{" "}
          <span className="italic font-medium">someone coded it</span>.
        </p>

        <p>Have a look at a real life example what is actually coding is!</p>

        <blockquote>
          <ol className="list-decimal list-inside font-medium">
            <li>Take a cup</li>
            <li>Pour water</li>
            <li>Drink</li>
          </ol>
        </blockquote>

        <p>
          We can assume that every task we perform in our daily life are just
          instructions and can be coded. <br />
          Coding is nothing just set of instructions.
        </p>

        <Navigation>
          <Navigation.Previous
            title="Welcome"
            href={paths.docs.gettingStarted.welcome}
          />
          <Navigation.Next
            title="Core knowledge"
            href={paths.docs.gettingStarted.coreKnowledge}
          />
        </Navigation>
      </div>

      <InternalNavigation navList={NavData} />
    </Main>
  );
}

// -----------------------------------------------------------------------

const NavData = [
  { title: "Why do we code?", path: "#why-do-we-code" },
  {
    title: "Who writes code?",
    path: "#who-writes-code",
  },
];
