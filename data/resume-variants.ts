import { resumeData } from "@/data/resume-data"
import type { KeyExperience, Language, ResumeData } from "@/types/resume"

export const resumeTracks = ["platform", "ai-backend"] as const
export type ResumeTrack = (typeof resumeTracks)[number]

export const defaultResumeTrack: ResumeTrack = "platform"

export function parseResumeTrack(value: string | null | undefined): ResumeTrack {
  return value === "ai-backend" ? "ai-backend" : defaultResumeTrack
}

const agentOwnership =
  "**AI Agent Orchestration**: 3D방꾸미기의 상품 검색·이미지 합성·스타일 추천 등 다양한 AI 기능을 하나의 흐름으로 통합하는 오케스트레이터를 설계·구축하고 운영했습니다. LLM에는 사용자 의도 해석과 도구 파라미터 생성을 맡기되, 순서 의존성이 있는 tool chain과 필수 도구 호출은 코드로 강제하는 constrained orchestration을 설계했습니다."

const asynchronousTurnDelivery =
  "  이미지 합성 등 장시간 AI 작업에서 클라이언트 연결 단절에 대응하기 위해서 요청을 비동기로 처리하고, 상태와 중간 결과를 저장했으며, SSE 재연결 시 Redis Stream 이벤트를 replay해 결과를 이어받을 수 있도록 했습니다."

const agentEvaluation =
  "  Production trace sample과 기능 요구사항을 바탕으로 기능과 사용자 의도별 coverage matrix를 설계하고, 도구 호출과 파라미터·응답·멀티턴 흐름을 검증하는 **85개 시나리오**의 trajectory regression suite를 구축했습니다. 운영 응답의 **94%**가 품질 기준을 충족함을 확인했습니다."

const providerResilience =
  "  특정 LLM provider의 장애가 서비스 장애로 이어지지 않도록 retry, circuit breaker, provider fallback을 적용했습니다. Circuit breaker 상태를 service·model·API key 단위로 관리해서 문제가 발생한 대상만 차단하고, 개별 key의 quota 초과에도 대응했습니다."

const platformExpansion =
  "  RP에서 검증한 agent 실행 기능을 framework-agnostic execution runtime과 session service, SSE endpoint 등으로 모듈화해서 AI Agent Platform으로 확장하고 있습니다."

const ohouseAiLaunch =
  "**Ohouse AI 런칭**: 6주 목표를 **4주로 앞당겨** **170개국** 글로벌 런칭을 완료했습니다. 사용자 요청 API와 장시간 AI 작업을 분리하는 메시지 큐 기반 워커를 구축하고, 오토스케일링·동시성 제한·재시도·장애 격리를 적용해 예측하기 어려운 트래픽을 안정적으로 처리했습니다."

const ohouseAiRuntime =
  "  특정 LLM provider의 장애가 서비스 장애로 이어지지 않도록 provider fallback과 circuit breaker를 적용했습니다. Spring 기반 LLM framework의 제약을 해소하기 위해 Python·LangGraph 기반으로 재설계해서 AI workflow를 유연하게 확장할 수 있도록 했습니다."

const ohouseAiMonetization =
  "**Ohouse AI 수익화/고도화**: Apple·Google IAP lifecycle을 하나의 상태머신으로 추상화해서 구독 시스템을 구축하고 결제 정합성을 확보했습니다. Amazon Affiliate 정책을 반영한 RAG 기반 상품 추천으로 **CVR 10.5%**를 달성해 수익 모델을 검증했습니다."

const roomPlannerPerformance = [
  "**3D방꾸미기 성능·안정성**: API 응답 시간을 **200ms→80ms**로 단축하고 payload를 **54% 절감**했으며, 모델 로딩 시간을 **10초→2.5초**로 줄였습니다. 부하 테스트로 이벤트·챌린지의 트래픽 증가를 사전 검증해 **10.2배 트래픽에서 99.95% 가용성**을 유지했습니다.",
  "  성능·안정성 개선을 바탕으로 **WAU 704% 성장**과 **연간 GMV 600%(8.6억)** 성장에 기여했습니다.",
]

const assetAutomation =
  "**3D 에셋 자동화**: 수작업 3D 제작 파이프라인을 자동화해 월 생산량 **68개→800개**, 비용 **88% 절감**을 달성해 **Eng Award**를 받았습니다. 3D 에셋 최적화 기법을 개선해 GPU 사용량을 **20% 감소**시키고 파일 크기를 **51% 축소**했으며, draw call을 **3,000→20**으로 줄였습니다. 에셋 관리 시스템을 구축해 연간 **40일 이상**의 운영 시간을 절감했습니다."

const panoramaAr =
  "**Panorama AR**: 사용자의 실제 방을 3D로 복원해 가구를 배치할 수 있는 서비스의 백엔드를 리드했습니다. MLE 연구 결과를 마이크로서비스로 연동하고, 비동기 상태 관리로 장시간 3D 공간 복원 파이프라인을 운영하며 일 **약 300건**의 룸 스캔을 처리했습니다."

