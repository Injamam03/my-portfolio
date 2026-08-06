export type EducationItem = {
  degree: string;
  badge: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  coursework: string[];
};

export const educationData: EducationItem[] = [
  {
    degree: "Diploma in Computer Science and Engineering",
    badge: "Diploma in CSE",
    institution: "Cox's Bazar Government Polytechnic Institute",
    location: "Cox's Bazar, Bangladesh",
    period: "Jan 2021 — Nov 2025",
    description:
      "Foundation in computer science fundamentals and engineering principles.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
    ],
  },
];
