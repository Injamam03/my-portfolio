export type SkillLevel = "Expert" | "Advanced" | "Familiar";

export type SkillCategory = "Mobile" | "Architecture & State" | "Cloud & APIs" | "Publishing";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  highlight?: boolean;
}

export const skillCategories: SkillCategory[] = [
  "Mobile",
  "Architecture & State",
  "Cloud & APIs",
  "Publishing",
];

export const skillsData: SkillItem[] = [
  // Mobile
  { name: "Flutter", category: "Mobile", level: "Expert", highlight: true },
  { name: "Dart", category: "Mobile", level: "Expert", highlight: true },
  { name: "Responsive UI & Composition", category: "Mobile", level: "Advanced" },
  { name: "Custom Animations & Canvas", category: "Mobile", level: "Advanced" },
  { name: "Native Android (Kotlin)", category: "Mobile", level: "Familiar" },

  // Architecture & State
  { name: "Clean Architecture", category: "Architecture & State", level: "Advanced", highlight: true },
  { name: "GetX", category: "Architecture & State", level: "Expert", highlight: true },
  { name: "BLoC / Cubit", category: "Architecture & State", level: "Advanced" },
  { name: "Provider", category: "Architecture & State", level: "Advanced" },
  { name: "Riverpod", category: "Architecture & State", level: "Familiar" },

  // Cloud & APIs
  { name: "RESTful APIs & Dio", category: "Cloud & APIs", level: "Expert", highlight: true },
  { name: "Firebase (Auth, Firestore, FCM)", category: "Cloud & APIs", level: "Advanced" },
  { name: "SQLite (sqflite)", category: "Cloud & APIs", level: "Advanced" },
  { name: "Hive NoSQL", category: "Cloud & APIs", level: "Advanced" },
  { name: "Stripe Payment Gateway", category: "Cloud & APIs", level: "Advanced" },

  // Publishing
  { name: "Google Play Console Release", category: "Publishing", level: "Advanced", highlight: true },
  { name: "Apple App Store Release", category: "Publishing", level: "Familiar" },
  { name: "Git & GitHub Workflows", category: "Publishing", level: "Advanced" },
  { name: "CI/CD & App Distribution", category: "Publishing", level: "Familiar" },
];
