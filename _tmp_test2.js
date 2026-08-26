const fs = require("fs");
const nodeCrypto = require("crypto");
const { webcrypto } = nodeCrypto;

function decryptFile(path, varName, pass) {
  const html = fs.readFileSync(path, "utf8");
  const start = html.indexOf("window." + varName + " = ");
  const slice = html.slice(start + ("window." + varName + " = ").length);
  const end = slice.indexOf(";");
  const b64 = JSON.parse(slice.slice(0, end).trim());
  const buf = Buffer.from(b64, "base64");
  const salt = buf.slice(0, 16), iv = buf.slice(16, 28), ct = buf.slice(28);
  return webcrypto.subtle.importKey("raw", Buffer.from(pass, "utf8"), "PBKDF2", false, ["deriveKey"])
    .then((k) => webcrypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" }, k, { name: "AES-GCM", length: 256 }, false, ["decrypt"]))
    .then((key) => webcrypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct))
    .then((p) => new TextDecoder().decode(p));
}

(async () => {
  const svc = await decryptFile("_includes/services-cipher.html", "SVC_CIPHER", "123456");
  console.log("SERVICES DECRYPT OK len:", svc.length, "| has 'Journal Services':", svc.includes("Journal Services"), "| has data-lang:", svc.includes("data-lang"));
  const blog = await decryptFile("_includes/blog-cipher.html", "BLOG_CIPHER", "123456");
  console.log("BLOG DECRYPT OK len:", blog.length, "| has 'Method Notes' or posts:", blog.includes("Method Notes") || blog.includes("method"), "| has data-lang:", blog.includes("data-lang"));
})().catch((e) => { console.error("DECRYPT FAILED:", e.message); process.exit(1); });
