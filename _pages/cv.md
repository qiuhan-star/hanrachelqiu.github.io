---

layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /Resume_Han_(Rachel)_QIU.pdf
---

{% include base_path %}

<html lang="en">
<head>
<meta charset="UTF-8">
<title>Collapsible List Example</title>
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
  <a id="pdf-cv-link" href="{{ '/files/CV_HanQiu.pdf' | absolute_url }}" target="_blank" rel="noopener" style="display:inline-block;background:#777;color:#fff;padding:8px 14px;border-radius:4px;text-decoration:none;cursor:pointer;font-size:15px;"><span data-lang="en">📄 PDF CV</span><span data-lang="zh">📄 PDF 简历</span></a>
  <span id="cv-downloads" style="margin-left:12px;font-size:0.9em;color:#555;"><span data-lang="en" class="dl-en">downloads: 0</span><span data-lang="zh" class="dl-zh">下载量 0</span></span>
</p>

<button class="collapsible"><span data-lang="en">Education</span><span data-lang="zh">教育背景</span></button>
<div class="content">
<div data-lang="en" markdown="1">
  <p>* Ph.D. in Public Administration, Zhejiang University, Sept. 2025 - Present</p>
  <p>* M.A. in Administration Management, Xiamen University, Sept. 2022 - Jun. 2025</p>
  <p>* B.A. in Public Administration, Hainan University, Sept. 2018 - Jun. 2022</p>
  <p>* B.S. in Public Service and Public Policy, Arizona State University, Sept. 2018 - May. 2022</p>
</div>
<div data-lang="zh" markdown="1">
  <p>* 公共管理博士，浙江大学，2025年9月 - 至今</p>
  <p>* 行政管理硕士，厦门大学，2022年9月 - 2025年6月</p>
  <p>* 公共管理文学学士，海南大学，2018年9月 - 2022年6月</p>
  <p>* 公共服务与公共政策理学学士，亚利桑那州立大学，2018年9月 - 2022年5月</p>
</div>
</div>

<button class="collapsible"><span data-lang="en">Skills</span><span data-lang="zh">技能</span></button>
<div class="content">
<div data-lang="en" markdown="1">
  <p>Stata, SPSS, R, Python, QGIS, and ArcGIS;</p>
  <p>Office (Word, Excel, and PowerPoint)</p>
  <p>Adobe (PS, LR, AU, and PR)</p>
</div>
<div data-lang="zh" markdown="1">
  <p>Stata、SPSS、R、Python、QGIS 与 ArcGIS；</p>
  <p>Office（Word、Excel 与 PowerPoint）</p>
  <p>Adobe（PS、LR、AU 与 PR）</p>
</div>
</div>

<button class="collapsible"><span data-lang="en">Publications</span><span data-lang="zh">发表论文</span></button>
<div class="content">
<div data-lang="en" markdown="1">
  <!-- Publications content here -->
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>
<div data-lang="zh" markdown="1">
  <!-- 论文内容 -->
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>
</div>

