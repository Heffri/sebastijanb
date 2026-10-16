export type Role = {
  period: string;
  title: string;
  organisation: string;
  arrangement?: string;
  current: boolean;
  description: string;
};

export type Degree = {
  period: string;
  title: string;
  institution: string;
  note?: string;
  thesis?: { title: string; summary: string; supervisor: string };
  courses: string[];
};

export const roles: Role[] = [
  {
    period: "Jun 2026 – present",
    title: "Founding Engineer",
    organisation: "East Sea Technologies",
    arrangement: "Part-time · remote",
    current: true,
    description:
      "First technical hire, building Verah — business software for Swedish VVS and heat-pump firms. The technician describes the job on site and the office gets a finished quote, instead of a note left in the van. I own the schema and its row-level security, the AI estimation pipeline, both interfaces, and the deployment.",
  },
  {
    period: "Aug 2026 – present",
    title: "Teaching Assistant",
    organisation: "Stockholm University",
    arrangement: "Part-time · on-site",
    current: true,
    description:
      "Teaching assistant at the Department of Mathematics, alongside the master's programme.",
  },
  {
    period: "Jan 2026 – present",
    title: "Developer",
    organisation: "Townhall Analytics",
    arrangement: "Part-time · remote",
    current: true,
    description:
      "Founding-team developer on OpinionLive, a Swedish platform where citizens create, sign and track petitions under a BankID-verified identity. Backend, data architecture and the signing flow.",
  },
  {
    period: "Sep 2026 – Mar 2027",
    title: "Trainee — Framtidens försäkringstalanger",
    organisation: "SFM Svenska Försäkringsförmedlare",
    arrangement: "Trainee programme",
    current: true,
    description:
      "Selected for the industry-wide trainee programme run by SFM, the Swedish Insurance Brokers' Association, including one-to-one mentorship with a senior figure in the industry.",
  },
  {
    period: "Mar 2026 – Sep 2026",
    title: "Cybersecurity Instructor",
    organisation: "Unga Forskare",
    arrangement: "Part-time · hybrid",
    current: false,
    description:
      "Prepared and delivered introductory cybersecurity workshops and lectures for young learners across Sweden, through the Cybersecurity Academy — turning technical material into something a teenager will sit through and remember.",
  },
];

export const degrees: Degree[] = [
  {
    period: "Aug 2026 – Jun 2028",
    title: "M.Sc. Machine Learning & Mathematical Statistics",
    institution: "Stockholm University",
    courses: [
      "Measure-theoretic probability & martingales",
      "Statistical learning",
      "Statistical deep learning",
      "Stochastic processes & simulation",
      "Bayesian methods",
      "Unsupervised learning",
      "Reinforcement learning",
      "Information theory",
      "Categorical data analysis",
    ],
  },
  {
    period: "Aug 2023 – Jun 2026",
    title: "B.Sc. Mathematics & Computer Science",
    institution: "Stockholm University",
    note: "Specialisation in mathematical statistics and statistical learning",
    thesis: {
      title: "Numerical study of stochastic primitive equations with varying bathymetry",
      summary:
        "Extended the Hallern–Ahlkrona (2026) splitting scheme to non-flat ocean floors, using finite elements, Euler–Maruyama time stepping and parallelised Monte Carlo in MATLAB.",
      supervisor: "Josefin Ahlkrona",
    },
    courses: [
      "Statistical inference",
      "Statistical learning",
      "Probability theory",
      "Stochastic processes",
      "Numerical analysis",
      "Linear algebra",
      "Database technology",
      "Algorithms & data structures",
      "Object-oriented programming",
    ],
  },
];
