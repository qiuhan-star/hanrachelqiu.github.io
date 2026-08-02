---
title: "Methods #3: When ANOVA Is the Wrong Tool — From Variance Analysis to Mixed-Effects Models"
date: 2026-08-02
tags:
  - 方法
  - ANOVA
  - 混合效应模型
  - Methods Notes
  - Statistics
  - Mixed Models
---

## The ANOVA reflex, and where it breaks ／ ANOVA 反射，以及它哪里会断

ANOVA is usually the first "real" statistical method researchers learn, and it shows: people reach for it by reflex.
ANOVA 通常是研究者学会的第一个"正经"统计方法，毛病也出在这：大家会条件反射般地用它。

In public administration, that reflex is dangerous.
在公共管理里，这种反射很危险。

Our data are rarely the tidy, balanced, independent sets ANOVA was built for — they are clustered in schools, districts, and villages; measured repeatedly over time; and almost never evenly sized across groups.
我们的数据很少是 ANOVA 当初为之设计的那种整洁、平衡、独立的数据集——它们嵌套在学校、区县、村庄里，被反复追踪测量，而且各组规模几乎从不均等。

**Non-independence.** The classic one-way / two-way ANOVA assumes residuals are independent.
**非独立性。** 经典的单因素/双因素 ANOVA 假设残差相互独立。

But citizens are nested in neighborhoods, students in schools, officials in bureaus.
但市民嵌套在社区、学生嵌套在学校、官员嵌套在部门。

Ignoring that clustering biases your standard errors downward — you get "significant" results that are artifacts of the dependence.
忽略这种聚类会把标准误低估——你得到的"显著"结果，其实只是依赖结构造出来的假象。

This is the single most common ANOVA mistake in applied PA work.
这是应用公管研究里最常见的 ANOVA 错误。

**Balance and equal variance.** Real designs are unbalanced (one district has 12 towns, another has 3), and group variances differ.
**平衡与方差齐性。** 真实设计都不平衡（一个区有 12 个镇，另一个只有 3 个），组间方差也不同。

ANOVA's elegance assumes otherwise.
而 ANOVA 的优雅恰恰建立在"否则"的假设上。

**Repeated measures.** Pre–post, panel, and survey waves violate the independence assumption hard.
**重复测量。** 前测–后测、面板、调查多波次，会狠狠地违反独立性假设。

Repeated-measures ANOVA patches this but is brittle: it demands complete cases and struggles with time-varying covariates and attrition.
重复测量 ANOVA 打补丁，但很脆弱：它要求完整个案，且难以处理时变协变量和样本流失。

## What mixed-effects models buy you ／ 混合效应模型能给你什么

**Random effects model the clustering explicitly.** A random intercept for "district" lets each district have its own baseline while you still estimate the overall effect.
**用随机效应把聚类显式建模出来。** 给"区县"设一个随机截距，让每个区县有自己的基线，同时你仍能估计总体效应。

**They handle unbalanced and missing data natively**, without throwing away incomplete rows the way balanced ANOVA often does.
**原生地处理不平衡与缺失数据**，不必像平衡 ANOVA 那样动辄丢掉不完整行。

**Fixed + random, cleanly separated.** You estimate the population-level effect (fixed) while honestly accounting for between-group variation (random).
**固定效应与随机效应干净分开。** 你估计总体层面的效应（固定），同时诚实地交代组间变异（随机）。

**Crossed random effects.** E.g., variation due to *individual* and variation due to *item/survey-wave* can both be modeled at once.
**交叉随机效应。** 比如由个体带来的变异和由题目/调查波次带来的变异，可以一次都建进去。

## A public administration example ／ 一个公共管理例子

Suppose you study whether a training program raises civil servants' performance, and your data are clustered in bureaus and measured at three time points.
假设你研究某个培训项目是否提升了公务员绩效，数据按部门聚类、在三个时间点测量。

A one-way ANOVA on the pooled data is simply wrong — it pretends 500 observations from 20 bureaus are 500 independent people.
对合并数据做一次单因素 ANOVA 根本是错的——它假装来自 20 个部门的 500 条观测是 500 个独立个体。

Repeated-measures ANOVA is more honest but collapses under attrition.
重复测量 ANOVA 更诚实，但会在样本流失下崩溃。

A mixed model handles both:
混合模型同时搞定两者：

`performance ~ treatment * time + (1 + time | bureau) + (1 | employee)`
`performance ~ treatment * time + (1 + time | bureau) + (1 | employee)`

— a fixed effect for the treatment–time interaction, a random intercept (and slope) for bureau, and a random intercept for the individual.
—— 固定效应是"处理×时间"交互，随机部分是部门的随机截距（及斜率）加上个体的随机截距。

## How to actually run it ／ 到底怎么跑

**R (`lme4`):** `lmer(performance ~ treatment * time + (1 + time | bureau) + (1 | employee), data = d)`.
**R（`lme4`）：** `lmer(performance ~ treatment * time + (1 + time | bureau) + (1 | employee), data = d)`。

For non-Gaussian outcomes, `glmer` with a family.
结果不是高斯分布时用 `glmer` 并指定 family。

**Stata:** `mixed performance c.treatment##c.time || bureau: time || employee:`.
**Stata：** `mixed performance c.treatment##c.time || bureau: time || employee:`。

**Always report more than p-values:** variance components, the intraclass correlation (ICC, i.e., how much of the variance lives *between* clusters), and a model-comparison metric such as AIC.
**永远别只报 p 值：** 要报方差成分、组内相关系数（ICC，即有多少方差活在组间）、以及模型比较指标如 AIC。

A significant fixed effect with a near-zero ICC is a different story than one with ICC = 0.4.
固定效应显著但 ICC 接近 0，和 ICC=0.4 是完全不同的故事。

**Watch for convergence failures and singular fits** — they usually signal you specified more random structure than the data support.
**盯住收敛失败与奇异拟合**——它们通常说明你设定的随机结构超出了数据能支撑的范围。

## Pitfalls I hit ／ 我踩过的坑

**Treating a "significant ANOVA" as causal.** Mixed models fix the *variance structure*, not the *identification*.
**把"显著的 ANOVA"当因果。** 混合模型修正的是方差结构，不是识别。

Your estimate is still observational unless the design says otherwise.
除非设计本身支持，你的估计依然是观测性的。

**p-hacking across post-hoc comparisons.** If you must compare groups, correct (Tukey, FDR) or, better, preregister the contrasts.
**在事后比较里 p-hacking。** 非要比较组间，就做校正（Tukey、FDR），或者更好的做法——把对比预先注册。

**Over-specifying random effects** and then quietly deleting the warning.
**过度设定随机效应然后悄悄删掉警告。**

Simplify, don't hide.
该简化就简化，别藏着。

**Misreading random effects** as if they were fixed estimates of each group.
**把随机效应当成每个组的固定估计来读。**

## What I take away ／ 它真正改变了什么

ANOVA is a fine teaching instrument and acceptable for clean, balanced, genuinely independent experiments.
ANOVA 是个不错的教学工具，对整洁、平衡、真正独立的实验也说得过去。

For the messy, nested, longitudinal data that public administration actually produces, mixed-effects models are not a fancy upgrade — they are the honest default.
但对于公共管理真实产出的那种混乱、嵌套、纵向的数据，混合效应模型不是花哨的升级——它是诚实的默认值。

The skill worth building is knowing exactly when to graduate from one to the other.
真正值得练的本事，是精确判断何时该从前者"毕业"到后者。
