# [Self] Space AI Product/Engineering/ Juan Jeong 2025

- Status: Draft > Peer Review
- Manager: Seyoung Jang
- Last updated: 2026-01-12

## Overview

### Difficulty

GPT-4o를 활용한 글로벌 AI 서비스 Ohouse AI 개발 과정에서는 1개월이라는 단기 일정 속에서 복잡하고 높은 기술적 난이도를 가진 과제들을 해결했습니다. 특히, OpenAI, Gemini 등 외부 LLM API의 불안정성과 높은 지연시간 문제를 극복하고 서비스 가용성을 확보하는 것이 핵심 과제였습니다. 비동기 Worker Pool & Queue 시스템, Circuit Breaker, Graceful Shutdown과 같은 다양한 패턴을 아키텍처 레벨에서 구축해야 했습니다. 또한, Apple/Google의 상이한 IAP 라이프사이클을 단일 도메인으로 통합하는 결제 상태 머신 설계와, Image-to-3D, Commerce API, DAM, AR, RP를 연결하는 End-to-End 통합 파이프라인 구축 등 다양한 시스템 간의 유기적인 통합을 이루어내야 하는 설계를 진행했습니다.

### Leadership

구독, 제휴 상품과 추천 등 Ohouse AI 서비스의 핵심 수익원 및 성장 동력에 대한 DRI로서 프로젝트를 이끌었습니다. LLM Provider Fallback Strategy와 Composite Pattern 기반 인증 통합 등 백엔드 아키텍처를 설계하고, Langgraph 기반 워커 마이그레이션을 추진하여 시스템의 확장성을 확보했습니다. AIL팀, 인프라팀, DA 등 Cross-Functional 팀과의 기술적 협업을 리드하여 병목 지점을 선제적으로 해결했습니다. 신규 입사자 및 인턴에 대한 멘토링과 코드 리뷰를 통해 팀 전체의 엔지니어링 역량 향상과 개발 문화 정착에 기여했습니다.

### Impact

애플과 구글 앱스토어를 모두 수용하는 구독 모델과 Amazon Affiliate 연동을 성공적으로 런칭하여 실제 매출 발생 기반을 마련했고, 제휴 상품 클릭 기준 CVR 10.5%라는 높은 비즈니스 잠재력을 증명했습니다. Room Planner의 GMV를 전년 대비 6배(총 8.6억 원) 성장시켰으며, D+1 리텐션 13% 등 핵심 UX 지표를 개선하며 비즈니스 성장에 크게 기여했습니다. Image-to-3D 자동화 파이프라인 구축을 통해 3D 모델 생산량을 기존 대비 1,176% 증가시키고 제작 비용을 88% 절감하는 성과를 인정받아 Eng Award를 수상했습니다. AI를 활용해 릴리즈 노트 자동 생성 스크립트와 일일 데이터 분석 자동화 개발로 AI Award를 수상했습니다.

## Core Values

### Ohouship

- 제품 성공을 위한 폭넓은 오너십: BE 엔지니어임에도 FE, ML 등의 엔지니어링 경계없이 다양한 방면에서 기여
- AI Native를 통한 업무 혁신 (feat. AI Award): AI를 생산성 도구로 활용, 일일 데이터 분석 및 릴리즈 노트 작성을 자동화, AI Award 수상
- Cross-functional 협업
- 동료 성장 지원: 신규 입사자 및 인턴(Andy, Roo, Lucas, Ssol, Kuza)에 대한 멘토링

### Striving for Excellence

- 3D 애셋 생산 E2E 파이프라인 완성 (feat. Eng Award): 생산량 1,176% 향상, 비용 88% 절감
- 데이터 기반의 비즈니스 임팩트: Room Planner 연간 GMV 8.6억(전년 대비 6배) 달성

### Aim Higher and Find a Way

- Image-to-3D 자동화 파이프라인 설계 및 구축
- 정답이 없는 상황에서의 트레이드 오프 핸들링 & 지속적인 고도화

## Achievements

### 1. Ohouse AI 글로벌 서비스 런칭

평가 기간의 약 30%를 해당 프로젝트에 사용 (2025.04 ~ 2025.07)

