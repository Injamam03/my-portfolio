export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  screenshots: string[];
  bannerGradient: string;
  playStoreUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "yoga-with-jen",
    name: "Yoga with Jen",
    description:
      "Premium subscription-based yoga & fitness platform with HD streaming, offline downloads, and community features.",
    tags: ["Flutter", "GetX", "Kotlin", "Firebase"],
    screenshots: ["/assets/1.png", "/assets/2.png"],
    bannerGradient: "from-rose-200 via-rose-300 to-slate-700",
  },
  {
    id: "ways2shop",
    name: "Ways2Shop",
    description:
      "Two-sided service marketplace platform featuring provider subscriptions, Stripe Connect payouts, and real-time messaging.",
    tags: ["Flutter", "Stripe", "GetX"],
    screenshots: ["/assets/2.png", "/assets/3.png"],
    bannerGradient: "from-amber-100 via-white to-slate-200",
  },
  {
    id: "cryptox",
    name: "CryptoX",
    description:
      "Secure digital wallet platform featuring a hybrid UTXO-style traceable ledger, admin forensic tooling, and Stripe-powered top-ups.",
    tags: ["Flutter", "Firebase", "Stripe", "Bloc"],
    screenshots: ["/assets/1.png", "/assets/2.png", "/assets/3.png"],
    bannerGradient: "from-indigo-200 via-purple-200 to-sky-200",
  },
];