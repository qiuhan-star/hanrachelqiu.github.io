---
layout: archive
title: "简历"
permalink: /zh/cv/
author_profile: true
lang: zh-CN
lang_alt: /cv/
redirect_from:
  - /zh/Resume_Han_(Rachel)_QIU.pdf
---
{% include base_path %}

<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>可折叠列表示例</title>
<style>
  .collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }

  .active, .collapsible:hover {
    background-color: #555;
  }

  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
  }
</style>
</head>
<body>

<p style="margin: 0 0 1.5em 0;">
  <a id="pdf-cv-link" href="{{ '/files/CV_HanQiu.pdf' | absolute_url }}" target="_blank" rel="noopener" style="display:inline-block;background:#777;color:#fff;padding:8px 14px;border-radius:4px;text-decoration:none;cursor:pointer;font-size:15px;">📄 PDF 简历</a>
  <span id="cv-downloads" style="margin-left:12px;font-size:0.9em;color:#555;">下载量 0</span>
</p>

<button class="collapsible">教育背景</button>
<div class="content">
  <p>* 公共管理博士，浙江大学，2025年9月 - 至今</p>
  <p>* 行政管理硕士，厦门大学，2022年9月 - 2025年6月</p>
  <p>* 公共管理文学学士，海南大学，2018年9月 - 2022年6月</p>
  <p>* 公共服务与公共政策理学学士，亚利桑那州立大学，2018年9月 - 2022年5月</p>
</div>

<button class="collapsible">技能</button>
<div class="content">
  <p>Stata、SPSS、R、Python、QGIS 与 ArcGIS；</p>
  <p>Office（Word、Excel 与 PowerPoint）</p>
  <p>Adobe（PS、LR、AU 与 PR）</p>
</div>

<button class="collapsible">发表论文</button>
<div class="content">
  <!-- 论文内容 -->
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>

