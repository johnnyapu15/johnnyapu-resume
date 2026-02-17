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
      "4주 만에 170개국 글로벌 런칭, 3D 모델 자동화로 생산량 12배 증가 / 비용 88% 절감으로 **Eng Award**를 수상했습니다.",
      "AI/LLM 기반 서비스의 백엔드 아키텍처를 설계하고, 글로벌 런칭부터 안정화, 확장까지 E2E로 담당한 백엔드 엔지니어입니다.",
      "기술적 완성도뿐 아니라 비즈니스 맥락에서 실용적인 문제를 해결하여 서비스 성과에 기여해왔습니다.",
      "외부 LLM API가 불안정한 환경에서도 장애 전파 방지 구조, Circuit Breaker, 비동기 처리 등으로 서비스 안정성을 확보해왔습니다.",
      "자동화 파이프라인으로 운영 효율 27% 향상, 3D 모델 최적화로 연간 40일 절감 등 생산성에 지속적으로 기여하며, 매 분기 **Top Contributor**에 선정되었습니다.",
      "BE/FE/ML/인프라를 넘나들며 필요할 때는 풀스택으로 직접 구현하여 조직의 병목을 해소했습니다.",
      "AI 도구를 적극 활용하여 팀의 개발 프로세스를 개선하고 AI 활용 문화를 확산시켜 **AI Native MVP** 및 **AI Award**를 수상했습니다.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Senior Backend Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "백엔드 아키텍처 설계·구축·운영을 리드하며, AI/3D/커머스 도메인의 핵심 시스템을 담당",
          "  **AI 기반 인테리어 서비스**: 6주 데드라인을 **4주로 단축하여 170개국 글로벌 런칭**. Gemini 선배포 및 LLM Provider 전환 구조 설계. 이후 IAP 구독 모델과 Langgraph 기반 워커 재설계로 수익화 및 확장성 확보.",
          "  **3D 인테리어 디자인 서비스**: **WAU 704%** 성장과 **연간 GMV 600%(8.6억)** 달성에 기여. 트래픽 **10.2배** 증가에도 **99.95% 가용성** 확보. 현재 전사 AI Agent의 클라이언트로 확장 설계 및 AI Agent 서비스 구축 중.",
          "  **Image-to-3D 자동화**: 수작업 기반 3D 제작의 생산량 한계를 돌파. **생산량 12배 증가**, **비용 88% 절감**으로 **Eng Award** 수상.",
          "  **AI Native 문화 선도**: 릴리즈 노트 자동 생성, Unit Test 고도화, 부하 테스트 설계 가이드 수립 등으로 팀의 AI 활용 문화 확산. AI Native MVP 및 AI Award 수상.",
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
        name: "AI 인테리어 서비스 런칭 및 고도화",
        problem: [
          "6주 안에 글로벌 런칭이 필요했고, 외부 LLM의 불안정성으로 서비스 장애 위험이 있었습니다.",
          "멀티턴 요청 특성상 사용자별 순서 보장과 재시도/우회가 필요했습니다.",
        ],
        approach: [
          "멀티 모듈 구조로 API, 워커를 분리 배포하고, Kafka 파티션 키로 사용자별 순서를 보장하며 Kafka lag 기반 오토스케일링으로 안정적인 처리량을 유지했습니다.",
          "Retry, Circuit Breaker로 LLM API 장애를 격리하고, LLM Provider 추상화로 4주 만에 런칭했습니다.",
          "런칭 이후 IAP 구독 모델을 일주일 만에 구축하여 수익화 기반을 마련했습니다.",
          "Langgraph로 워커를 재설계하고 RAG 기반 제휴 상품 추천을 구현하여 서비스를 고도화했습니다.",
        ],
        result: [
          "4주 만에 **170개국 글로벌 런칭**을 완료했습니다.",
          "외부 LLM 장애 상황에서도 안정적으로 처리하고, LLM Provider 추상화 구조로 빠르게 신규 LLM API에 대응할 수 있었습니다.",
          "구독 모델 검증과 워커 재설계로 수익화 기반을 마련하고 시스템 안정성을 높였습니다.",
        ],
      },
      {
        name: "3D 파이프라인 자동화",
        problem: [
          "수작업 기반 3D 파이프라인은 기존 모델의 관리·최적화와 신규 모델 생성 모두 한계에 부딪혀 있었습니다.",
        ],
        approach: [
          "상태 머신으로 저장→최적화→배포를 자동화하고, stateless 워커와 DB 기반 진행 관리로 장애 복구와 확장이 가능하게 했습니다.",
          "반복 실험으로 최적 파라미터를 찾고, fallback 로직으로 예외 케이스에 대응해 품질을 유지했습니다.",
          "운영 전용 대시보드(3D 프리뷰, AR/Room Planner 연동)를 만들어 엔지니어 의존을 제거했습니다.",
          "GPT-4o로 12개 기준의 이미지 품질 점수화 → 3D 모델 생성까지 E2E 자동화 파이프라인을 구축했습니다.",
        ],
        result: [
          "GPU 20%↓, 파일 크기 51%↓, **연간 40일 이상 절감** → **Top Contributor** 선정.",
          "생산량 **1,176%↑**, 비용 **88%↓** → **Eng Award** 수상.",
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
      "Launched a global AI service to 170 countries in 4 weeks and automated 3D model production with 12x output increase and 88% cost reduction, receiving the **Eng Award**.",
      "Backend engineer who has designed AI/LLM service architectures and owned them end-to-end — from global launch to scaling in production.",
      "I focus not just on technical excellence, but on solving practical problems in a business context to contribute to service outcomes.",
      "I've kept services stable even when external LLM APIs are unreliable, using fault-tolerant architecture, circuit breakers, and async processing.",
      "I've consistently contributed to productivity by improving operational efficiency by 27% through automation pipelines and saving 40 person-days annually with 3D optimization, earning **Top Contributor** recognition every quarter.",
      "I work across BE/FE/ML/infrastructure and implement full-stack solutions when needed to remove organizational bottlenecks.",
      "I actively leverage AI tools to improve team development processes and spread AI adoption culture, receiving **AI Native MVP** and **AI Award**.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace",
        position: "Senior Backend Engineer",
        period: "Aug 2022 – Present",
        description: [
          "Led backend architecture design, implementation, and operations across AI, 3D, and commerce domains.",
          "  **AI-based Interior Service**: Delivered a **170-country global launch in 4 weeks**, 2 weeks ahead of the 6-week deadline. Built Gemini pre-deployment and switchable LLM provider architecture. Post-launch: implemented IAP subscription model and Langgraph-based worker redesign for monetization and scalability.",
          "  **3D Interior Design Service**: Drove **704% WAU** growth and **600% annual GMV (₩860M)**. Maintained **99.95% availability** under **10.2x** traffic. Currently extending the service as a client for the company-wide AI Agent, and building the AI Agent service.",
          "  **Image-to-3D Automation**: Overcame production limits of manual 3D creation. **12x production increase** and **88% cost reduction**, earning the **Eng Award**.",
          "  **AI Native Culture**: Automated release notes, enhanced unit testing, and established load testing guidelines to spread AI adoption across the team. Received AI Native MVP and AI Award.",
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
        name: "AI Interior Service: Launch and Evolution",
        problem: [
          "Needed to launch globally within 6 weeks, but external LLM instability risked service outages.",
          "Multi-turn flows required per-user ordering and reliable retry/fallback handling.",
        ],
        approach: [
          "Deployed API and workers separately using multi-module structure, ensured per-user ordering with Kafka partition keys, and maintained stable throughput with Kafka lag-based auto-scaling.",
          "Isolated LLM API failures with retry and circuit breaker patterns, and launched in 4 weeks with LLM provider abstraction.",
          "Post-launch: built IAP subscription model in one week to establish monetization foundation.",
          "Redesigned workers with Langgraph and implemented RAG-based affiliate product recommendations to evolve the service.",
        ],
        result: [
          "Launched to **170 countries in 4 weeks**.",
          "Handled external LLM failures stably and adapted quickly with provider switching.",
          "Validated subscription model and improved system stability through worker redesign.",
        ],
        detail: {
          situation: [
            "Ohouse AI is a global service that automatically places furniture in real interior photos using Ohouse data and AI, targeting **170 countries** with a **4-week launch** goal",
            "As a global service, traffic was unpredictable and we needed to handle sudden spikes",
            "The service uses LLM for multi-turn image generation and responses, with expected failures like **HTTP 402 errors** from quota limits, especially during image generation"
          ],
          task: [
            "Launch globally in **4 weeks** while staying stable under unpredictable traffic spikes",
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
        name: "3D Pipeline Automation",
        problem: [
          "The manual 3D pipeline had hit its limits — both managing existing models and producing new ones.",
        ],
        approach: [
          "Automated storage → optimization → deployment with a state machine. Stateless workers with DB-based progress tracking for failure recovery and scaling.",
          "Found optimal parameters through repeated experiments and used fallback logic for edge cases to maintain quality.",
          "Built an ops dashboard (3D preview, AR/Room Planner integration) to remove engineer dependency.",
          "Built an E2E pipeline: GPT-4o scores images across 12 criteria → auto-selects best photo → generates 3D model.",
        ],
        result: [
          "GPU 20%↓, file size 51%↓, **40+ person-days saved annually** → **Top Contributor**.",
          "Production **1,176%↑**, cost **88%↓** → **Eng Award**.",
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