const arExperience =
  "**AR 경험 개선**: AR 환경에 LoD 자동 생성을 적용해 3D 모델을 **90% 경량화**했습니다. AR Size Box를 구축해 AR 지원 상품을 **2,210개→231,000개(104배)**로 확대하고 구매 전환율 **1.7배** 향상에 기여했습니다."

const technicalLeadership =
  "**기술 리더십**: 신규 입사자와 FE·ML 엔지니어가 백엔드에 독립적으로 기여할 수 있도록 온보딩과 코드 리뷰를 주도했습니다. 릴리즈 노트와 데이터 분석을 자동화해 팀의 배포 주기를 단축하고 **AI Award**, **AI Native MVP**를 받았습니다."

const agentKeyExperience: KeyExperience = {
  name: "AI Agent Orchestration과 Platform 확장",
  summaryView: {
    problem:
      "유저 리서치를 통해 상품 탐색 과정과 모바일 3D 조작 난이도가 3D방꾸미기의 주요 진입 장벽임을 파악했습니다. 이를 해소하기 위해 멀티에이전트 기반 AI 인테리어 비서 서비스를 구축했습니다. 상품 검색·이미지 합성·스타일 추천 등 다양한 AI 기능을 하나의 사용자 흐름으로 제공하면서, LLM의 비결정성과 외부 AI 서비스 장애를 통제해야 했습니다.\n동시에 조직 내 여러 팀이 에이전트 서비스를 구축하고 있어, RP에서 구현한 Agent 아키텍처를 공통 플랫폼으로 확장할 필요가 있었습니다.",
    approach:
      "A2A 프로토콜을 기반으로 에이전트 간 인터페이스 계약을 정의하고, 사용자 요청을 해석해 여러 에이전트의 실행을 제어하는 오케스트레이터를 구축했습니다. LLM에는 사용자 의도 해석과 도구 파라미터 생성을 맡기되, 순서 의존성이 있는 tool chain과 필수 도구 호출은 코드로 강제하는 programmatic enforcement를 적용했습니다.\n실행 상태에 따라 다음 action을 지정하고, 긴 UUID를 실행 컨텍스트 범위의 짧은 ID로 변환·검증하는 runtime guardrails를 구축했습니다. 이미지와 파일은 ID로 참조하고 필요할 때만 불러오는 lazy hydration을 적용해서 멀티모달 컨텍스트의 크기를 제어했습니다.\n장시간 AI 작업은 비동기로 처리하고 실행 상태와 중간 결과를 저장했으며, SSE 재연결 시 Redis Stream의 이벤트를 replay해서 결과를 이어받을 수 있도록 했습니다. 외부 LLM 호출에는 retry·circuit breaker·provider fallback을 적용하고, 하위 에이전트의 오류 케이스별로 graceful degradation을 적용했습니다.\nRP에서 검증한 Agent 아키텍처를 공통 플랫폼으로 확장하면서 execution runtime core와 session service, SSE endpoint의 설계·구현을 담당했습니다. SDK-agnostic canonical Engine Event를 정의하고 ADK event를 변환하는 adapter를 구현해 SDK별 차이를 격리했습니다.",
    result:
      "멀티에이전트 기반 AI 인테리어 비서를 3D방꾸미기 실서비스에 적용하고 운영했습니다. Production trace sample에서 운영 응답의 **94%**가 품질 기준을 충족함을 확인했습니다.\n기능과 사용자 의도별 **85개 시나리오**의 trajectory regression suite를 구축해서 코드 변경에 따른 behavioral regression을 탐지할 수 있도록 했습니다. Execution runtime을 RP 실행 경로에서 검증하고 AI Agent Platform의 공통 runtime으로 확장하고 있습니다.",
  },
}

const correctedAssetKeyExperience: KeyExperience = {
  name: "3D 에셋 파이프라인 구축 및 생산 자동화",
  summaryView: {
    problem:
      "3D방꾸미기와 AR 기능에 필요한 3D 모델을 수작업으로 제작하고 있었습니다. 기존 에셋은 관리 체계가 없었고, 신규 모델은 처리량과 품질 편차로 상품 확대를 감당하기 어려웠습니다.",
    approach:
      "에셋 관리 시스템을 구축해 제작·검수·배포 과정을 체계화하고, 운영 대시보드에서 3D 프리뷰와 서비스 연동 검수까지 처리할 수 있도록 했습니다.\n3D 에셋 최적화 기법을 개선해 GPU 사용량과 파일 크기, draw call을 줄였습니다. Image-to-3D 파이프라인은 상태 흐름 기반으로 자동화하고, GPT-4o 기반 12개 기준 품질 선별로 E2E 자동화를 완성했습니다.",
    result:
      "Image-to-3D 자동화로 월 생산량 **68개→800개**, 비용 **88% 절감**, **45개 신규 카테고리** 확장을 달성해 **Eng Award**를 받았습니다.\n에셋 최적화로 GPU 사용량 **20% 감소**, 파일 크기 **51% 축소**, draw call **3,000→20**을 달성하고, 에셋 관리 시스템으로 연간 **40일 이상**의 운영 시간을 절감했습니다.",
  },
}

