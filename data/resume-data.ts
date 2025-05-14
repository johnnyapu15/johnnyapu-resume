import type { MultiLanguageResumeData } from "@/types/resume"

export const resumeData: MultiLanguageResumeData = {
  ko: {
    personalInfo: {
      name: "정주안 (Juahn Jeong)",
      nameEn: "Juahn Jeong",
      email: "johnnyapu15@gmail.com",
      phone: "010-4479-2917",
      address: "서울, 대한민국",
      linkedin: "www.linkedin.com/in/juahn-jeong",
    },
    summary:
      "딥러닝 기반 응용 개발과 3D 기반 XR 서비스 구축 경험을 바탕으로, 대규모 백엔드 시스템 설계와 최적화에 강점을 가진 소프트웨어 엔지니어입니다. 현재 Bucketplace(오늘의집)에서 시스템 디자인, 개발, 성능 개선 등을 주도하며 백엔드 리드를 담당하고 있습니다.",
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Backend Lead, Software Engineer",
        period: "2022년 8월 - 현재",
        location: "서울, 대한민국",
        description: [
          "4명 규모의 개발팀 Backend lead, 신규 시스템 아키텍처 설계 및 코드 리뷰, 멘토링 담당.",
          "AI, XR, 3D 등 여러 도메인의 주요 서비스 시스템 아키텍처 설계 및 운영",
          "Agile 환경에서 cross-functional 팀과 협업하여 지속적 개선 및 배포 주도.",
          "Kubernetes 기반 microservice 구축.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2021년 2월 - 2022년 11월",
        location: "서울, 대한민국",
        description: [
          "Digital Twin 플랫폼 개발 (Unity 기반 엔진 + Node.js backend).",
          "대용량 실시간 데이터 처리를 위한 scalable game server 아키텍처 설계.",
          "CI/CD 자동화를 위한 GitLab CI 파이프라인 구축.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Associate",
        period: "2020년 1월 - 2021년 2월",
        location: "서울, 대한민국",
        description: [
          "3D AR 서비스 개발 및 HLOD 기반 렌더링 최적화 기능 개발.",
          "AR/VR 프로젝트에서 cross-team 협업 및 기술 지원 담당.",
        ],
      },
      {
        company: "(Side-project) BlackTangerine",
        position: "Software Developer",
        period: "2020년 12월 - 2021년 6월",
        location: "서울, 대한민국",
        description: [
          "딥러닝 기반 얼굴 피부 분석 및 의류 추천 시스템 개발.",
          "Python 기반 personal color 분석 엔진, Node.js backend, GCP CloudRun으로 scalable 서비스 구축.",
        ],
      },
      {
        company: "서울시립대학교",
        position: "연구원 (International Urban & Infrastructure Research Center)",
        period: "2018년 8월 - 2020년 1월",
        location: "서울, 대한민국",
        description: ["Unity 기반 Digital Twin application 개발 및 시뮬레이션 시스템 구축."],
      },
    ],
    education: [
      {
        school: "서울시립대학교",
        degree: "석사, 컴퓨터과학",
        period: "2018년 - 2019년",
        description: "인공지능 시스템의 성능 개선 연구 / 학·석사 연계 프로그램을 통해 석사 학위 조기 취득",
      },
      {
        school: "서울시립대학교",
        degree: "학사, 컴퓨터과학부",
        period: "2012년 - 2017년",
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
        name: "AI 기반 인테리어 서비스",
        period: "Bucketplace (오늘의집)",
        description: [
          "글로벌 시장을 타겟으로 한 AI 기반 인테리어 서비스 신규 시스템 설계 및 백엔드 개발",
          "Spring Boot 기반 백엔드 시스템 및 API 서버 설계",
          "글로벌 환경 이미지 처리를 위한 인프라 설계",
          "안정적인 LLM 기반 서비스를 위한 workflow 설계 및 구축",
          "Agile 환경에서 cross-functional 팀과 협업하여 지속적 개선 주도",
        ],
      },
      {
        name: "3D 인테리어 디자인 서비스",
        period: "Bucketplace (오늘의집)",
        description: [
          "웹 기반 3D 인테리어 디자인 서비스 신규 개발 및 아키텍처 설계",
          "서비스 사용자 트래픽 10.2배 증가 (2.3TPS → 23.5TPS), Availability 99.95%",
          "WAU 704% (3863 → 27194), 평균 session time 68% 증가 (21분 → 35.25분)",
          "API 성능 개선: 응답 시간 80% 개선 (200ms → 80ms), payload size 54% 감소 (5MB → 2MB).",
          "최대 로딩 시간 75% 개선 (10초 → 2.5초)로 사용자 경험 향상",
          "Spring Boot 기반 백엔드 시스템 및 API 서버 설계",
          "Node.js, React, Three.js 기반 FE 개발",
          "LLM, RAG 기반 제품 추천 기능 설계 및 프로토타입 개발 (vector DB, embedding pipeline 구축).",
        ],
      },
      {
        name: "AR 기반 3D 가구 배치 서비스",
        period: "Bucketplace (오늘의집)",
        description: [
          "AR 가구 배치 서비스 백엔드 시스템 아키텍처 설계 및 개발 주도",
          "Spring Boot 기반 백엔드 시스템 및 API 서버 설계",
          "효율적인 3D 모델 서빙 시스템 설계 및 backend 최적화.",
          "API P99 latency 300ms → 50ms로 개선.",
          "서비스 출시 이후 AR 사용자의 구매 흐름 개선 효과 확인",
        ],
      },
      {
        name: "3D Asset Optimization Pipeline",
        period: "Bucketplace (오늘의집)",
        description: [
          "자동화된 3D asset 최적화 및 배포 파이프라인 구축.",
          "Eng maintenance resource 40days/year 절감 및 manual 작업 시간 50% 감소.",
          "파일 크기 51% 감소, triangle 수 90% 감소, GPU latency 20% 개선.",
          "3D 자산 관리 프로세스 자동화로 cross-functional 팀(BE, Biz) 내 수동 작업 시간을 50% 절감하여, 팀 생산성 우수 사례로 선정됨",
        ],
      },
      {
        name: "딥러닝 기반 Personal Color 분석 시스템",
        period: "BlackTangerine (Side-project)",
        description: [
          "Python 및 TensorFlow 기반 딥러닝 모델 개발로 얼굴 피부 분석 및 퍼스널 컬러 추천 엔진 구축",
          "Node.js 백엔드 개발 및 GCP CloudRun 기반 배포로 서비스 운영",
        ],
      },
    ],
    certifications: [],
    activities: [],
  },
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
      "Software engineer with expertise in backend system design and optimization, combined with hands-on experience in deep learning applications and 3D-based XR services. Currently serving as Backend Lead at Bucketplace (OHouse), responsible for system architecture, development, and performance optimization.",
    experience: [
      {
        company: "Bucketplace (OHouse)",
        position: "Backend Lead, Software Engineer",
        period: "Aug 2022 – Present",
        location: "Seoul, South Korea",
        description: [
          "Backend lead for a team of 4 developers, responsible for system architecture design, code review, and mentoring.",
          "Design and operate system architectures for key services across AI, XR, and 3D domains.",
          "Drive continuous improvement and deployment in agile environment with cross-functional teams.",
          "Build Kubernetes-based microservices.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Feb 2021 – Nov 2022",
        location: "Seoul, South Korea",
        description: [
          "Developed Digital Twin platform (Unity + Node.js backend).",
          "Designed scalable game server architecture for real-time data processing.",
          "Implemented CI/CD automation with GitLab CI.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Associate",
        period: "Jan 2020 – Feb 2021",
        location: "Seoul, South Korea",
        description: [
          "Developed 3D AR services and rendering optimization using HLOD.",
          "Provided technical support and cross-team collaboration in AR/VR projects.",
        ],
      },
      {
        company: "BlackTangerine",
        position: "Software Developer (Side-project)",
        period: "Dec 2020 – Jun 2021",
        location: "Seoul, South Korea",
        description: [
          "Developed deep learning-based skin analysis and personal color recommendation system.",
          "Built scalable service with Python engine, Node.js backend, and GCP CloudRun.",
        ],
      },
      {
        company: "University of Seoul",
        position: "Researcher (International Urban & Infrastructure Research Center)",
        period: "Aug 2018 – Jan 2020",
        location: "Seoul, South Korea",
        description: ["Developed Digital Twin simulation system using Unity."],
      },
    ],
    education: [
      {
        school: "University of Seoul",
        degree: "Master's in Computer Science",
        period: "2018 – 2019",
        description:
          "Research on performance improvement of AI systems / Completed Bachelor-Master combined program and earned master's degree in 1 year.",
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
          "Designed and developed backend for AI-based interior service targeting global market",
          "Designed Spring Boot-based backend system and API server",
          "Designed infrastructure for global image processing",
          "Built workflow for stable LLM-based services",
          "Led continuous improvement in agile environment with cross-functional teams",
        ],
      },
      {
        name: "3D Interior Design Service",
        period: "Bucketplace (OHouse)",
        description: [
          "Developed and designed architecture for web-based 3D interior design service",
          "Increased service traffic by 10.2x (2.3TPS → 23.5TPS) with 99.95% availability",
          "Improved WAU by 704% (3863 → 27194) and average session time by 68% (21min → 35.25min)",
          "Enhanced API performance: 80% faster response time (200ms → 80ms), 54% smaller payload (5MB → 2MB)",
          "Improved maximum loading time by 75% (10s → 2.5s) for better user experience",
          "Designed Spring Boot-based backend system and API server",
          "Developed frontend with Node.js, React, and Three.js",
          "Designed and prototyped LLM, RAG-based product recommendation (built vector DB and embedding pipeline)",
        ],
      },
      {
        name: "AR-based 3D Furniture Placement Service",
        period: "Bucketplace (OHouse)",
        description: [
          "Led backend system architecture design and development for AR furniture placement service",
          "Designed Spring Boot-based backend system and API server",
          "Designed efficient 3D model serving system and optimized backend",
          "Improved API P99 latency from 300ms to 50ms",
          "Confirmed improved purchase flow for AR users after service launch",
        ],
      },
      {
        name: "3D Asset Optimization Pipeline",
        period: "Bucketplace (OHouse)",
        description: [
          "Built automated 3D asset optimization and deployment pipeline",
          "Reduced engineering maintenance resources by 40 days/year and manual work time by 50%",
          "Achieved 51% file size reduction, 90% triangle count reduction, and 20% GPU latency improvement",
          "Recognized as team productivity excellence case by reducing manual work time by 50% for cross-functional teams (BE, Biz)",
        ],
      },
      {
        name: "Deep Learning-based Personal Color Analysis System",
        period: "BlackTangerine (Side-project)",
        description: [
          "Developed facial skin analysis and personal color recommendation engine using Python and TensorFlow",
          "Built and operated service with Node.js backend and GCP CloudRun deployment",
        ],
      },
    ],
    certifications: [],
    activities: [],
  },
}
