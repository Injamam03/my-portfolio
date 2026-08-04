export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  screenColor: string; // temp gradient color for phone mockup, replace with real screenshot later
  playStoreUrl?: string;
  githubUrl?: string;
};

// TODO: Tomar real app project gulo diye ei array replace koro.
// screenColor er jaygay pore ekta real screenshot image lagabo.
export const projects: Project[] = [
  {
    id: "app-one",
    name: "Project One",
    tagline: "One line tagline of the app",
    description:
      "Short description of what this app does and the problem it solves for users.",
    stack: ["Flutter", "Firebase", "Riverpod"],
    screenColor: "from-[#3A2E00] to-[#0d0d0f]",
  },
  {
    id: "app-two",
    name: "Project Two",
    tagline: "One line tagline of the app",
    description:
      "Short description of what this app does and the problem it solves for users.",
    stack: ["Flutter", "REST API", "Bloc"],
    screenColor: "from-[#00302B] to-[#0d0d0f]",
  },
  {
    id: "app-three",
    name: "Project Three",
    tagline: "One line tagline of the app",
    description:
      "Short description of what this app does and the problem it solves for users.",
    stack: ["Flutter", "SQLite", "Provider"],
    screenColor: "from-[#2A1400] to-[#0d0d0f]",
  },
];
