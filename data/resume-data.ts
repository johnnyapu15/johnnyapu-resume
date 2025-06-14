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
    { name: "React", level: 3 },
    // { name: "Three.js", level: 3 },
    // { name: "Unity", level: 3 },
  ],
  backendInfra: [
    { name: "AWS", level: 4 },
    { name: "Kubernetes", level: 4 },
    { name: "Kafka", level: 4 },
    { name: "MongoDB", level: 4 },
    { name: "Redis", level: 4 },
  ],
  tools: [
  ],
  "ai-tools": [
    { name: "Github Copilot", level: 5 },
    { name: "Cursor", level: 5 },
    { name: "v0", level: 4 },
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
      "시스템의 구조와 성능을 깊이 이해하고 최적화하는 데 강점을 가진 백엔드 엔지니어입니다. 최근에는 기술적 완성도뿐 아니라 비즈니스 맥락에서 실용적인 문제 해결을 통해 사용자 및 서비스 성과에 실질적으로 기여하는 방식을 고민하며 실천하고 있습니다. 급격한 트래픽 증가 상황에서도 안정적인 서비스를 제공하기 위해, 장애 전파 방지 구조와 데이터 처리 효율화, API 성능 개선, 비동기 병렬 처리 등을 설계하고 구현해왔습니다. 자동화 파이프라인 구축을 통해 운영 효율을 27% 향상시키는 등 생산성 향상에 지속적으로 기여하며, 매 분기별 **Top Contributor로 선정**된 경험이 있습니다. 현재 Bucketplace에서 **시스템 디자인과 성능 개선, 그리고 AI 도구를 활용한 업무 효율화**를 주도하며 **백엔드 리드** 역할을 수행하고 있습니다.",
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Backend Lead, Software Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "개발팀 **Backend lead**로서 주요 시스템 아키텍처 설계 및 구축, 운영.",
          "주요 프로젝트:",
          "  **AI 기반 인테리어 서비스**: 글로벌 타겟 AI 서비스의 **신규 백엔드 시스템** 및 **안정적인 LLM 워크플로우** 설계",
          "  **3D 인테리어 디자인 서비스**: **WAU 704%**, **세션 시간 68% 성장을 주도**하며 서비스 트래픽 **18배 증가**에도 **99.995%의 가용성** 확보. **API 응답시간 30ms**, **최대 로딩 시간 2.5초**를 달성하여 사용자 경험을 크게 개선.",
          "  **3D 에셋 최적화 파이프라인**: 자동화 파이프라인 구축으로 운영 효율을 27% 향상시키고 생산성 기여를 인정받아 **Top Contributor 선정**.",
          "  **AR 가구 배치 서비스**: 백엔드 시스템 최적화로 **API P99 응답 시간을 300ms에서 50ms로 단축**.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        description: [
          "대용량 **실시간 데이터 처리를 위한 확장 가능한 게임 서버 아키텍처** 설계.",
          "HLOD 기반 렌더링 최적화 기능 개발 및 CI 파이프라인 구축.",
        ],
      },
      {
        company: "BlackTangerine (Side-project)",
        period: "2020년 12월 - 2021년 6월",
        description: [
          "**딥러닝 기반 얼굴 피부 분석 및 의류 추천 시스템** 개발.",
          "Python 기반 personal color 분석 & 추천 시스템과 Node.js backend 개발.",
          "GCP CloudRun 기반 확장 가능한 서비스 구축.",
        ],
      },
      // {
      //   company: "서울시립대학교",
      //   position: "연구원 (International Urban & Infrastructure Research Center)",
      //   period: "2018년 8월 - 2019년 8월",
      //   description: ["MQTT 기반 시뮬레이션 백엔드 서비스 구축."],
      // },
    ],
    keyExperience: [
      {
        name: "LLM 기반 비동기 서비스 안정화",
        problem: [
          "사용자 **요청이 몰릴 경우** 워커가 과부하되고",
          "외부 LLM API의 응답 속도가 느리고 **간헐적으로 실패하는 문제**가 예상됐습니다. (OpenAI 기준 **99.7% uptime**)",
          "또한, 부적절한 LLM 응답에 대한 **재시도**가 필요했습니다.",
        ],
        approach: [
          "Kafka를 도입하여 요청을 비동기 처리하고, 워커에서 순차적으로 작업을 수행하도록 설계하고,",
          "워커의 처리 속도를 조절하여 자연스러운 **백프레셔**를 유도하고 시스템 안정성 확보했습니다.",
          "외부 API 실패에 대비하여 **자동 재시도 로직과 서킷 브레이커**도 도입했습니다.",
          "또한, 클라이언트 측에 비동기 UX를 구현하여 응답 대기 시간 동안의 사용자 경험 개선했습니다.",
        ],
        result: [
          "트래픽 급증 시에도 시스템 과부하 없이 **안정적인 처리**가 가능해졌고,",
          "사용자 체감 속도 및 응답 신뢰도 향상을 통한 **서비스 품질 개선**이 이루어졌습니다.",
          "또한, 워커 처리 속도 조절을 통해 **LLM 사용 요금 예측**이 가능해졌습니다.",
        ],
      },
      {
        name: "3D 애셋 관리 시스템 구축",
        problem: [
          "수만 개의 3D 모델을 수작업으로 상품 정보와 연동, 최적화, 배포하는 과정에서 발생하는 시간 소요 및 품질 불일치 문제가 있었습니다.",
          "또한, 운영팀 부담 증가로 인한 서비스 확장성 및 품질 유지의 어려움이 있었습니다.",
        ],
        approach: [
          "상품 코드와 3D 모델 업로드 시, 커머스 정보 연동 및 서비스별 최적화를 **자동화하는 파이프라인을** 설계했습니다.",
          "다양한 최적화 요소를 **정량 비교를 통한 반복 실험** 및 예외 케이스를 위한 fallback 로직을 구현했습니다.",
          "또한, 서비스별 요구사항에 맞춰 클라이언트의 3D 모델 처리 로직을 개선하여 사용자 경험을 향상했습니다.",
          "운영팀과 긴밀하게 협업하여 실제 사용 흐름에 맞게 파이프라인을 통합하고 지속적으로 개선했습니다.",
        ],
        result: [
          "GPU 리소스 20% 이상 절감, 파일 크기 평균 51% 감소, **연간 40일 이상의 인적 리소스 절감**이 이루어졌고,",
          "사내 우수 사례로 선정되어 생산성 기여를 인정받아 **Top Contributor**로 선정되었습니다.",
        ],
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
      "A backend engineer with a strong aptitude for deeply understanding and optimizing system architecture and performance. I focus not just on technical excellence but on practical problem-solving within a business context to make a real impact on user and service outcomes. To ensure stable service during rapid traffic growth, I have designed and implemented fault-tolerant architectures, efficient data processing, API performance improvements, and asynchronous parallel processing. I have consistently contributed to productivity, such as improving operational efficiency by 27% through automated pipelines, and have been selected as a **Top Contributor** on a quarterly basis. Currently, as a **Backend Lead** at Bucketplace, I am leading **system design, performance improvement, and workflow optimization using AI tools**.",
    experience: [
      {
        company: "Bucketplace",
        position: "Backend Lead, Software Engineer",
        period: "Aug 2022 – Present",
        description: [
          "As the **Backend Lead**, designed, built, and operated key system architectures.",
          "Key Projects:",
          "  **AI-based Interior Service**: Designed a **new backend system** and a **stable LLM workflow** for a global target AI service.",
          "  **3D Interior Design Service**: Drove **704% WAU** and **68% session time growth**, ensuring **99.995% availability** amid an **18x traffic increase**. Significantly improved UX by achieving **30ms API response times** and **2.5s max loading times**.",
          "  **3D Asset Optimization Pipeline**: Improved operational efficiency by 27% through an automated pipeline. Recognized as a **Top Contributor** for this productivity contribution.",
          "  **AR Furniture Placement Service**: Reduced **API P99 latency from 300ms to 50ms** through backend system optimization.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Jan 2020 – Jul 2022",
        description: [
          "Designed a **scalable game server architecture** for large-scale, real-time data processing.",
          "Developed HLOD-based rendering optimization features and built CI pipelines.",
        ],
      },
      {
        company: "BlackTangerine (Side-project)",
        position: "Software Developer",
        period: "Dec 2020 – Jun 2021",
        description: [
          "Developed a **deep learning-based system for facial skin analysis and clothing recommendations**.",
          "Built a personal color analysis & recommendation system with Python and a Node.js backend.",
          "Established a scalable service architecture using GCP CloudRun.",
        ],
      },
      // {
      //   company: "University of Seoul",
      //   position: "Researcher (International Urban & Infrastructure Research Center)",
      //   period: "Aug 2018 – Aug 2019",
      //   description: ["Built an MQTT-based simulation backend service."],
      // },
    ],
    keyExperience: [
      {
        name: "Stabilizing Asynchronous LLM-based Services",
        problem: [
          "Potential for worker overload during **traffic spikes**.",
          "Service degradation from slow, **unreliable, and inconsistent responses** from external LLM APIs (e.g., **99.7% uptime**).",
          "Frequent **retries** needed for inadequate responses.",
        ],
        approach: [
          "Used Kafka for asynchronous request processing with sequential, rate-limited workers to create natural **backpressure**.",
          "Implemented **automatic retry logic and a circuit breaker** to handle external API failures gracefully.",
          "Developed an async client-side UX to improve perceived performance during processing.",
        ],
        result: [
          "Achieved **stable processing** without system overload, even during traffic spikes.",
          "Improved service quality with enhanced perceived speed and response reliability.",
          "Enabled **predictable LLM cost management** by controlling worker throughput.",
        ],
      },
      {
        name: "3D Asset Management System Automation",
        problem: [
          "The manual 3D asset pipeline was time-consuming, error-prone, and led to quality inconsistencies.",
          "Heavy operational burden hindered service scalability and quality assurance.",
        ],
        approach: [
          "Designed a fully **automated pipeline** for 3D model ingestion, data linking, and optimization.",
          "Conducted **iterative, data-driven experiments** to determine optimal parameters for 3D asset optimization.",
          "Collaborated closely with the operations team to refine and integrate the pipeline into their workflow.",
        ],
        result: [
          "Reduced GPU usage by 20%+, average file size by 51%, and **saved over 40 person-days annually**.",
          "Recognized as a **Top Contributor** for building a company-wide best practice for productivity.",
        ],
      },
    ],
    education: [
      {
        school: "University of Seoul",
        degree: "Master's in Computer Science",
        period: "2018 – 2019",
        description:
          "Research on performance improvement of AI systems / Early completion of Master's degree through a combined Bachelor's-Master's program.",
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
