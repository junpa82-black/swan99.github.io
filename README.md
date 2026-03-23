# Astro GitHub Pages Blog

정적 페이지로 빌드되는 블로그 프로젝트입니다.

## 주요 기능

- Astro 기반 정적 빌드
- 마크다운 글 작성 및 렌더링
- 메뉴: Home / About / Blog
- 태그, 카테고리, 월별 아카이브 분류
- GitHub Pages 자동 배포 워크플로우 포함

## 시작하기

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

빌드 결과물은 `dist/`에 생성됩니다.

## 글 작성 규칙

글 파일은 `src/content/blog/YYYY-MM/` 아래에 `.md`로 추가하세요.

예시:

```md
---
title: "제목"
description: "설명"
date: 2026-03-24
tags: ["Astro", "Blog"]
category: "개발"
draft: false
---

본문...
```

## GitHub Pages 배포

1. 이 폴더를 별도 GitHub 저장소로 푸시합니다.
2. 저장소 Settings > Pages > Source 를 `GitHub Actions`로 설정합니다.
3. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동 배포합니다.

## 설정

- `astro.config.mjs`의 `site`를 자신의 GitHub 계정 URL로 변경하세요.
  - 예: `https://YOUR_GITHUB_USERNAME.github.io`
