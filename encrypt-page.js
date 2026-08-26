/* encrypt-page.js
 * Extracts the rendered #main content from a built Jekyll HTML page, then
 * emits AES-GCM ciphertext into an _includes/<name>-cipher.html file.
 * The public repo only ever contains the ciphertext; the plaintext never ships.
 *
 * Usage:  node encrypt-page.js <builtHtml> <cipherVar> <outputInclude> [pass]
 * Requires Node 20+ (global Web Crypto).
 */
const fs = require('fs');
const nodeCrypto = require('crypto');
const { webcrypto } = nodeCrypto;

const BUILT = process.argv[2];
const VAR = process.argv[3];
const OUT = process.argv[4];
const PASS = process.argv[5] || '123456';
const ITER = 150000, SALT_LEN = 16, IV_LEN = 12;

function extractMain(html) {
  const marker = '<div id="main"';
  const i = html.indexOf(marker);
  if (i < 0) throw new Error('no #main found in ' + BUILT);
  const openEnd = html.indexOf('>', i);
  let pos = openEnd + 1;
  let depth = 1;
  let contentEnd = -1;
  while (pos < html.length) {
    const nextOpen = html.indexOf('<div', pos);
    const nextClose = html.indexOf('</div>', pos);
    if (nextClose < 0) break;
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth++;
      pos = html.indexOf('>', nextOpen) + 1;
    } else {
      depth--;
      if (depth === 0) { contentEnd = nextClose; break; }
      pos = nextClose + 6;
    }
  }
  if (contentEnd < 0) throw new Error('could not find #main close in ' + BUILT);
  return html.slice(openEnd + 1, contentEnd);
}

async function deriveKey(pass, salt) {
  const baseKey = await webcrypto.subtle.importKey(
    'raw', Buffer.from(pass, 'utf8'), 'PBKDF2', false, ['deriveKey']
  );
  return webcrypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: salt, iterations: ITER, hash: 'SHA-256' },
    baseKey, { name: 'AES-GCM', length: 256 }, false, ['encrypt']
  );
}

async function encryptText(plain) {
  const salt = nodeCrypto.randomBytes(SALT_LEN);
  const iv = nodeCrypto.randomBytes(IV_LEN);
  const key = await deriveKey(PASS, salt);
  const ct = await webcrypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv }, key, Buffer.from(plain, 'utf8')
  );
  const buf = Buffer.concat([salt, iv, Buffer.from(ct)]);
  return buf.toString('base64');
}

(async () => {
  const html = fs.readFileSync(BUILT, 'utf8');
  const mainHtml = extractMain(html);
  console.error('extracted #main length:', mainHtml.length);
  const b64 = await encryptText(mainHtml);
  fs.writeFileSync(OUT, '<script>window.' + VAR + ' = ' + JSON.stringify(b64) + ';</script>\n');
  console.error('wrote', OUT, '| cipher length', b64.length);
})().catch((e) => { console.error(e); process.exit(1); });
