import { paths } from "@/routes/paths";
import { Telescope, BrainCircuit, MonitorCog, Cpu } from "lucide-react";

export const NavConfigs = [
  {
    title: "Getting Started",
    icon: Telescope,
    children: [
      { title: "Welcome", url: paths.docs.gettingStarted.welcome },
      { title: "Pre Knowledge", url: paths.docs.gettingStarted.preKnowledge },
      {
        title: "Core knowledge",
        url: paths.docs.gettingStarted.coreKnowledge,
      },
    ],
  },
  {
    title: "Core",
    icon: Cpu,
    children: [
      { title: "Source file", url: paths.docs.core.sourceFile },
      {
        title: "Text Editor",
        url: paths.docs.core.textEditor,
      },
      { title: "Git", url: paths.docs.core.git },
    ],
  },
];
