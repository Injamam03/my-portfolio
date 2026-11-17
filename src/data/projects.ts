export interface Project {
  id: string;
  name: string;
  category: "All" | "Fitness & Lifestyle" | "Marketplace" | "Fintech & Web3";
  description: string;
  tags: string[];
  screenshots: string[];
  bannerGradient: string;
  playStoreUrl?: string; // Real link or "TODO"
  appStoreUrl?: string;  // Real link or "TODO"
  githubUrl?: string;    // Real link or "TODO"
}

export const projectCategories = [
  "All",
  "Fitness & Lifestyle",
  "Marketplace",
  "Fintech & Web3",
] as const;

export const projectsData: Project[] = [
  {
    id: "yoga-with-jen",
    name: "Yoga with Jen",
    category: "Fitness & Lifestyle",
    description:
      "Premium subscription-based yoga & fitness platform with HD streaming, offline video downloads, and interactive community sessions.",
    tags: ["Flutter", "GetX", "Kotlin", "Firebase"],
    screenshots: ["/assets/1.png", "/assets/2.png"],
    bannerGradient: "from-sky-900/40 via-cyan-950/30 to-slate-950",
    playStoreUrl: "TODO",
    appStoreUrl: "TODO",
    githubUrl: "TODO",
  },
  {
    id: "ways2shop",
    name: "Ways2Shop",
    category: "Marketplace",
    description:
      "Two-sided service marketplace platform featuring verified provider subscriptions, Stripe Connect payouts, and real-time messaging.",
    tags: ["Flutter", "Stripe", "GetX", "REST API"],
    screenshots: ["/assets/2.png", "/assets/3.png"],
    bannerGradient: "from-blue-950/40 via-slate-900 to-slate-950",
    playStoreUrl: "TODO",
    appStoreUrl: "TODO",
    githubUrl: "TODO",
  },
  {
    id: "cryptox",
    name: "CryptoX",
    category: "Fintech & Web3",
    description:
      "Secure digital wallet platform featuring a hybrid UTXO-style traceable ledger, administrative forensic tooling, and Stripe-powered top-ups.",
    tags: ["Flutter", "Firebase", "Stripe", "Bloc"],
    screenshots: ["/assets/projects/1.png", "/assets/projects/2.png", "/assets/projects/3.png"],
    bannerGradient: "from-cyan-950/40 via-blue-950/30 to-slate-950",
    playStoreUrl: "TODO",
    appStoreUrl: "TODO",
    githubUrl: "TODO",
  },
];
