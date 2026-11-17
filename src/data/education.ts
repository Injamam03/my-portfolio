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
    degree: "Diploma in Computer Science and Technology",
    badge: "Diploma in CST",
    institution: "Cox's Bazar Government Polytechnic Institute",
    location: "Cox's Bazar, Bangladesh",
    period: "Jan 2021 — Nov 2025",
    description:
      "Core foundation in computer science fundamentals, data structures, algorithms, and software engineering principles.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
    ],
  },
];
