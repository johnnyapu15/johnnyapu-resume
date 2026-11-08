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
    { name: "MySQL", level: 3 },
    { name: "Redis", level: 4 },
    { name: "Elasticsearch", level: 3 },
  ],
  tools: [
    { name: "Git", level: 5 },
    { name: "Docker", level: 4 },
    { name: "ArgoCD", level: 4 },
    { name: "Datadog", level: 4 },
  ],
  "ai-tools": [
  ],
}

// Approved Korean wording and Argon English translation (2026-11-08).
export const resumeData: MultiLanguageResumeData = {
  ko: {
    "personalInfo": {
      "name": "정주안 (Juahn Jeong)",
      "nameEn": "Juahn Jeong",
      "email": "johnnyapu15@gmail.com",
      "position": "Senior Backend Engineer / Tech Lead"
    },
    "summary": "오늘의집에서 AI·3D 서비스를 개발하는 엔지니어 팀을 리드하며 신규 서비스 출시, 대규모 트래픽 대응, 인앱 구독·제휴 수익화 구축, 사내 공통 플랫폼 개발을 이끌어온 백엔드 엔지니어입니다. 주요 기술 과제와 조직 생산성 개선을 주도해 사내에서 **Eng Award**, **AI Award**, **AI Native MVP**를 수상했습니다. 3D방꾸미기 서비스의 API와 로딩 성능을 개선하고 3D 에셋 제작·검수·배포 파이프라인을 자동화해 WAU 약 7배, 연간 GMV 6배(8.6억 원) 성장에 기여하며 에셋 제작 비용을 88% 줄였습니다. 이어 글로벌 AI 서비스(Ohouse AI)의 백엔드 개발을 맡아 4주 만에 출시하고 인앱 구독 결제와 Amazon 제휴 상품 추천 기능을 구축했습니다. 이후 3D방꾸미기 AI 인테리어 비서를 개발·운영한 경험을 바탕으로 사내 공통 **AI Agent Platform** 구축을 리드했습니다. 초기 플랫폼 구상에서 당장 필요한 공통 범위를 정리해 팀 합의를 이끌고, 핵심 실행 서버 개발부터 타팀 자연어 검색 서비스(AI 큐레이터)의 플랫폼 도입 및 출시 전 성능·확장성 검증까지 직접 맡아 진행했습니다.",
    "coreStrengths": [],
    "leadershipHighlights": [],
    "experience": [
      {
        "company": "Bucketplace (오늘의집)",
        "position": "Senior Backend Engineer / Tech Lead",
        "period": "2022년 8월 - 현재",
        "description": [
          "**AI Agent Platform 구축 리드**: 팀마다 개별로 만들던 에이전트 실행과 대화 관리 기능을 공통화하기 위해 플랫폼 개발 범위를 정의하고 팀 합의를 이끌었습니다. 공통 실행 서버를 직접 개발하고 기존 채팅 에이전트 서비스를 플랫폼 구조로 전환했습니다.",
          "**AI 큐레이터 플랫폼 연동 및 출시 준비**: 타팀의 자연어 검색 서비스(AI 큐레이터)에 공통 플랫폼을 적용하고 실시간 대화 처리와 이력 관리 기능을 연동했습니다. 출시 전 부하 검증을 통해 서버 확장 기준과 운영 설정을 정비하고 긴 대화 조회 시 발생하던 지연 문제를 해결했습니다.",
          "**AI 인테리어 비서 개발 및 평가 환경 구축**: 상품 검색·이미지 합성·스타일 추천을 제공하는 3D방꾸미기 AI 채팅 서버를 개발하고, 공간 에이전트 MVP의 화면 연동 규격 정리부터 서버 구현·배포를 리드했습니다. 배포 전 대화 품질을 점검하는 자동 평가 및 대화 재실행 도구를 만들었습니다.",
          "**Ohouse AI 글로벌 출시 및 구독·제휴 구축**: 글로벌 AI 인테리어 서비스의 백엔드와 비동기 이미지 생성 구조를 구축해 6주 목표였던 출시 일정을 4주 만에 마쳤습니다. Apple·Google 인앱 구독 결제 서버를 개발하고 Amazon 제휴 상품 추천 기능을 연동해 제휴 상품 클릭 후 구매 전환율 10.5%를 기록했습니다.",
          "**3D방꾸미기 성능 개선·제작 자동화·AR 개선**: API 응답 시간(200ms→80ms)과 로딩 시간(10초→2.5초)을 단축하고 평소 대비 10.2배 트래픽 환경에서 99.95% 가용성을 유지하며 WAU 약 7배, 연간 GMV 6배(8.6억 원) 성장에 기여했습니다. 3D 에셋 제작·검수·배포 과정을 자동화해 월 생산량을 68개에서 800개로 늘리고 제작 비용 88%와 연간 40일 이상의 운영 시간을 줄여 **Eng Award**를 수상했습니다. 또한 AR 모델 경량화(90%)와 Size Box 도입으로 지원 상품을 2,210개에서 231,000개로 늘려 구매 전환율 1.7배 향상에 기여했습니다.",
          "**팀 역량 강화 및 업무 생산성 개선**: 신규 입사자와 타 직군 엔지니어의 백엔드 온보딩 및 코드 리뷰를 이끌고, 조직 개편 시기에도 설계 리뷰와 기술 회의를 운영하며 팀의 개발 흐름을 유지했습니다. AI 기반 릴리즈 노트 작성 및 데이터 분석 도구를 만들어 반복 업무를 줄이고 **AI Award**와 **AI Native MVP**를 수상했습니다."
        ],
        "roleSummary": "AI·3D 서비스를 개발하는 엔지니어 팀을 리드하며, 제품·플랫폼 설계와 개발 우선순위 조율, 핵심 서버 직접 구현, FE·ML 및 타팀과의 협업을 맡고 있습니다."
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Consultant",
        "period": "2020년 1월 - 2022년 7월",
        "description": [
          "다중 사용자의 편집 상태를 실시간으로 동기화하는 서버와 Unity 클라이언트 연동 백엔드 API를 설계·개발하고 운영했습니다.",
          "수동으로 진행하던 빌드·테스트·배포 과정을 CI/CD 파이프라인으로 자동화해 배포 시간을 줄였습니다."
        ]
      }
    ],
    "keyExperience": [
      {
        "name": "1. 사내 공통 AI Agent Platform 구축 및 타팀 서비스 도입",
        "summaryView": {
          "problem": "사내 여러 팀에서 AI 에이전트 서비스를 준비하면서 대화 이력 관리와 실시간 응답 처리 기능을 각자 중복해서 개발하고 있었습니다. 반면 초기 플랫폼 계획은 다루는 범위가 넓어 실제 서비스 일정에 맞춰 빠르게 제공하기 어려운 상황이었습니다.",
          "approach": "플랫폼 개발을 리드하며 당장 서비스 연동에 필요한 실행·세션·스트리밍 중심으로 1차 개발 범위를 좁혀 팀 합의를 이끌었습니다. 공통 실행 서버를 직접 개발해 기존에 운영하던 인테리어 비서 에이전트를 플랫폼 구조로 먼저 전환했으며, 이후 타팀의 AI 큐레이터 서비스가 플랫폼의 대화 저장소와 응답 처리 흐름을 사용하도록 연동 작업을 맡았습니다.",
          "result": "운영 중인 기존 에이전트 서비스를 자체 플랫폼으로 전환하고, 타팀 신규 서비스까지 동일한 플랫폼 위에서 동작하도록 연동을 마쳐 에이전트 기능을 공통 구조로 개발·운영할 수 있게 했습니다."
        }
      },
      {
        "name": "2. AI 큐레이터 출시 전 성능 검증 및 운영 환경 정비",
        "summaryView": {
          "problem": "타팀의 자연어 검색 서비스인 AI 큐레이터 출시를 앞두고, 외부 모델 응답 대기가 긴 에이전트 서비스 특성에 맞는 서버 확장 기준이 없었고 대화가 길어질수록 응답 지연과 순서 불일치가 발생하는 문제가 있었습니다.",
          "approach": "출시 전 백엔드 안정화 작업을 맡아 실제 서비스와 유사한 조건의 부하 검증 환경을 구성하고 서버당 처리 한계를 확인했습니다. 이를 바탕으로 대기 작업량에 따라 서버가 자동 증설되도록 확장 기준과 운영 설정을 맞추고, 연동 과정에서 발견된 응답 노출 순서 문제와 긴 대화 조회 지연 원인을 찾아 수정했습니다.",
          "result": "발견된 조회 지연과 응답 순서 문제를 수정하고, 플랫폼 연동 및 성능 검증을 거쳐 확인한 확장 기준과 운영 설정을 반영해 출시 준비를 마쳤습니다."
        }
      },
      {
        "name": "3. 3D방꾸미기 성능 개선 및 에셋 제작 파이프라인 자동화",
        "summaryView": {
          "problem": "모바일 3D 인테리어 서비스의 초기 진입 속도가 느려 사용자 이탈이 발생하고 있었고, 대형 프로모션 기간의 급증하는 트래픽에도 대비해야 했습니다. 또한 서비스 내 배치 가능한 상품을 늘리기 위해 대량의 3D 에셋이 필요했으나, 외주 제작부터 검수·배포까지 수작업으로 운영되어 생산량 확대와 비용 절감이 필요한 상황이었습니다.",
          "approach": "초기 진입 시 호출되는 API와 3D 모델 로딩 구조의 병목을 직접 개선하고 대량 트래픽 대응 환경을 정비했습니다. 아울러 수작업으로 진행되던 3D 에셋 제작·검수·배포 전 과정을 자동화 파이프라인으로 구축하고, AI 기반 품질 분류와 웹 운영 대시보드를 개발해 운영팀이 개발자 지원 없이 직접 검수·배포할 수 있도록 개선했습니다.",
          "result": "API 응답 시간(200ms→80ms, 크기 54% 감소)과 로딩 시간(10초→2.5초)을 줄이고 10.2배 트래픽 환경에서도 99.95% 가용성을 유지하며 WAU 약 7배, 연간 GMV 6배(8.6억 원) 성장에 기여했습니다. 에셋 월 생산량은 68개에서 800개로 늘리고 제작 비용 88%와 연간 40일 이상의 운영 시간을 절감해 **Eng Award**를 수상했습니다."
        }
      }
    ],
    "education": [
      {
        "school": "서울시립대학교",
        "degree": "석사, 컴퓨터과학",
        "period": "2018년 - 2019년",
        "description": "인공지능 시스템 성능 개선 연구"
      },
      {
        "school": "서울시립대학교",
        "degree": "학사, 컴퓨터과학부",
        "period": "2012년 - 2017년",
        "description": ""
      }
    ],
    "technicalSummary": [
      "**Languages & Frameworks**: Kotlin, Python, TypeScript / Spring Boot, Node.js",
      "**Data & Infrastructure**: MySQL, MongoDB, Redis, Valkey, Kafka / AWS, Kubernetes, KEDA"
    ],
    "projects": [],
    "certifications": [],
    "activities": [],
    "skills": skillsData
  },
  en: {
    "personalInfo": {
      "name": "Juahn Jeong",
      "nameEn": "Juahn Jeong",
      "email": "johnnyapu15@gmail.com",
      "position": "Senior Backend Engineer / Tech Lead"
    },
    "summary": "Backend engineer leading an engineering team building AI and 3D services at Bucketplace, driving new service launches, high-traffic reliability, in-app subscription and affiliate monetization, and internal shared platform development. Recognized with the company's **Eng Award**, **AI Award**, and **AI Native MVP** for leading key technical initiatives and improving organizational productivity. Improved API and loading performance for the Room Planner service and automated the 3D asset production, review, and deployment pipeline, contributing to approximately 7x WAU growth and 6x annual GMV growth (KRW 860 million) while reducing asset production costs by 88%. Subsequently led backend development for the global AI service (Ohouse AI), launching it in 4 weeks and building in-app subscription billing and Amazon affiliate product recommendations. Building on experience developing and operating the Room Planner AI Interior Assistant, led the development of the internal shared **AI Agent Platform**. Narrowed the initial platform scope to essential shared capabilities to build team consensus, and directly handled everything from core runtime server development to onboarding another team's natural language search service (AI Curator) and verifying pre-launch performance and scalability.",
    "coreStrengths": [],
    "leadershipHighlights": [],
    "experience": [
      {
        "company": "Bucketplace",
        "position": "Senior Backend Engineer / Tech Lead",
        "period": "Aug 2022 - Present",
        "description": [
          "**Led AI Agent Platform Development**: Defined the platform development scope and built team consensus to standardize agent execution and conversation management features previously built separately by each team. Directly developed the shared runtime server and migrated existing chat agent services to the platform architecture.",
          "**AI Curator Platform Integration & Launch Readiness**: Applied the shared platform to another team's natural language search service (AI Curator) and integrated real-time conversation handling and history management. Established server scaling criteria and operational configurations through pre-launch load testing, and resolved latency issues when retrieving long conversations.",
          "**AI Interior Assistant Development & Evaluation Environment**: Developed the Room Planner AI chat server providing product search, image synthesis, and style recommendations, and led the spatial agent MVP from defining client integration specifications to server implementation and deployment. Built automated evaluation and conversation replay tools to check conversation quality before deployment.",
          "**Ohouse AI Global Launch & Subscription/Affiliate Monetization**: Built the backend and asynchronous image generation structure for the global AI interior service, completing a targeted 6-week launch schedule in 4 weeks. Developed the Apple and Google in-app subscription billing server and integrated Amazon affiliate product recommendations, recording a 10.5% purchase conversion rate after affiliate product clicks.",
          "**Room Planner Performance, Asset Automation & AR Improvements**: Reduced API response time (200ms to 80ms) and loading time (10s to 2.5s), and maintained 99.95% availability under 10.2x normal traffic, contributing to approximately 7x WAU growth and 6x annual GMV growth (KRW 860 million). Automated the 3D asset production, review, and deployment process to increase monthly output from 68 to 800 assets, reducing production costs by 88% and saving over 40 operational days annually, receiving the **Eng Award**. Also contributed to a 1.7x increase in purchase conversion rate by reducing AR model size by 90% and introducing Size Box to expand supported products from 2,210 to 231,000.",
          "**Team Enablement & Productivity Improvements**: Led backend onboarding and code reviews for new hires and cross-functional engineers, and maintained development momentum during organizational restructuring by running design reviews and technical meetings. Built AI-based release note generation and data analysis tools to reduce repetitive work, receiving the **AI Award** and **AI Native MVP**."
        ],
        "roleSummary": "Lead an engineering team building AI and 3D services, responsible for product and platform design, development prioritization, hands-on core server implementation, and collaboration with FE, ML, and partner teams."
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Consultant",
        "period": "Jan 2020 - Jul 2022",
        "description": [
          "Designed, developed, and operated a real-time multi-user editing state synchronization server and backend APIs for Unity client integration.",
          "Automated manual build, test, and deployment processes into a CI/CD pipeline to reduce deployment time."
        ]
      }
    ],
    "keyExperience": [
      {
        "name": "1. Internal Shared AI Agent Platform Development & Cross-Team Adoption",
        "summaryView": {
          "problem": "Multiple internal teams preparing AI agent services were duplicating conversation history management and real-time response handling features. Meanwhile, the initial platform plan had a broad scope that made it difficult to deliver quickly in time for actual service schedules.",
          "approach": "Led platform development and narrowed the phase-one scope to execution, session, and streaming features immediately needed for service integration, building team consensus. Directly developed the shared runtime server to migrate the existing Interior Assistant agent to the platform first, and then led the integration for another team's AI Curator service to use the platform's conversation storage and response handling flow.",
          "result": "Migrated the existing production agent service to the internal platform and completed integration for another team's new service on the same platform, enabling agent features to be developed and operated on a shared architecture."
        }
      },
      {
        "name": "2. AI Curator Pre-Launch Performance Verification & Operational Readiness",
        "summaryView": {
          "problem": "Ahead of launching AI Curator, another team's natural language search service, there were no server scaling criteria suited to agent services with long external model wait times, and longer conversations caused response latency and ordering mismatches.",
          "approach": "Took charge of pre-launch backend stabilization, setting up a load testing environment matching realistic service conditions to identify per-server processing limits. Configured auto-scaling criteria and operational settings based on pending workload, and identified and fixed causes of response ordering issues and latency when retrieving long conversations found during integration.",
          "result": "Resolved the retrieval latency and response ordering issues, and completed launch readiness by applying the scaling criteria and operational configurations verified through platform integration and performance testing."
        }
      },
      {
        "name": "3. Room Planner Performance Improvement & Asset Pipeline Automation",
        "summaryView": {
          "problem": "Slow initial entry times in the mobile 3D interior service were causing user drop-offs, while the system also needed to handle traffic spikes during major promotions. Additionally, expanding placeable products required a large volume of 3D assets, but outsourced production, review, and deployment were handled manually, requiring higher output and lower costs.",
          "approach": "Directly resolved bottlenecks in initial entry APIs and 3D model loading, and prepared the environment for high-volume traffic. Built an automated pipeline covering the entire manual 3D asset production, review, and deployment process, and developed AI-based quality classification and a web operations dashboard so the operations team could review and deploy assets without developer support.",
          "result": "Reduced API response time (200ms to 80ms, payload size reduced by 54%) and loading time (10s to 2.5s), and maintained 99.95% availability under 10.2x traffic, contributing to approximately 7x WAU growth and 6x annual GMV growth (KRW 860 million). Increased monthly asset output from 68 to 800, cut production costs by 88%, and saved over 40 operational days per year, earning the **Eng Award**."
        }
      }
    ],
    "education": [
      {
        "school": "University of Seoul",
        "degree": "M.S. in Computer Science",
        "period": "2018 - 2019",
        "description": "Research on AI system performance optimization"
      },
      {
        "school": "University of Seoul",
        "degree": "B.S. in Computer Science",
        "period": "2012 - 2017",
        "description": ""
      }
    ],
    "technicalSummary": [
      "**Languages & Frameworks**: Kotlin, Python, TypeScript / Spring Boot, Node.js",
      "**Data & Infrastructure**: MySQL, MongoDB, Redis, Valkey, Kafka / AWS, Kubernetes, KEDA"
    ],
    "projects": [],
    "certifications": [],
    "activities": [],
    "skills": skillsData
  },
}
