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
      "AI/3D 도메인의 백엔드 아키텍처를 런칭부터 확장까지 맡아온 엔지니어입니다. **6주 데드라인을 4주로 단축**하며 AI 인테리어 서비스를 **170개국**에 런칭했고, 3D 모델 제작 자동화로 생산량을 12배 늘리며 비용을 **88%** 절감한 성과로 **Eng Award**를 받았습니다.",
      "트래픽이 **10.2배**로 늘어난 상황에서도 **99.95% 가용성**을 유지했고, 성능 개선과 안정적인 운영을 바탕으로 **WAU 704%** 성장과 **연간 GMV 600%(8.6억)** 달성에 기여했습니다.",
      "자동화 파이프라인으로 운영 효율을 **27%** 개선하고, **연간 40일 이상**의 운영 시간을 절감했습니다.",
      "필요할 때는 BE/FE/ML/인프라를 넘나들며 조직의 병목을 직접 해소했고, 릴리즈 자동화와 부하 테스트 정착 등으로 팀 생산성을 끌어올렸습니다. 이런 기여를 바탕으로 **매 분기 Top Contributor**로 선정되었습니다.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Senior Backend Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "AI/3D 도메인 백엔드 아키텍처 설계·구축·운영을 리드했습니다.",
          "  **Ohouse AI**: **6주 데드라인을 4주로 단축**해 **170개국** 글로벌 런칭을 완료했습니다. **비동기 워커 풀 + circuit breaker**로 LLM 장애를 격리하고, 국가별 feature flag와 remote config로 무배포 실험 체계를 만들었습니다.",
          "  **Ohouse AI 수익화**: iOS/Google IAP 이벤트를 상태 머신으로 통합해 구독 정합성을 확보했고, 제휴 상품 **CVR 10.5%**를 달성하며 **CAC < LTV**를 검증했습니다.",
          "  **3D 인테리어 디자인 서비스**: 서비스 성능과 안정적인 운영 기반을 강화해 **WAU 704%** 성장과 **연간 GMV 600%(8.6억)** 달성에 기여했습니다. **10.2배 트래픽**에서 **99.95% 가용성**을 유지했습니다.",
          "  **Image-to-3D 자동화**: 수작업 파이프라인을 E2E 자동화해 월 생산량 **68→800**, **비용 88%** 절감으로 **Eng Award**를 수상했습니다.",
          "  **조직 기여**: FE 3명·BE 1명 온보딩을 리드했고, Panorama AR(PAR)에서 ML 3명과 시스템 구조를 함께 설계했습니다.",
          "  **운영/생산성 개선**: 전사 최초 Spring Boot 3 마이그레이션을 주도해 트러블슈팅 가이드를 타 팀과 공유했습니다. 릴리즈 자동화·unit test 보강·부하 테스트 가이드·배포 도구 개선으로 운영 효율 **27%**를 개선했고, **AI Native MVP**와 **AI Award**를 받았습니다.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        description: [
          "Node.js · Redis 기반 **실시간 싱크 서버 아키텍처**를 설계하고, 다수 동시 접속 환경에서 안정적으로 운영했습니다.",
          "GitLab/Jenkins CI/CD 파이프라인으로 빌드·테스트를 자동화하고 배포 리드타임을 단축했습니다.",
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
        detail: {
          situation: [
            "Ohouse AI는 오늘의집 데이터와 AI를 활용해 실제 인테리어 사진에 가구를 자동 배치하는 글로벌 서비스로, **170개국** 대상 **6주 데드라인**이 주어졌습니다.",
            "글로벌 서비스 특성상 트래픽이 예측 불가능했고, 갑작스러운 스파이크에 대비해야 했습니다.",
            "멀티턴 이미지 생성에 LLM을 사용하며, 특히 이미지 생성 시 쿼터 제한에 의한 **HTTP 402 에러** 등 장애가 예상되었습니다.",
          ],
          task: [
            "예측 불가능한 트래픽 스파이크 상황에서도 안정적으로 **6주 데드라인** 내 글로벌 런칭을 완료해야 했습니다.",
            "외부 API 장애가 서비스 전체를 중단시키지 않도록 retry/fallback 아키텍처를 구축해야 했습니다.",
            "런칭 후 빠르게 확장 가능한 워커 기반 구조를 만들어야 했습니다.",
            "런칭 이후에는 구독 모델을 신속히 검증하고, 복잡한 AI 워크플로우를 처리할 수 있도록 시스템을 고도화해야 했습니다.",
          ],
          action: [
            "**1. Kafka 기반 비동기 처리**: 요청을 큐에 넣고 워커가 처리 가능한 만큼만 가져가도록 해 과부하를 방지했습니다.",
            "**2. 오토스케일링 & 성능 튜닝**: Kubernetes 오토스케일링과 동시성 제한으로 API 서버와 워커를 분리 운영했습니다.",
            "**3. 글로벌 이미지 전송**: CDN 구조를 구축해 전 세계 사용자에게 빠르게 이미지를 전달했습니다.",
            "**4. 장애 격리**: retry와 circuit breaker로 외부 API 장애가 전체 서비스로 전파되지 않도록 차단했습니다.",
            "**5. Provider 전환 & 게스트 인증**: 전환 가능한 Provider 구조로 Gemini를 선배포하고, JWT 기반 게스트 인증을 추가해 런칭 병목을 제거했습니다.",
            "**6. IAP 구독 구현**: Apple/Google 결제를 비동기 웹훅과 상태 머신으로 통합해 1주일 만에 양 플랫폼 구독 모델을 검증했습니다.",
            "**7. Langgraph 워커 재설계**: PoC 워커를 Langgraph로 재설계해 복잡한 AI 워크플로우를 유연하게 확장할 수 있도록 했습니다.",
            "**8. RAG 기반 제휴 상품 추천**: 이미지 캡셔닝, ES 저장, MongoDB 캐싱을 활용한 RAG 시스템을 구축해 외부 API 정책을 준수하면서 실시간 제휴 상품 추천을 구현했습니다.",
          ],
          result: [
            "**4주 만에 170개국** 런칭을 완료했습니다.",
            "오토스케일링과 백프레셔로 트래픽 급증을 안정적으로 처리했습니다.",
            "전환 가능한 LLM Provider 구조로 외부 장애에서 빠르게 복구했습니다.",
            "게스트 JWT로 인증 병목을 제거해 런칭 일정을 맞출 수 있었습니다.",
            "1주일 만에 구독 모델을 검증하고 수익화 기반을 확보했습니다.",
            "Langgraph 워커 재설계로 기술 부채를 해소하고 AI 워크플로우 확장성을 확보했습니다.",
            "정책 준수 RAG 시스템으로 실시간 제휴 상품 추천을 구현했습니다.",
          ],
        },
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
          "GPU **20%** 감소, 파일 크기 **51%** 축소로 **연간 40일 이상** 운영 시간을 절감했습니다. 해당 성과로 **Top Contributor**에 선정되었습니다.",
          "생산량을 **약 12배** 늘리고 비용을 **88% 절감**해 **Eng Award**를 받았습니다.",
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
          "**LoD 자동 생성**과 Mesh Simplification을 결합해 품질 저하를 최소화하며 **90% 경량화**, payload **5MB→2.3MB**를 달성했습니다.",
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
      "Backend engineer who has owned AI/3D architecture from launch through scaling. Reduced a **6-week deadline to 4 weeks** while launching an AI interior service across **170 countries**, and automated 3D model production to increase output **12x** while cutting cost by **88%**, earning the **Eng Award**.",
      "Maintained **99.95% availability** even as traffic grew **10.2x**, and contributed to **704% WAU growth** and **600% annual GMV (₩860M)** by improving service performance and operational stability.",
      "Through automation pipelines, improved operational efficiency by **27%** and saved **40+ days annually**.",
      "Stepped across BE/FE/ML/infrastructure boundaries to unblock the organization, and raised team productivity through release automation and load-testing standards. Based on those contributions, was selected as **Top Contributor** each quarter.",
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
          "  **3D Interior Design Service**: Performance and reliability improvements contributed to **704% WAU growth** and **600% annual GMV (₩860M)**, while sustaining **99.95% availability** at **10.2x traffic**.",
          "  **Image-to-3D Automation**: Automated the manual pipeline end-to-end, raising monthly output from **68→800** and cutting cost by **88%**, earning the **Eng Award**.",
          "  **Org Impact**: Led onboarding for FE 3 and BE 1, and partnered with ML 3 in Panorama AR (PAR) to shape system structure.",
          "  **Ops/Productivity**: Led the company's first Spring Boot 3 migration and shared troubleshooting guides across teams. Improved operational efficiency by **27%** through release automation, stronger unit tests, load-testing guidelines, and shared deployment tooling, earning **AI Native MVP** and **AI Award**.",
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
          "Raised production **~12x** and reduced cost **88%**, winning the **Eng Award**.",
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
          "Combined **LoD auto-generation** with mesh simplification for **90% lightweighting** and payload reduction from **5MB to 2.3MB**, with minimal quality loss.",
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
