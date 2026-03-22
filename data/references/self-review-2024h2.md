# [Self] XR/ Juan Jeong

- Status: Draft > Peer Review
- Manager: Kangwon Lee
- Last updated: 2025-01-06

## Overview

백엔드 리더로서 Panorama AR 서비스의 백엔드 설계와 구축을 주도하며, 부족한 인력 상황에서 R&D 등 타 직군 엔지니어들이 백엔드 구현에 참여할 수 있도록 Cross-Functional Collaboration을 이끌었습니다. 이를 통해 팀원들의 역량을 효과적으로 융합하고 서비스를 성공적으로 런칭했으며, 2024년 12월 기준, 매일 약 300건의 방이 3D 공간으로 스캔되어 인테리어 설계에 활용되고 있습니다.

풀스택 엔지니어로서, 3D 방 꾸미기 서비스 개발에 참여하여 2024년 6월 3,863 WAU에서 2024년 12월 27,194 WAU까지 6개월간 704%의 성장을 달성하며, Strive for Impact를 실현했습니다.

또한, Digital Asset Management(DAM) 프로젝트를 기술 리서치부터 풀스택 구현까지 주도하며, XR팀의 핵심 자산인 3D Model 수급 플랫폼을 구축했습니다. 2024년 12월 기준, 약 23,000개의 3D 가구를 AR, PAR, 3D 방 꾸미기 서비스에 최적화된 형태로 제공하고 있습니다.

## Achievement

### 3D방꾸미기: Full-stack Engineer

- **Project timeline:** 2024.09 - 2024.12 (45%)
- 서비스 기능 구현: 고품질 렌더링과 애니메이션, 댓글, 이벤트, 안드로이드 지원 등
- 비동기 프로세스 및 백엔드 구현 - 빠른 PoC를 위한 polling 구현후 서비스 안정화를 위해 Kafka를 이용해 고도화
- 안정화 및 최적화:
  - 병렬 처리를 통해 고품질 렌더링 성능 최적화
  - Draco compression library 부재로 인한 렌더링 오류를 분석하고 해결
  - 아이템 배치를 포함한 주요 api latency 200ms -> 80ms로 약 60% 개선, api payload를 5MB -> 2MB로 약 54% 개선
  - 3D Model 최적화를 통해 draw call 3000개 -> 20개로 약 99% 개선
  - 최적화를 통해 초기 로드 시간을 10초 이상 -> 2.5초 이내로 개선
- 유틸리티 설계 및 자동화: Feature flag 도입, FE 유틸리티 개발, 이벤트 기능 자동화
- **Impact:**
  - 트래픽이 10.2배(2.3TPS->23.5TPS) 증가함에도 오류를 57% 감소시키며 Availability를 99.95%로 증가
  - 평균 세션 시간이 2024년 6월 21분 -> 2024년 12월 35.25분으로 약 68% 증가
  - 스틸샷과 애니메이션 렌더링 속도 대폭 단축 (각각 60초 -> 20초, 20분 -> 3분으로 83%, 85% 단축)

### Panorama AR 개발: Backend lead

- **Project timeline:** 2024.07 - 2024.11 (30%)
- Polling 시스템 설계 및 구현: 한정된 리소스 환경에서도 안정적으로 작동할 수 있는 비동기 프로세싱 시스템 설계, 구현
- PAR 서비스를 안정적으로 지원하기 위한 취약점 대비 설계와 최적화
- **Difficulty:** Kafka 대신 Polling 기반 서비스 설계를 통해, 아키텍처 복잡도를 줄이고 런칭 성공
- **Impact:** 2024년 12월 기준 매일 약 300건의 방이 3D 공간으로 스캔

### Digital Asset Management(DAM) 시스템 최적화 및 효율화

- **Project timeline:** 2024.08 - 2024.10 (15%)
- 3D 모델 업로드 파이프라인 재구성: 인적 자원 50% 절감
- 안정성 강화: 타임아웃 로직 구현
- 리소스 최적화: Bustable CPU 리소스와 High Memory 설정 적용
- 모델 압축: 평균 파일 크기 33.5%(700KB -> 500KB) 감소, 평균 GPU 메모리 사용량 31.6%(1,316KB -> 1,000KB) 감소

### AR Size Box 기능 설계 및 구현

- **Project timeline:** 2024.10 - 2024.12 (10%)
- 3D 모델 부족 문제를 해소하기 위해 Size Box를 설계하여 AR 기능 활용도를 극대화
- 웹뷰 기반 AR 설계 제안
- **Impact:** AR Size Box 도입으로 AR 기능 지원 상품이 2,210개에서 약 231,000개로 증가

## Product & Engineering Excellence

- FIW: 공통 배포 도구 개발 및 공유, 로컬 테스트 환경 구현, 3D 모델 업로드 파이프라인 재구성, Fetch 최적화 (latency 200ms -> 80ms, payload 5MB -> 2MB), 3D방꾸미기 OWAP 브라우저 내 동작 정리 및 공유, 비회원 대응, SLO/Monitoring 추가
- AI Styling 구현: FE, BE 설계 및 ML 아키텍처 설계, 챌린지 참여수 1349명(목표 달성률 168%), 콘텐츠 수 1818개(목표 달성률 181%)
- Interior curator RAG 프로토타이핑: 향후 LLM application에 활용될 인프라 마련
- 2025년 플래닝: 기술적 이슈를 사전에 분석 및 정리하여 팀과 공유

## Stats

- 159 PRs (81 XS, 22 S, 42 M, 8 L, 3 XL, 3 XXL), 407 Commits, 32,163 LoC(PR), 59,398 LoC(Commit)
- 167 Reviews, 30 Comments, 5.54 Average Response Time

## Teamwork

- 효과적인 인적 리소스 최적화 및 공유를 통해 2024년 12월 Openhouse에 2024 Q3 FIW 대표 사례로 소개되었으며, 2024 Q3 FIW Top Contributor로 선정
- 공통 배포 도구 개발 및 공유
- Reality team Supports: BE, FE, 3D Model 등 다양한 업무에 대한 지원
