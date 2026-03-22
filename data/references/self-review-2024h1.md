# [Self] XR/ Juan Jeong

- Status: Draft > Peer Review
- Manager: Kangwon Lee
- Last updated: 2024-07-08

## Achievement

### Panorama AR Backend Lead: 견고하고 확장성있는 설계 및 구현 리드

- **Overview:** Panorama AR Backend 설계를 리드하여 견고하고 확장 가능한 시스템을 구축했습니다. BE Lead로서 팀원들을 이끌어 짧은 시간 내 end-2-end가 가능한 시스템 개발이라는 프로젝트 마일스톤을 달성했습니다. (JIRA EPIC: XR-1665)
- **Project timeline:** 2024.04 - 2024.06
- **Major tasks**
  - 아키텍처 설계: PAR에 필요한 다양한 서비스 컴포넌트를 조화롭게 구성하고 전체적인 아키텍처 설계를 리드했습니다. (Panorama AR Backend Low-level Design)
  - 요청 처리 시간이 긴 파노라마 처리 작업을 다루기 위한 비동기 상태 관리 시스템을 설계 구현했습니다. (major PR)
  - panoramaar-bff 등 주요 백엔드 컴포넌트를 높은 품질로 구현했습니다. (major PR)
  - 백엔드 팀을 이끌며 프로젝트 마일스톤을 달성했습니다. 적극적인 PR Review, slack 소통을 통해 지속적인 개발 리딩을 담당했습니다.
- **Difficulty, Leadership, Impact**
  - **Difficulty:** 요청 처리 시간이 긴 작업을 위해 비동기 상태 관리 시스템을 구축하고, 6개의 마이크로서비스 간 연동과 데이터 흐름을 설계하고 짧은 시간 내 성공적으로 구현
  - **Leadership:** 백엔드 팀을 효과적으로 리드하고, 팀원들이 프로젝트 목표를 달성할 수 있도록 지원. 백엔드 기술에 익숙치 않은 Experimental engineer 동료들을 위해 가이드 문서를 만들고 공유
  - **Impact:** 확장성있는 Panorama AR Backend를 구축하여, end-2-end pipeline demo를 성공. 폴링 기능을 이용한 비동기 상태 관리 시스템을 통해 다양한 비동기 요구사항을 처리할 수 있는 효율적인 시스템을 구축

### Digital Asset Management 신규 런칭 및 개선

- **Overview:** XR 프로덕트에 필요한 3D 모델을 제작하고, 다양한 서비스에 활용하는 과정을 효율적으로 지원하는 DAM을 설계하고 성공적으로 런칭해 비즈니스 파이프라인을 개선하고, engineer resource 40 days / year 를 절약했습니다. (JIRA EPIC: XR-1226)
- **Project timeline:** 2024.01 - 2024.03
- **Major tasks**
  - DAM이 모델링 프로세스에서 어떤 역할을 하는 지 전반적인 설계를 진행하고 문서화
  - DAM Phase 1을 기획, 설계하고 구현. 모델 업로드 프로세스를 자동화하여 engineer maintenance resource를 크게 줄임 (40 d/y)
  - 다양한 모델링을 지원하기 위한 확장 가능한 파이프라인 시스템을 설계, 구현
- **Difficulty:** 3D 모델 처리 작업은 처리 시간이 길기 때문에, 안정적이고 확장 가능한 구조를 위해 비동기 상태 머신을 설계, 구현. node.js 모델 처리 애플리케이션을 구현하고 nexus를 통해 배포. CPU intensive, IO intensive 작업을 구분지어 컨텍스트 스위칭을 최소화함으로써 모델 처리 시간을 약 18% 감소
- **Leadership:** 다양한 3D 모델 최적화 실험과 조사를 통해 우리 상황에 맞는 처리 프로그램 형태를 설계하고 적용
- **Impact:** 모델 관리 프로세스 최적화; 구글 시트로 관리하던 모델 정보를 DB화하고, 모델 업로드부터 AR, Quick planner 서비스에 적용하는 과정을 자동화해서 Eng. resource 40 d/y 를 절약. Quick planner를 지원하는 pipeline을 확장 가능한 설계 덕분에 빠르게 추가 구현

### Quick planner (구 포켓룸) Backend 기능 설계 및 구현

- **Overview:** Quick planner 사용자에게 필요한 편의 기능의 Backend를 구현
- **Project timeline:** 2024.01 - 2024.01
- **Major tasks:** Associated query 구현 (연관 아이템 추천), 템플릿 기능 구현, 커머스 아이템 갱신 덤프 기능

### 백엔드 아키텍처 관리

- **Overview:** AR, Quickplanner, PAR, DAM 등 다양한 프로젝트를 구성하는 8개 마이크로서비스를 하나의 코드베이스에서 효율적으로 관리하기 위한 아키텍처 정의 및 지속적인 리팩토링

## Product & Engineering Excellence

- **Quick planner 최적화**
  - 연관아이템 검색 api를 최적화하여 레이턴시를 약 99.7% 감소, 보다 연관성 깊은 아이템을 추천해줄 수 있는 새로운 스코어링 방식을 고안하고 적용
  - Quick planner의 진입점이 전체메뉴로 바뀌기 전에, 예상되는 부하 증가를 테스트하고 안정적인 서버 환경을 구성
  - Quick planner의 썸네일 촬영 로직에 기믹을 추가해서 사용자가 느끼는 썸네일 로딩 속도를 개선
- **인테리어 큐레이터:** 20% proj로 사용자가 XR 생태계에서 어떻게 원하는 상품을 탐색할 것인지에 대한 방법론 제시하고, llm을 활용해 구현 (24.05 - 24.06)
- **springboot 3 migration:** 전사 서비스 중 최초로 springboot 3 migration을 진행하고, 그 과정에서 겪은 이슈와 트러블 슈팅을 기록하고 가이드로 만들어 공유. 과정에서 발견한 이슈를 리포트하여 개선을 도모. 또한 migration 과정에서, 여러 개의 gradle 설정 파일을 구조화하고 중복된 설정을 제거하여 효율성을 증대
- **bauth migration:** DAM admin에서 사용하는 bauth를 전사 기준에 따라 migration
- **미리 완료하고 남는 시간에 한 것들:** polling service PR, dam PR

## Stats

- 123 PRs (54 XS, 19 S, 17 M, 26 L, 6 XL, 1 XXL), 330 Commits (185 XS, 51 S, 38 M, 45 L, 5 XL, 6 XXL), 15,797 LoC(PR), 40,953 LoC(Commit)
- 175 Reviews, 137 Comments, 9.26 Average Response Time

## Teamwork

- **code review guide & share:** XR Eng 팀을 위한 코드 리뷰 가이드를 만들고 공유
- **issue report during springboot3 migration:** 전사 최초로 서비스에 spring boot3를 적용하면서 겪은 이슈와 트러블슈팅 로그를 기록하고 공개 채널에 공유