**Major Tasks:** A~H (초고속 런칭 설계, 글로벌 인프라/인증, 비즈니스 로직 설계, Observability, i18n, LLMOps, 고성능 LLM 처리 시스템, 보안/인프라 최적화)

#### Difficulty

- 1개월이라는 단기 일정 속에서 복잡하고 높은 기술적 난이도를 가진 과제들을 해결
- OpenAI, Gemini 등 외부 LLM API의 불안정성과 높은 지연시간 문제 극복
- 비동기 Worker Pool & Queue 시스템, Circuit Breaker, Graceful Shutdown 등 아키텍처 레벨 패턴 구축

#### Leadership

- 글로벌 서비스 런칭을 위한 백엔드 아키텍처 설계 리드
- Cross-Functional 팀과의 기술적 협업 리드

#### Impact

- 270여개국에 서비스되는 AI 글로벌 서비스를 1개월만에 성공적으로 런칭
- 범용 넛지 기능과 Remote config 구현
- 약 2,200건의 피드백 확보

### 2. Ohouse AI Backend Lead: 글로벌 수익화 다각화

평가 기간의 약 40% (2025.07 ~ 2025.12)

**Major Tasks:** A~E (구독 서비스 E2E, 글로벌 외부 판매 상품 추천, Langgraph 워커 마이그레이션, Explorer Feed DRI, 시스템 신뢰성 고도화)

#### Difficulty

- Apple/Google의 상이한 IAP 라이프사이클을 단일 도메인으로 통합하는 결제 상태 머신 설계
- LLM Provider Fallback Strategy 및 Circuit Breaker 패턴 구현

#### Leadership

- 구독, 제휴 상품과 추천 등 핵심 수익원 및 성장 동력에 대한 DRI
- Langgraph 기반 워커 마이그레이션 추진

#### Impact

- 구독 모델과 Amazon Affiliate 연동으로 CVR 10.5% 달성
- Fallback/Circuit Breaker로 서비스 가용성 확보
- Langgraph 기반 확장 가능한 아키텍처

### 3. Image-to-3D 자동화 및 통합 파이프라인 구축

평가 기간의 약 25% (2025.02 ~ 2026.04)

**Major Tasks:** A~F (AI 기반 자동화 서비스 신규 개발, 카테고리 확장, 3D 에셋 자동 경량화, 비동기 워커 아키텍처, DAM/AR/RP 통합, Eng Awards 수상)

#### Difficulty

- Image-to-3D, Commerce API, DAM, AR, RP를 연결하는 End-to-End 통합 파이프라인 구축
- 다양한 시스템 간의 유기적인 통합 설계

#### Leadership

- 자동화 파이프라인 설계 및 구축 리드
- AIL팀, 인프라팀, DA 등과의 Cross-Functional 협업 리드

#### Impact

- 리드타임 90% 이상 단축
- 생산량 1,176% 증가 (68개 → 800개)
- 비용 88% 절감
- 45개 신규 카테고리 확보
- Eng Award 수상

### 4. Room Planner UX 고도화를 통한 GMV 600% 성장

평가 기간의 약 30% (2025.01 ~ 2025.3)

**Major Tasks:** A~B (데이터 기반 UX 고도화/렌더링 최적화, 이벤트/챌린지 운영)

#### Difficulty

- 데이터 기반 UX 개선과 렌더링 최적화의 균형
- 이벤트/챌린지 운영을 통한 사용자 참여 극대화

#### Leadership

- UX 고도화 및 렌더링 최적화 프로젝트 리드
- 이벤트/챌린지 운영 기획 및 실행

#### Impact

- 연간 총 GMV 6배(8.6억 원) 성장
- PDP 클릭 수 70% 상승
- 상품 교체 7배 증가
- 전체보기 250% 증가
- 1일 이내 구매율 29.4% 상향

## Product & Engineering Excellence

### 1. 비즈니스 가치 창출을 위한 Product Idea 제안 및 Prototyping

- UX 개선 제안 및 설계 (BoundBox & Ohouse AI, AR Viewer, SNS 로그인 등)
- 기술 제안 (Reference Mapping, iOS Native AR Viewer, SSE 도입, AI Agent Platform 등)
- 커머스 수익 모델 최적화
- 대규모 이벤트 대비 설계 제안

### 2. 기술적 신뢰도 및 엔지니어링 품질 고도화

