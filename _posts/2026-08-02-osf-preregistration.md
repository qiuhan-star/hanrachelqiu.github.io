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

## What preregistration actually is

In one sentence: before you collect data or start analysis, write down your research design, hypotheses, and analysis plan, then store it publicly with a timestamp.
一句话：在收集数据或开始分析之前，把你的研究设计、假设和分析计划写下来，公开存证并打上时间戳。

Its purpose is not to "swear you'll never make a mistake," but to separate two things — what you thought through in advance, and what you discovered after the fact.
它的目的不是"发誓绝不犯错"，而是把两件事区分开——事前想清楚的，和事后才发现的。

This directly counters two common research problems: p-hacking (fishing for significance by trying model after model) and HARKing (Hypothesizing After Results are Known).
这直接对冲两种常见的科研漏洞：p-hacking（为了显著反复试模型）和 HARKing（有了结果再倒编假设）。

## Why public administration research especially should do it

Empirical work in public administration rarely "runs one model and calls it a day": survey experiments, quasi-experiments, and secondary administrative data all leave plenty of analytic choices.
公管的实证很少"只跑一个模型就完事"：调查实验、准实验、二手行政数据，每一样都有大量分析选择空间。

Which control variables to include, how to handle missing values, whether to add interaction terms, and at which level to cluster — every extra degree of freedom raises the risk that a conclusion "looks significant but was really manufactured."
控制变量怎么挑、缺失值怎么处理、交互项加不加、聚类层级定在哪——这些自由度每多一个，结论"看起来显著、其实是凑出来"的风险就多一分。

And what methodology reviewers scrutinize most in public administration is precisely the credibility of causal-identification claims.
而公管最被方法论挑剔的，恰恰就是因果识别主张的可信度。

Preregistration locks those choices in advance, telling reviewers up front: "this identification strategy was decided beforehand, not picked after seeing the results."
预注册把这些选择提前锁死，等于提前告诉评审："这条识别策略是我事先定的，不是看结果后挑的。"

For boosting research credibility, the return on investment is very high.
这对提升研究可信度，性价比极高。

## How to do it on OSF (hands-on)

**Step 1 — Create a project.** Sign up for an OSF account and create a Project (free, open source).
**第 1 步——建项目。** 注册 OSF 账号，新建一个 Project（免费、开源）。

**Step 2 — Pick a template.** Click "Preregister." Common templates include the official OSF *Preregistration Template* (most complete fields, recommended for the social sciences), *AsPredicted* (minimal), and various discipline-specific ones.
**第 2 步——选模板。** 点 "Preregister"，常用模板有 OSF 官方 *Preregistration Template*（字段最全，推荐社科用）、*AsPredicted*（极简）、以及各学科模板。

For my empirical PA work I usually choose the official template.
我做公管实证研究一般选官方模板。

**Step 3 — Fill in the key modules.** Study Information / Design: research question, design type (experiment / survey / observational), sample or data source.
**第 3 步——填关键模块。** *Study Information / Design*：研究问题、设计类型（实验 / 调查 / 观察）、样本或数据来源。

Hypotheses: state each hypothesis explicitly, including direction (positive / negative / non-linear).
*Hypotheses*：逐条写明假设，含方向（正向 / 负向 / 非线性）。

Variables: independent, dependent, moderators / mediators, and how each is measured.
*Variables*：自变量、因变量、调节 / 中介变量，以及各自的测量方式。

Analysis Plan: the easiest to undervalue, and the most critical.
*Analysis Plan*：最容易被轻视、也最关键。

Write to the level of "dependent variable ~ independent + control set, clustered at level X, using R's `lme4` / Stata's `reghdfe`," and state how you handle missing values, multiple-comparison correction, and your planned sample size with its justification (power).
要写到"因变量 ~ 自变量 + 控制集，聚类到 X 层，用 R 的 `lme4` / Stata 的 `reghdfe`"这种粒度，并说明缺失值处理、多重比较校正、计划样本量及依据（power）。

**Step 4 — Submission type.** Choose *Preregistration* (immutable after submission) or *Preregistration+* (keeps an updatable copy).
**第 4 步——提交类型。** 选 *Preregistration*（注册后不可改）还是 *Preregistration+*（留一份可更新的副本）。

For your first time, the former forces you to be clear.
首次建议用前者，逼自己写清楚。

**Step 5 — Get a DOI, link it.** After submission you get a permanent link and DOI.
**第 5 步——拿 DOI、挂链接。** 提交后会得到永久链接和 DOI。

Put it in the methods section of your paper and attach it when you submit.
写进论文方法部分，投稿时一并附上。

## Pitfalls I hit

**Analysis plan too vague.** "Will use regression analysis" is as good as writing nothing.
**分析计划写得太空。** "将使用回归分析"等于没写。

Reviewers want the specific model specification, not methodology jargon.
评审要看的是具体模型设定，不是方法论名词。

**Forgot the data-acquisition workflow.** PA administrative data often needs approval; the timeline must be clear.
**漏了数据获取流程。** 公管的行政数据常要审批，时间线必须写清。

Otherwise "registered the design but haven't received the data yet" breaks the temporal logic.
否则"注册了设计但数据还没到手"会让时间逻辑穿帮。

**Treated preregistration as a straitjacket.** You can absolutely do exploratory analysis afterward — just clearly label it "outside the preregistration."
**把预注册当枷锁。** 其实你完全可以事后做探索性分析，只要明确标注"这部分不在预注册内"。

Reviewers actually trust you more, because you've separated confirmation from exploration.
评审反而更信任你——因为你区分了验证与探索。

## What it really changed ／ 它真正改变了什么

After my first preregistration, the biggest change wasn't that the paper got more rigorous.
做完第一次预注册，最大的变化不是文章变严谨了。

It was that writing the plan forced me to turn "I thought I knew" into "I can write it clearly."
而是写计划这一步，逼我把"我以为我知道"变成"我能写清楚"。

Many fuzzy steps exposed themselves the moment I had to fill in the form.
很多模糊的环节，在填表的那一刻就自己暴露了。

If you also do empirical research in public administration, I strongly suggest starting with preregistration on your next study.
如果你也在做公管方向的实证研究，强烈建议下一个研究就从预注册开始。

OSF is free and open source — you can set up a project in ten minutes.
OSF 免费、开源，十分钟就能建好一个项目。

And the credibility it buys is worth far more than ten minutes.
而它换来的可信度，远不止十分钟的价值。
