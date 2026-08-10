# 정적 공개 블로그

현재 운영 주소는 `https://fishgirl-beatrice.github.io/noname-first/` 입니다.

## 구성

- `content/posts/*.md` — 글 원본
- `build.js` — 정적 HTML, `posts.json`, `sitemap.xml`, `rss.xml`, `robots.txt` 생성
- `new-post.js` — 새 Markdown 글 생성
- `src/` — 스타일과 목록 검색 스크립트
- `site.config.json` — 운영 URL 및 사이트 기본 설정
- `vercel.json` — Vercel 배포 설정
- `netlify.toml` — Netlify 배포 설정

## 새 글

```bash
npm run new -- "새 글 제목"
```

`content/posts`에 생성된 Markdown을 수정한 뒤 GitHub에 커밋하면 됩니다.

## 빌드

```bash
npm run build
```

결과는 `public/`에 생성됩니다.

## 운영 URL

```text
SITE_URL=https://fishgirl-beatrice.github.io/noname-first
NAVER_SITE_VERIFICATION=네이버_소유확인_content값
```

`SITE_URL`은 sitemap, RSS, canonical URL, robots.txt의 기준 주소가 됩니다. GitHub Pages 프로젝트 사이트의 하위 경로 `/noname-first/`도 내부 링크와 CSS/JS 경로에 자동 반영됩니다.

## 검색엔진 제출 경로

- `https://fishgirl-beatrice.github.io/noname-first/sitemap.xml`
- `https://fishgirl-beatrice.github.io/noname-first/rss.xml`
- `https://fishgirl-beatrice.github.io/noname-first/robots.txt`
