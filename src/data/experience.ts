export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

// TODO: Tomar real work experience diye replace koro
export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    company: "Your Company Name",
    period: "2025 — Present",
    points: [
      "Built and maintained X mobile app(s) used by Y+ users.",
      "Worked with the team to ship features across Android & iOS.",
      "Integrated REST APIs and Firebase services.",
    ],
  },
  {
    role: "Junior Flutter Developer",
    company: "Previous Company",
    period: "2023 — 2024",
    points: [
      "Assisted in building UI components from Figma designs.",
      "Fixed bugs and improved app performance.",
    ],
  },
];