<button class="collapsible"><span data-lang="en">Talks</span><span data-lang="zh">演讲报告</span></button>
<div class="content">
<div data-lang="en" markdown="1">
  <!-- Talks content here -->
  <ul>{% assign cv_talks = site.talks | where_exp: "post", "post.lang != 'zh-CN'" %}{% for post in cv_talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
</div>
<div data-lang="zh" markdown="1">
  <!-- 演讲内容 -->
  <ul>{% assign cv_talks_zh = site.talks | where_exp: "post", "post.lang == 'zh-CN'" %}{% for post in cv_talks_zh reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
</div>
</div>

<button class="collapsible"><span data-lang="en">Service and leadership</span><span data-lang="zh">服务与领导</span></button>
<div class="content">
<div data-lang="en" markdown="1">

<h2 class="section-title">Journal Services</h2>
<h3 class="sub-section-title">Reviewing Activities for Journal</h3>
<ul>
    <li><span class="role">Reviewer</span>: Journal of Computer Sciences and Informatics (2024)</li>
</ul>

<h2 class="section-title">Memberships</h2>
<ul>
    <li>Student member, ICPA-Forum Membership - JCPA & Scholarly Society for ICPA, Beijing, CN, 2023-02-22 to 2024-02-02.</li>
</ul>

<h2 class="section-title">Student Organization Service</h2>
<ul>
    <li><span class="role">Class President</span>, 2024 - 2025</li>
    <li><span class="role">Member</span>, Student Union, Hainan University, 2018 - 2021</li>
    <li><span class="role">Member</span>, Comprehensive Department, Independent Management Committee, Hainan University, 2018 - 2020</li>
    <li><span class="role">Deputy Minister</span>, Practice Department, College Youth League Committee, HAITC, 2019 - 2021</li>
</ul>

<h2 class="section-title">Club Service</h2>
<ul>
    <li><span class="role">Member and Project Organizer</span>, English Club, Hainan University, 2019 - 2022</li>
    <li><span class="role">Member</span>, Photography Club, Hainan University, 2018 - 2019</li>
</ul>

<h2 class="section-title">Volunteer Service</h2>
<ul>
    <li>Volunteers Association, Xiamen University, Apr. 2023</li>
    <li>Volunteers Association, School of Public Affairs, Xiamen University, Apr. 2023 - Present</li>
    <li>Youth Volunteers Association, Haikou City, Hainan Province, May 2019 - Jan. 2020</li>
    <li>Youth Volunteers Association, Hainan University, Mar. 2019 - Mar. 2020</li>
    <li>High School Sunshine Volunteer Federation, Oct. 2016 - Jun. 2018</li>
</ul>

<h2 class="section-title">Community Service</h2>
<ul>
    <li><span class="role">Environmental Protection</span>: Engaged in the <span class="role">Haikou Mother River Project</span>, with a primary focus on the conservation of wetlands and the preservation of <span class="role">mangrove ecosystems</span>. Delivered <span class="role">environmental education sessions</span> and initiated community-driven programs for waste sorting and recycling to advance sustainable waste management.</li>
    <li><span class="role">Elderly Outreach</span>: Regularly visited elderly residents in the local community, offering companionship, assistance with daily tasks, and organizing activities to enhance their quality of life.</li>
    <li><span class="role">Business Assistance for Free Trade Zone Merchants</span>: Provided <span class="role">English language assistance</span> to merchants in the free trade zone, enhancing their ability to communicate with foreign visitors and contribute to the development of <span class="role">multicultural marketing strategies</span>.</li>
    <li><span class="role">Education and Mentorship</span>: Offered <span class="role">targeted Chinese language education</span> to children in <span class="role">Mengman Town, Xishuangbanna</span>, tailored to overcome the challenges of Mandarin acquisition among native speakers. <span class="role">Provided in-depth tutoring</span> and <span class="role">academic guidance</span> within the community, with a focus on college preparation and specialized subject coaching to support educational development.</li>
    <li><span class="role">COVID-19 Community Response</span>: Led initiatives for the distribution of personal protective equipment (PPE), organized daily temperature screenings, and managed health code verifications to ensure community safety. Raised funds and donated essential supplies, including masks, to support at-risk populations and front-line workers. Conducted vaccination awareness campaigns to promote community health and immunity.</li>
</ul>
</div>
<div data-lang="zh" markdown="1">

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
</div>

<button class="collapsible"><span data-lang="en">Work experience</span><span data-lang="zh">工作经历</span></button>
<div class="content">
<div data-lang="en">
  <div class="weGate" data-cipher="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">
    <p>🔒 This section is password-protected. Enter the password to view.</p>
    <input type="password" class="wePass" placeholder="Password" style="padding:6px 8px;">
    <button class="weUnlock" style="padding:6px 10px;cursor:pointer;">Unlock</button>
    <span class="weMsg" style="color:#c0392b;margin-left:8px;"></span>
  </div>
  <div class="weData" style="display:none;"></div>
</div>
<div data-lang="zh">
  <div class="weGate" data-cipher="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">
    <p>🔒 本栏目已加密，输入密码后查看。</p>
    <input type="password" class="wePass" placeholder="密码" style="padding:6px 8px;">
    <button class="weUnlock" style="padding:6px 10px;cursor:pointer;">Unlock</button>
    <span class="weMsg" style="color:#c0392b;margin-left:8px;"></span>
  </div>
  <div class="weData" style="display:none;"></div>
</div>
</div>

<script>
(function(){
  function b64ToBytes(b){var s=atob(b);var u=new Uint8Array(s.length);for(var i=0;i<s.length;i++){u[i]=s.charCodeAt(i);}return u;}
  var gates=document.querySelectorAll('.weGate');
  for(var g=0; g<gates.length; g++){
    (function(gate){
      var C=gate.getAttribute('data-cipher');
      var pass=gate.querySelector('.wePass');
      var unlockBtn=gate.querySelector('.weUnlock');
      var msg=gate.querySelector('.weMsg');
      var data=gate.parentElement.querySelector('.weData');
      function unlock(){
        var pwd=pass.value;
        if(!pwd){msg.textContent='Please enter password.';return;}
        var bytes=b64ToBytes(C);
        var salt=bytes.slice(0,16), iv=bytes.slice(16,28), ct=bytes.slice(28);
        crypto.subtle.importKey('raw', new TextEncoder().encode(pwd), 'PBKDF2', false, ['deriveKey'])
        .then(function(km){return crypto.subtle.deriveKey({name:'PBKDF2',salt:salt,iterations:100000,hash:'SHA-256'}, km, {name:'AES-GCM',length:256}, false, ['decrypt']);})
        .then(function(key){return crypto.subtle.decrypt({name:'AES-GCM',iv:iv}, key, ct);})
        .then(function(plain){data.innerHTML=new TextDecoder().decode(plain);data.style.display='block';gate.style.display='none';})
        .catch(function(){msg.textContent='Wrong password.';});
      }
      unlockBtn.addEventListener('click', unlock);
      pass.addEventListener('keydown', function(e){if(e.key==='Enter')unlock();});
    })(gates[g]);
  }
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
  var en = document.querySelector("#cv-downloads .dl-en");
  var zh = document.querySelector("#cv-downloads .dl-zh");
  function render(n){ if(en){ en.textContent = "downloads: " + n; } if(zh){ zh.textContent = "下载量 " + n; } }
  /* read current count on load */
  fetch(API + "/get/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render(d.value); } else { render(0); } }).catch(function(){ render(0); });
  /* increment on click (fire-and-forget) */
  var link = document.getElementById("pdf-cv-link");
  if(link){ link.addEventListener("click", function(){ fetch(API + "/hit/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render(d.value); } }).catch(function(){}); }); }
})();
</script>

</body>
</html>
