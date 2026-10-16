export type ResearchProject = {
  title: string;
  tags: string[];
  description: string;
  link?: string;
};

export type ResearchCategory = {
  name: string;
  note?: string;
  projects: ResearchProject[];
};

/**
 * University and competition work. Kept apart from `workSystems` because the
 * deliverable here is a method or a result, not a running service.
 */
export const researchCategories: ResearchCategory[] = [
  {
    name: "Stochastic modelling",
    note: "B.Sc. thesis, defended June 2026",
    projects: [
      {
        title: "Stochastic primitive equations with varying bathymetry",
        tags: ["MATLAB", "SPDE", "FEM", "Monte Carlo"],
        description:
          "Extended the Hallern–Ahlkrona (2026) splitting scheme to non-flat ocean floors. Finite elements in space, Euler–Maruyama in time, and a parallelised Monte Carlo ensemble over the noise. Supervised by Josefin Ahlkrona.",
      },
    ],
  },
  {
    name: "Defence & decision support",
    note: "Saab × KTH hackathon, finalist",
    projects: [
      {
        title: "AI vs AI missile interception",
        tags: ["Simulation", "3D", "Physics"],
        description:
          "Entry for Saab's Smart Stridsledning hackathon at KTH Innovation. A red agent launches missiles and drones; a blue agent selects and guides interceptors in real time, with intercepts computed from physics rather than sampled from a hit probability. Reached the final five of 23 teams.",
        link: "https://github.com/Heffri/hackathon-stridsledning",
      },
      {
        title: "Threat prioritiser prototype",
        tags: ["React", "Prototype"],
        description:
          "An interface for ranking incoming threats under time pressure, built to argue for a layered response model before committing to an implementation.",
        link: "https://war-prototype.lovable.app",
      },
    ],
  },
  {
    name: "Finance & insurance AI",
    note: "Vivicta × 2Hero hackathon, Sep 2026",
    projects: [
      {
        title: "Annual report parser for SEB",
        tags: ["Python", "Anthropic API", "PDF", "Web UI"],
        description:
          "Team entry for SEB's challenge in Vivicta and 2Hero's Finance & Insurance AI hackathon. A proof of concept that turns corporate annual report PDFs into structured data, with a web interface, built on the Anthropic API and tested on large Swedish listed companies.",
      },
    ],
  },
  {
    name: "Statistics & machine learning",
    projects: [
      {
        title: "Supervised learning",
        tags: ["R", "Regression", "Mixed effects"],
        description:
          "Log-linear regression and mixed-effects models, selected by AIC and leave-one-out cross-validation, with VIF diagnostics for collinearity.",
        link: "https://github.com/Heffri/supervised-learning",
      },
    ],
  },
  {
    name: "Numerical simulation",
    projects: [
      {
        title: "Glacier ice flow",
        tags: ["FEniCSx", "FEM", "MPI"],
        description:
          "Stokes equations solved over the Arolla glacier bed geometry with a parallel finite element method.",
        link: "https://github.com/Heffri/glacier-flow-simulation",
      },
      {
        title: "Population dynamics",
        tags: ["Python", "ODEs"],
        description:
          "Lotka–Volterra systems integrated with hand-written Euler and adaptive RK45 solvers, compared for stability against step cost.",
        link: "https://github.com/Heffri/population-dynamics",
      },
    ],
  },
  {
    name: "Data analysis",
    projects: [
      {
        title: "US traffic incidents",
        tags: ["Python", "SQL", "Folium"],
        description:
          "About 191k incident records from 2017–2019. Bounding-box filtering, Folium heatmaps, and a signal-versus-junction breakdown that contradicted the starting hypothesis: Los Angeles recorded roughly twice as many accidents as New York City.",
        link: "https://github.com/Heffri/traffic-incidents-USA",
      },
      {
        title: "Military movement prediction",
        tags: ["Python", "Geospatial"],
        description: "Movement prediction over terrain and route constraints.",
        link: "https://github.com/Heffri/military-movement-prediction",
      },
    ],
  },
  {
    name: "Databases & bioinformatics",
    projects: [
      {
        title: "Database technology",
        tags: ["SQL", "SQLite", "Indexing"],
        description:
          "Joins across the Ensembl genome schema, with index strategies benchmarked rather than assumed.",
        link: "https://github.com/Heffri/database-technology",
      },
      {
        title: "DNA sequence analysis",
        tags: ["Python", "Biopython"],
        description: "SARS-CoV-2 genome parsing and sequence statistics.",
        link: "https://github.com/Heffri/dna-sequence-analysis",
      },
    ],
  },
];
