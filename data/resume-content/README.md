# Resume Content Workspace

이 디렉토리는 이력서 렌더링 코드에 넣기 전, 경험의 사실과 문장 후보를 관리하는 작업 공간입니다.

## 원칙

- `experiences/`에는 분량과 무관하게 경험의 전체 맥락, 본인 소유 범위, 설계 판단, 구현, 결과를 보관합니다.
- `metrics/`에는 출처와 측정 조건을 포함한 지표를 보관합니다. 확인되지 않은 수치는 이력서에 사용하지 않습니다.
- `variants/`에는 지원 직무별로 선택하고 압축한 문장만 둡니다.
- `style-guide.md`에는 합의된 한국어 문체와 용어를 기록합니다.
- 최종 승인 전에는 `data/resume-data.ts`에 반영하지 않습니다.

## 현재 Variant

- `platform`: AI Agent Platform, 공통 runtime, session, streaming 중심
- `ai-backend`: 프로덕션 AI 기능, LLM 제어, 장애 대응, 품질 중심

Production Engineer 버전은 우선순위가 낮아 현재 만들지 않습니다.

## 작업 순서

1. 경험 원본에서 사실과 인과관계를 확정합니다.
2. 필요한 운영·서비스 지표를 채웁니다.
3. Variant별로 강조할 내용을 선택합니다.
4. 일반 이력서 분량에 맞춰 압축합니다.
5. PDF를 확인한 뒤 `resume-data.ts`에 연결합니다.
