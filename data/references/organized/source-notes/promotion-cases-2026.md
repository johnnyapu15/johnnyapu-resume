# Promotion Cases 2026

## Purpose
- 최근 프로모션 관점에서 후보자 강점을 5개 사례로 재정리한 문서
- 이력서에는 그대로 복붙하기보다, "왜 이 사람이 다음 레벨인가"를 설명하는 근거 창고로 활용하기 좋음

## Case 1. Product engineer로 역할 확장 및 팀 생산성/품질 향상
- backend에 머무르지 않고 AR client, web 3D, ML 아키텍처, 3D 최적화, LLM provider 설계까지 확장
- FE 3명, BE 1명, ML 3명과 협업하며 온보딩/가이드/업무 분배를 수행
- SpaceAI팀 공수 산정, 프로젝트 후보 리스트 작성, Spring Boot 3 migration 가이드 문서화, 코드 리뷰 가이드, 공통 배포 도구 개선까지 담당
- AI 기반 릴리즈 노트/데이터 분석 자동화로 AI Award 및 데모데이 발표

## Case 2. Ohouse AI 1개월 글로벌 런칭 및 수익화 고도화
- GPT-4o 이미지 기능 강화 시점에 시장 선점이 중요했고, 다수 팀 의존성을 동시에 조율해야 했음
- JWT 기반 인증, 글로벌 인프라 설계 참여, worker pool, circuit breaker, feature flag, remote config, admin dashboard를 함께 구축
- 제한된 리소스에서 일정을 1개월로 단축해 174개국 런칭
- 이후 IAP 상태 머신, Amazon Affiliate E2E 구축, affiliate CVR 10.5%, CAC < LTV 확인 기반 마련

## Case 3. Room Planner 성능 병목 제거
- 초기 로딩 지연을 3D 모델, 데이터 구조, 호출 방식 레벨로 분해해 해결
- LRU cache, LoD 자동 생성, mesh simplification, API 60% 단축, payload 54% 절감
- HPA, graceful termination, 부하 테스트로 안정적 운영 체계 확보

## Case 4. 비동기 worker + 상태 머신으로 장시간 작업 운영 표준화
- API 지연, OOM, rate limit 등으로 동기 처리에 한계가 있는 문제를 공통 운영 모델 문제로 정의
- 초기에는 DB polling으로 빠르게 검증하고, 이후 MQ 전환을 고려한 구조를 설계
- 상태 머신, 재시도, 보상 트랜잭션을 통해 정합성과 UX를 함께 관리
- DAM, PAR, RP, Ohouse AI 등 여러 도메인에서 재사용 가능한 표준 설계로 이어짐

## Case 5. Image-to-3D 자동화로 비즈니스 확장성 확보
- 상품 증가에 따라 수작업 3D 제작이 확장 불가능한 병목이 됨
- AR/RP용 모델 최적화 및 배포 자동화로 운영/개발 리소스 50% 절감
- 이후 외부 3D 생성 API, selection, 검증, 저장까지 자동화해 E2E 파이프라인 구축
- 월 생산량 68 -> 800, 비용 88% 절감, 사업 확장을 가능하게 하는 기술 레버리지 확보

## Why this note is especially useful
- self review보다 "승격 근거" 관점이 강해서, 이력서의 leadership/ownership 문장을 보강할 때 유용함
- 특히 아래 3개 축을 강화해 줌
  - 역할 확장: backend engineer -> product engineer
  - 표준화: 여러 도메인에 재사용 가능한 운영 모델 설계
  - leverage: 자동화/성능 개선이 직접 비즈니스 확장성으로 연결됨
