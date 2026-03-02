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
      "**6주 데드라인을 4주로 단축**해 AI 인테리어 서비스를 **170개국**에 런칭했고, 3D 모델 제작 자동화로 생산량 12배·비용 **88%** 절감을 이끌어 **Eng Award**를 받았습니다.",
      "AI/3D 백엔드의 런칭·안정화·확장을 E2E로 주도해 트래픽 **10.2배** 상황에서도 **99.95% 가용성**을 유지했습니다.",
      "**WAU 704%** 성장, **연간 GMV 600%**, 운영 효율 **27%** 개선, **연간 40일 이상** 절감에 기여했습니다.",
      "릴리즈 자동화·부하 테스트 가이드·공통 배포 도구 등 팀 생산성 개선을 주도하고, 필요 시 BE/FE/ML/인프라 병목을 직접 해소해 **매 분기 Top Contributor**로 선정되었습니다.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Senior Backend Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "AI/3D 도메인 백엔드 아키텍처 설계·구축·운영을 리드했습니다.",
          "  **Ohouse AI**: **6주 데드라인을 4주로 단축**해 **170개국**에 글로벌 런칭했습니다. **비동기 워커 풀 + circuit breaker**로 LLM 장애를 격리하고, 국가별 feature flag와 remote config로 무배포 실험 체계를 구축했습니다.",
          "  **Ohouse AI 수익화**: iOS/Google IAP 이벤트를 상태 머신으로 통합해 구독 정합성을 확보하고, 제휴 상품 **CVR 10.5%**를 달성하고 **CAC < LTV**를 검증했습니다.",
          "  **3D 인테리어 디자인 서비스**: 로딩 성능·안정성 개선을 통해 **WAU 704%** 성장, **연간 GMV 600%(8.6억)** 달성에 기여했습니다. **10.2배 트래픽**에서 **99.95% 가용성**을 유지했습니다.",
          "  **Image-to-3D 자동화**: 수작업 파이프라인을 E2E 자동화해 월 생산량 **68→800**, **비용 88%** 절감으로 **Eng Award**를 수상했습니다.",
          "  **조직 기여**: FE 3·BE 1 온보딩, PAR에서 ML 3명 시스템 구조 가이드, 전사 최초 Spring Boot 3 마이그레이션을 주도했습니다. 릴리즈 자동화·부하 테스트 가이드·배포 도구 개선 등으로 **AI Native MVP**와 **AI Award**를 수상했습니다.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        description: [
          "Node.js · Redis 기반 **실시간 싱크 서버 아키텍처**를 설계하고, 다수 동시 접속 환경에서 안정적으로 운영.",
          "GitLab/Jenkins CI/CD 파이프라인으로 빌드·테스트 자동화 및 배포 리드타임 단축.",
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
        problem: [
          "6주 안에 글로벌 런칭을 맞춰야 했고, 외부 LLM API 불안정성으로 서비스 중단 위험이 있었습니다.",
          "멀티턴 요청 특성상 사용자별 순서 보장과 재시도/우회 전략이 없으면 품질과 신뢰성을 동시에 잃을 수 있었습니다.",
        ],
        approach: [
          "멀티 모듈 구조로 API/워커를 분리 배포하고, Kafka partition key로 사용자별 순서를 보장해 안정적 처리량을 확보했습니다.",
          "Kafka lag 기반 오토스케일링과 retry·circuit breaker를 조합해 외부 LLM 장애를 격리·복구했습니다.",
          "Gemini 선배포와 LLM Provider 추상화를 적용해 장애·정책 변경 시 빠르게 전환 가능한 기반을 만들었습니다.",
          "런칭 후 1주일 안에 IAP 구독 모델을 구현하고, Langgraph로 워커를 재설계해 고도화했습니다.",
        ],
        result: [
          "**6주 데드라인을 4주로 단축**해 **170개국 글로벌 런칭**을 완료했습니다.",
          "예측 불가 트래픽 환경에서도 오토스케일링과 장애 격리 설계로 중단 없는 운영을 유지했습니다.",
          "IAP 검증과 워커 재설계로 수익화·확장성을 동시에 확보했습니다.",
        ],
      },
      {
        name: "Image-to-3D 자동화",
        problem: [
          "수작업 중심 3D 파이프라인은 기존 모델 관리와 신규 생성 모두에서 처리량 한계와 품질 편차가 컸습니다.",
        ],
        approach: [
          "저장→최적화→배포를 상태 머신으로 자동화하고, stateless 워커와 DB 기반 진행 관리로 장애 복구와 확장이 가능하도록 설계했습니다.",
          "반복 실험으로 파라미터를 고정하고 fallback 로직으로 예외 케이스를 처리해 품질 편차를 줄였습니다.",
          "3D 프리뷰·AR/Room Planner 연동 운영 대시보드를 만들어 배포 전후 검수 흐름을 엔지니어 의존 없이 운영했습니다.",
          "12개 이미지 품질 기준에 GPT-4o 점수를 반영해 우수 이미지만 선별, 3D 모델 생성까지 E2E 자동화했습니다.",
        ],
        result: [
          "GPU 20% 감소, 파일 크기 51% 축소로 **연간 40일 이상** 운영 시간을 절감했습니다. 해당 성과로 **Top Contributor**에 선정되었습니다.",
          "생산량 **1,176% 증가**, 비용 **88% 절감**으로 **Eng Award**를 받았습니다.",
        ],
      },
      {
        name: "Room Planner 성능 안정성 강화",
        problem: [
          "모바일 3D 서비스 특성상 초기 로딩 지연이 사용자 이탈로 직결되어 성장의 가장 큰 병목이었습니다.",
          "이벤트/챌린지 트래픽 스파이크 구간에서도 작업 유실 없는 운영이 필요했습니다.",
        ],
        approach: [
          "**LRU 캐시**로 3D 모델의 메모리 회수·재사용 주기를 관리했습니다.",
          "**LoD 자동 생성**과 Mesh Simplification을 결합해 품질 저하를 최소화하며 **90% 경량화**, payload **5MB→2MB**를 달성했습니다.",
          "데이터 구조와 호출 로직을 개선해 RP API 지연을 **200ms→80ms(60%)**로 단축했습니다.",
          "Kafka 연동 커스텀 메트릭 기반 **HPA**와 **graceful termination**으로 스케일링 안정성을 확보했습니다.",
          "부하 테스트로 이벤트/챌린지 스파이크 시나리오를 사전 검증해 장애를 선제 차단했습니다.",
        ],
        result: [
          "이벤트/챌린지 트래픽 급증 구간에서 **무사건(no incidents)** 운영을 달성했습니다.",
          "API **200ms→80ms**, payload **54%** 절감, 모델 **90%** 경량화로 초기 로딩 병목을 해소했습니다.",
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
      position: "Senior Backend Engineer",
    },
    summary: [
      "Launched an AI interior service to **170 countries** by reducing a **6-week deadline to 4 weeks**. Also automated 3D model production to raise output **12x** and cut cost **88%**, earning the **Eng Award**.",
      "Led AI/3D backend from launch through stabilization and scaling with **99.95% availability** during **10.2x traffic**.",
      "Delivered **704% WAU growth**, **600% annual GMV**, **27%** operational efficiency improvement, and **40+ days annually** of saved effort.",
      "Through automation of release notes, stronger unit tests, and load-testing standards, AI practices became team standard, and I removed BE/FE/ML/infrastructure bottlenecks, earning **Top Contributor** each quarter.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace",
        position: "Senior Backend Engineer",
        period: "Aug 2022 – Present",
        description: [
          "Led AI/3D backend architecture design, build, and operations.",
          "  **Ohouse AI**: Completed global launch to **170 countries** by reducing a **6-week deadline to 4 weeks**. Isolated LLM failures with an **async worker pool + circuit breaker**. Built country-level feature flags with remote config for no-redeploy experimentation.",
          "  **Ohouse AI Monetization**: Unified iOS/Google IAP events via a state machine for subscription consistency, achieved affiliate **CVR 10.5%**, and validated **CAC below LTV**.",
          "  **3D Interior Design Service**: Performance optimization drove **704% WAU growth** and **600% annual GMV (₩860M)**, sustaining **99.95% availability** at **10.2x traffic**.",
          "  **Image-to-3D Automation**: Automated the manual pipeline end-to-end, raising monthly output from **68→800** and cutting cost by **88%**, earning the **Eng Award**.",
          "  **Org Impact**: Led onboarding for FE 3 and BE 1, guided ML 3 system structure in PAR, and completed the company's first Spring Boot 3 migration. Automated release notes, load-testing guides, and deployment tooling, earning **AI Native MVP** and **AI Award**.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Jan 2020 – Jul 2022",
        description: [
          "Designed Node.js + Redis-based **real-time sync server architecture** for concurrent multi-user environments with low-latency synchronization.",
          "Led GitLab/Jenkins CI/CD automation to cut build/test cycles and speed up releases.",
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
        problem: [
          "A global launch was required within **6 weeks**, but instability in external LLM APIs created outage risk.",
          "Multi-turn generation required strict per-user ordering and robust retry/fallback behavior to avoid quality and reliability loss.",
        ],
        approach: [
          "Used a multi-module split of APIs and workers, then enforced per-user order with Kafka partition keys to stabilize throughput.",
          "Combined Kafka lag-based auto-scaling with retry/circuit-breaker handling to isolate and recover from external LLM failures.",
          "Added Gemini pre-deployment and LLM-provider abstraction so provider or policy changes could be applied quickly.",
          "Added IAP within one week after launch and redesigned workers with Langgraph for monetization and workflow scalability.",
        ],
        result: [
          "Reduced a **6-week deadline to 4 weeks** and completed global launch across **170 countries**.",
          "Maintained service continuity under uneven traffic with queue control and failure isolation.",
          "Built a revenue and scaling path by validating subscription in one week and redesigning workers.",
        ],
        detail: {
          situation: [
            "Ohouse AI is a global service that automatically places furniture in real interior photos using Ohouse data and AI, targeting **170 countries** with a **6-week deadline**",
            "As a global service, traffic was unpredictable and we needed to handle sudden spikes",
            "The service uses LLM for multi-turn image generation and responses, with expected failures like **HTTP 402 errors** from quota limits, especially during image generation"
          ],
          task: [
            "Launch globally within the **6-week deadline** while staying stable under unpredictable traffic spikes",
            "Prevent external API failures from bringing down the service with retry/fallback architecture",
            "Build a worker-based structure that can scale quickly after launch",
            "Post-launch: quickly validate the subscription model and evolve the system to handle complex AI workflows"
          ],
          action: [
            "**1. Kafka-based async processing**: Queued requests and let workers pull only what they could handle to prevent overload.",
            "**2. Auto-scaling & performance tuning**: Separated API servers and workers using Kubernetes autoscaling and concurrency limits.",
            "**3. Global image delivery**: Built a CDN structure to serve images quickly to users worldwide.",
            "**4. Failure containment**: Used retries and circuit breakers to prevent external API failures from bringing down the whole service.",
            "**5. Provider switch & guest auth**: Pre-deployed Gemini with a switchable provider architecture, and added JWT-based guest authentication to remove launch bottlenecks.",
            "**6. IAP subscription implementation**: Unified Apple/Google payments with async webhooks and a state machine to validate subscription models on both platforms in one week.",
            "**7. Langgraph worker redesign**: Redesigned the PoC workers with Langgraph to flexibly scale complex AI workflows.",
            "**8. RAG-based affiliate recommendations**: Built a RAG system with image captioning, ES storage, and MongoDB caching to comply with external API policies while enabling real-time affiliate product recommendations.",
          ],
          result: [
            "Launched to **170 countries in 4 weeks**",
            "Handled traffic surges stably with autoscaling and backpressure",
            "Recovered quickly from external failures with switchable LLM providers",
            "Removed authentication bottlenecks with guest JWT to meet the launch timeline",
            "Validated the subscription model in one week and established monetization foundation",
            "Resolved technical debt through Langgraph worker redesign and secured AI workflow scalability",
            "Enabled real-time affiliate product recommendations with a policy-compliant RAG system",
          ]
        },
      },
      {
        name: "Image-to-3D Automation",
        problem: [
          "A manual 3D pipeline was limiting throughput and quality consistency across existing model updates and new model creation.",
        ],
        approach: [
          "Automated storage → optimization → deployment with a state machine and paired workers with DB-based progress tracking for recovery and scaling.",
          "Used repeated experiments and fallback logic to lock in stable quality while reducing edge-case variance.",
          "Built an ops dashboard with 3D preview + AR/Room Planner integration to run release and operational checks without specialist dependence.",
          "Scored images across **12 criteria** with GPT-4o, automatically selected the best candidates, then generated 3D models end-to-end.",
        ],
        result: [
          "Reduced GPU use by **20%**, file size by **51%**, and saved **40+ person-days annually**, contributing to **Top Contributor** selection.",
          "Raised production **1,176%** and reduced cost **88%**, winning the **Eng Award**.",
        ],
      },
      {
        name: "Room Planner Performance and Reliability",
        problem: [
          "Initial loading delay in mobile 3D directly caused user drop-off, making it the biggest bottleneck for growth.",
          "Event/challenge traffic spikes required handling without task loss or incidents.",
        ],
        approach: [
          "Applied **LRU cache memory management** to control 3D model retention and reuse.",
          "Combined **LoD auto-generation** with mesh simplification for **90% lightweighting** and payload reduction from **5MB to 2MB**, with minimal quality loss.",
          "Optimized data structures and call logic to reduce RP API latency from **200ms to 80ms (60%)**.",
          "Enabled Kafka-linked custom-metric **HPA** with **graceful termination** for scaling stability.",
          "Validated event/challenge spike scenarios through load testing to preemptively prevent incidents.",
        ],
        result: [
          "Achieved **no incidents** during event/challenge traffic surges.",
          "Resolved initial loading bottleneck — API latency **200ms→80ms**, payload **54%** smaller, model **90%** lighter.",
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
    skills: skillsData,
    projects: [],
    certifications: [],
    activities: [],
  },
}
