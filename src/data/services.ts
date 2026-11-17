export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: [string, string, string];
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "app-development",
    title: "Cross-Platform App Development",
    description:
      "End-to-end mobile app engineering for iOS and Android built with Flutter for native speed, beauty, and responsiveness.",
    bullets: [
      "Pixel-perfect UI faithfully translated from Figma/Adobe XD designs",
      "Silky 60/120fps animations with responsive layouts for phones & tablets",
      "Unified single codebase drastically cutting development cost and time",
    ],
    icon: "Smartphone",
  },
  {
    id: "clean-architecture",
    title: "Architecture & Code Refactoring",
    description:
      "Modernizing existing mobile apps or structuring new projects with enterprise-grade Clean Architecture and robust state management.",
    bullets: [
      "Modular separation into Domain, Data, and Presentation layers",
      "Reliable state management setup using BLoC or GetX patterns",
      "Eliminating memory leaks, lag, and uncontrolled widget rebuilds",
    ],
    icon: "Layers",
  },
  {
    id: "backend-integration",
    title: "API & Cloud Integration",
    description:
      "Seamlessly connecting mobile apps to backend services, cloud platforms, payment gateways, and local persistence.",
    bullets: [
      "RESTful API & Dio clients with auth tokens, retry, and interceptors",
      "Firebase suite: Authentication, Cloud Firestore, and push notifications",
      "Offline-first synchronization with secure SQLite and Hive storage",
    ],
    icon: "Cloud",
  },
  {
    id: "store-publishing",
    title: "Store Publishing & CI/CD",
    description:
      "Taking your Flutter app from development build to live production on the Google Play Store and Apple App Store.",
    bullets: [
      "Keystore signing, Apple developer provisioning, and release configs",
      "Play Console and App Store Connect review compliance readiness",
      "Crashlytics, performance monitoring, and automated delivery pipelines",
    ],
    icon: "Rocket",
  },
];
