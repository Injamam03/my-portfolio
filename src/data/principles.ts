export interface Principle {
  id: string;
  step: string;
  title: string;
  description: string;
  tags: string[];
}

export const buildPrinciples: Principle[] = [
  {
    id: "clean-architecture",
    step: "01",
    title: "Clean Architecture",
    description:
      "Strict separation into Domain, Data, and Presentation layers. Business logic stays isolated from UI and external packages for testability, modularity, and easy scaling.",
    tags: ["Decoupled", "Testable", "Repository Pattern"],
  },
  {
    id: "state-management",
    step: "02",
    title: "Predictable State Management",
    description:
      "Unidirectional data flow with BLoC and GetX ensures a single source of truth, eliminates redundant widget rebuilds, and guarantees predictable, 60fps UI performance.",
    tags: ["BLoC", "GetX", "Single Source of Truth"],
  },
  {
    id: "error-network",
    step: "03",
    title: "Resilient Error & Network Handling",
    description:
      "Bulletproof REST clients with interceptors, token refresh, failure types, and offline-first local persistence (Hive/SQLite) so users never experience unexpected crashes.",
    tags: ["Offline-First", "Interceptors", "Fail-Safe"],
  },
  {
    id: "cicd-delivery",
    step: "04",
    title: "Automated CI/CD & Delivery",
    description:
      "Automated code analysis, unit testing, keystore signing, and reproducible build releases for both Google Play Store and Apple App Store without manual bottlenecks.",
    tags: ["Fastlane", "Git Workflows", "Store Signing"],
  },
];
