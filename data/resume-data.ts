import type { MultiLanguageResumeData, Skills } from "@/types/resume"

const skillsData: Skills = {
  languages: [
    { name: "Kotlin", level: 5 },
    { name: "Python", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "C#", level: 3 },
  ],
  frameworks: [
    { name: "Spring Boot", level: 4 },
    { name: "Node.js", level: 4 },
    { name: "Unity", level: 3 },
    { name: "React", level: 3 },
    { name: "Three.js", level: 3 },
  ],
  backendInfra: [
    { name: "AWS", level: 4 },
    { name: "GCP", level: 3 },
    { name: "Kubernetes", level: 4 },
    { name: "Kafka", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "Redis", level: 4 },
    { name: "Docker", level: 4 },
    { name: "MySQL", level: 3 },
  ],
  tools: [
    { name: "Github", level: 5 },
    { name: "Jira", level: 4 },
    { name: "Notion", level: 4 },
    { name: "Figma", level: 3 },
  ],
  "ai-tools": [
    { name: "Github Copilot", level: 5 },
    { name: "Cursor", level: 5 },
    { name: "v0", level: 4 },
    { name: "ChatGPT", level: 4 },
  ],
  interpersonal: [
    {
      name: "Technical Communication",
      description: "복잡한 기술적 내용을 다양한 대상(엔지니어, PM, 디자이너 등)에게 명확하게 설명하고 조율합니다.",
      examples: "예: 설계 리뷰, 기술 공유, 협업 조율",
      level: 4,
    },
    {
      name: "Proactive Ownership",
      description: "시스템 전체 흐름을 이해하고 문제의 전후 맥락까지 책임지고 해결합니다.",
      examples: "예: 장애 대응, 기술 부채 개선 주도, FIW 수상",
      level: 5,
    },
    {
      name: "Collaborative Problem Solving",
      description: "다양한 역할(예: AI, 프론트엔드, 비즈니스)과 함께 실질적인 문제 해결을 위해 협업합니다.",
      examples: "예: 성능 개선, 자동화 파이프라인, 3D/AI 연계 작업",
      level: 5,
    },
    {
      name: "Systemic Thinking",
      description: "단순 기능 구현을 넘어서 시스템 전체의 확장성, 안정성, 유지보수성까지 고려하여 판단합니다.",
      examples: "예: 장애 전파 방지 구조 설계, 운영 효율화",
      level: 5,
    },
  ],
}

