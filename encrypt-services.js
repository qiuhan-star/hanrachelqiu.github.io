/* encrypt-services.js
 * Mirror of encrypt-portfolio.js, but the output is ONE bilingual ciphertext.
 * The decrypted HTML carries both <div data-lang="en"> and <div data-lang="zh">
 * blocks; after unlock, the page's global __applyLang() shows the matching one
 * in-place (no URL jump). Plaintext source (_services/*.md) stays gitignored;
 * only the ciphertext ever ships in the public repo.
 *
 * Usage:  node encrypt-services.js <passphrase>
 * Requires Node 20+ (global Web Crypto).
 */
const fs = require('fs');
const path = require('path');
const nodeCrypto = require('crypto');
const { webcrypto } = nodeCrypto;

const SRC_EN = '_services/services-en.md';
const SRC_ZH = '_services/services-zh.md';
const OUT = '_includes';
const OUT_FILE = 'services-cipher.html';
const PBKDF2_ITER = 150000;
const SALT_LEN = 16;
const IV_LEN = 12;

const PASS = process.argv[2] || '88888888';

/* ---- minimal Markdown -> HTML (services content only needs headings,
   unordered lists, bold, and paragraphs) -------------------------------- */
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function bold(s) {
  /* escape first, then turn **x** into <strong>x</strong> */
  return esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let listOpen = false;
  function closeList() {
    if (listOpen) { out.push('</ul>'); listOpen = false; }
  }
  for (let raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (line.trim() === '') { closeList(); continue; }
    let m;
    if ((m = line.match(/^###\s+(.*)$/))) { closeList(); out.push('<h3>' + bold(m[1]) + '</h3>'); continue; }
    if ((m = line.match(/^##\s+(.*)$/))) { closeList(); out.push('<h2>' + bold(m[1]) + '</h2>'); continue; }
    if ((m = line.match(/^-\s+(.*)$/))) {
      if (!listOpen) { out.push('<ul>'); listOpen = true; }
      out.push('<li>' + bold(m[1]) + '</li>');
      continue;
    }
    closeList();
    out.push('<p>' + bold(line) + '</p>');
  }
  closeList();
  return out.join('\n');
}

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
  const enHtml = mdToHtml(fs.readFileSync(SRC_EN, 'utf8'));
  const zhHtml = mdToHtml(fs.readFileSync(SRC_ZH, 'utf8'));

  /* 单一密文同时携带两种语言；解锁后由 __applyLang() 显隐 */
  const combined =
    '<div data-lang="en">\n' + enHtml + '\n</div>\n' +
    '<div data-lang="zh">\n' + zhHtml + '\n</div>';

  const cipher = await encryptText(combined);

  fs.writeFileSync(
    path.join(OUT, OUT_FILE),
    '<script>window.PF_CIPHER = ' + JSON.stringify(cipher) + ';</script>\n'
  );

  console.log('OK. combined cipher length:', cipher.length);
  console.log('EN plaintext length was:', enHtml.length, 'ZH plaintext length was:', zhHtml.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
