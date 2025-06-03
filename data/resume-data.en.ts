import type { ResumeData } from "@/types/resume"

export const resumeDataEn: { en: ResumeData } = {
  en: {
    personalInfo: {
      name: "Juahn Jeong",
      nameEn: "Juahn Jeong",
      email: "johnnyapu15@gmail.com",
      phone: "+82-10-4479-2917",
      address: "Seoul, South Korea",
      linkedin: "www.linkedin.com/in/juahn-jeong",
    },
    summary:
      "Software engineer with expertise in backend system design and optimization, combined with hands-on experience in deep learning applications and 3D-based XR services. Experienced in designing and implementing data processing efficiency, API performance improvements, and asynchronous parallel processing to ensure stable service delivery even during rapid traffic growth. Built automation pipelines that improved operational efficiency by 50% and saved 40 days of engineering resources annually. Currently serving as Backend Lead at Bucketplace (OHouse), responsible for system design, development, and performance optimization.",
    experience: [
      {
        company: "Bucketplace (OHouse)",
        position: "Backend Lead, Software Engineer",
        period: "Aug 2022 – Present",
        location: "Seoul, South Korea",
        description: [
          "Backend lead for development team, responsible for system architecture design, construction, and operation across AI, XR, and 3D domains.",
          "Drive continuous improvement and deployment in agile environment with cross-functional teams.",
          "Achieved 18x increase in service user traffic (2.3TPS → 40.4TPS) while maintaining 99.95% availability.",
          "Achieved 30ms p95 response time for key service APIs, enhancing real-time UX.",
          "Improved operational efficiency by 50% and saved 40 days annually through 3D asset optimization automation.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Feb 2021 – Jul 2022",
        location: "Seoul, South Korea",
        description: [
          "Developed Digital Twin platform (Unity-based engine + Node.js backend).",
          "Designed scalable game server architecture for large-scale real-time data processing.",
          "Built CI/CD automation pipeline with GitLab CI.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Associate",
        period: "Jan 2020 – Feb 2021",
        location: "Seoul, South Korea",
        description: [
          "Developed 3D AR services and HLOD-based rendering optimization features.",
          "Handled cross-team collaboration and technical support in AR/VR projects.",
        ],
      },
      {
        company: "BlackTangerine (Side-project)",
        position: "Software Developer",
        period: "Dec 2020 – Jun 2021",
        location: "Seoul, South Korea",
        description: [
          "Developed deep learning-based facial skin analysis and clothing recommendation system.",
          "Built scalable service with Python-based personal color analysis engine, Node.js backend, and GCP CloudRun.",
        ],
      },
      {
        company: "University of Seoul",
        position: "Researcher (International Urban & Infrastructure Research Center)",
        period: "Aug 2018 – Aug 2019",
        location: "Seoul, South Korea",
        description: ["Developed Unity-based Digital Twin application and simulation system."],
      },
    ],
    education: [
      {
        school: "University of Seoul",
        degree: "Master's in Computer Science",
        period: "2018 – 2019",
        description:
          "Research on performance improvement of AI systems / Early completion of Master's degree through Bachelor-Master combined program.",
      },
      {
        school: "University of Seoul",
        degree: "Bachelor's in Computer Science",
        period: "2012 – 2017",
        description: "",
      },
    ],
    skills: {
      languages: ["Kotlin", "Python", "C#", "JavaScript", "TypeScript"],
      frameworks: ["Spring Boot", "Node.js", "Unity", "React", "Three.js"],
      backendInfra: [
        "Firebase",
        "MongoDB",
        "MySQL",
        "Kafka",
        "Redis",
        "AWS S3",
        "Kubernetes",
        "Docker",
        "AWS",
        "GCP",
        "Github",
        "GitLab CI",
      ],
      tools: ["Git", "Notion", "Figma"],
      "ai-tools": ["Github Copilot", "Cursor", "v0", "VSCode Cline", "ChatGPT"],
    },
    projects: [
      {
        name: "AI-based Interior Design Service",
        period: "Bucketplace (OHouse)",
        description: [
          "Designed and developed new backend system for AI-based interior service targeting global market.",
          "Designed Spring Boot-based backend system and API server.",
          "Designed infrastructure for global image processing.",
          "Built workflow for stable LLM-based services.",
          "Led continuous improvement in agile environment with cross-functional teams.",
        ],
      },
      {
        name: "3D Interior Design Service",
        period: "Bucketplace (OHouse)",
        description: [
          "Developed new web-based 3D interior design service and designed its architecture.",
          "Increased WAU by 704% (3863 → 27194) and average session time by 68% (21min → 35.25min).",
          "Achieved 18x increase in service user traffic (2.3TPS → 40.4TPS) with 99.95% availability.",
          "Achieved 30ms p95 response time for key APIs.",
          "API performance improvement: 60% faster response time (200ms → 80ms), 60% smaller payload (5MB → 2MB).",
          "Improved maximum loading time by 75% (10s → 2.5s) for better user experience.",
          "Designed Spring Boot-based backend system and API server.",
          "Developed frontend with Node.js, React, and Three.js.",
          "Designed and prototyped LLM, RAG-based product recommendation (built vector DB and embedding pipeline).",
        ],
      },
      {
        name: "3D Asset Optimization Pipeline",
        period: "Bucketplace (OHouse)",
        description: [
          "Built automated 3D asset optimization and deployment pipeline.",
          "Reduced engineering maintenance resources by 40 days/year and operational team work time by 50%.",
          "Achieved 51% file size reduction, 90% triangle count reduction, and 20% GPU latency improvement.",
          "Selected as a team productivity excellence case for reducing manual work time by 50% for cross-functional teams (BE, Biz) through 3D asset management process automation.",
        ],
      },
      {
        name: "AR-based 3D Furniture Placement Service",
        period: "Bucketplace (OHouse)",
        description: [
          "Led backend system architecture design and development for AR furniture placement service.",
          "Designed Spring Boot-based backend system and API server.",
          "Designed efficient 3D model serving system and optimized backend.",
          "Improved API P99 latency from 300ms to 50ms.",
          "Confirmed improved purchase flow for AR users after service launch.",
        ],
      },
      {
        name: "Deep Learning-based Personal Color Analysis System",
        period: "BlackTangerine (Side-project)",
        description: [
          "Developed facial skin analysis and personal color recommendation engine using Python and TensorFlow.",
          "Built and operated service with Node.js backend and GCP CloudRun deployment.",
        ],
      },
    ],
    certifications: [],
    activities: [],
  },
}
