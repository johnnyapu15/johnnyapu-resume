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
    summary: [
      "시스템의 구조와 성능을 깊이 이해하고 최적화하는 데 강점을 가진 백엔드 엔지니어입니다.",
      "최근에는 기술적 완성도뿐 아니라 비즈니스 맥락에서 실용적인 문제 해결을 통해 사용자 및 서비스 성과에 실질적으로 기여하는 방식을 고민하며 실천하고 있습니다.",
      "급격한 트래픽 증가 상황에서도 안정적인 서비스를 제공하기 위해, 장애 전파 방지 구조와 데이터 처리 효율화, API 성능 개선, 비동기 병렬 처리 등을 설계하고 구현해왔습니다.",
      "자동화 파이프라인 구축을 통해 운영 효율을 27% 향상시키는 등 생산성 향상에 지속적으로 기여하며, 매 분기별 **Top Contributor에 여러 번 선정**된 경험이 있습니다.",
      "최근에는 글로벌 시장을 타겟으로 하는 AI 기반 인테리어 서비스 신규 런칭을 통해 반기마다 수여되는 Eng Award를 수상했습니다.",
      "현재 Bucketplace에서 **시스템 디자인과 성능 개선, 그리고 AI 도구를 활용한 업무 효율화**를 주도하며 **백엔드 리드** 역할을 수행하고 있습니다.",
    ].join(" "),
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
        detail: {
          situation: [
            "Ohouse AI는 사용자 요청에 따라 실제 인테리어 사진을 오늘의집 데이터와 AI를 활용해 자동으로 가구 배치 후 결과 이미지를 제공하는 글로벌 서비스로, 약 **220개국**을 대상으로 AWS **4개 리전(us-west, us-east, Asia 2개)**에서 운영되는 신규 서비스입니다",
            "글로벌 서비스 특성상 예측이 어렵고 트래픽 급증 대응이 필수적이었습니다",
            "또한 LLM을 활용한 이미지 생성, 응답 생성 과정을 멀티턴으로 처리하며, 특히 이미지 생성 단계에서 빈번한 실패 및 잔액 부족으로 인한 **HTTP 402 오류** 등이 예상되는 상황이었습니다"
          ],
          task: [
            "글로벌 대상 서비스 출시로 다양한 지역에서 발생할 수 있는 예측 불가한 트래픽 급증 상황에도 서비스 안정성을 유지",
            "목표 응답시간 지표로 **P95 50ms 이하** 유지, API 장애 및 오류 최소화",
            "총 개발 기간 **5주 이내**에 신규 런칭"
          ],
          action: [
            "**1. Kafka 기반 백프레셔 구현 설계**: Kafka 설정은 파티션 15개, 복제 3로 설정했습니다. 이는 워커의 최대 스케일링 수(8개)에 맞춘 수치로, 안정적이고 효율적이도록 설계했습니다.",
            "**2. 워커 처리 성능 최적화 및 스케일링**: Kubernetes HPA 기반으로 API 서버(2~4개 pod) 및 워커(2~8개 pod)를 오토 스케일링 구성. API 서버는 단순 CRUD 위주로 경량 설계, 워커는 메모리 사용을 고려하여 세마포어로 최대 **동시 작업 제한**했습니다",
            "**3. CDN 기반 글로벌 이미지 서빙 최적화**: Akamai CDN을 도입하여 각 리전에서 생성된 이미지를 글로벌 사용자에게 가장 가까운 Endpoint에서 서빙하여 글로벌 사용자 경험을 최적화했습니다",
            "**4. 외부 API 장애 전파 대응 (Retry & Circuit Breaker)**: 이미지 생성 및 LLM 호출 실패 시 최대 3회 재시도 (초기 200ms 간격, 지수 백오프), 연속 10회 실패 시 Circuit Breaker open (30초 후 half-open 상태로 회복 시도)했습니다",
            "**5. 비용 관리 및 서비스 품질 모니터링**: 각 API 플랫폼당 월 최대 $4,000 예산 설정 (소진 75% 시 알람), 비용 및 서비스 품질을 모니터링할 수 있는 **내부 어드민 페이지를 구축**했습니다. 사용자의 이용 형태를 데이터 기반으로 확인 및 개선했습니다",
          ],
          result: [
            "개발 기간 4주만에 신규 런칭",
            "**uptime 99.996% 유지**",
            "**P95 응답시간 25ms 이하 달성**",
            "런칭 이후 급증한 트래픽(최대 4배 증가) 상황에서도 자동 스케일링 및 백프레셔 기반의 안정적인 성능 유지",
            "기술적 성과를 인정받아 반기마다 수여되는 사내 **Eng Award**를 수상"
          ]
        },
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
        detail: {
          situation: [
            "3D 인테리어, AR 서비스 확장으로 모델 개수가 수만 개로, 수작업 기반 최적화·상품 연동·배포 프로세스가 한계에 도달했습니다",
            "휴먼 에러 위험이 높아 운영 리스크가 커졌고, 운영팀이 반복 작업에 묶여 핵심 업무(품질 개선,신규 에셋 확보)에 집중하기 어려웠습니다"
          ],
          task: [
            "운영 리소스 절감 및 휴먼 에러 0건 달성",
            "엔지니어 개입 없이 운영팀이 직접 파이프라인을 관리하고 모니터링할 수 있는 시스템 구축",
            "3D 모델 활용 서비스의 요구사항에 맞는 최적화 파이프라인 구축",
          ],
          action: [
            "**1. 상태 머신 기반 자동화 워크플로우 구축**: 커머스 상품 정보 연동 및 최적화, 배포 과정을 자동화했습니다",
            "**2. gltf-transform 기반 최적화 모듈화**: Node.js gltf-transform 라이브러리로 폴리곤과 텍스처 압축, glb 변환을 모듈화하고 반복 실험으로 최적 파라미터를 도출했습니다",
            "**3. 대시보드 구축**: 운영팀이 파이프라인을 실행하고 모니터링할 수 있는 내부 대시보드를 구축했습니다",
          ],
          result: [
            "휴먼 에러 **0건**",
            "파일 크기 **51 % 감소**, 클라이언트 GPU 메모리 **20 % 절감**",
            "엔지니어 유지보수 리소스 17% 절감 및 운영 리소스 50% 절감",
            "사내 우수 사례로 선정되어 **Top Contributor**로 선정",
          ]
        },
      },
      {
        name: "3D 모델 생성 자동화",
        problem: [
          "월간 신규 3D 모델 생산량이 70개에 불과했고, 모델당 제작 비용이 46,000원으로 높아 카탈로그 확장이 더딘 문제가 있었습니다.",
          "3D 모델 제작에 적합한 상품 이미지를 수동으로 선별하는 데 많은 시간과 노력이 소요되었습니다.",
        ],
        approach: [
          "GPT-4o를 활용하여 조명, 왜곡 등 12개 지표를 기반으로 이미지 품질을 점수화하고, 3D 생성에 가장 적합한 사진을 자동으로 선택하는 시스템을 구현했습니다.",
          "이미지 선별부터 3D 모델 생성까지 이어지는 파이프라인을 구축하여 전체 프로세스를 자동화했습니다.",
          "외부 API 연동 안정성을 높이기 위해, 요청을 큐에 적재하고 지수 백오프 기반의 재시도 로직을 직접 구현했습니다.",
        ],
        result: [
          "월간 3D 모델 생산량을 **70개에서 800개로 11배 이상 증대**시켰습니다.",
          "모델당 제작 비용을 **46,000원에서 5,000원으로 약 89% 절감**했습니다.",
          "최종 모델 생성 **수율 17%를 달성**하여 목표치(15%)를 초과했습니다.",
        ],
        detail: {
          situation: [
            "실제 가구 기반 3D 모델 특성상, 대량의 모델 수급이 중요한 상황이었습니다.",
            "그러나 월간 신규 3D 모델 생산량이 **70 개**로, 수작업 특성상 확장이 어려웠습니다.",
            "또한 모델당 제작비용이 **₩46,000**로 높았습니다.",
          ],
          task: [
            "GPT-기반 이미지 선별 + 자동 3D 생성 파이프라인으로 생산량 확대",
            "모델당 비용을 절감하고, 목표 수율 **15 %** 이상 달성",
          ],
          action: [
            "**1. 이미지 스코어링**: 상품페이지 사진 중 GPT-4o 모델로 **12 개 지표**(조명,왜곡,피사체 비율 등) 점수화, 상위 1장을 자동 선택해 3D 생성 정확도를 극대화했습니다",
            "**2. 요청 큐 + 재시도 로직**: LLM과 3D 생성 API에 대해, 429 대응을 위해 사용자 요청을 작업 큐에 적재, 재시도 로직을 직접 구현해 안정성을 확보했습니다",
            "**3. 자동 3D 생성 파이프라인**: 상품 코드를 입력하면 자동으로 3D 생성에 유리한 사진을 선택하고 3D 모델을 생성해주는 파이프라인을 구축했습니다",
          ],
          result: [
            "생산량 **70 → 800 개/월**, 비용 **₩46,000 → ₩5,000**",
            "목표 수율 **15 %** 대비 실제 **17 %** 달성",
          ],
        },
        onlyDetailView: true,
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
    summary: [
      "A backend engineer with a strong aptitude for deeply understanding and optimizing system architecture and performance.",
      "I focus not just on technical excellence but on practical problem-solving within a business context to make a real impact on user and service outcomes.",
      "To ensure stable service during rapid traffic growth, I have designed and implemented fault-tolerant architectures, efficient data processing, API performance improvements, and asynchronous parallel processing.",
      "I have contributed to productivity, such as improving operational efficiency by 27% through automated pipelines, and have been consistently selected as a **Top Contributor** on a quarterly basis.",
      "Currently, as a **Backend Lead** at Bucketplace, I am leading **system design, performance improvement, and workflow optimization using AI tools**.",
    ].join(" "),
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
        detail: {
          situation: [
            "Ohouse AI is a global service that automatically places furniture in real interior photos using Ohouse data and AI based on user requests, providing result images. It was planned as a new service targeting about **220 countries** and operating across AWS **4 regions (us-west, us-east, Asia 2)**",
            "Global service characteristics made traffic unpredictable, and response to traffic surges was essential",
            "Multi-turn processing of image generation and response generation using LLM, with frequent failures and **HTTP 402 errors** due to insufficient balance, especially in the image generation stage, were expected situations"
          ],
          task: [
            "Structural design and implementation to maintain service stability even during unpredictable traffic surges that may occur in various regions with global service launch",
            "Maintain target response time of **P95 50ms or less**, minimize API failures and errors that degrade user experience",
            "New launch within **5 weeks** total development period (3 backend developers, leading overall system design and implementation)"
          ],
          action: [
            "**1. Webflux-based asynchronous API server construction**: Introduced Webflux for asynchronous processing to build asynchronous APIs",
            "**2. Kafka-based asynchronous processing design**: Kafka configuration was set to 15 partitions and 3 replications. This number was matched to the maximum scaling number of workers (8) and designed to be stable and efficient",
            "**3. Worker processing performance optimization and scaling**: Configured auto-scaling for API servers (2-4 pods) and workers (2-8 pods) based on Kubernetes HPA. API servers were designed to be lightweight with simple CRUD focus, while workers limited maximum **5 concurrent tasks** with semaphores considering memory usage during image processing and LLM calls",
            "**4. Backpressure-based stability assurance**: When workers processed Kafka messages, limited the number of concurrent processing tasks with semaphores to prevent worker bottlenecks and failures due to overload",
            "**5. External API failure propagation response (Retry & Circuit Breaker)**: For image generation and LLM call failures, implemented up to 3 retries (initial 200ms interval, exponential backoff), and Circuit Breaker open after 10 consecutive failures (recovery attempt to half-open state after 30 seconds)",
            "**6. Cost management and service quality monitoring**: Set monthly maximum $4,000 budget per API platform (alarm at 75% consumption), built separate **internal admin page** to monitor costs and service quality. Quickly identified and improved actual user usage patterns and issues based on data",
            "**7. CDN-based global image serving optimization**: Introduced Akamai CDN to serve images generated in each region from the nearest endpoint to global users, optimizing global user experience and minimizing server load",
          ],
          result: [
            "New launch after 4 weeks of development",
            "Maintained 99.996% uptime after launch",
            "Achieved **P95 response time under 25ms** based on asynchronous processing structure and performance optimization",
            "Service operated stably without interruption across AWS 4 global regions, successfully maintaining stable performance based on automatic scaling and backpressure even during surge traffic (up to 4x increase) after launch",
            "Recognized for technical achievement by receiving the **Eng Award** given every half-year within the company"
          ]
        },
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
          "Improved the user experience by enhancing the client-side 3D model processing logic to meet service-specific requirements.",
          "Collaborated closely with the operations team to integrate and continuously improve the pipeline based on actual usage workflows.",
        ],
        result: [
          "Reduced GPU resource usage by over 20%, decreased average file sizes by 51%, and **saved over 40 person-days of manual resources annually**.",
          "Recognized as a **Top Contributor** for building a company-wide best practice for productivity.",
        ],
        detail: {
          situation: [
            "With the expansion of 3D interior and AR services, the number of models reached tens of thousands, and the manual optimization, product integration, and deployment processes reached their limits",
            "The risk of human errors increased operational risks, and the operations team was tied up with repetitive tasks, making it difficult to focus on core tasks (quality improvement, securing new assets)"
          ],
          task: [
            "Achieve operational resource reduction and zero human errors",
            "Build a system that allows the operations team to directly manage and monitor pipelines without engineer intervention",
            "Build an optimization pipeline that meets the requirements of 3D model utilization services",
          ],
          action: [
            "**1. State machine-based automated workflow construction**: Automated the process of commerce product information integration, optimization, and deployment",
            "**2. gltf-transform-based optimization modularization**: Modularized polygon and texture compression and glb conversion using Node.js gltf-transform library, and derived optimal parameters through repeated experiments",
            "**3. Dashboard construction**: Built an internal dashboard that allows the operations team to execute and monitor pipelines",
          ],
          result: [
            "Human errors **0 cases**",
            "File size **51% reduction**, client GPU memory **20% reduction**",
            "Engineer maintenance resource reduction of 17% and operational resource reduction of 50%",
          ]
                 },
      },
      {
        name: "3D Model Generation Automation",
        problem: [
          "Monthly new 3D model manual production was only **70 units**, making catalog expansion slow.",
          "Production cost per model was high at **₩46,000**.",
        ],
        approach: [
          "Implemented a system that uses GPT-4o to score image quality based on 12 criteria including lighting and distortion, automatically selecting the most suitable photo for 3D generation.",
          "Built a pipeline that automates the entire process from image selection to 3D model generation.",
          "To improve external API integration stability, implemented a queue system for requests and custom retry logic with exponential backoff.",
        ],
        result: [
          "Increased monthly 3D model production from **70 to 800 units, an 11x improvement**.",
          "Reduced production cost per model from **₩46,000 to ₩5,000, approximately 89% cost reduction**.",
          "Achieved **17% final model generation yield**, exceeding the target (15%).",
        ],
        detail: {
          situation: [
            "Monthly new 3D model manual production remained at **70 units**, making catalog expansion slow",
            "Production cost per model was high at **₩46,000**",
          ],
          task: [
            "Expand production through GPT-based image selection + automatic 3D generation pipeline",
            "Reduce cost per model and achieve target yield of **15%** or higher",
          ],
          action: [
            "**1. Image scoring**: Among product page photos, scored **12 criteria** (lighting, distortion, subject ratio, etc.) using GPT-4o model, automatically selecting the top 1 to maximize 3D generation accuracy",
            "**2. Request queue + retry logic**: For LLM and 3D generation APIs, implemented queue-based request handling and custom retry logic to ensure stability in response to 429 errors",
            "**3. Automatic 3D generation pipeline**: Built a pipeline that automatically selects photos favorable for 3D generation and creates 3D models when product codes are input",
          ],
          result: [
            "Production **70 → 800 units/month**, cost **₩46,000 → ₩5,000**",
            "Achieved **17%** actual yield vs. **15%** target yield",
          ],
        },
        onlyDetailView: true,
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
