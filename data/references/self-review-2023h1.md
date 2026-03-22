# [Self] XR/ Juan Jeong

- **Status:** Peer Review
- **Manager:** Jinsik Kim
- **Peer Reviewers:** Lila Han, Gray Jung, Hyowon Ha, Jae Surh, Serval Kim, Ringo Park
- **Last updated:** 2023-07-09

## Achievement

### Achievement #1: Replace feature 설계 및 개발

**[simple] AR Replace feature (BE)**

- **[XR-492]** backend api 설계 및 개발: 특정 카테고리에 해당하는 상품 정보를 검색하고, ar 서비스에 필요한 정보를 구성하여 내려주는 api를 개발함 (Major PR)
  - replace api: 검색 & 상품 목록 반환
  - aggregated product api: 기존 ohs-web-client로부터 받아오던 /productions/:id/selling 정보를 대체하기 위해, 커머스 정보를 덤프하고 ar 정보와 조합하여 aggregated product를 반환하는 api 개발 (기존 약 300ms -> 50ms)
- **[XR-618]** 많은 3D 모델을 빠르게 서빙하기 위해 lod 적용 (PR)
- **[XR-695]** 어드민 생성 - Replace 기능을 제공하는 카테고리의 주요 속성값을 관리하는 어드민 생성 (Major PR)
- **[XR-661]** Replace 기능을 위한 로그 추가 (PR)
- 속성 기반 검색 기능 설계 - 기존 api들은 옵션 단위로 반환하는데 최적화되어 있지 않아 관련 이슈를 정리, 조율 진행함

**[simple] ar-api에 backoffice-auth를 통한 인가 추가**

- **[XR-680]** ar-api에 인가 처리 과정 추가 (Major PR)
- 어드민에서 접근하는 api에 적용함

### Achievement #2: 커머스 데이터 동기화

**[simple] AR 서비스 내 커머스 데이터 서빙**

- **[XR-470]** spring-batch를 활용한 커머스 데이터 배치 애플리케이션을 개발함 (Major PR)

### Achievement #3: non-lidar 확장 지원

**[simple] AR 서비스 대상 구분 (Lidar / Non-lidar)**

- **[XR-403]** xpc 실험 지원 (Major PR)

### Achievement #4: CTR 증가 실험 지원

**[simple] AR Viewer**

- **[XR-523]** google의 model viewer를 이용해 오늘의집 PDP 화면에서 3D 모델을 볼 수 있는 뷰어 제공 (PR)
- CTR 7% 증가

### Achievement #5: model processor 구축 (로컬에서 배치 형태로 적용중)

**[simple] Model Metadata & Model Processor**

- **[XR-545]** branch
- LOD 자동 생성 및 경량화 옵션 설정이 가능함
- DAM FE가 아직 미구축되었기에 미배포 & 로컬에서 배치 형태로 모델 처리 및 업로드 중

## Product & Eng Excellence

- 모델 경량화 실험 및 적용
  - Draco mesh compression test & apply: mesh 압축을 통해 평균 파일 사이즈 51% 감소
  - [WIP] Basis universal supercompress: 피델리티 이슈로 미반영
- 코드 리팩토링 (Backend & Client)
  - **[simple]** AR Backend 멀티 모듈 적용 - **[XR-634]** (Major PR)
  - backend-side package refactoring - **[XR-711]** (Major PR)
  - client-side: model manager, network manager refactoring & improvements - **[XR-607]** (Major PR)
- backend unittest
  - replacement feature unittest commit
  - authorizer unittest commit
- QA 과정에서 발견되지 않은 버그 리포팅
  - Unity내 Event handler가 즉발해서 야기되는 이슈 [github-issue] Major PR
  - Replacement feature bug report - 추후 재발되는 것을 개발단에서 최소화하기 위해 디버그 유틸리티를 제안 및 적용함 (Model, Network Manager 시각화 기능 추가 Major PR)

## Stats

- 42 PRs (4 XS, 4 S, 12 M, 12 L, 6 XL, 4 XXL), 173 Commits (53 XS, 33 S, 35 M, 30 L, 14 XL, 8 XXL), 15,029 LoC/PR, 34,594 LoC/Commit
- 38 Reviews, 23.35 Average Response Time

## Teamwork

- Teamwork & Citizenship
  - 팀워크: 사내 인터뷰를 통해 팀 브랜딩 기여 (HOME TEAM PLAY - ENG)
  - 시티즌쉽: 채용 지원: 개발자 Problem Solving 인터뷰어 자원, 4.7 부터 진행중이며, 현재까지 12명 PS 참여