- Strategy Pattern으로 LLM Provider 교체 가능 구조
- 보안 강화 (AWS Credential 제거, IAM Role 적용)
- AI 기반 테스트 문화 전파 (JMeter 부하 테스트, Unit Test 가이드)

### 3. 인프라 최적화 및 운영 가시성(Observability) 확보

- Datadog Custom Metric, APM 모니터링
- MongoDB Index 최적화
- AI를 이용한 릴리즈 노트 자동 생성, 배포 스크립트 개선

### 4. 조직 재편성 기여 및 데이터 중심 문화 확산

- XR 팀 재편성 R&R 설정
- 데이터 분석 자동화 및 AI Awards 수상

### 5. AI Native: AI 기반 엔지니어링 및 Productivity 개선

- Space AI AI Native Plan팀 MVP 선정
- 일일 배포를 위한 E2E 자동화 파이프라인 구축
- AI 기반 테스트 설계 및 품질 고도화
- 배포 최적화

## Stats

- 6개 레포지토리 기여
- 304 PRs, 754 Commits, 86,137 LoC(PR), 136,273 LoC(Commit)
- 371 Reviews, 127 Comments, 3.26 Average Response Time

## Teamworks

### Teamwork

- 신규 입사자 및 동료 멘토링 (Andy, Roo, Ssol, Kuza 등)
- Cross-functional 협업 및 병목 해소 (n8n 워크플로우, 데이터 스크립트, 어드민 지원 → AI Award 수상)
- 조직의 빈틈을 메우는 유연한 역할 수행
- 적극적인 이슈 해결 및 트러블슈팅

### Citizenship

- 엔지니어링 생산성 개선 및 공통 도구 유지보수 (release-notes.sh, deployer.sh 등)
- 조직적 책임감 기반의 운영 및 장애 대응
- 전사 지식 자산화 및 기술 브랜딩 참여 (채용브랜딩 서면 인터뷰)
- 우수 인재 영입을 위한 채용 프로세스 기여 (7회 PS Interview, 인턴 면접 문제 리스트)

## Appendix

1. ai-interior server 초기 설계
2. Ohouse AI Auth (a~f)
3. Ohouse AI Nudge (a~e)
4. Ohouse AI Feature flag (a~b)
5. Ohouse AI Feedback Sheet
6. Ohouse AI Admin Dashboard (a~b)
7. #RP-301
8. Ohouse AI LLM Prompt Config (a~b)
9. Ohouse AI Worker (a~e)
10. Set aws s3 role
11. 글로벌 외부 상품 데이터베이스 구축 및 추천 (a~k)
12. Ohouse AI IAP 구독 (a~f)
13. AI Styling 구현
14. ai-interior-worker 고도화 (a~d)
15. Feature entry 개선 논의 (a~b)
16. Explorer Feed (a~e)
17. Paywall 개선 (a~c)
18. BE-ML 엔지니어간 원활한 협업을 위한 구조 논의 (a)
19. Kafka & Worker Monitoring using Datadog Custom Metric
20. LLM API Key Rotation
21. 오늘의집과 OhouseAI 인증 통합 문서
22. Ohouse AI 마케팅 논의
23. 마케팅 이후 Scale in
24. Image-to-3D Automation (a~e)
25. Image-to-3D Optimization (a~b)
26. 3D RoomPlanner Improvements (a~e)
27. AI 기반 테스트 문화 전파 (a~c)
28. Global Launch Strategy for Room Planner
29. Mongo Index Optimization
30. Release Note automation & deployer improvement (a~c)
31. XR 팀 재편성 (a~b)
32. 일일 배포를 위한 E2E 자동화 파이프라인 구축
33. UX 제안 및 설계 (a~c)
34. 기술 제안 및 설계 (a~f)
35. Affiliate issue (a~b)
36. 리브랜딩 이벤트 대비 (a~b)
37. RP 최적화 기여
38. 기타 이슈 논의 (a~c)
39. Tech Sharing - 채용브랜딩 서면 인터뷰
40. 부재한 리소스를 병목없이 해소 (a~b)
41. ai-interior 애플리케이션 환경변수 정리
42. SpaceAI팀 특성에 맞는 인턴 면접 문제 목록 작성 (a~b)
