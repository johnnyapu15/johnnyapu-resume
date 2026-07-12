# Backend Engineer — AI Systems & Platform

## Summary

AI·3D 서비스를 런칭하고, 분산 시스템과 장시간 비동기 작업을 설계·운영해온 백엔드 엔지니어입니다. 3D방꾸미기에서 상품 검색·이미지 합성·스타일 추천을 제공하는 멀티에이전트 기반 AI 인테리어 비서를 설계·구축하고 운영했습니다. LLM의 비결정성을 통제하기 위한 constrained orchestration과 runtime guardrails를 설계하고, 비동기 처리·SSE streaming·provider 장애 격리를 적용했습니다. 글로벌 AI 서비스 런칭과 수익화, 3D 자동화 파이프라인 구축을 통해 서비스 안정성과 비즈니스 성과를 함께 만들어왔습니다. 3D 에셋 생성 자동화와 AI 활용을 통한 기여를 인정받아 사내 Eng Award와 AI Award를 수상했습니다.

## 1페이지 경력 순서

1. AI Agent Orchestration
2. Ohouse AI
3. 3D방꾸미기 성능·안정성
4. 3D 에셋 자동화
5. AR 경험 개선
6. 기술 리더십

`Panorama AR`는 1페이지에서 제외합니다.

## AI Agent Orchestration

- **AI Agent Orchestration**: 3D방꾸미기의 상품 검색·이미지 합성·스타일 추천 등 다양한 AI 기능을 하나의 흐름으로 통합하는 오케스트레이터를 설계·구축하고 운영했습니다. LLM에는 사용자 의도 해석과 도구 파라미터 생성을 맡기되, 순서 의존성이 있는 tool chain과 필수 도구 호출은 코드로 강제하는 constrained orchestration을 설계했습니다.
- 이미지 합성 등 장시간 AI 작업에서 클라이언트 연결 단절에 대응하기 위해서 요청을 비동기로 처리하고, 상태와 중간 결과를 저장했으며, SSE 재연결 시 Redis Stream 이벤트를 replay해 결과를 이어받을 수 있도록 했습니다.
- 특정 LLM provider의 장애가 서비스 장애로 이어지지 않도록 retry, circuit breaker, provider fallback을 적용했습니다. Circuit breaker 상태를 service·model·API key 단위로 관리해서 문제가 발생한 대상만 차단하고, 개별 key의 quota 초과에도 대응했습니다.
- RP에서 검증한 agent 실행 기능을 framework-agnostic execution runtime과 session service, SSE endpoint 등으로 모듈화해서 AI Agent Platform으로 확장하고 있습니다.
- Production trace sample과 기능 요구사항을 바탕으로 기능과 사용자 의도별 coverage matrix를 설계하고, 도구 호출과 파라미터·응답·멀티턴 흐름을 검증하는 85개 시나리오의 trajectory regression suite를 구축했습니다. 운영 응답의 **94%**가 품질 기준을 충족함을 확인했습니다.

## Ohouse AI

- **Ohouse AI 런칭**: 6주 목표를 **4주로 앞당겨** **170개국** 글로벌 런칭을 완료했습니다. 사용자 요청 API와 장시간 AI 작업을 분리하는 메시지 큐 기반 워커를 구축하고, 오토스케일링·동시성 제한·재시도·장애 격리를 적용해 예측하기 어려운 트래픽을 안정적으로 처리했습니다.
- **Ohouse AI 수익화/고도화**: Apple·Google IAP lifecycle을 하나의 상태머신으로 추상화해서 구독 시스템을 구축하고 결제 정합성을 확보했습니다. Amazon Affiliate 정책을 반영한 RAG 기반 상품 추천으로 **CVR 10.5%**를 달성해 수익 모델을 검증했습니다.
- 특정 LLM provider의 장애가 서비스 장애로 이어지지 않도록 provider fallback과 circuit breaker를 적용했습니다. Spring 기반 LLM framework의 제약을 해소하기 위해 Python·LangGraph 기반으로 재설계해서 AI workflow를 유연하게 확장할 수 있도록 했습니다.

## 공통 경력 문장

### 3D방꾸미기

- **3D방꾸미기 성능·안정성**: API 응답 시간을 **200ms→80ms**로 단축하고 payload를 **54% 절감**했으며, 모델 로딩 시간을 **10초→2.5초**로 줄였습니다. 부하 테스트로 이벤트·챌린지의 트래픽 증가를 사전 검증해 **10.2배 트래픽에서 99.95% 가용성**을 유지했습니다.
- 성능·안정성 개선을 바탕으로 **WAU 704% 성장**과 **연간 GMV 600%(8.6억)** 성장에 기여했습니다.

### 3D 에셋 자동화

**3D 에셋 자동화**: 수작업 3D 제작 파이프라인을 자동화해 월 생산량 **68개→800개**, 비용 **88% 절감**을 달성해 **Eng Award**를 받았습니다. 3D 에셋 최적화 기법을 개선해 GPU 사용량을 **20% 감소**시키고 파일 크기를 **51% 축소**했으며, draw call을 **3,000→20**으로 줄였습니다. 에셋 관리 시스템을 구축해 연간 **40일 이상**의 운영 시간을 절감했습니다.

### AR 경험 개선

**AR 경험 개선**: AR 환경에 LoD 자동 생성을 적용해 3D 모델을 **90% 경량화**했습니다. AR Size Box를 구축해 AR 지원 상품을 **2,210개→231,000개(104배)**로 확대하고 구매 전환율 **1.7배** 향상에 기여했습니다.

### 기술 리더십

**기술 리더십**: 신규 입사자와 FE·ML 엔지니어가 백엔드에 독립적으로 기여할 수 있도록 온보딩과 코드 리뷰를 주도했습니다. 릴리즈 노트와 데이터 분석을 자동화해 팀의 배포 주기를 단축하고 **AI Award**, **AI Native MVP**를 받았습니다.

## 주요 경험 순서

1. AI Agent Orchestration과 Platform 확장
2. Ohouse AI 런칭 및 고도화
3. 3D 서비스 성능 개선 및 에셋 파이프라인 자동화

## Pending

- RP의 production latency와 완료율을 결과에 추가
- PDF 분량 확인 후 경력 문단 추가 압축
