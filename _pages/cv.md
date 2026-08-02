---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
lang_alt: /zh/cv/
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
  <a id="pdf-cv-link" href="{{ '/files/CV_HanQiu.pdf' | absolute_url }}" target="_blank" rel="noopener" style="display:inline-block;background:#777;color:#fff;padding:8px 14px;border-radius:4px;text-decoration:none;cursor:pointer;font-size:15px;">📄 PDF CV</a>
  <span id="cv-downloads" style="margin-left:12px;font-size:0.9em;color:#555;">downloads: 0</span>
</p>

<button class="collapsible">Education</button>
<div class="content">
  <p>* Ph.D. in Public Administration, Zhejiang University, Sept. 2025 - Present</p>
  <p>* M.A. in Administration Management, Xiamen University, Sept. 2022 - Jun. 2025</p>
  <p>* B.A. in Public Administration, Hainan University, Sept. 2018 - Jun. 2022</p>
  <p>* B.S. in Public Service and Public Policy, Arizona State University, Sept. 2018 - May. 2022</p>
</div>

<button class="collapsible">Skills</button>
<div class="content">
  <p>Stata, SPSS, R, Python, QGIS, and ArcGIS;</p>
  <p>Office (Word, Excel, and PowerPoint)</p>
  <p>Adobe (PS, LR, AU, and PR)</p>
</div>

<button class="collapsible">Publications</button>
<div class="content">
  <!-- Publications content here -->
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
</div>

<button class="collapsible">Talks</button>
<div class="content">
  <!-- Talks content here -->
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
</div>

<button class="collapsible">Service and leadership</button>
<div class="content">

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

<button class="collapsible">Work experience</button>
<div class="content">
  <div id="weGate">
    <p>🔒 This section is password-protected. Enter the password to view.</p>
    <input type="password" id="wePass" placeholder="Password" style="padding:6px 8px;">
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
  fetch(API + "/get/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render("downloads: " + d.value); } }).catch(function(){ render("downloads: 0"); });
  /* increment on click (fire-and-forget) */
  if(link){ link.addEventListener("click", function(){ fetch(API + "/hit/" + KEY).then(function(r){return r.json();}).then(function(d){ if(d && typeof d.value !== "undefined"){ render("downloads: " + d.value); } }).catch(function(){}); }); }
})();
</script>

</body>
</html>
