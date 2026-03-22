# [Self] XR/ Juan Jeong
- Status: Peer Review
- Manager: Jinsik Kim
- Peer Reviewers: Hyowon Ha, Serval Kim, Junhyung Kwak, Lila Han, Sophie Park, Seyoung Jang
- Last updated: 2024-01-05

## Achievement

### Achievement #1: pocketroom-api 설계 및 개발 '23.09 ~ '23.11
포켓룸을 구성하는 전반적인 애플리케이션 아키텍처 설계하고, pocketroom-api를 설계 및 구현했습니다. pocketroom-bff에 대해 직접 개발하지는 않았으나 설계, 인프라 세팅에 직,간접적으로 관여했습니다.
- pocketroom-api 설계 및 개발 (포켓룸 Backend Domain Design init PR)
  - kotlin, spring, webflux
  - 모듈별로 나누어 작은 범위에 집중해서 빠르게 개발할 수 있도록 헥사고날 구조 적용
  - test coverage 약 69.8% (새로 추가된 코드 기준, sonarcloud link)
- api, bff APM & dashboard 생성
  - 파드 레벨의 cpu, memory 사용량과 각 서비스 요청 상태를 한눈에 볼 수 있도록 구성
  - service metric, usage metric(per API)
- 빠른 개발을 위해 인하우스 서비스 도입 (PRS, Watchcat)

### Achievement #2: AR Discovery feature Impl '23.07 ~ '23.08
[simple] AR Discovery feature (BE)
- [XR-797] availability API 헥사고날 구조로 리팩토링 및 검색팀 제공 major PR, PR
- [XR-796] discovery API 구현 major PR
- [XR-816] discovery log 추가 major PR

### Achievement #3: Model Metadata Impl '23.09 ~ '23.10
XR 서비스 메타데이터 생성 모듈
- [XR-846] AR, 포켓룸 등 XR 애플리케이션 서비스 데이터를 생성하기 위해 필요한 metadata 모듈을 설계 및 일부 구현 major PR
  - 추후 3D 모델을 사용하는 서비스에 공통으로 적용할 시스템

### Achievement #4: AR service launch '23.11
- [XR-1053] 진입 ABT, Discovery feature 제거후 런칭 major PR
- 참고: 2024-01-01 1주일 기준 관련 통계

| AR이 제공되는 PDP 진입 유저 수 | AR 사용 여부 | 총 유저 수 (유저 비율) | 구매자 수 (유저수 대비 구매자 비율) |
|---|---|---|---|
| 138561 | 미사용 | 130476 (94%) | 27330 (20.9%) |
| | 사용 | 8085 (6%) | 2881 (35.6%) |

## Product & Eng Excellence

### Product Excellence
- 모델 업로드 및 관리: 서비스 품질 유지를 위한 지속적인 3D 모델 업로드 및 관리
  - 서비스 상품에 대해 원본 3D 모델을 아카이브하고, 각 서비스에 맞게 모델 최적화(AR; LoD & draco 압축, 포켓룸; ktx, draco, mesh-simplify)를 진행한 다음 서비스 메타데이터를 생성하는 작업으로, 자동화를 위한 작업이 부분적으로 구현되었지만 아직 개발자 리소스가 필요한 단계임
  - 참고: 모델 하나당 processing time 5 ~ 30초 가량 소요되며, 모델링 기준 검수를 포함하여 한 회차 작업 시간은 1.5d로 산정
  - AR: 신규 1955개, 6회
  - Pocketroom: 신규 5713개, 5회
  - 지라카드, 구글 시트 활용한 프로세스 요청 관리 도입
- 구글시트, 쿼리 및 스크립트를 통한 커머스 정보 연계
  - 커머스 카테고리로부터 포켓룸 카테고리를 생성하고 관리할 수 있는 구조와 스크립트 구현
- 3D 모델 생산 견적 과정 효율화

### Eng Excellence
- Model processor 개선
  - [XR-1124] Mesh simplification exp & apply
    - AR, Pocketroom 렌더링에 적합한 Mesh simplify method & config 실험
    - tri 기준 ~90% simplify(30K -> 3K)
    - GPU latency 약 20% 감소 (8.66ms -> 6.74ms)
    - 포켓룸 로딩 시간 약 17% 감소 (6s -> 5s)
  - [XR-900] 썸네일 촬영 기능 추가
  - 포켓룸 최적화 config 실험 및 추가
- [XR-843] AR 백엔드 코드 리팩토링: 헥사고날 구조 적용으로 모듈 재사용성 향상 major PR
- [XR-829] XR client, backend repository 일원화 major PR
  - 레포지토리 일원화를 통한 일관성, 관리 용이성 향상
- [XR-782] common proto 리팩토링: major PR - 애플리케이션마다 중복 관리되고 있는 gRPC proto를 통합하여 유지 보수성과 재사용성 향상
- [XR-830] sonarcloud setting: major PR - gradle multimodule 케이스 대응: jacoco-report-aggregation 패키지 이용
- gradle 빌드 최적화 major PR
- 집퓨젼 배포 과정에 도움: major PR
- ar-products-bff 500 에러 대응 - 인프라 엔지니어분들과 원인 분석 후 Gateway timeout issue로 간주하고 application tcp timeout을 낮게 조정하여 대응 PR
- inhouse service bug report & fix
  - API GW session2token bug report
  - PRS SDK bug report & fix; SC-478, SC-477
  - Watchcat preflight CORS setting bug report; COREPL-1457
- AR, Pocketroom slo/sli 작성 및 담당
- spring boot 3.2 migration 준비 - 사전 조사를 통해 armeria가 spring boot 3.2 지원 후 migration 진행하도록 계획할 수 있었고, todo list를 작성함

## Stats
- 91 PRs (25 XS, 13 S, 12 M, 26 L, 9 XL, 6 XXL), 373 Commits (164 XS, 70 S, 58 M, 65 L, 12 XL, 4 XXL), 30,083 LoC/PR, 60,651 LoC/Commit
- 47 Reviews, 22.78 Average Response Time

## Teamwork
- Teamwork & Citizenship
  - 팀워크: SWE (TL) 세영님 온보딩 지원 - BE 코드 구조, kotlin, gradle multimodule, github workflow 등 리뷰 지원
  - 시티즌쉽: 채용 지원, 개발자 인터뷰어로 8명 PS 진행