export const resumeData: MultiLanguageResumeData = {
  ko: {
    personalInfo: {
      name: "정주안 (Juahn Jeong)",
      nameEn: "Juahn Jeong",
      email: "johnnyapu15@gmail.com",
    },
    summary:
      "대규모 백엔드 시스템 설계와 최적화에 강점을 지닌 소프트웨어 엔지니어입니다. 급격한 트래픽 증가 상황에서도 안정적인 서비스를 제공하기 위해, 장애 전파 방지 구조와 데이터 처리 효율화, API 성능 개선, 비동기 병렬 처리 등을 설계하고 구현해왔습니다. 자동화 파이프라인 구축을 통해 **운영 효율을 27% 향상**시키는 등 생산성 향상에 지속적으로 기여하며, 매 분기별 **Top Contributor로 선정**된 경험이 있습니다. 현재 Bucketplace에서 **시스템 디자인과 성능 개선, 그리고 AI 도구를 활용한 업무 효율화**를 주도하며 **백엔드 리드** 역할을 수행하고 있습니다.",
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Backend Lead, Software Engineer",
        period: "2022년 8월 - 현재",
        location: "서울, 대한민국",
        description: [
          "개발팀 **Backend lead**로서 주요 시스템 아키텍처 설계 및 구축, 운영.",
          "주요 프로젝트:",
          "  **AI 기반 인테리어 서비스**: 글로벌 타겟 AI 서비스의 **신규 백엔드 시스템** 및 **안정적인 LLM 워크플로우** 설계",
          "  **3D 인테리어 디자인 서비스**: **WAU 704%**, **세션 시간 68% 성장을 주도**하며 서비스 트래픽 **18배 증가**에도 **99.95%의 가용성** 확보. **API 응답시간 30ms**, **최대 로딩 시간 2.5초**를 달성하여 사용자 경험을 크게 개선.",
          "  **3D 에셋 최적화 파이프라인**: 자동화 파이프라인 구축으로 연간 **40일의 개발 리소스 절감** 및 운영팀 **작업 시간 50% 단축**. 생산성 기여를 인정받아 **Top Contributor 선정**.",
          "  **AR 가구 배치 서비스**: 백엔드 시스템 최적화로 **API P99 응답 시간을 300ms에서 50ms로 단축**.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        location: "서울, 대한민국",
        description: [
          "대용량 **실시간 데이터 처리를 위한 확장 가능한 게임 서버 아키텍처** 설계.",
          "CI 파이프라인 구축.",
          "HLOD 기반 렌더링 최적화 기능 개발.",
        ],
      },
      {
        company: "BlackTangerine (Side-project)",
        period: "2020년 12월 - 2021년 6월",
        location: "서울, 대한민국",
        description: [
          "**딥러닝 기반 얼굴 피부 분석 및 의류 추천 시스템** 개발.",
          "Python 기반 personal color 분석 & 추천 시스템과 Node.js backend 개발.",
          "GCP CloudRun 기반 확장 가능한 서비스 구축.",
        ],
      },
      {
        company: "서울시립대학교",
        position: "연구원 (International Urban & Infrastructure Research Center)",
        period: "2018년 8월 - 2019년 8월",
        location: "서울, 대한민국",
        description: ["MQTT 기반 시뮬레이션 백엔드 서비스 구축."],
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
    skills: skillsData,
    projects: [],
    certifications: [],
    activities: [],
  },
  en: {
    personalInfo: {
      name: "Juahn Jeong",
      nameEn: "Juahn Jeong",
      email: "johnnyapu15@gmail.com",
      position: "Software Engineer",
    },
    summary:
      "A software engineer specializing in large-scale backend system design and optimization. Proven experience in ensuring service stability during rapid traffic growth by designing and implementing fault-tolerant architectures, data processing efficiencies, API performance improvements, and asynchronous parallel processing. Consistently contributed to productivity, recognized as a **Top Contributor** for enhancing operational efficiency. Currently leading **system design, performance improvement, and AI-driven workflow optimization** as a **Backend Lead** at Bucketplace.",
    experience: [
      {
        company: "Bucketplace",
        position: "Backend Lead, Software Engineer",
        period: "Aug 2022 – Present",
        location: "Seoul, South Korea",
        description: [
          "Led backend team in designing, building, and operating key system architectures.",
          "",
          "Key Projects:",
          "  **AI-based Interior Service**: Designed a **new backend system** and **robust LLM workflow** for a global AI service.",
          "  **3D Interior Design Service**: Drove **704% WAU** and **68% session time growth**, ensuring **99.95% availability** amid **18x traffic increase**. Significantly improved UX by achieving **30ms API response times** and **2.5s max loading times**.",
          "  **3D Asset Optimization Pipeline**: Saved **40 engineering days/year** and cut team's operational time by **50%** via an automated pipeline. Recognized as a **Top Contributor** for this initiative.",
          "  **AR Furniture Placement Service**: Reduced **API P99 latency from 300ms to 50ms** through backend system optimization.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Jan 2020 – Jul 2022",
        location: "Seoul, South Korea",
        description: [
          "Designed a **scalable game server architecture** for large-scale, real-time data processing.",
          "Developed 3D AR services and HLOD-based rendering optimization features.",
          "Built and maintained CI/CD automation pipelines with GitLab CI.",
        ],
      },
      {
        company: "BlackTangerine (Side-project)",
        position: "Software Developer",
        period: "Dec 2020 – Jun 2021",
        location: "Seoul, South Korea",
        description: [
          "Developed a **deep learning-based system for facial skin analysis and clothing recommendations**.",
          "Built a personal color analysis & recommendation system with Python and a Node.js backend.",
          "Established a scalable service architecture using GCP CloudRun.",
        ],
      },
      {
        company: "University of Seoul",
        position: "Researcher (International Urban & Infrastructure Research Center)",
        period: "Aug 2018 – Aug 2019",
        location: "Seoul, South Korea",
        description: ["Built an MQTT-based simulation backend service."],
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
      ...skillsData,
      interpersonal: [
        {
          name: "Technical Communication",
          description:
            "Clearly explains and coordinates complex technical details with various audiences (engineers, PMs, designers, etc.).",
          examples: "e.g., Design reviews, tech sharing sessions, collaborative coordination",
          level: 4,
        },
        {
          name: "Proactive Ownership",
          description:
            "Understands the entire system flow and takes full responsibility for resolving issues by considering their context.",
          examples: "e.g., Incident response, leading technical debt improvements, FIW award recipient",
          level: 5,
        },
        {
          name: "Collaborative Problem Solving",
          description: "Collaborates with diverse roles (e.g., AI, Frontend, Business) to achieve practical problem-solving.",
          examples: "e.g., Performance improvements, automation pipelines, 3D/AI integration tasks",
          level: 5,
        },
        {
          name: "Systemic Thinking",
          description:
            "Makes judgments that go beyond simple feature implementation to consider the overall system's scalability, stability, and maintainability.",
          examples: "e.g., Designing fault-tolerant architectures, operational efficiency improvements",
          level: 5,
        },
      ],
    },
    projects: [],
    certifications: [],
    activities: [],
  },
}
