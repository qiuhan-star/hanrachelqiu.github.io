---
title: "Method Notes #1: What I Actually Preregister on OSF"
date: 2026-08-02
tags:
  - 方法笔记
  - 开放科学
  - 预注册
  - Methods Notes
  - Preregistration
---

Over the past few years, a growing number of top journals in public administration — and the social sciences more broadly — have started to require or encourage **preregistration**. Yet for many empirical researchers it remains an abstract idea: what exactly do you register? Can you not change anything once registered? And what is OSF?

When I first properly preregistered one of my own study designs on OSF, I also got stuck for a long time. This "method note" records what I figured out and the pitfalls I hit — a quick-start guide for fellow researchers in the field.

## What preregistration actually is

In one sentence: **before you collect data or start analysis, write down your research design, hypotheses, and analysis plan, then store it publicly with a timestamp.**

Its purpose is not to "swear you'll never make a mistake," but to separate two things — what you thought through **in advance**, and what you discovered **after the fact**. This directly counters two common research problems: p-hacking (fishing for significance by trying model after model) and HARKing (Hypothesizing After Results are Known).

## Why public administration research especially should do it

Empirical work in public administration rarely "runs one model and calls it a day": survey experiments, quasi-experiments, and secondary administrative data all leave plenty of analytic choices — which control variables to include, how to handle missing values, whether to add interaction terms, and at which level to cluster. Every extra degree of freedom raises the risk that a conclusion "looks significant but was really manufactured."

And what methodology reviewers scrutinize most in public administration is precisely the **credibility of causal-identification claims**. Preregistration locks those choices in advance, telling reviewers up front: "this identification strategy was decided beforehand, not picked after seeing the results." For boosting research credibility, the return on investment is very high.

## How to do it on OSF (hands-on)

1. **Create a project**: sign up for an OSF account and create a Project (free, open source).
2. **Pick a template**: click "Preregister." Common templates include the official OSF *Preregistration Template* (most complete fields, recommended for the social sciences), *AsPredicted* (minimal), and various discipline-specific ones. For my empirical PA work I usually choose the official template.
3. **Fill in the key modules**:
   - *Study Information / Design*: research question, design type (experiment / survey / observational), sample or data source.
   - *Hypotheses*: state each hypothesis explicitly, including direction (positive / negative / non-linear).
   - *Variables*: independent, dependent, moderators / mediators, and how each is measured.
   - *Analysis Plan*: **the easiest to undervalue, and the most critical.** Write to the level of "dependent variable ~ independent + control set, clustered at level X, using R's `lme4` / Stata's `reghdfe`," and state how you handle missing values, multiple-comparison correction, and your planned sample size with its justification (power).
4. **Submission type**: choose **Preregistration** (immutable after submission) or **Preregistration+** (keeps an updatable copy). For your first time, the former forces you to be clear.
5. **Get a DOI, link it**: after submission you get a permanent link and DOI. Put it in the methods section of your paper and attach it when you submit.

## Pitfalls I hit

- **Analysis plan too vague.** "Will use regression analysis" is as good as writing nothing. Reviewers want the specific model specification, not methodology jargon.
- **Forgot the data-acquisition workflow.** PA administrative data often needs approval; the timeline must be clear, otherwise "registered the design but haven't received the data yet" breaks the temporal logic.
- **Treated preregistration as a straitjacket.** You can absolutely do exploratory analysis afterward — just clearly label it "outside the preregistration." Reviewers actually trust you more, because you've separated confirmation from exploration.

## What it really changed

After my first preregistration, the biggest change wasn't that the paper got more rigorous. It was that **writing the plan forced me to turn "I thought I knew" into "I can write it clearly."** Many fuzzy steps exposed themselves the moment I had to fill in the form.

If you also do empirical research in public administration, I strongly suggest starting with preregistration on your next study. OSF is free and open source — you can set up a project in ten minutes. And the credibility it buys is worth far more than ten minutes.

---

## 中文对照

最近几年，越来越多公共管理（乃至整个社科）的顶刊开始要求或鼓励**预注册（preregistration）**。但对很多做实证研究的同学来说，它仍是个抽象词：注册什么？注册了就不能改了吗？OSF 又是什么？

我第一次在 OSF 上把自己研究的设计正经预注册下来时，也卡了很久。这篇"方法笔记"就把我弄明白的事和踩过的坑记下来，算是一个给同领域同学的开箱指南。

### 预注册到底是什么

一句话：**在收集数据或开始分析之前，把你的研究设计、假设和分析计划写下来，公开存证并打上时间戳。**

它的目的不是"发誓绝不犯错"，而是把两件事区分开——**事前想清楚的**，和**事后才发现的**。这直接对冲两种常见的科研漏洞：p-hacking（为了显著反复试模型）和 HARKing（有了结果再倒编假设）。

### 为什么公管研究尤其该做

公管的实证很少"只跑一个模型就完事"：调查实验、准实验、二手行政数据，每一样都有大量分析选择空间——控制变量怎么挑、缺失值怎么处理、交互项加不加、聚类层级定在哪。这些自由度每多一个，结论"看起来显著、其实是凑出来"的风险就多一分。

而公管最被方法论挑剔的，恰恰就是**因果识别主张的可信度**。预注册把这些选择提前锁死，等于提前告诉评审："这条识别策略是我事先定的，不是看结果后挑的。"这对提升研究可信度，性价比极高。

### 在 OSF 上怎么操作（实操版）

1. **建项目**：注册 OSF 账号，新建一个 Project（免费、开源）。
2. **选模板**：点 "Preregister"，常用模板有 OSF 官方 *Preregistration Template*（字段最全，推荐社科用）、*AsPredicted*（极简）、以及各学科模板。我做公管实证研究一般选官方模板。
3. **填关键模块**：
   - *Study Information / Design*：研究问题、设计类型（实验 / 调查 / 观察）、样本或数据来源。
   - *Hypotheses*：逐条写明假设，含方向（正向 / 负向 / 非线性）。
   - *Variables*：自变量、因变量、调节 / 中介变量，以及各自的测量方式。
   - *Analysis Plan*：**最容易被轻视、也最关键**。要写到"因变量 ~ 自变量 + 控制集，聚类到 X 层，用 R 的 `lme4` / Stata 的 `reghdfe`"这种粒度，并说明缺失值处理、多重比较校正、计划样本量及依据（power）。
4. **提交类型**：选 **Preregistration**（注册后不可改）还是 **Preregistration+**（留一份可更新的副本）。首次建议用前者，逼自己写清楚。
5. **拿 DOI、挂链接**：提交后会得到永久链接和 DOI，写进论文方法部分，投稿时一并附上。

### 我踩过的坑

- **分析计划写得太空**。"将使用回归分析"等于没写。评审要看的是具体模型设定，不是方法论名词。
- **漏了数据获取流程**。公管的行政数据常要审批，时间线必须写清，否则"注册了设计但数据还没到手"会让时间逻辑穿帮。
- **把预注册当枷锁**。其实你完全可以事后做探索性分析，只要明确标注"这部分不在预注册内"，评审反而更信任你——因为你区分了验证与探索。

### 它真正改变了什么

做完第一次预注册，最大的变化不是文章变严谨了，而是**写计划这一步，逼我把"我以为我知道"变成"我能写清楚"**。很多模糊的环节，在填表的那一刻就自己暴露了。

如果你也在做公管方向的实证研究，强烈建议下一个研究就从预注册开始。OSF 免费、开源，十分钟就能建好一个项目——而它换来的可信度，远不止十分钟的价值。
