# 정적 공개 블로그

GitHub를 원본 저장소로 두고 Vercel 또는 Netlify에서 자동 배포하는 정적 블로그입니다.

## 구성

- `content/posts/*.md` — 글 원본
- `build.js` — 정적 HTML, `posts.json`, `sitemap.xml`, `rss.xml`, `robots.txt` 생성
- `new-post.js` — 새 Markdown 글 생성
- `src/` — 스타일과 목록 검색 스크립트
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

## Vercel / Netlify 환경변수

```text
SITE_URL=https://실제-운영-도메인.com
NAVER_SITE_VERIFICATION=네이버_소유확인_content값
```

`SITE_URL`은 sitemap, RSS, canonical URL, robots.txt의 기준 주소가 됩니다.

### Vercel

GitHub 저장소를 Import하면 `vercel.json`에 따라 `npm run build` 후 `public/`을 배포합니다.

### Netlify

GitHub 저장소를 Import하면 `netlify.toml`에 따라 `npm run build` 후 `public/`을 배포합니다.

## 네이버 서치어드바이저

배포 후 아래 경로를 확인하고 서치어드바이저에 제출합니다.

- `/sitemap.xml`
- `/rss.xml`
- `/robots.txt`

운영 도메인이 확정되면 반드시 `SITE_URL`을 실제 도메인으로 설정하세요.
