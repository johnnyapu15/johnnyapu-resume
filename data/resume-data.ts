import type { MultiLanguageResumeData } from "@/types/resume"

export const resumeData: MultiLanguageResumeData = {
  "ko": {
    "personalInfo": {
      "name": "정주안 (Juahn Jeong)",
      "nameEn": "Juahn Jeong",
      "email": "johnnyapu15@gmail.com",
      "phone": "010-4479-2917",
      "address": "서울, 대한민국",
      "linkedin": "www.linkedin.com/in/juahn-jeong"
    },
    "summary": "딥러닝 기반 응용 개발과 3D 기반 XR 서비스 구축 경험을 바탕으로, 대규모 백엔드 시스템 설계와 최적화에 강점을 가진 소프트웨어 엔지니어입니다. 현재 Bucketplace(오늘의집)에서 시스템 디자인, 개발, 성능 개선 등을 수행하며 백엔드 리드를 담당하고 있습니다.",
    "experience": [
      {
        "company": "Bucketplace (오늘의집)",
        "position": "Software Engineer",
        "period": "2022년 8월 - 현재",
        "location": "서울, 대한민국",
        "description": [
          "AR 가구 배치 서비스: 효과적인 3D 모델 서빙 설계 및 개발.",
          "3D Asset 관리 시스템의 핵심 백엔드 설계 및 개발 주도.",
          "3D Asset Optimization Pipeline 구축: 텍스쳐, 메쉬 압축을 통한 페이로드 감소 (tri 수 약 90% 감소), 파일 크기 약 50% 절감.",
          "3D 인테리어 디자인 서비스 개발: 모델 로딩 시간 75% 개선 (10초 → 2.5초), API 응답 시간 80% 개선 (200ms → 80ms).",
          "제품 추천 LLM 기반 시스템 설계 및 프로토타입 개발.",
          "글로벌 시장 AI 기반 인테리어 이미지 신규 서비스 설계 및 개발",
          "백엔드 리드 역할 수행: 신규 시스템 디자인, 코드 리뷰, 멘토링, cross-functional 팀과 협업.",
          "Agile 환경에서 지속적 개선과 배포 주도."
        ]
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Consultant",
        "period": "2021년 2월 - 2022년 11월",
        "location": "서울, 대한민국",
        "description": [
          "Digital Twin 플랫폼 개발 (Unity 기반 엔진 + Node.js backend).",
          "대용량 실시간 데이터 처리를 위한 scalable game server 아키텍처 설계.",
          "CI/CD 자동화를 위한 GitLab CI 파이프라인 구축."
        ]
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Associate",
        "period": "2020년 1월 - 2021년 2월",
        "location": "서울, 대한민국",
        "description": [
          "3D AR 서비스 개발, HLOD 기반 rendering optimization 기능 개발.",
          "AR/VR 프로젝트에서 cross-team 협업 및 기술 지원 담당."
        ]
      },
      {
        "company": "(Side-project) BlackTangerine",
        "position": "Software Developer",
        "period": "2020년 12월 - 2021년 6월",
        "location": "서울, 대한민국",
        "description": [
          "딥러닝 기반 얼굴 피부 분석 및 의류 추천 시스템 개발.",
          "Python 기반 personal color 분석 엔진, Node.js backend, GCP CloudRun으로 scalable 서비스 구축."
        ]
      },
      {
        "company": "서울시립대학교",
        "position": "연구원 (International Urban & Infrastructure Research Center)",
        "period": "2018년 8월 - 2020년 1월",
        "location": "서울, 대한민국",
        "description": [
          "Unity 기반 Digital Twin application 개발 및 시뮬레이션 시스템 구축."
        ]
      }
    ],
    "education": [
      {
        "school": "서울시립대학교",
        "degree": "석사, 컴퓨터과학",
        "period": "2018년 - 2019년",
        "description": "학·석사 연계 프로그램을 통해 석사 학위 조기 취득"
      },
      {
        "school": "서울시립대학교",
        "degree": "학사, 컴퓨터과학부",
        "period": "2012년 - 2017년",
        "description": ""
      }
    ],
    "skills": {
      "languages": [
        "Kotlin",
        "Python",
        "C#",
        "JavaScript",
        "TypeScript"
      ],
      "frameworks": [
        "Spring Boot",
        "Node.js",
        "Unity",
        "React",
        "Three.js"
      ],
      "databases": [
        "Firebase"
      ],
      "tools": [
        "Kubernetes",
        "GitLab CI",
        "GCP",
        "Docker"
      ]
    },
    "projects": [
      {
        "name": "3D 가구 배치 AR 서비스",
        "period": "Bucketplace (오늘의집)",
        "description": "Unity 기반 AR 플랫폼 개발, 백엔드 리팩토링 및 시스템 최적화 수행. 상품 구매 전환율 36% 개선."
      },
      {
        "name": "3D Asset Optimization Pipeline",
        "period": "Bucketplace (오늘의집)",
        "description": "텍스쳐, 메시 압축 등 최적화 프로세스 구축으로 페이로드 약 50% 감소."
      },
      {
        "name": "AI 기반 인테리어 이미지 서비스",
        "period": "Bucketplace (오늘의집)",
        "description": "글로벌 시장 AI 기반 인테리어 이미지 신규 서비스 설계 및 개발"
      },
      {
        "name": "딥러닝 기반 Personal Color 분석 시스템",
        "period": "BlackTangerine",
        "description": "Python, TensorFlow 기반 얼굴 분석 및 Node.js backend 시스템 구축."
      }
    ],
    "certifications": [],
    "activities": []
  },
  "en": {
    "personalInfo": {
      "name": "Juahn Jeong",
      "email": "johnnyapu15@gmail.com",
      "phone": "+82-10-4479-2917",
      "address": "Seoul, South Korea",
      "linkedin": "www.linkedin.com/in/juahn-jeong"
    },
    "summary": "Software engineer with expertise in backend system design and optimization, combined with hands-on experience in deep learning applications and 3D-based XR services. Currently serving as Backend Lead at Bucketplace (OHouse), responsible for system architecture, development, and performance optimization.",
    "experience": [
      {
        "company": "Bucketplace (OHouse)",
        "position": "Software Engineer",
        "period": "Aug 2022 – Present",
        "location": "Seoul, South Korea",
        "description": [
          "Led backend architecture and development for AR furniture placement, 3D asset management, and interior design services.",
          "Designed and developed efficient 3D model serving system; increased product conversion by 36%.",
          "Built 3D asset optimization pipeline reducing payload (approx. 90% triangle reduction, 50% file size reduction).",
          "Refactored backend platform to Spring Boot with hexagonal architecture and Gradle multi-module.",
          "Improved model loading by 75% (10s → 2.5s) and API response time by 80% (200ms → 80ms).",
          "Prototyped LLM-based product recommendation system.",
          "Designed and developed new global AI-powered interior image transformation service with multi-region infrastructure.",
          "Backend lead responsibilities: system design, code review, mentoring, cross-functional collaboration.",
          "Drove continuous improvement and deployment in agile environment."
        ]
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Consultant",
        "period": "Feb 2021 – Nov 2022",
        "location": "Seoul, South Korea",
        "description": [
          "Developed Digital Twin platform (Unity + Node.js backend).",
          "Designed scalable game server architecture for real-time data processing.",
          "Implemented CI/CD automation with GitLab CI."
        ]
      },
      {
        "company": "LG CNS",
        "position": "System & Solution Programming Associate",
        "period": "Jan 2020 – Feb 2021",
        "location": "Seoul, South Korea",
        "description": [
          "Developed 3D AR services and rendering optimization using HLOD.",
          "Provided technical support and cross-team collaboration in AR/VR projects."
        ]
      },
      {
        "company": "BlackTangerine",
        "position": "Software Developer",
        "period": "Dec 2020 – Jun 2021",
        "location": "Seoul, South Korea",
        "description": [
          "Developed deep learning-based skin analysis and personal color recommendation system.",
          "Built scalable service with Python engine, Node.js backend, and GCP CloudRun."
        ]
      },
      {
        "company": "University of Seoul",
        "position": "Researcher (International Urban & Infrastructure Research Center)",
        "period": "Aug 2018 – Jan 2020",
        "location": "Seoul, South Korea",
        "description": [
          "Developed Digital Twin simulation system using Unity."
        ]
      }
    ],
    "education": [
      {
        "school": "University of Seoul",
        "degree": "Master’s in Computer Science (Accelerated Program)",
        "period": "2018 – 2019",
        "description": "Completed Bachelor-Master combined program and earned master’s degree in 1 year."
      },
      {
        "school": "University of Seoul",
        "degree": "Bachelor’s in Computer Science",
        "period": "2012 – 2017",
        "description": ""
      }
    ],
    "skills": {
      "languages": [
        "Kotlin",
        "Python",
        "C#",
        "JavaScript",
        "TypeScript"
      ],
      "frameworks": [
        "Spring Boot",
        "Node.js",
        "Unity",
        "React",
        "Three.js"
      ],
      "databases": [
        "Firebase"
      ],
      "tools": [
        "Kubernetes",
        "GitLab CI",
        "GCP",
        "Docker"
      ]
    },
    "projects": [
      {
        "name": "3D Furniture Placement AR Service",
        "period": "Bucketplace (OHouse)",
        "description": "Built Unity-based AR platform and optimized backend system, resulting in 36% increase in purchase conversion."
      },
      {
        "name": "3D Asset Optimization Pipeline",
        "period": "Bucketplace (OHouse)",
        "description": "Built pipeline reducing payload by approx. 50% through texture and mesh compression."
      },
      {
        "name": "AI-based Interior Image Transformation Service",
        "period": "Bucketplace (OHouse)",
        "description": "Designed and developed new global AI-powered interior image service with multi-region infrastructure."
      },
      {
        "name": "Deep Learning-based Personal Color Analysis System",
        "period": "BlackTangerine",
        "description": "Developed Python and TensorFlow-based facial analysis engine with Node.js backend."
      }
    ],
    "certifications": [],
    "activities": []
  }
}
