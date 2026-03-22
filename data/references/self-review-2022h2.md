# [Self] XR/Juan

- Status: Draft > Peer Review
- Manager: Jinsik Kim
- Peer Reviewers: Hyowon Ha, Gray Jung, Lupo Cho, Lila Han, Serval Kim, Teemo Jeon, Clue Bae, Kwazii Choi
- Last updated: 2022-12-27

## Achievement

AR Product 개발에 대해 전반적인 오너십을 갖고 작업했습니다. Unity 개발에 필요한 환경을 구축하고, Unity로 구현된 AR모듈앱과 해당 서비스에 필요한 BE를 설계/개발했으며, 필요한 경우 동료에게 개발에 대한 가이드를 제공했습니다.

### Achievement #1 AR module for iOS application development

- Unity 게임엔진을 이용해 AR Client Application을 개발했습니다.
- Eng docs & JIRA & Major PRs
  - [simple] P1 Modularized AR App
  - Unity AR modular application의 시스템 설계
    - [XR-30] 3D model Size inspector development (Major PR)
    - [XR-116] 객체 충돌 구현 (Major PR): 모델에 강체 속성을 부여하고 자연스러운 충돌 기능을 구현함
    - [XR-186] Unity 3D model importer development (Major PR)
  - [simple] AR Model download system
    - XR-266 (Major PR): 작업큐를 이용한 비동기 다운로드 시스템
  - AR 클라이언트 사이드 로그
    - XR-423 (Major PR)
  - [XR-285] 상품 관리 모듈 개발 (Major PR)
    - 상품 정보에서 추출한 옵션 구조를 클래스화하고, 비동기로 모델을 다운로드
    - LRU Cache를 이용해 상품 단위 메모리 최적화 구현
  - [XR-358] AR BE 호출 모듈 개발 (Major PR)

### Achievement #2 AR BE Application development

- ohouse mortar, clay, xpc 등 사내 프레임워크를 적절히 활용하고, kotlin-spring을 이용해 AR BE Application을 개발했습니다.
- Eng docs
  - [simple] AR Backend Service - XR-309 (Major PR)
  - [full] AR-Mobile-BFF - XR-333 (Major PR)
  - [simple] AR DB 스키마 변경: 옵션 단위로 denormalization - XR-366 (Major PR): AR 서비스는 기본적으로 모델이 옵션 단위이므로, DB 입장에서 어떤 스키마가 유리할 지 판단하고 적용함
  - [simple] AR 서비스 대상 구분 (Lidar / Non-lidar) - XR-403 (Major PR): 화이트리스트 기반의 서비스 타겟 선택 기능 구현
  - [XR-371] XPC AB Test 지원 (Major PR)

### Achievement #3 webAR Test 설계 및 개발 지원

- '22.10 ~ '22.12 기간동안 진행한 오늘의집 iOS 앱 내 webAR 테스트 지원
- [XR-188] Test에 필요한 모델 등의 리소스 구축
- iOS팀 Clue님과 client side 협업 지원(PR, slack) / Tom님과 server side 협업 지원(PR, slack)

## Product & Engineering Excellence

- AR 프로젝트를 위해 필요한 시스템을 설계하고, 구현했습니다.
- Eng docs & JIRA
  - [XR-127]: UaaL 메모리 테스트: 기초적인 AR 앱을 이용한 메모리 테스트로 실효성 검증 (네이티브, unity, UaaL 비교) -> UaaL을 활용하기로 최종 결정
  - BE Datadog Dashboard 구축: 효과적인 서버 모니터링 지원
  - [simple] Unity CI 구축: 개발-배포 자동화 지원 - XR-413 (Major PR)
  - [XR-171] formatter 적용 (Major PR): 코드 포맷 통일을 이용한 가독성 증가
  - 3D model research & management
    - glTF-transform research / memory test: 메모리 최대 82% 감소
    - python을 이용한 ktx compress & s3 upload 자동화 스크립트
  - App UI System 설계 가이드 제공
  - 현재 수동으로 진행하는 모델 검수 과정의 일부를 자동화하고 활용. 잘못된 정보를 찾아 오퍼레이션 과정에서 수정될 수 있도록 전달
    - model-checker: Repository(임시 PR)
- 다음 기능 준비: 다음 기능을 위해 미리 설계 및 논의한 내용입니다.
  - [simple] DAM web service
  - 속성 기반 검색 기능 설계

## Stats

- 60 PRs (19 XS, 13 S, 7 M, 7 L, 14 XL), 206 Commits (88 XS, 42 S, 41 M, 18 L, 17 XL), 849,530 LoC
- 60 PRs (22 XS, 12 S, 8 M, 9 L, 9 XL), 206 Commits (95 XS, 41 S, 47 M, 19 L, 4 XL), 45,665 LoC
- 69 Reviews, 23.72 Average Response Time

## Teamwork

- Teamwork & Citizenship
  - Teamwork
    - AR Foundation Remote, UI Pack 등 유니티 개발에 용이한 애셋 리서치 및 구매
    - PR Template 적용
  - Citizenship
    - 배포 참고자료 및 TRY & ERROR
    - 회식, 송년회 적극적 참여
