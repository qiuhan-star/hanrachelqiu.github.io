---
title: "Embracing Agile Governance: Cultivating Innovation and Addressing the Challenges of Generative Artificial Intelligence in Higher Education"
collection: talks
type: "Presenter at Journal of Asian Public Policy Special Issue Authors' Workshop"
permalink: /talks/2023-12-01-agile-governance
lang_alt: /zh/talks/2023-12-01-agile-governance
venue: "The Hong Kong University of Science and Technology (HKUST)"
date: 2023-12-01
location: "Hong Kong, China"
---
News
-
[>Read More](https://mp.weixin.qq.com/s/EuHTxNFZpdGGEOrvOj-RPg)

<style>
  /* 样式定义 */
  #reflections-content {
    display: none; /* 默认不显示 */
    padding: 15px;
    border-left: 3px solid #ccc;
    margin-left: 20px;
  }
  
  /* 鼠标悬停在链接上时的样式 */
  a:hover {
    color: #007bff;
    text-decoration: underline;
  }
</style>

<script>
  function toggleReflections() {
    var content = document.getElementById('reflections-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
</script>

<!-- 标题和折叠内容的链接 -->
<h2>Personal Insights</h2>
<a href="#" onclick="toggleReflections()">Expand for Insights</a>

<!-- 折叠内容 -->
<div id="reflections-content" style="display:none;">
    <p>🇭🇰 Academic Journey at HKUST ~</p>
    <p>作为硕士生，第一次参加学术会议！
    我和我的合作者很幸运地以全场唯一的学生身份入选并参会～
    非常感谢评审专家对我们的研究给予的肯定和宝贵机会[Salute]。</p>
    <p>这次会议汇聚了来自世界不同地区的顶尖专家和学者，
    他们带来了他们的智慧和独特见解，让人受益匪浅！
    另外还结识了许多志同道合的小伙伴们💕～</p>
    <p>感谢主办方的热情招待，
    每一个细节都透露着温馨和专业，让人难以忘怀。
    第二天自己参观了一下港科大校园，
    饱览了校内融合的山海美景[哇]～</p>
    <p>It marks both an ending and a beginning!
    Continue fighting![加油]💪💪</p>
</div>

Photos
-
Captured in the moment! 📸
<div id="homeCarousel">
  <div id="homeCarouselWrap">
    <img src="{{ site.url }}/images/talks/Talk-2023-12-01-1.PNG">
    <img src="{{ site.url }}/images/talks/Talk-2023-12-01-2.PNG">
    <img src="{{ site.url }}/images/talks/Talk-2023-12-01-3.PNG">
    <img src="{{ site.url }}/images/talks/Talk-2023-12-01-4.PNG">
  </div>
</div>
<div id="modal">
  <span id="closeBtn">×</span>
  <img id="img2">
</div>
<style>
    #homeCarousel {
        width: 100%;
        height: 1000px; /* 添加单位px */
        overflow: hidden;
        border: solid rgba(0, 0, 0, 0.1);
        position: relative;
        margin: 0 auto; /* 水平居中 */
    }
    #homeCarouselWrap {
        display: flex;
        width: 75%; /* 确保宽度与父容器相同 */
        position: absolute;
        animation: move 10s linear infinite;
    }
    #homeCarouselWrap img {
        flex-shrink: 0; /* 防止图片缩小 */
        max-width: 100%; /* 确保图片宽度不超过容器宽度 */
        max-height: 100%; /* 确保图片高度不超过容器高度 */
        height: auto; /* 高度自适应 */
        cursor: pointer;
        object-fit: contain; /* 保持图片比例，完整显示在容器内 */
    }
    @keyframes move {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-300%); /* 调整为两张图片的总宽度 */
        }
    }
    #homeCarouselWrap:hover {
        animation-play-state: paused;
    }
    #modal {
        display: none; /* 默认不显示模态框 */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0; /* 初始状态不应该是 top: -100% */
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.9);
        transition-duration: 0.4s;
        text-align: center;
    }
    #modal img {
        width: 75%;
        max-height: 80%;
        display: block;
        margin: 0 auto;
        object-fit: contain; /* 保持图片比例，完整显示在模态框内 */
    }
    #closeBtn {
        position: absolute;
        top: 5%;
        right: 2.5%;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    }
    @media(max-width: 400px) {
        #closeBtn {
            top: 0;
        }
    }
</style>
<script>
    document.getElementById('homeCarousel').addEventListener('click', function(e) {
      if(e.target.tagName === 'IMG') {
        var modal = document.getElementById('modal');
        modal.style.top = '0';
        modal.style.paddingTop = '12%';
        document.getElementById('img2').src = e.target.src;
      }
    });

    document.getElementById('closeBtn').addEventListener('click', function() {
      var modal = document.getElementById('modal');
      modal.style.top = '-100%';
      modal.style.paddingTop = '0';
    });
</script>
#Talk #AcademicLife


