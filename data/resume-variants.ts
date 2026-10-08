import { resumeData } from "@/data/resume-data"
import type { KeyExperience, Language, ResumeData } from "@/types/resume"

const platformOwnership =
  "**AI Agent Platform 설계와 구축**: AI 에이전트의 실행과 세션 관리, SSE 기반 결과 전달을 제공하는 공통 플랫폼의 설계와 구축을 리드했습니다. 서로 다른 AI Agent SDK를 공통 실행 구조에 연결하고, 서비스마다 반복 구현하던 실행 상태 관리와 장애 복구 기능을 플랫폼에서 제공하도록 설계했습니다. 소비 서비스의 기능 요구사항과 출시 일정을 기준으로 플랫폼 범위를 조정하면서, 최근에 오늘의집 자연어 검색 서비스와 3D방꾸미기 AI 채팅에 적용했습니다."

const agentOwnership = [
  "**AI 인테리어 비서 개발과 운영**: 3D방꾸미기의 상품 검색과 이미지 합성, 스타일 추천을 통합하는 AI 에이전트 오케스트레이터를 설계하고 운영했습니다.",
  "  사용자 의도 해석과 도구 파라미터 생성은 LLM에 맡기고, 필수 도구 호출과 실행 순서는 코드로 제어해 기능 요구사항을 충족하도록 설계했습니다.",
  "  도구 호출과 응답, 멀티턴 흐름을 검증하는 **85개 시나리오의 회귀 평가 체계**를 구축했습니다.",
]

const ohouseAiLaunch =
  "**Ohouse AI 글로벌 출시**: **6주 목표였던 글로벌 출시를 4주 만에 완료했습니다.** 사용자 요청 API와 장시간 AI 작업을 분리하는 메시지 큐 기반 워커를 설계하고 구축했습니다. 오토스케일링과 동시성 제어, 재시도와 장애 격리를 적용해 예측하기 어려운 트래픽에 대응했습니다."

const ohouseAiMonetization =
  "**Ohouse AI 수익화**: Apple과 Google의 서로 다른 IAP lifecycle을 하나의 상태머신으로 추상화해 구독 시스템을 구축하고 결제 정합성을 확보했습니다. Amazon Affiliate 정책을 반영한 RAG 기반 상품 추천을 개발해 **제휴 상품 클릭 후 구매 전환율 10.5%**를 달성했습니다."

const roomPlannerPerformance = [
  "**3D방꾸미기 성능과 안정성 개선**: API 평균 응답 시간을 **200ms에서 80ms**, 모델 로딩 시간을 **10초에서 2.5초**로 단축했습니다. 부하 테스트와 스케일링 개선으로 이벤트 트래픽에 대응하고, **TPS가 10.2배 증가한 환경에서 99.95% 가용성**을 유지했습니다.",
  "  사용자 경험과 서비스 안정성을 개선해 **WAU 약 7배 성장**과 **연간 GMV 6배 성장(8.6억 원)**에 기여했습니다.",
]

const assetAutomation = [
  "**3D 에셋 제작과 운영 자동화**: 제작과 검수, 배포를 연결하는 파이프라인을 구축해 월 생산량을 **68개에서 800개로 늘리고 제작 비용을 88% 절감**했으며, 사내 **Eng Award**를 수상했습니다.",
  "  에셋 관리 시스템과 운영 대시보드를 구축해 엔지니어에게 의존하던 검수와 배포를 운영자가 직접 처리할 수 있도록 하고, **연간 40일 이상의 운영 시간**을 절감했습니다.",
]

const arExperience =
  "**AR 경험 개선**: LoD 자동 생성을 적용해 AR용 3D 모델을 **90% 경량화**했습니다. Size Box 기능을 제안하고 구현하며 AR 지원 상품을 **2,210개에서 231,000개로 확대**하고, 구매 전환율 **1.7배 향상**에 기여했습니다."

const technicalLeadership = [
  "**팀 개발 역량과 생산성 개선**: 신규 입사자와 FE, ML 엔지니어의 온보딩과 코드 리뷰를 주도해 백엔드 개발에 독립적으로 기여할 수 있도록 지원했습니다.",
  "  AI를 활용해 릴리즈 노트 작성과 데이터 분석을 자동화하고 팀의 배포 주기를 단축했으며, 사내 **AI Award와 AI Native MVP**를 수상했습니다.",
]

