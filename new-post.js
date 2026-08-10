const fs = require('fs');
const path = require('path');

const title = process.argv.slice(2).join(' ').trim() || '새 글';
const date = new Date().toISOString().slice(0, 10);
const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9가-힣\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-') || `post-${Date.now()}`;

const file = path.join(__dirname, 'content', 'posts', `${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`이미 존재합니다: ${file}`);
  process.exit(1);
}
const body = `---\ntitle: ${title}\nslug: ${slug}\ndate: ${date}\ndescription: 글 요약을 입력하세요.\ncategory: 기록\ntags: \n---\n\n여기에 본문을 작성하세요.\n`;
fs.writeFileSync(file, body, 'utf8');
console.log(`생성 완료: ${file}`);
