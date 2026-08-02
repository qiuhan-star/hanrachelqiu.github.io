---
title: "迈向公正转型未来：对中国30个地方政府（2010–2020）的定性比较分析"
collection: talks
type: "在比较公共政策国际会议上做报告"
permalink: /zh/talks/2024-04-19-just-transition
lang: zh-CN
lang_alt: /talks/2024-04-19-just-transition
venue: "清华大学"
date: 2024-04-19
location: "中国北京"
---
关于会议
-
比较公共政策国际会议由清华大学公共管理学院、《比较政策分析期刊》（JCPA）与国际比较政策分析论坛（ICPA-Forum）联合举办。

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
<h2>个人感悟</h2>
<a href="#" onclick="toggleReflections()">展开感悟</a>
<div id="reflections-content" style="display:none;">
    <p>🇨🇳 清华之行～</p>
    <p>清华参会，收获满满！🌟</p>
    <p>🙌 衷心感谢讨论嘉宾的精彩点评和宝贵建议 - 令人深受启发！🤝🤝</p>
    <p>👥 遇见了很多热情和有想法的小伙伴们，东道主的热情款待令人倍感温馨。</p>
    <p>🍰 还品尝到了美味的茶歇小食～</p>
    <p>带着热情与知识满载而归，准备继续奋斗！💪✨</p>
</div>

照片
-
定格精彩瞬间！📸
<div id="homeCarousel">
  <div id="homeCarouselWrap">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-1.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-2.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-3.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-4.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-5.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-6.JPG">
    <img src="{{ site.url }}/images/talks/Talk-2024-04-19-7.JPG">
  </div>
</div>
<div id="modal">
  <span id="closeBtn">×</span>
  <img id="img2">
</div>
<style>
    #homeCarousel {
        width: 100%;
        height: 800px; /* 添加单位px */
        overflow: hidden;
        border: solid rgba(0, 0, 0, 0.1);
        position: relative;
        margin: 0 auto; /* 水平居中 */
    }
    #homeCarouselWrap {
        display: flex;
        width: 75%; /* 确保宽度与父容器相同 */
        position: absolute;
        animation: move 20s linear infinite;
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
            transform: translateX(-700%); /* 调整为两张图片的总宽度 */
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
        object-fit: contain; /* 保持图片比例，完整显示在容器内 */
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
