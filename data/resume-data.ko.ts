import type { ResumeData } from "@/types/resume"

// ResumeData 타입의 객체를 직접 export 합니다.
export const resumeDataKo: ResumeData = {
  personalInfo: {
    name: "정주안 (Juahn Jeong)",
    nameEn: "Juahn Jeong",
    email: "johnnyapu15@gmail.com",
    phone: "010-4479-2917",
    address: "서울, 대한민국",
    linkedin: "www.linkedin.com/in/juahn-jeong",
  },
  summary:
    "딥러닝 기반 응용과 3D 기반 XR 서비스 구축 경험을 바탕으로, 대규모 백엔드 시스템 설계와 최적화에 강점을 지닌 소프트웨어 엔지니어입니다. 급격한 트래픽 증가 상황에서도 안정적인 서비스 제공을 위해 데이터 처리 효율화, API 성능 개선, 비동기 병렬 처리 등을 설계하고 구현했으며, 자동화 파이프라인을 구축해 운영 효율을 50% 향상시키고 연간 40일의 엔지니어링 리소스를 절감한 경험이 있습니다. 현재 Bucketplace(오늘의집)에서 시스템 디자인과 개발, 성능 개선을 주도하며 백엔드 리드를 맡고 있습니다.",
  experience: [
    {
      company: "Bucketplace (오늘의집)",
      position: "Backend Lead, Software Engineer",
      period: "2022년 8월 - 현재",
      location: "서울, 대한민국",
      description: [
        "개발팀 Backend lead로서 AI, XR, 3D 등 여러 도메인의 주요 시스템 아키텍처 설계 및 구축, 운영.",
        "Agile 환경에서 cross-functional 팀과 협업하여 지속적 개선 및 배포 주도.",
        "서비스 사용자 트래픽 18배 증가 (2.3TPS → 40.4TPS), Availability 99.95% 유지 달성",
        "주요 서비스 API p95 응답시간 30ms 달성으로 실시간 UX 향상.",
        "3D asset optimization 자동화로 연간 40일 절감 및 운영 효율 50% 향상",
      ],
    },
    {
      company: "LG CNS",
      position: "System & Solution Programming Consultant",
      period: "2021년 2월 - 2022년 7월",
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
      company: "BlackTangerine (Side-project)",
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
      period: "2018년 8월 - 2019년 8월",
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
        "WAU 704% (3863 → 27194), 평균 session time 68% 증가 (21분 → 35.25분)",
        "서비스 사용자 트래픽 18배 증가 (2.3TPS → 40.4TPS), Availability 99.95%",
        "주요 API p95 응답시간 30ms 달성",
        "API 성능 개선: 응답 시간 60% 개선 (200ms → 80ms), payload size 60% 감소 (5MB → 2MB).",
        "최대 로딩 시간 75% 개선 (10초 → 2.5초)로 사용자 경험 향상",
        "Spring Boot 기반 백엔드 시스템 및 API 서버 설계",
        "Node.js, React, Three.js 기반 FE 개발",
        "LLM, RAG 기반 제품 추천 기능 설계 및 프로토타입 개발 (vector DB, embedding pipeline 구축).",
      ],
    },
    {
      name: "3D Asset Optimization Pipeline",
      period: "Bucketplace (오늘의집)",
      description: [
        "자동화된 3D asset 최적화 및 배포 파이프라인 구축.",
        "Eng maintenance resource 40days/year 절감 및 운영팀 작업 시간 50% 감소.",
        "GPU usage 20% 개선 - 파일 크기 51% 감소, triangle 수 90% 감소",
        "3D 자산 관리 프로세스 자동화로 cross-functional 팀(BE, Biz) 내 수동 작업 시간을 50% 절감하여, 팀 생산성 우수 사례로 선정됨",
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
}
