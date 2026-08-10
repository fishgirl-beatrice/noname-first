---
title: 정적 블로그를 시작합니다
slug: hello-static-blog
date: 2026-08-10
description: 서버 없이 가볍게 운영하는 독립 블로그의 첫 글입니다.
category: 기록
tags: 시작, 정적사이트, 블로그
---

이 블로그는 **HTML 파일로 공개되는 정적 사이트**입니다. 데이터베이스가 없어도 빠르고 단순하게 운영할 수 있습니다.

## 글은 어떻게 올리나요?

`content/posts` 폴더에 Markdown 파일을 추가하고 아래 명령을 실행합니다.

```bash
npm run build
```

그러면 홈페이지의 글 목록, 개별 글 페이지, `posts.json`, `sitemap.xml`, `rss.xml`이 함께 갱신됩니다.