<button class="collapsible">演讲报告</button>
<div class="content">
  <!-- 演讲内容 -->
  <ul>{% assign cv_talks_zh = site.talks | where_exp: "post", "post.lang == 'zh-CN'" %}{% for post in cv_talks_zh reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
</div>

<button class="collapsible">服务与领导</button>
<div class="content">

<h2 class="section-title">期刊服务</h2>
<h3 class="sub-section-title">期刊审稿</h3>
<ul>
    <li><span class="role">审稿人</span>：Journal of Computer Sciences and Informatics（2024）</li>
</ul>

<h2 class="section-title">会员资格</h2>
<ul>
    <li>学生会员，ICPA-Forum Membership - JCPA & Scholarly Society for ICPA，北京，中国，2023-02-22 至 2024-02-02。</li>
</ul>

<h2 class="section-title">学生组织服务</h2>
<ul>
    <li><span class="role">班长</span>，2024 - 2025</li>
    <li><span class="role">成员</span>，学生会，海南大学，2018 - 2021</li>
    <li><span class="role">成员</span>，综合管理办公室，海南大学，2018 - 2020</li>
    <li><span class="role">副部长</span>，实践部，学院团委，HAITC，2019 - 2021</li>
</ul>

<h2 class="section-title">社团服务</h2>
<ul>
    <li><span class="role">成员兼项目组织者</span>，英语俱乐部，海南大学，2019 - 2022</li>
    <li><span class="role">成员</span>，摄影协会，海南大学，2018 - 2019</li>
</ul>

<h2 class="section-title">志愿服务</h2>
<ul>
    <li>志愿者协会，厦门大学，2023年4月</li>
    <li>志愿者协会，公共管理学院，厦门大学，2023年4月 - 至今</li>
    <li>青年志愿者协会，海南省海口市，2019年5月 - 2020年1月</li>
    <li>青年志愿者协会，海南大学，2019年3月 - 2020年3月</li>
    <li>高中阳光志愿者联合会，2016年10月 - 2018年6月</li>
</ul>

<h2 class="section-title">社区服务</h2>
<ul>
    <li><span class="role">环境保护</span>：参与<span class="role">海口母亲河项目</span>，重点关注湿地保护及<span class="role">红树林生态系统</span>的保育。开展<span class="role">环境教育活动</span>，并发起社区主导的垃圾分类与回收项目，推动可持续废弃物管理。</li>
    <li><span class="role">关爱老人</span>：定期探访社区中的老年居民，提供陪伴与日常照料协助，并组织活动以提升其生活质量。</li>
    <li><span class="role">自贸区商户助企</span>：为自贸区的商户提供<span class="role">英语语言协助</span>，提升其与外国访客沟通的能力，助力<span class="role">多元文化营销策略</span>的发展。</li>
    <li><span class="role">教育与辅导</span>：为<span class="role">西双版纳勐满镇</span>的孩子们提供针对性的<span class="role">汉语教育</span>，帮助他们克服母语者学习普通话的难题。在社区内提供<span class="role">深入辅导</span>与<span class="role">学业指导</span>，重点关注升学准备与学科专项辅导，以支持教育发展。</li>
    <li><span class="role">新冠社区响应</span>：牵头组织个人防护装备（PPE）发放，开展每日体温检测，并管理健康码核验以保障社区安全。筹集资金并捐赠口罩等必需物资，支援高风险人群与一线工作者。开展疫苗接种宣传，提升社区健康与免疫意识。</li>
</ul>
</div>

<button class="collapsible">工作经历</button>
<div class="content">
  <div id="weGate">
    <p>🔒 本栏目已加密，输入密码后查看。</p>
    <input type="password" id="wePass" placeholder="密码" style="padding:6px 8px;">
    <button id="weUnlock" style="padding:6px 10px;cursor:pointer;">Unlock</button>
    <span id="weMsg" style="color:#c0392b;margin-left:8px;"></span>
  </div>
  <div id="weData" style="display:none;"></div>
</div>
<script>
(function(){
  var C = "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";
  function b64ToBytes(b){var s=atob(b);var u=new Uint8Array(s.length);for(var i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;}
  function unlock(){
    var pwd=document.getElementById('wePass').value;
    if(!pwd){document.getElementById('weMsg').textContent='Please enter password.';return;}
    var bytes=b64ToBytes(C);
    var salt=bytes.slice(0,16), iv=bytes.slice(16,28), ct=bytes.slice(28);
    crypto.subtle.importKey('raw', new TextEncoder().encode(pwd), 'PBKDF2', false, ['deriveKey'])
    .then(function(km){return crypto.subtle.deriveKey({name:'PBKDF2',salt:salt,iterations:100000,hash:'SHA-256'}, km, {name:'AES-GCM',length:256}, false, ['decrypt']);})
    .then(function(key){return crypto.subtle.decrypt({name:'AES-GCM',iv:iv}, key, ct);})
    .then(function(plain){document.getElementById('weData').innerHTML=new TextDecoder().decode(plain);document.getElementById('weData').style.display='block';document.getElementById('weGate').style.display='none';})
    .catch(function(){document.getElementById('weMsg').textContent='Wrong password.';});
  }
  document.getElementById('weUnlock').addEventListener('click', unlock);
  document.getElementById('wePass').addEventListener('keydown', function(e){if(e.key==='Enter')unlock();});
})();
</script>

<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>

<script>
(function(){
  var KEY = "hanrachelqiu-cv-downloads";
  var API = "https://api.countapi.xyz";
  var el = document.getElementById("cv-downloads");
  var link = document.getElementById("pdf-cv-link");
  function render(txt){ if(el){ el.textContent = txt; } }
  /* read current count on load */
  fetch(API + "/get/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render("下载量 " + d.value); } }).catch(function(){ render("下载量 0"); });
  /* increment on click (fire-and-forget) */
  if(link){ link.addEventListener("click", function(){ fetch(API + "/hit/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render("下载量 " + d.value); } }).catch(function(){}); }); }
})();
</script>

</body>
</html>
