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

export const resumeData: MultiLanguageResumeData = {
  ko: {
    personalInfo: {
      name: "정주안 (Juahn Jeong)",
      nameEn: "Juahn Jeong",
      email: "johnnyapu15@gmail.com",
      position: "Senior Backend Engineer",
    },
    summary: [
      "분산 시스템과 장시간 비동기 작업이 많은 AI/3D 도메인에서 런칭, 안정화, 수익화를 맡아온 백엔드 엔지니어입니다.",
      "제한된 리소스에서도 글로벌 AI 서비스 런칭, 장시간 작업 운영 표준화, 3D 자동화 파이프라인 구축으로 서비스 안정성을 높이고 비즈니스 성장에 기여했으며, 3D 자동화·AI 고도화 등의 성과로 사내 엔지니어링·AI 부문에서 여러 차례 수상했습니다.",
      "비동기 워커 기반 운영 모델, 오토스케일링, 장애 격리 설계를 여러 서비스에 걸쳐 재사용 가능한 패턴으로 정착시켰습니다.",
      "필요할 때는 FE/ML/인프라 협업 병목도 직접 메우되, 중심은 항상 안정적인 백엔드 운영 모델과 도메인 설계에 두고 일해왔습니다.",
      "현재는 AI Agent Platform을 설계·구축하며, 고품질 에이전트를 빠르게 만들 수 있는 내부 도구와 프레임워크를 개발하고 있습니다.",
    ].join(" "),
    coreStrengths: [],
    leadershipHighlights: [],
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Senior Backend Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "**Ohouse AI 런칭**: **6주 데드라인을 4주로 단축**해 **170개국** 글로벌 런칭을 완료했습니다. 비동기 처리와 실패 격리 구조를 설계해 외부 AI 장애 전파를 차단하고, 장시간 작업의 상태 관리·재시도 패턴을 적용했습니다.",
          "  이전 서비스에서 다져온 비동기 처리 패턴을 바탕으로, 메시지 큐 기반 워커와 오토스케일링 구조를 설계해 예측 불가 트래픽을 안정적으로 처리했습니다.",
          "**Ohouse AI 수익화/고도화**: iOS/Google 구독 흐름을 하나의 도메인으로 통합하기 위해 Apple/Google IAP 라이프사이클 상태머신을 설계하고, 구독 상품의 운영 복잡도를 낮추며 실제 매출 발생 기반을 마련했습니다.",
          "  RAG를 이용한 제휴 상품 추천을 런칭하고 **10.5%**의 높은 CVR로 수익화 가능성을 검증했고, **LLM Provider Fallback + Circuit Breaker**를 적용해 특정 LLM provider 장애 시에도 서비스가 지속되도록 구성했습니다.",
          "  PoC 워커를 **Langgraph 기반 step-based 구조**로 재설계해 AI 워크플로우를 유연하게 확장할 수 있는 구조를 갖췄습니다.",
          "**Panorama AR**: 사용자의 실제 방을 3D로 재구성해 가구를 배치해볼 수 있는 서비스의 백엔드를 리드했습니다. MLE 연구 결과를 서비스로 연동하는 **6개 마이크로서비스**를 설계·런칭하고, 비동기 상태관리로 장시간 3D Reconstruction 파이프라인을 안정 운영해 일 **~300건** 룸 스캔을 처리했습니다.",
          "**Room Planner**: 성능·안정성 개선으로 **WAU 704% 성장**과 **연간 GMV 600%(8.6억)**에 기여했고, **10.2배 트래픽**에서도 **99.95% 가용성**을 유지했습니다.",
          "  API **200ms→80ms**, payload **54%** 절감, **LoD 자동 생성**으로 3D 모델 **90%** 경량화. Draw call **3,000→20(99%)**, 모델 로딩 **10초→2.5초**로 모바일 렌더링 병목을 해소했습니다.",
          "  부하 테스트로 이벤트/챌린지 스파이크를 사전 검증해 **무사건으로 운영**했습니다. AR Size Box로 AR 지원 상품을 **2,210→231,000개(104배)** 확대해 구매 전환율 **1.7배** 향상에 기여했습니다.",
          "  연관 상품 추천을 실시간 스코어링에서 **오프라인 스코어링 알고리즘으로 재설계**해 검색 API 레이턴시를 **99.7%** 절감했습니다.",
          "**3D 에셋 자동화**: 수작업 3D 제작 파이프라인을 자동화해 월 생산량 **68개→800개**, **비용 88% 절감**으로 **Eng Award**를 받았습니다.",
          "  에셋 관리 시스템(DAM) 구축으로 GPU **20%** 감소, 파일 크기 **51%** 축소, **연간 40일+** 운영 시간 절감(**Top Contributor**). GPT-4o 기반 12개 기준 품질 선별로 E2E 자동화를 완성했습니다.",
          "**기술 리더십**: 신규 입사자·FE/ML 인원을 **온보딩과 코드 리뷰**로 백엔드에 독립 기여할 수 있도록 이끌고, 전사 최초 **Spring Boot 3 migration** 트러블슈팅 가이드를 문서화했습니다.",
          "  릴리즈 노트·데이터 분석 자동화로 팀 배포 주기를 단축해 **AI Award**, **AI Native MVP**를 받았습니다.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        description: [
          "Node.js · Redis 기반 실시간 싱크 서버를 설계·운영하고, WebSocket 기반 다중 사용자 동시 편집 환경을 구축했습니다.",
          "GitLab/Jenkins 기반 CI/CD 파이프라인을 자동화해 빌드·테스트·배포 리드타임을 단축하고, Unity 클라이언트와 연동되는 백엔드 API를 개발했습니다.",
        ],
      },
      // BlackTangerine (Side-project) - removed for 1-page resume
      // {
      //   company: "서울시립대학교",
      //   position: "연구원 (International Urban & Infrastructure Research Center)",
      //   period: "2018년 8월 - 2019년 8월",
      //   description: ["MQTT 기반 시뮬레이션 백엔드 서비스 구축."],
      // },
    ],
    keyExperience: [
      {
        name: "Ohouse AI 런칭 및 고도화",
        summaryView: {
          problem:
            "실제 인테리어 사진에 가구를 자동 배치하는 AI 서비스를, 제한된 리소스와 여러 팀 의존성이 얽힌 상황에서 6주 안에 글로벌 런칭해야 했습니다.\n멀티턴 이미지 생성 특성상 사용자별 요청 순서 보장과 쿼터 제한 대응이 필수였고, 외부 AI 장애 전파도 차단해야 했습니다.",
          approach:
            "메시지 큐 기반 비동기 워커로 API와 처리를 분리하고, Kubernetes 오토스케일링과 동시성 제한으로 서버를 분리 운영했습니다.\n재시도/격리 정책과 공급사 우회 경로를 사전에 설계하고, JWT 기반 게스트 인증으로 런칭 병목을 제거했습니다.\n런칭 후에는 Apple/Google IAP 상태머신과 LLM Provider Fallback + Circuit Breaker를 적용하고, PoC 작업 흐름을 단계형 구조로 재설계해 수익화와 확장이 가능한 구조를 갖췄습니다.\n이미지 메타데이터 기반 제휴 상품 추천 경로를 구성해 외부 정책을 준수하면서 실시간 추천을 제공했습니다.",
          result:
            "**4주 만에 170개국 런칭**을 완료하고, 오토스케일링과 백프레셔로 예측 불가 트래픽에서도 장애 없이 운영했습니다.\n공급사 전환 가능한 연동 구조로 외부 장애에서 빠르게 복구했고, 제휴 상품 **CVR 10.5%**로 수익 모델을 검증했습니다.",
        },
      },
      {
        name: "3D 에셋 파이프라인 구축 및 생산 자동화",
        summaryView: {
          problem:
            "Room Planner와 AR 기능에 필요한 3D 모델을 수작업으로 제작하고 있었습니다.\n기존 에셋은 관리 체계 없이 GPU와 스토리지를 비효율적으로 사용했고, 신규 모델은 처리량과 품질 편차로 상품 확대를 감당하기 어려웠습니다.",
          approach:
            "에셋 관리 시스템(DAM)을 구축해 중복 제거·자동 최적화·배포 파이프라인을 체계화하고, 운영 대시보드에서 3D 프리뷰·AR/Room Planner 연동 검수까지 엔지니어 의존 없이 처리할 수 있도록 했습니다.\nImage-to-3D 파이프라인은 상태 흐름 기반으로 자동화하고, 워커별 진행도를 DB로 관리해 장애 복구와 수평 확장이 가능하도록 했습니다.\n반복 실험으로 파라미터를 고정하고 fallback 로직으로 예외 케이스를 처리해 품질 편차를 줄였으며, GPT-4o 기반 12개 기준 품질 선별로 E2E 자동화를 완성했습니다.",
          result:
            "DAM 구축으로 GPU **20%** 감소, 파일 크기 **51%** 축소, **연간 40일+** 운영 시간 절감으로 **Top Contributor**에 선정되었습니다.\nImage-to-3D 자동화로 월 생산량 **68개→800개**, **비용 88% 절감**, **45개 신규 카테고리** 확장을 이뤄 **Eng Award**를 받았습니다.",
        },
      },
      {
        name: "Room Planner 성능 안정성 강화",
        summaryView: {
          problem:
            "모바일 3D 인테리어 배치 서비스에서 초기 로딩 지연이 사용자 이탈과 성장 정체의 핵심 병목이었습니다.\n이벤트/챌린지 트래픽 스파이크에서도 무중단 운영이 필요했고, 렌더링이 느려 사용자 체류 시간이 짧은 것도 문제였습니다.",
          approach:
            "**성능**: LoD 자동 생성과 Mesh Simplification으로 3D 모델을 **90% 경량화**하고, API 호출 구조 개선으로 지연을 **200ms→80ms**로 단축했습니다. Draw call **3,000→20**과 렌더링 파이프라인 개선으로 정적 렌더링 **60초→20초**, 애니메이션 **20분→3분**을 달성했습니다.\n**안정성**: 큐 기반 지표 모니터링과 안전한 종료 규칙으로 스케일링을 안정시키고, 부하 테스트로 이벤트/챌린지 스파이크 시나리오를 사전 검증했습니다.",
          result:
            "성능 개선으로 사용자 세션 시간이 **21분→35분(68%)**으로 증가하며 **WAU 704% 성장**, **연간 GMV 600%(8.6억)** 성장에 기여했습니다.\n이벤트/챌린지 트래픽 급증 구간에서 **무사건으로 운영**하며 **10.2배 트래픽**에서 **99.95% 가용성**을 유지했습니다.",
        },
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
      position: "Senior Backend Engineer",
    },
    summary: [
      "Backend engineer focused on distributed systems and long-running async workloads in AI/3D products.",
      "Improved service stability and contributed to business growth through global AI launch, reusable operating models for long-running jobs, and 3D automation pipelines — all under tight resource constraints, with multiple internal engineering and AI awards for 3D automation and AI service evolution.",
      "Turned async worker patterns, autoscaling, and failure isolation into reusable building blocks shared across multiple services.",
      "When needed, filled FE/ML/infrastructure gaps to keep delivery moving, but always anchored on backend operating models and domain design.",
      "Currently designing and building an AI Agent Platform — developing internal tools and frameworks to help teams create high-quality agents quickly.",
    ].join(" "),
    coreStrengths: [],
    leadershipHighlights: [],
    experience: [
      {
        company: "Bucketplace",
        position: "Senior Backend Engineer",
        period: "Aug 2022 – Present",
        description: [
          "**Ohouse AI Launch**: Completed global launch to **170 countries** delivering in **4 weeks against a 6-week deadline**. Designed async processing and failure isolation to contain external AI failures, and standardized state management and retry patterns into a reusable operating model across services.",
          "  Built message-queue-based async workers with autoscaling to handle unpredictable traffic, extending the pattern to DAM, Panorama AR, and Room Planner.",
          "**Ohouse AI Monetization / Evolution**: Unified iOS/Google subscription flows into one domain model, ensured payment correctness, and proved monetization viable with affiliate **CVR 10.5%**.",
          "  Designed Apple/Google **IAP lifecycle state machine** and implemented **LLM Provider Fallback + Circuit Breaker** for automatic provider failover.",
          "  Redesigned PoC workers into a **Langgraph-based step architecture** for extensible AI workflows.",
          "**Panorama AR**: Led the backend for a service that reconstructs users' rooms in 3D for virtual furniture placement. Designed and launched **6 microservices** to productionize ML research results, with async state management for long-running 3D Reconstruction pipelines, handling **~300 daily room scans**.",
          "**Room Planner**: Improved performance and reliability, contributing to **704% WAU growth** and **600% annual GMV (KRW 860M)** while sustaining **99.95% availability** at **10.2x traffic**.",
          "  API latency **200ms→80ms**, payload **54%** reduction, **LoD auto-generation** for **90%** model lightweighting. Draw calls **3,000→20 (99%)**, model loading **10s→2.5s**, resolving mobile rendering bottlenecks.",
          "  Load-tested event/challenge spike scenarios for **zero-incident** operation. Expanded AR-supported products from **2,210 to 231,000 (104x)** via AR Size Box, lifting purchase conversion by **1.7x**.",
          "  Redesigned associated-item recommendations from real-time to **offline scoring algorithm**, cutting search API latency by **99.7%**.",
          "**3D Asset Automation**: Automated the manual 3D production pipeline, scaling monthly output from **68 to 800 items** and reducing cost by **88%**, earning the **Eng Award**.",
          "  Built a Digital Asset Management (DAM) system — GPU **20%** reduction, file size **51%** smaller, **40+ days/year** saved (**Top Contributor**). Completed E2E automation with GPT-4o-based quality scoring across 12 criteria.",
          "**Technical Leadership**: Onboarded new hires, FE, and ML collaborators via **code reviews** so they could contribute to backend independently. Documented the company's first **Spring Boot 3 migration** troubleshooting guide.",
          "  Shortened release cycles with release-note and analytics automation, earning **AI Award** and **AI Native MVP** recognition.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Jan 2020 – Jul 2022",
        description: [
          "Designed and operated a Node.js + Redis real-time sync server, building a WebSocket-based multi-user concurrent editing environment.",
          "Automated CI/CD pipelines with GitLab/Jenkins to reduce build, test, and deployment lead time, and developed backend APIs for Unity client integration.",
        ],
      },
      // BlackTangerine (Side-project) - removed for 1-page resume
      // {
      //   company: "University of Seoul",
      //   position: "Researcher (International Urban & Infrastructure Research Center)",
      //   period: "Aug 2018 – Aug 2019",
      //   description: ["Built an MQTT-based simulation backend service."],
      // },
    ],
    keyExperience: [
      {
        name: "Ohouse AI: Launch and Evolution",
        summaryView: {
          problem:
            "An AI service that auto-places furniture in real interior photos needed to launch globally within 6 weeks under tight staffing with many cross-team dependencies.\nMulti-turn image generation required strict per-user ordering and quota-limit handling, and external AI failures had to be contained.",
          approach:
            "Separated API and workers via message queues, then ran Kubernetes autoscaling with concurrency limits for independent scaling.\nDesigned retry/isolation policies and provider failover paths upfront, and removed launch bottlenecks with JWT-based guest auth.\nPost-launch, applied Apple/Google IAP state machine and LLM Provider Fallback + Circuit Breaker, and redesigned the PoC workflow into a step-based architecture for monetization and scalability.\nBuilt a policy-compliant affiliate recommendation path using image metadata for real-time product suggestions.",
          result:
            "Completed launch to **170 countries in 4 weeks** and maintained uninterrupted operation under unpredictable traffic with autoscaling and backpressure.\nRecovered quickly from external failures via provider failover architecture.\nAchieved affiliate **CVR 10.5%**, proving the monetization model.",
        },
      },
      {
        name: "3D Asset Pipeline & Production Automation",
        summaryView: {
          problem:
            "3D models for Room Planner and AR features were produced manually.\nExisting assets lacked a management system, wasting GPU and storage, while new model creation couldn't scale due to throughput limits and quality variance.",
          approach:
            "Built a Digital Asset Management (DAM) system for deduplication, auto-optimization, and deployment pipeline, with an ops dashboard integrating 3D preview and AR/Room Planner for engineer-free review.\nAutomated the Image-to-3D pipeline with state-based workflows and DB-tracked worker progress for recovery and scaling.\nLocked in stable quality through parameter tuning and fallback logic, then completed E2E automation with GPT-4o-based quality scoring across 12 criteria.",
          result:
            "DAM reduced GPU by **20%**, file size by **51%**, and saved **40+ days/year**, earning **Top Contributor**.\nImage-to-3D automation scaled monthly output from **68 to 800**, cut cost by **88%**, and expanded **45 new categories**, earning the **Eng Award**.",
        },
      },
      {
        name: "Room Planner Performance and Reliability",
        summaryView: {
          problem:
            "In a mobile 3D interior layout service, slow initial loading was the key bottleneck driving user drop-off and stalling growth.\nEvent/challenge traffic spikes required zero-downtime operation, and rendering speed was critical for session retention.",
          approach:
            "**Performance**: Lightened 3D models by **90%** via LoD auto-generation and mesh simplification, and cut API latency from **200ms to 80ms** by restructuring call logic. Reduced draw calls from **3,000 to 20** and optimized the rendering pipeline, cutting still-image rendering from **60s to 20s** and animation from **20min to 3min**.\n**Reliability**: Linked queue metrics to autoscaling rules with safe shutdown behavior, and validated event/challenge spike scenarios through load testing.",
          result:
            "Performance gains increased average session time from **21min to 35min (68%)**, contributing to **704% WAU growth** and **600% annual GMV (KRW 860M)**.\nMaintained **zero incidents** during traffic surges while sustaining **99.95% availability** at **10.2x traffic**.",
        },
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
    skills: skillsData,
    projects: [],
    certifications: [],
    activities: [],
  },
}
