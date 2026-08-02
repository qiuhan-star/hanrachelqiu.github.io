/* encrypt-portfolio.js
 * Reads the (gitignored) plaintext portfolio source + images, then emits
 * AES-GCM ciphertext into _includes/portfolio-cipher-*.html.
 * The public repo only ever contains the ciphertext; the plaintext never ships.
 *
 * Usage:  node encrypt-portfolio.js <passphrase>
 * Requires Node 20+ (global Web Crypto).
 */
const fs = require('fs');
const path = require('path');
const nodeCrypto = require('crypto');
const { webcrypto } = nodeCrypto;

const SRC = '_portfolio';
const IMG_DIR = 'images/portfolio';
const OUT = '_includes';
const PBKDF2_ITER = 150000;
const SALT_LEN = 16;
const IV_LEN = 12;

const PASS = process.argv[2] || '88888888';

function parseMd(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { title: '', excerpt: '', body: raw };
  const fm = m[1];
  const body = m[2];
  let title = '';
  let excerpt = '';
  const tm = fm.match(/title:\s*"([^"]*)"/);
  if (tm) title = tm[1];
  const em = fm.match(/excerpt:\s*"([\s\S]*?)"/);
  if (em) excerpt = em[1];
  return { title, excerpt, body };
}

function inlineImages(html) {
  return html.replace(
    /<img\s+src="{{\s*site\.url\s*}}\/images\/portfolio\/([^"]+)"/g,
    (full, name) => {
      const p = path.join(IMG_DIR, name.trim());
      if (!fs.existsSync(p)) return full;
      const b64 = fs.readFileSync(p).toString('base64');
      const rawExt = path.extname(name).slice(1).toLowerCase();
      const extMap = { jpg: 'jpeg', jpeg: 'jpeg', png: 'png', gif: 'gif', webp: 'webp' };
      const mime = extMap[rawExt] || 'jpeg';
      return '<img src="data:image/' + mime + ';base64,' + b64 + '">';
    }
  );
}

function cleanBody(body) {
  let h = body;
  h = h.replace(/<style[\s\S]*?<\/style>/g, '');
  h = h.replace(/<script[\s\S]*?<\/script>/g, '');
  h = h.replace(/<button[\s\S]*?<\/button>/g, '');
  h = h.replace(/<body>/g, '').replace(/<\/body>/g, '');
  h = inlineImages(h);
  return h.trim();
}

function buildItem(item) {
  return (
    '<article class="pf-item">\n' +
    '  <h2 class="archive__item-title">' + item.title + '</h2>\n' +
    '  <p class="archive__item-excerpt">' + item.excerpt + '</p>\n' +
    '  ' + cleanBody(item.body) + '\n' +
    '</article>'
  );
}

function buildPage(files, headerHtml) {
  const items = files.map((f) => buildItem(parseMd(f))).join('\n');
  return '<div id="pf-content">\n' + headerHtml + '\n' + items + '\n</div>';
}

const EN_HEADER =
  '<div class="announcement">\n' +
  '  📅 Coming Soon\n' +
  '  <hr>\n' +
  '  <div class="date"></div>\n' +
  '  The narrative continues. ✨🌟 Your patience is greatly appreciated!\n' +
  '</div>';

const ZH_HEADER =
  '<div class="announcement">\n' +
  '  📅 敬请期待\n' +
  '  <hr>\n' +
  '  <div class="date"></div>\n' +
  '  故事仍在继续。✨🌟 感谢您的耐心等待！\n' +
  '</div>';

async function deriveKey(pass, salt) {
  const baseKey = await webcrypto.subtle.importKey(
    'raw',
    Buffer.from(pass, 'utf8'),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return webcrypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: salt, iterations: PBKDF2_ITER, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptText(plain) {
  const salt = nodeCrypto.randomBytes(SALT_LEN);
  const iv = nodeCrypto.randomBytes(IV_LEN);
  const key = await deriveKey(PASS, salt);
  const ct = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    Buffer.from(plain, 'utf8')
  );
  const buf = Buffer.concat([salt, iv, Buffer.from(ct)]);
  return buf.toString('base64');
}

async function main() {
  const enFiles = ['portfolio-1.md', 'portfolio-2.md', 'portfolio-3.md'].map((f) =>
    path.join(SRC, f)
  );
  const zhFiles = ['zh-portfolio-1.md', 'zh-portfolio-2.md', 'zh-portfolio-3.md'].map((f) =>
    path.join(SRC, f)
  );

  const enHtml = buildPage(enFiles, EN_HEADER);
  const zhHtml = buildPage(zhFiles, ZH_HEADER);

  const enCipher = await encryptText(enHtml);
  const zhCipher = await encryptText(zhHtml);

  fs.writeFileSync(
    path.join(OUT, 'portfolio-cipher-en.html'),
    '<script>window.PF_CIPHER = ' + JSON.stringify(enCipher) + ';</script>\n'
  );
  fs.writeFileSync(
    path.join(OUT, 'portfolio-cipher-zh.html'),
    '<script>window.PF_CIPHER = ' + JSON.stringify(zhCipher) + ';</script>\n'
  );

  console.log('OK. EN cipher length:', enCipher.length, 'ZH cipher length:', zhCipher.length);
  console.log('EN plaintext length was:', enHtml.length, 'ZH plaintext length was:', zhHtml.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
