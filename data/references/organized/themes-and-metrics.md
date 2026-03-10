# Themes And Metrics

## Repeating themes

### 1. Product engineer로의 역할 확장
- BE에 머무르지 않고 FE, 3D, ML, 운영, 실험 체계까지 직접 메움
- 인력 제약이 큰 상황에서 병목을 직접 해소하는 서술이 반복됨

### 2. 장시간 작업을 안정적으로 운영하는 표준화
- Polling, worker, queue, state machine, retry/fallback, graceful shutdown
- AI inference, 3D asset, rendering 등 긴 작업을 공통 구조로 풀어냄

### 3. 런칭 속도와 장기 확장성의 trade-off 관리
- 빠른 PoC 후 migration 감수
- 이후 provider failover, workflow redesign, observability, auth integration 등으로 고도화

### 4. 성능 최적화가 곧 비즈니스 지표 개선으로 연결됨
- 초기 로딩, API latency, payload, model weight, availability를 줄이고
- WAU, GMV, conversion, retention, session time 등 제품 지표로 연결됨

### 5. 자동화로 확장성 자체를 바꿈
- DAM/3D/Image-to-3D 파이프라인 자동화
- 운영 시간 절감, 생산량 증가, 비용 절감, 카테고리 확장으로 이어짐

## Reusable metrics

### Ohouse AI / monetization
- 6주 데드라인을 4주로 단축
- 170개국 이상 글로벌 런칭
- affiliate CVR 10.5%
- 집중 마케팅 전 CAC < LTV 확인 기반 마련
- 약 2,200건 사용자 피드백 수집 체계

### Room Planner / 3D service
- WAU 704% 성장
- 연간 GMV 600%, 8.6억
- traffic 10.2배에서도 99.95% availability
- API latency 200ms -> 80ms
- payload 5MB -> 2MB 수준, 약 54% 절감
- model lightweighting 90%
- initial load 10s+ -> 2.5s 이내

### Image-to-3D / automation
- 월 생산량 68 -> 800
- 생산량 1,176% 향상
- 비용 88% 절감
- 리드타임 90% 이상 단축
- 운영/개발 리소스 50% 절감
- 45개 신규 카테고리 확보

### DAM / platform / productivity
- engineer resource 40 days/year 절감
- 파이프라인 개선으로 인적 자원 50% 절감
- GPU 20% 감소
- file size 51% 감소

## Wording guidance

### Strong resume-friendly framing
- "외부 의존성이 큰 AI/3D 시스템을 빠르게 런칭하고 안정화했다"
- "장시간 작업을 안정적으로 처리하는 운영 모델을 표준화했다"
- "수작업 병목을 자동화로 전환해 비즈니스 확장성을 열었다"
- "성능 최적화를 제품 지표와 수익 지표 개선으로 연결했다"

### Terms that need translation for external readers
- `LLM Provider Strategy` -> 공급사 장애 시 우회 가능한 연동 구조
- `Langgraph migration` -> 복잡한 AI 작업 흐름을 확장 가능한 구조로 재설계
- `RAG` -> 정책 제약 안에서 실시간 추천을 가능하게 한 데이터 검색/추천 구조
- `HPA + graceful termination` -> 급격한 부하 변화에도 작업 유실 없이 안정적으로 확장/축소되는 운영 구조