const agentKeyExperience: KeyExperience = {
  name: "AI Agent Platform 설계와 서비스 적용",
  summaryView: {
    problem:
      "여러 팀이 AI 에이전트 서비스를 개발하면서 실행 상태와 대화 이력 관리, 결과 전달과 장애 대응을 반복 구현하고 있었습니다. 팀마다 사용하는 AI Agent SDK와 제품 요구사항이 달라, 공통으로 제공할 기능과 개별 서비스가 담당할 기능을 구분해야 했습니다.\n플랫폼의 범위를 넓게 잡으면 실제 서비스 도입이 늦어질 수 있어, 소비 서비스의 기능 요구사항과 출시 일정에 맞춰 우선 구현할 범위를 정해야 했습니다.",
    approach:
      "소비 서비스의 기능 요구사항과 출시 일정에 맞춰 플랫폼의 구현 우선순위를 조정해 서비스 도입을 앞당겼습니다. 각 AI Agent SDK의 실행 방식을 유지하면서 실행 상태와 이벤트를 공통 형식으로 연결하고, 세션 관리와 장애 시 실행 재개, SSE 기반 결과 전달을 공통으로 제공하도록 설계했습니다.\n장시간 작업을 클라이언트 연결과 분리해 비동기로 실행하고, 클라이언트 연결이 끊겨도 작업을 계속 수행하도록 구성했습니다.\n팀 내 구현을 분담하고 공통 계약을 기준으로 설계와 코드 리뷰, 통합 검증을 진행했습니다. 소비 팀과 기존 서비스의 연동 범위를 조율하며 플랫폼 도입을 추진했습니다.",
    result:
      "AI Agent Platform을 구축하고 운영 환경에 배포해, 오늘의집 자연어 검색 서비스와 3D방꾸미기 AI 채팅의 공통 실행 기반으로 적용했습니다. 서로 다른 AI Agent SDK로 개발된 서비스를 동일한 실행과 세션 관리, 결과 전달 구조에 연결해 각 팀이 제품별 AI 에이전트 로직에 집중할 수 있도록 했습니다.",
  },
}

const ohouseAiKeyExperience: KeyExperience = {
  name: "Ohouse AI 글로벌 출시와 수익화",
  summaryView: {
    problem:
      "제한된 인력과 여러 팀의 의존성이 얽힌 상황에서, 실제 인테리어 사진에 가구를 배치하는 AI 서비스를 6주 안에 글로벌 출시해야 했습니다. 장시간 이미지 생성의 요청 순서와 실행 상태를 관리하고, 외부 AI 서비스의 쿼터 제한과 장애를 격리해야 했습니다.\n출시 이후에는 서로 다른 Apple과 Google의 IAP lifecycle을 통합하고, 제휴 정책에 맞는 수익 모델을 구축해야 했습니다.",
    approach:
      "사용자 요청 API와 장시간 이미지 생성 작업을 Kafka 기반 Worker로 분리하고, 사용자별 요청 순서와 동시 실행 수를 제어했습니다. Kubernetes 오토스케일링과 재시도, 장애 격리를 적용해 API와 Worker가 독립적으로 확장되고 복구되도록 설계했습니다.\n인증 시스템의 개발 일정이 전체 출시를 지연시키지 않도록 JWT 기반 게스트 인증을 도입해, 서비스 출시와 인증 시스템의 의존성을 분리했습니다. 출시 후에는 Apple과 Google의 IAP lifecycle을 하나의 상태머신으로 통합해 구독 상태와 결제 검증을 일관되게 처리했습니다.\nAmazon Affiliate 정책을 반영한 RAG 기반 상품 추천 경로를 구축하고, 외부 AI 서비스에는 provider fallback과 circuit breaker를 적용했습니다.",
    result:
      "**6주 목표였던 글로벌 출시를 4주 만에 완료했습니다.** 출시 이후 구독과 제휴 상품 추천을 도입해 수익화 기반을 마련하고, **제휴 상품 클릭 후 구매 전환율 10.5%**를 달성했습니다.",
  },
}

