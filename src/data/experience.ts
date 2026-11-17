export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  current?: boolean;
  impactBullets: [string, string, string];
  stack: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Junior Flutter Developer",
    company: "Sparktech Agency",
    companyUrl: "https://www.sparktech.agency/",
    location: "Remote / Hybrid",
    period: "2025 — Present",
    current: true,
    impactBullets: [
      "Engineered production features for cross-platform mobile apps deployed to active users on Android and iOS platforms.",
      "Integrated REST APIs, Firebase services, and local caching with resilient network error handling and token refresh.",
      "Translated complex Figma UI/UX designs into responsive, pixel-accurate Flutter widgets with fluid 60fps animations.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST API", "GetX", "Git"],
  },
];
