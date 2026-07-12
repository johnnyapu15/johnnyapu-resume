# 3D방꾸미기 AI Agent Orchestration과 Platform 확장

## 상태

- 3D방꾸미기 오케스트레이션 에이전트: 실서비스 운영
- AIAP execution runtime: RP 실행 경로에서 검증
- AIAP 플랫폼 확장: 진행 중
- 신규 소비 서비스: 개발 중이며 아직 이력서 결과로 사용하지 않음

## 제품 문제

- 유저 리서치에서 상품 탐색 과정과 모바일 3D 조작 난이도가 주요 진입 장벽으로 확인됐습니다.
- 이를 해소하기 위해 멀티에이전트 기반 AI 인테리어 비서 서비스를 구축했습니다.
- 상품 검색, 이미지 합성, 스타일 추천, Image-to-3D 등 다양한 AI 기능을 하나의 사용자 흐름으로 제공하고자 했습니다.
- LLM의 비결정성과 외부 AI 서비스의 장애를 통제해야 했습니다.
- 조직 내 여러 팀이 에이전트 서비스를 구축하고 있어 RP의 Agent 아키텍처를 공통 플랫폼으로 확장할 필요가 있었습니다.
- 약 10개 팀이라는 수치는 플랫폼화의 배경일 뿐, 10개 팀에 적용한 성과가 아니므로 이력서에는 사용하지 않습니다.

## 본인 소유 범위

- 사용자 요청을 해석하고 여러 에이전트의 실행을 제어하는 오케스트레이터
- A2A 프로토콜 기반 에이전트 간 인터페이스 계약
- RP 오케스트레이션 레이어 전체
- AIAP execution runtime core
- AIAP session service
- AIAP SSE endpoint

하위 에이전트의 도메인 로직은 각 분야의 MLE가 개발했습니다. AIAP 전체는 팀 프로젝트이며 본인이 전체를 설계했다고 표현하지 않습니다.

## Agent 제어

### Constrained orchestration

- 사용자 의도 해석과 도구 파라미터 생성은 LLM에 맡깁니다.
- 순서 의존성이 있는 tool chain과 필수 도구 호출은 코드로 강제합니다.
- 사용자 요청과 이벤트 흐름에 따라 필수 도구를 실행 컨텍스트에 기록합니다.
- LLM이 필수 도구를 호출하지 않으면 다시 호출하도록 강제합니다.
- 실행 컨텍스트의 상태에 따라 다음 action을 지정합니다.

관련 용어:

- constrained orchestration
- programmatic enforcement
- runtime guardrails
- state-aware prompt augmentation

### ID guardrail

- 긴 UUID를 모델에 그대로 노출할 때 잘못된 ID 생성과 참조가 발생했습니다.
- UUID를 실행 컨텍스트 범위의 짧은 alias로 변환합니다.
- 원본 ID와의 매핑 및 alias 충돌 검사를 적용합니다.
- 이력서 표현: `context-scoped ID aliasing`

### Multimodal context engineering

- 이미지와 파일 전체를 대화 컨텍스트에 반복해서 포함하지 않습니다.
- ID로 참조하고 실제 데이터가 필요한 시점에만 불러옵니다.
- 이력서 표현: `필요할 때만 불러오는 lazy hydration`
- 목적: 멀티모달 컨텍스트의 크기 제어

## 비동기 요청과 SSE

- 하위 에이전트는 동기식 A2A request-response로 호출합니다.
- Python I/O는 async이지만 workflow 관점에서는 응답을 기다리는 동기 호출입니다.
- 클라이언트 요청은 `202`와 session/turn ID를 먼저 반환합니다.
- 전체 대화 턴은 클라이언트 연결과 분리해 background task에서 실행합니다.
- 실행 상태와 중간 결과를 저장합니다.
- 최초 SSE 연결은 저장된 현재 턴 상태를 구성한 뒤 live stream을 구독합니다.
- 재연결 시 `Last-Event-ID` 이후의 Redis Stream 이벤트를 replay합니다.
- 완료된 턴은 저장된 최종 상태와 결과를 반환합니다.
- 현재 구조는 클라이언트 연결 단절 후 결과 수신을 복구합니다.
- 서버 프로세스 종료 후 중단 지점부터 작업을 재개하는 durable execution은 아닙니다.

## 장애 대응

- 외부 LLM 호출에 retry, circuit breaker, provider fallback을 적용했습니다.
- Circuit breaker 상태를 service, model, API key 단위로 관리합니다.
- 목적은 특정 provider의 장애가 서비스 장애로 이어지지 않도록 하는 것입니다.
- API key 단위 격리로 개별 key의 quota 초과에 대응합니다.
- 하위 에이전트의 오류 케이스별로 응답을 정의했습니다.
- 사용할 수 없는 기능과 제한 사항을 안내하는 graceful degradation을 적용했습니다.
- `표준 오류 응답`이라는 표현은 외부 표준으로 오해할 수 있어 사용하지 않습니다.

## Evaluation