const threeDServiceKeyExperience: KeyExperience = {
  name: "3D 서비스 성능 개선 및 에셋 파이프라인 자동화",
  summaryView: {
    problem:
      "모바일 3D 인테리어 배치 서비스의 초기 로딩 지연이 사용자 이탈과 성장의 병목이었고, 이벤트와 챌린지의 트래픽 증가에도 안정적으로 운영해야 했습니다. 동시에 서비스 확장에 필요한 3D 모델은 수작업으로 제작하고 관리해 생산량과 비용, 품질 편차에 한계가 있었습니다.",
    approach:
      "API 호출 구조와 모델 로딩 병목을 개선하고, 큐 기반 지표 모니터링과 안전한 종료 규칙으로 스케일링을 안정화했습니다. 부하 테스트로 이벤트와 챌린지 시나리오를 사전 검증했습니다. 에셋 제작과 검수, 배포를 상태 흐름 기반 파이프라인으로 자동화하고, 관리 시스템과 3D 프리뷰를 구축했으며 GPT-4o 기반 12개 기준으로 생성 에셋의 품질 선별까지 자동화했습니다.",
    result:
      "API 평균 응답 시간 **200ms→80ms**, payload **54% 절감**, 모델 로딩 **10초→2.5초**를 달성하고 **TPS가 10.2배 증가한 환경에서 99.95% 가용성**을 유지했습니다. 이를 바탕으로 **WAU 약 7배**, **연간 GMV 6배(8.6억 원)** 성장에 기여했습니다.\n3D 에셋 월 생산량을 **68개→800개**로 늘리고 비용을 **88% 절감**해 **Eng Award**를 받았으며, 관리 시스템으로 연간 **40일 이상**의 운영 시간을 절감했습니다.",
  },
}

const summary =
  "AI와 3D 도메인에서 서비스를 출시하고, 수익화와 성능 개선, 안정적인 운영까지 맡아온 백엔드 엔지니어입니다. 사용자 요청과 장시간 작업을 분리하는 비동기 처리 구조를 설계하고, 트래픽 증가와 외부 서비스 장애에 대응하며 제품을 발전시켜 왔습니다. 3D방꾸미기에서는 상품 검색과 이미지 합성, 스타일 추천을 통합한 AI 인테리어 비서를 개발하고 운영했습니다. 이후 제품에서 검증한 실행 구조를 공통 AI Agent Platform으로 확장하는 프로젝트를 리드하며, 서비스 요구와 운영 제약에 맞춰 플랫폼의 범위와 아키텍처를 정하고 팀의 구현과 서비스 도입을 조율했습니다. 글로벌 AI 서비스 출시와 구독 시스템 구축, 3D 에셋 제작 자동화로 제품 성장과 운영 효율 개선에 기여했으며, 사내 Eng Award와 AI Award를 수상했습니다."

function bucketplaceDescriptions(): string[] {
  return [
    platformOwnership,
    ...agentOwnership,
    ohouseAiLaunch,
    ohouseAiMonetization,
    ...roomPlannerPerformance,
    ...assetAutomation,
    arExperience,
    ...technicalLeadership,
  ]
}

function buildKoreanResume(): ResumeData {
  return {
    ...resumeData.ko,
    personalInfo: {
      ...resumeData.ko.personalInfo,
      position: "Senior Backend Engineer / Tech Lead",
    },
    summary,
    experience: resumeData.ko.experience.map(experience => {
      if (experience.company.startsWith("Bucketplace")) {
        return {
          ...experience,
          position: "현재: Senior Backend Engineer / Tech Lead",
          roleSummary:
            "AI와 3D 서비스 개발을 담당하는 엔지니어 팀을 리드하며, 기술 설계와 개발 우선순위 결정, 팀 간 협업을 맡고 있습니다.",
          description: bucketplaceDescriptions(),
        }
      }
      if (experience.company === "LG CNS") {
        return {
          ...experience,
          description: [
            "Node.js와 Redis 기반의 실시간 동기화 서버를 설계하고 운영했습니다. WebSocket으로 여러 사용자의 편집 상태를 동기화하고, Unity 클라이언트와 연동되는 백엔드 API를 개발했습니다.",
            "GitLab과 Jenkins 기반 CI/CD 파이프라인을 자동화해 빌드와 테스트, 배포에 걸리는 시간을 단축했습니다.",
          ],
        }
      }
      return experience
    }),
    education: resumeData.ko.education.map(education =>
      education.degree.startsWith("석사")
        ? { ...education, description: "인공지능 시스템 성능 개선 연구" }
        : education,
    ),
    technicalSummary: [
      "Kotlin, Python, TypeScript / Spring Boot, Node.js",
      "MySQL, MongoDB, Redis, Kafka / AWS, Kubernetes",
    ],
    keyExperience: [agentKeyExperience, ohouseAiKeyExperience, threeDServiceKeyExperience],
  }
}

// English synchronization follows the Korean content and layout review.
export function getResumeData(language: Language): ResumeData {
  return language === "ko" ? buildKoreanResume() : resumeData.en
}
