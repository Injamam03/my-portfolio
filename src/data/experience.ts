export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Junior Flutter Developer",
    company: "Sparktech Agency",
    companyUrl: "https://www.sparktech.agency/",
    current: true,
    stack: ["Flutter", "Dart", "Firebase", "REST API"],
    points: [
      "Built and maintained mobile app features used by real users.",
      "Collaborated with the team to ship updates across Android & iOS.",
      "Integrated REST APIs and Firebase services into production apps.",
      "Translated Figma designs into responsive, pixel-accurate UI components.",
    ],
  },
];