- 메인 에이전트의 trajectory와 latency를 주요 품질 지표로 사용했습니다.
- Production trace와 기능 요구사항을 바탕으로 기능과 사용자 의도별 coverage matrix를 설계했습니다.
- 도구 호출 여부, 순서, 파라미터, 응답 결과, 멀티턴 흐름을 평가합니다.
- 기능과 사용자 의도별 85개 시나리오의 trajectory regression suite를 구축했습니다.
- 코드 변경에 따른 behavioral regression을 탐지합니다.
- Production trace sample에서 운영 응답의 94%가 품질 기준을 충족했습니다.
- 운영 발화의 52%가 동사 없는 짧은 키워드였고, 기존 evaluation의 표현 coverage에서 누락된 것을 발견했습니다.
- 52% coverage gap 발견은 서비스 결과가 아니라 evaluation 개선 사례로 분류합니다.
- Offline CI와 online sampling evaluation pipeline은 다른 팀원이 담당합니다.

Evaluation으로 발견하거나 방지한 사례:

- 긴 UUID가 tool parameter에 포함될 때 발생하는 잘못된 ID 생성 및 참조
- 멀티턴 상태에 따라 필요한 지시를 동적으로 구성하는 state-aware prompt augmentation
- 짧은 후속 조건에서 재검색을 누락하는 비결정적 동작
- 빈 응답, 무결과 회피성 거절, 중복 렌더링

## AIAP 확장

- RP에서 구현하고 검증한 Agent 아키텍처를 공통 플랫폼으로 확장하고 있습니다.
- 본인 담당: execution runtime core, session service, SSE endpoint
- Agent 실행 엔진이 특정 framework에 종속되지 않도록 runtime core와 ADK 연동의 책임과 관심사를 분리했습니다.
- ADK는 adapter를 통해 호출합니다.
- ADK event에 직접 결합되어 있던 실행 엔진을 분리하기 위해 SDK-agnostic canonical Engine Event를 정의했습니다.
- ADK event를 canonical event model로 변환하는 adapter를 구현했습니다.
- Runtime의 상태 관리, 정책 검증, observability는 canonical event contract만 사용하도록 구성해서 SDK별 차이를 adapter 내부로 격리했습니다.
- Multi-tenant API는 전체적으로 설계·개발 중입니다.
- 멀티테넌시의 세부 진행 상황은 이력서에 넣지 않습니다.

현재 구현된 멀티테넌시 기반:

- Tenant 등록과 API key 인증
- Gateway의 tenant 식별과 요청 컨텍스트 전파
- Tenant별 profile과 capability/data binding
- Execution runtime의 tenant-aware request context와 idempotency 계약

아직 연결 중인 영역:

- Session 저장소와 Redis Stream의 tenant 격리
- 하위 A2A 호출의 tenant 인증 및 컨텍스트 전파
- Tenant별 quota, metric, cost ledger
- Tenant profile 기반 runtime 조립

위 상세는 면접 대비용이며 이력서 본문에는 사용하지 않습니다.

## 장시간 하위 Agent 실행 확장

- RP는 트래픽 상황에 맞게 하위 에이전트의 동기식 A2A 호출을 유지합니다.
- AIAP에서는 callback과 reconciliation을 결합한 비동기 job 실행 계약을 구현 중입니다.
- Callback 유실이나 agent 종료로 완료 신호가 오지 않는 경우 reconciliation으로 상태를 확인합니다.
- Retry 불가능한 작업은 fast fail하고, 상태가 불확실하면 UNKNOWN으로 두고 재조회합니다.
- Callback 중복과 지연 도착은 멱등적인 상태 전이로 제어합니다.
- 아직 구현 중이므로 완료된 성과로 표현하지 않습니다.

## 결과

확정:

- 멀티에이전트 기반 AI 인테리어 비서를 3D방꾸미기 실서비스에 적용하고 운영했습니다.
- Production trace sample의 94%가 품질 기준을 충족했습니다.
- 기능과 사용자 의도별 85개 시나리오의 trajectory regression suite를 구축했습니다.
- Execution runtime을 RP 실행 경로에서 검증했습니다.

추가 확인 필요:

- Production TTFT p50, p95
- Production end-to-end latency p50, p95
- 요청 완료율, error, timeout, abort 비율
- SSE reconnect와 event replay 성공률
- Provider fallback 성공률
- 상품 클릭, 저장, 3D 배치, Image-to-3D, 반복 사용 지표

## Claim 경계

- `prototype`이라고 표현하지 않습니다. RP는 실서비스입니다.
- `Chat`을 대표 명칭으로 사용하지 않습니다.
- RP는 `3D방꾸미기` 또는 `Room Planner`로 표현합니다.
- 서버 작업 재개 또는 durable execution을 현재 RP 기능으로 주장하지 않습니다.
- DAG planning worker를 완료된 구현으로 주장하지 않습니다.
- AIAP 전체 설계를 단독 소유했다고 표현하지 않습니다.
- 일 1,000턴, peak 5 RPM은 규모 지표로 사용하지 않습니다.