const correctedRoomPlannerKeyExperience: KeyExperience = {
  name: "3D방꾸미기 성능·안정성 강화",
  summaryView: {
    problem:
      "모바일 3D 인테리어 배치 서비스에서 초기 로딩 지연이 사용자 이탈과 성장 정체의 주요 병목이었습니다. 이벤트·챌린지의 트래픽 증가에도 안정적으로 운영해야 했습니다.",
    approach:
      "API 호출 구조를 개선해 응답 시간과 payload를 줄이고, 모델 로딩 병목을 개선했습니다. 큐 기반 지표 모니터링과 안전한 종료 규칙으로 스케일링을 안정시키고, 부하 테스트로 이벤트·챌린지 시나리오를 사전 검증했습니다.",
    result:
      "API 응답 시간 **200ms→80ms**, payload **54% 절감**, 모델 로딩 **10초→2.5초**를 달성했습니다. **10.2배 트래픽에서 99.95% 가용성**을 유지했으며, 성능·안정성 개선을 바탕으로 **WAU 704%**, **연간 GMV 600%(8.6억)** 성장에 기여했습니다.",
  },
}

const summaries: Record<ResumeTrack, string> = {
  platform:
    "분산 시스템과 장시간 비동기 작업이 많은 AI/3D 도메인에서 서비스를 런칭하고 안정화해온 백엔드 엔지니어입니다. 3D방꾸미기에서 상품 검색·이미지 합성·스타일 추천 에이전트를 조율하는 오케스트레이터를 설계·구축하고 운영했습니다. 이 과정에서 execution runtime과 session service, SSE endpoint 등을 모듈화해서 AI Agent Platform으로 확장하고 있습니다. 장시간 작업을 위한 비동기 워커와 오토스케일링, 장애 격리 설계를 Ohouse AI와 Panorama AR, 3D 자동화 파이프라인에 적용했습니다.",
  "ai-backend":
    "분산 시스템과 장시간 비동기 작업이 많은 AI/3D 도메인에서 서비스를 런칭하고 안정화해온 백엔드 엔지니어입니다. 3D방꾸미기에서 상품 검색·이미지 합성·스타일 추천을 제공하는 멀티에이전트 기반 AI 인테리어 비서를 설계·구축하고 운영했습니다. LLM의 비결정성을 통제하기 위한 constrained orchestration과 runtime guardrails를 설계하고, 비동기 처리·SSE streaming·provider 장애 격리를 적용했습니다. 글로벌 AI 서비스 런칭과 수익화, 3D 자동화 파이프라인 구축을 통해 서비스 안정성과 비즈니스 성과를 함께 만들어왔습니다.",
}

function bucketplaceDescriptions(track: ResumeTrack): string[] {
  const agent =
    track === "platform"
      ? [agentOwnership, asynchronousTurnDelivery, platformExpansion, agentEvaluation]
      : [agentOwnership, asynchronousTurnDelivery, providerResilience, agentEvaluation]

  const ohouse =
    track === "platform"
      ? [ohouseAiLaunch, ohouseAiRuntime]
      : [ohouseAiLaunch, ohouseAiMonetization, ohouseAiRuntime]

  const common = {
    roomPlanner: roomPlannerPerformance,
    assetAutomation: [assetAutomation],
    panoramaAr: [panoramaAr],
    arExperience: [arExperience],
    leadership: [technicalLeadership],
  }

  return track === "platform"
    ? [
        ...agent,
        ...ohouse,
        ...common.assetAutomation,
        ...common.roomPlanner,
        ...common.panoramaAr,
        ...common.leadership,
      ]
    : [
        ...agent,
        ...ohouse,
        ...common.roomPlanner,
        ...common.assetAutomation,
        ...common.arExperience,
        ...common.leadership,
      ]
}

function koreanKeyExperiences(track: ResumeTrack): KeyExperience[] {
  const ohouseAi = resumeData.ko.keyExperience.find(item => item.name === "Ohouse AI 런칭 및 고도화")
  if (!ohouseAi) throw new Error("Missing Ohouse AI key experience")

  return track === "platform"
    ? [agentKeyExperience, ohouseAi, correctedAssetKeyExperience]
    : [agentKeyExperience, ohouseAi, correctedRoomPlannerKeyExperience]
}

function buildKoreanResume(track: ResumeTrack): ResumeData {
  return {
    ...resumeData.ko,
    summary: summaries[track],
    experience: resumeData.ko.experience.map(experience =>
      experience.company.startsWith("Bucketplace")
        ? { ...experience, description: bucketplaceDescriptions(track) }
        : experience,
    ),
    keyExperience: koreanKeyExperiences(track),
  }
}

export function getResumeData(language: Language, track: ResumeTrack = defaultResumeTrack): ResumeData {
  return language === "ko" ? buildKoreanResume(track) : resumeData.en
}
