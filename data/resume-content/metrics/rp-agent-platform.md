# RP Agent Platform Metrics

## 확인된 지표

### Production quality

- Source: production trace sample
- Sample: 최근 24시간의 trace 1,000건
- Users: 392
- Sessions: 469
- LLM self-judge 결과: good 94%, bad 4%, 판단 보류 3%
- 실패 37건: 빈 응답 16, 무결과·회피성 거절 16, 중복 렌더링 5

이력서에는 `Production trace sample에서 운영 응답의 94%가 품질 기준을 충족`으로 표현합니다.

### Regression suite

- 기능과 사용자 의도별 85개 시나리오
- Tool 호출, 파라미터, 응답, 멀티턴 trajectory 검증
- 3회 반복 255행 중 기록상 254행 기대 동작 충족
- 1건은 방 추천 artifact 시나리오에서 발생한 turn error, tool 미호출, 빈 응답
- 재측정 전에는 `255/255`를 사용하지 않습니다.
- 이력서에는 `85개 시나리오의 trajectory regression suite`로 표현합니다.

## 확보할 지표

### 성능

- Production TTFT p50, p95
- Production end-to-end latency p50, p95
- 상품 검색, 이미지 합성, 스타일 추천별 latency
- 첫 SSE event 전달 시간

### 안정성

- 요청 완료율
- Error, timeout, abort 비율
- SSE reconnect 및 event replay 성공률
- Retry 복구율
- Provider fallback 성공률
- Circuit breaker 발생과 복구 시간
- 하위 에이전트별 오류율과 timeout 비율

### 서비스

- AI 인테리어 비서 진입률
- 첫 요청 완료율
- 추천 상품 클릭률과 저장률
- 추천 상품 3D 배치율
- 이미지 합성 및 Image-to-3D 실행·완료율
- 반복 사용률과 재방문율
- AI 기능 사용 후 구매 전환율

### 비용과 컨텍스트

- 턴당 입력·출력 token
- 턴당 LLM 비용
- Lazy hydration 적용 전후 context 크기
- Sliding window 적용 전후 token 사용량

## 측정 시 함께 기록할 정보

- 측정 기간
- Production 또는 evaluation 환경
- 표본 수와 분모
- 기능과 요청 범위
- 배포 버전과 model
- 평균이 아닌 p50, p95
- 출시 전후 비교 여부
