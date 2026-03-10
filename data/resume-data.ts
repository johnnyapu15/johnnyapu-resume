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
      "AI/3D 도메인에서 글로벌 런칭, 수익화, 자동화, 안정화를 맡아온 백엔드 엔지니어입니다. 제한된 리소스에서 **Ohouse AI를 4주 만에 170개국**에 런칭했고, 외부 AI 장애에도 실험과 운영이 가능한 구조를 설계했습니다.",
      "또한 Room Planner의 **WAU 704% 성장**과 **연간 GMV 600%(8.6억)**에 기여했고, **10.2배 트래픽**에서도 **99.95% 가용성**을 유지했습니다.",
      "Image-to-3D 자동화로 월 생산량을 **68개에서 800개**로 늘리고 비용을 **88% 절감**해 **Eng Award**를 받았으며, 운영 자동화와 테스트 체계 개선으로 효율을 **27%** 높이고 **연간 40일 이상**의 시간을 절감했습니다.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace (오늘의집)",
        position: "Senior Backend Engineer",
        period: "2022년 8월 - 현재",
        description: [
          "**Ohouse AI**: **6주 데드라인을 4주로 단축**해 **170개국** 글로벌 런칭을 완료했습니다. 외부 AI 장애가 전체 서비스로 번지지 않도록 비동기 처리와 실패 격리 구조를 설계했고, 국가별 실험을 배포 없이 운영할 수 있는 체계를 만들었습니다.",
          "**Ohouse AI 수익화**: iOS/Google 구독 흐름을 하나의 도메인으로 통합해 결제 정합성을 확보했고, 제휴 상품 **CVR 10.5%**를 달성해 수익화 가능성을 검증했습니다.",
          "**Room Planner**: 성능·안정성 개선으로 **WAU 704% 성장**과 **연간 GMV 600%(8.6억)**에 기여했고, **10.2배 트래픽**에서도 **99.95% 가용성**을 유지했습니다.",
          "**Image-to-3D 자동화**: 수작업 3D 제작 파이프라인을 자동화해 월 생산량을 **68개→800개**로 늘리고 **비용 88%**를 절감해 **Eng Award**를 받았습니다.",
          "**운영/생산성 개선**: 릴리즈 자동화, 테스트 강화, 부하 테스트 정착으로 운영 효율을 **27%** 높이고 **연간 40일 이상**의 시간을 절감해 **AI Native MVP**와 **AI Award**를 받았습니다.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "2020년 1월 - 2022년 7월",
        description: [
          "Node.js · Redis 기반 실시간 싱크 서버를 설계·운영했고, GitLab/Jenkins 기반 CI/CD 자동화로 빌드·테스트와 배포 리드타임을 줄였습니다.",
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
        onlyDetailView: true,
        problem: [
          "6주 안에 글로벌 런칭을 맞춰야 했고, 외부 LLM API 불안정성으로 서비스 중단 위험이 있었습니다.",
          "또한 이미지 생성 과정에서 사용자별 흐름 순서를 보장하지 않으면 품질과 신뢰성을 동시에 잃을 위험이 컸습니다.",
        ],
        approach: [
          "멀티 모듈 구조로 API와 워커를 분리 배포하고, 사용자별 요청 순서를 보장해 안정적 처리량을 확보했습니다.",
          "또한 큐 지연 관리와 지표 기반 오토스케일링, 재시도/격리 정책을 결합해 외부 AI API 장애를 빠르게 복구했습니다.",
          "런칭 전에 공급사 대체 전략을 먼저 마련해 장애·정책 변경 시에도 즉시 우회 가능한 기반을 만들었습니다.",
          "런칭 후에는 일주일 안에 구독 모델을 적용하고, 작업 흐름을 재설계해 복잡한 AI 서비스도 확장 가능한 형태로 바꿨습니다.",
        ],
        result: [
          "**6주 데드라인을 4주로 단축**해 **170개국 글로벌 런칭**을 완료했습니다.",
          "또한 예측 불가 트래픽 환경에서도 오토스케일링과 장애 격리 설계로 중단 없는 운영을 유지했습니다.",
          "그리고 IAP 검증과 워커 재설계로 수익화·확장성을 동시에 확보했습니다.",
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
            "**1. 메시지 큐 기반 비동기 처리**: 요청을 큐에 넣고 워커가 처리 가능한 만큼만 가져가게 하여 과부하를 줄였습니다.",
            "**2. 오토스케일링 & 성능 튜닝**: Kubernetes 오토스케일링과 동시성 제한으로 API 서버와 워커를 분리 운영했습니다.",
            "**3. 글로벌 이미지 전송**: CDN 구조를 구축해 전 세계 사용자에게 빠르게 이미지를 전달했습니다.",
            "**4. 장애 격리**: 재시도와 실패 격리 로직으로 외부 API 장애가 전체 서비스로 전파되지 않도록 차단했습니다.",
            "**5. 장애 전환 & 게스트 인증**: 공급사 대체 경로를 미리 준비하고 JWT 기반 게스트 인증을 추가해 런칭 병목을 제거했습니다.",
            "**6. IAP 구독 구현**: Apple/Google 결제를 비동기 웹훅으로 통합해 1주일 만에 양 플랫폼 구독 모델을 검증했습니다.",
            "**7. 작업 흐름 재설계**: 초기 PoC 작업 흐름을 단계형 구조로 바꿔 복잡한 AI 요구사항에 유연하게 대응하도록 개선했습니다.",
            "**8. 정책 준수 제휴 추천**: 이미지 자동 분석 결과를 이용해 제휴 상품 추천 경로를 구성해 외부 정책을 지키면서 실시간 추천을 제공했습니다.",
          ],
          result: [
            "**4주 만에 170개국** 런칭을 완료했습니다.",
            "오토스케일링과 백프레셔로 트래픽 급증을 안정적으로 처리했습니다.",
            "공급사 전환 가능한 연동 구조로 외부 장애에서 빠르게 복구했습니다.",
            "게스트 JWT로 인증 병목을 제거해 런칭 일정을 맞출 수 있었습니다.",
            "1주일 만에 구독 모델을 검증하고 수익화 기반을 확보했습니다.",
            "작업 흐름 재설계로 기술 부채를 줄이고 AI 기능 확장성을 확보했습니다.",
            "정책 준수 제휴 추천 경로를 만들어 실시간 제휴 상품 추천을 구현했습니다.",
          ],
        },
      },
      {
        name: "Image-to-3D 자동화",
        onlyDetailView: true,
        problem: [
          "수작업 중심 3D 파이프라인은 기존 모델 관리와 신규 생성 모두에서 처리량 한계와 품질 편차가 컸습니다.",
        ],
        approach: [
          "저장→최적화→배포를 상태 흐름 기반으로 자동화하고, 워커별 진행도를 DB로 관리해 장애 복구와 확장성을 확보했습니다.",
          "또한 반복 실험으로 파라미터를 고정하고 fallback 로직으로 예외 케이스를 처리해 품질 편차를 줄였습니다.",
          "그리고 3D 프리뷰·AR/Room Planner 연동 운영 대시보드를 만들어 배포 전후 검수 흐름을 엔지니어 의존 없이 운영했습니다.",
          "또한 12개 이미지 품질 기준에 GPT-4o 점수를 반영해 우수 이미지만 선별하고, 3D 모델 생성까지 E2E 자동화했습니다.",
        ],
        result: [
          "GPU **20%** 감소, 파일 크기 **51%** 축소로 **연간 40일 이상** 운영 시간을 절감했습니다. 해당 성과로 **Top Contributor**에 선정되었습니다.",
          "또한 생산량을 **약 12배** 늘리고 비용을 **88% 절감**해 **Eng Award**를 받았습니다.",
        ],
      },
      {
        name: "Room Planner 성능 안정성 강화",
        onlyDetailView: true,
        problem: [
          "모바일 3D 서비스 특성상 초기 로딩 지연이 사용자 이탈로 직결되어 성장의 가장 큰 병목이었습니다.",
          "또한 이벤트/챌린지 트래픽 스파이크 구간에서도 작업 유실 없는 운영이 필요했습니다.",
        ],
        approach: [
          "자주 쓰는 3D 모델을 재사용하고 오래된 모델을 빠르게 정리하는 캐시 정책으로 모바일 메모리 부담을 조절했습니다.",
          "또한 **LoD 자동 생성**과 Mesh Simplification을 결합해 품질 저하를 최소화하며 **90% 경량화**, payload **5MB→2.3MB**를 달성했습니다.",
          "또한 데이터 구조와 호출 로직을 개선해 Room Planner API 지연을 **200ms→80ms(60%)**로 단축했습니다.",
          "또한 큐 기반 지표 모니터링과 안전한 종료 규칙으로 부하가 급격히 변해도 스케일링이 흔들리지 않도록 안정성을 확보했습니다.",
          "마지막으로 부하 테스트로 이벤트/챌린지 스파이크 시나리오를 사전 검증해 장애를 선제 차단했습니다.",
        ],
        result: [
          "이벤트/챌린지 트래픽 급증 구간에서 **무사건(no incidents)** 운영을 달성했습니다.",
          "또한 API **200ms→80ms**, payload **54%** 절감, 모델 **90%** 경량화로 초기 로딩 병목을 해소했습니다.",
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
      "Backend engineer focused on launching and scaling AI/3D products. Launched **Ohouse AI to 170 countries in 4 weeks** with limited resources, while building an operating model that kept experiments and service continuity intact despite external AI instability.",
      "Contributed to **704% WAU growth** and **600% annual GMV (KRW 860M)** in Room Planner, while sustaining **99.95% availability** at **10.2x traffic**.",
      "Automated Image-to-3D production from **68 to 800 items per month** and cut cost by **88%**, earning the **Eng Award**. Also improved operational efficiency by **27%** and saved **40+ days annually** through release and test automation.",
    ].join(" "),
    experience: [
      {
        company: "Bucketplace",
        position: "Senior Backend Engineer",
        period: "Aug 2022 – Present",
        description: [
          "**Ohouse AI**: Completed global launch to **170 countries** by reducing a **6-week deadline to 4 weeks**. Designed async processing and failure isolation so external AI issues would not cascade across the service, and built a no-redeploy experimentation model for country-level operations.",
          "**Ohouse AI Monetization**: Unified iOS/Google subscription flows into one domain model, secured payment consistency, and validated monetization with affiliate **CVR 10.5%**.",
          "**Room Planner**: Improved performance and reliability, contributing to **704% WAU growth** and **600% annual GMV (KRW 860M)** while sustaining **99.95% availability** at **10.2x traffic**.",
          "**Image-to-3D Automation**: Automated the 3D production pipeline end to end, increasing monthly output from **68 to 800 items** and reducing cost by **88%**, earning the **Eng Award**.",
          "**Ops/Productivity**: Raised operational efficiency by **27%** and saved **40+ days annually** through release automation, stronger tests, and load-testing practices, earning **AI Native MVP** and **AI Award**.",
        ],
      },
      {
        company: "LG CNS",
        position: "System & Solution Programming Consultant",
        period: "Jan 2020 – Jul 2022",
        description: [
          "Designed and operated a Node.js + Redis real-time sync server, and reduced build, test, and release lead time through GitLab/Jenkins CI/CD automation.",
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
        onlyDetailView: true,
        problem: [
          "A global launch was required within **6 weeks**, but instability in external LLM APIs created outage risk.",
          "In addition, image-generation flow required strict per-user ordering, otherwise quality and reliability could degrade quickly.",
        ],
        approach: [
          "Separated API and worker services into modules, then stabilized throughput by preserving per-user request order.",
          "Combined queue backpressure control, autoscaling signals, and retry/isolation policies to recover quickly from external AI API failures.",
          "Prepared fallback paths in advance so provider outages or policy changes could be handled without emergency rewrites.",
          "After launch, added IAP within one week and redesigned workflows to support more complex AI tasks at scale.",
        ],
        result: [
          "Reduced a **6-week deadline to 4 weeks** and completed global launch across **170 countries**.",
          "In addition, maintained service continuity under uneven traffic with queue control and failure isolation.",
          "Also built a revenue and scaling path by validating subscription in one week and redesigning workers.",
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
            "**1. Queue-based async processing**: Queued requests and let workers pull only what they could handle to prevent overload.",
            "**2. Auto-scaling & performance tuning**: Separated API servers and workers using Kubernetes autoscaling and concurrency limits.",
            "**3. Global image delivery**: Built a CDN structure to serve images quickly to users worldwide.",
            "**4. Failure containment**: Used retry and isolation logic to prevent external API failures from bringing down the whole service.",
            "**5. Failover prep & guest auth**: Prepared provider failover paths and added JWT-based guest authentication to remove launch bottlenecks.",
            "**6. IAP subscription implementation**: Unified Apple/Google payments with async webhooks to validate subscription models on both platforms in one week.",
            "**7. Workflow redesign**: Reworked worker execution flow from a PoC shape into a step-based design to scale complex AI tasks.",
            "**8. Policy-safe affiliate recommendations**: Applied image metadata signals to deliver real-time affiliate recommendations while meeting external API policy constraints.",
          ],
          result: [
            "Launched to **170 countries in 4 weeks**",
            "Handled traffic surges stably with autoscaling and backpressure",
            "Recovered quickly from external failures with provider failover prepared in advance",
            "Removed authentication bottlenecks with guest JWT to meet the launch timeline",
            "Validated the subscription model in one week and established monetization foundation",
            "Resolved technical debt by redesigning worker execution flow and secured AI workflow scalability",
            "Enabled real-time affiliate product recommendations within policy constraints",
          ]
        },
      },
      {
        name: "Image-to-3D Automation",
        onlyDetailView: true,
        problem: [
          "A manual 3D pipeline was limiting throughput and quality consistency across existing model updates and new model creation.",
        ],
        approach: [
          "Automated storage → optimization → deployment with a clear workflow and DB-based progress tracking for recovery and scaling.",
          "In addition, used repeated experiments and fallback logic to lock in stable quality while reducing edge-case variance.",
          "Also built an ops dashboard with 3D preview + AR/Room Planner integration to run release and operational checks without specialist dependence.",
          "Then scored images across **12 criteria** with GPT-4o, automatically selected the best candidates, and generated 3D models end-to-end.",
        ],
        result: [
          "Reduced GPU use by **20%**, file size by **51%**, and saved **40+ person-days annually**, contributing to **Top Contributor** selection.",
          "Also raised production **~12x** and reduced cost **88%**, winning the **Eng Award**.",
        ],
      },
      {
        name: "Room Planner Performance and Reliability",
        onlyDetailView: true,
        problem: [
          "Initial loading delay in mobile 3D directly caused user drop-off, making it the biggest bottleneck for growth.",
          "In addition, event/challenge traffic spikes required handling without task loss or incidents.",
        ],
        approach: [
          "Used cache policies to control 3D model retention and reuse by balancing memory use and warm assets.",
          "In addition, combined **LoD auto-generation** with mesh simplification for **90% lightweighting** and payload reduction from **5MB to 2.3MB**, with minimal quality loss.",
          "Also optimized data structures and call logic to reduce Room Planner API latency from **200ms to 80ms (60%)**.",
          "In parallel, linked queue metrics to autoscaling rules and safe shutdown behavior for stable scaling.",
          "Finally, validated event/challenge spike scenarios through load testing to preemptively prevent incidents.",
        ],
        result: [
          "Achieved **no incidents** during event/challenge traffic surges.",
          "Also resolved the initial loading bottleneck — API latency **200ms→80ms**, payload **54%** smaller, model **90%** lighter.",
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
