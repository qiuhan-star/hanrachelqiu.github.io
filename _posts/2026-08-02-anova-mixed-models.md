---
title: "Method Notes #3: When ANOVA Is the Wrong Tool — From Variance Analysis to Mixed-Effects Models"
date: 2026-08-02 10:00:00
tags:
  - Methods Notes
  - ANOVA
  - Statistics
  - Mixed Models
---

## The ANOVA reflex, and where it breaks

ANOVA is usually the first "real" statistical method researchers learn, and it shows: people reach for it by reflex.

In public administration, that reflex is dangerous.

Our data are rarely the tidy, balanced, independent sets ANOVA was built for — they are clustered in schools, districts, and villages; measured repeatedly over time; and almost never evenly sized across groups.

**Non-independence.** The classic one-way / two-way ANOVA assumes residuals are independent.

But citizens are nested in neighborhoods, students in schools, officials in bureaus.

Ignoring that clustering biases your standard errors downward — you get "significant" results that are artifacts of the dependence.

This is the single most common ANOVA mistake in applied PA work.

**Balance and equal variance.** Real designs are unbalanced (one district has 12 towns, another has 3), and group variances differ.

ANOVA's elegance assumes otherwise.

**Repeated measures.** Pre–post, panel, and survey waves violate the independence assumption hard.

Repeated-measures ANOVA patches this but is brittle: it demands complete cases and struggles with time-varying covariates and attrition.

## What mixed-effects models buy you

**Random effects model the clustering explicitly.** A random intercept for "district" lets each district have its own baseline while you still estimate the overall effect.

**They handle unbalanced and missing data natively**, without throwing away incomplete rows the way balanced ANOVA often does.

**Fixed + random, cleanly separated.** You estimate the population-level effect (fixed) while honestly accounting for between-group variation (random).

**Crossed random effects.** E.g., variation due to *individual* and variation due to *item/survey-wave* can both be modeled at once.

## A public administration example

Suppose you study whether a training program raises civil servants' performance, and your data are clustered in bureaus and measured at three time points.

A one-way ANOVA on the pooled data is simply wrong — it pretends 500 observations from 20 bureaus are 500 independent people.

Repeated-measures ANOVA is more honest but collapses under attrition.

A mixed model handles both:

`performance ~ treatment * time + (1 + time | bureau) + (1 | employee)`
`performance ~ treatment * time + (1 + time | bureau) + (1 | employee)`

— a fixed effect for the treatment–time interaction, a random intercept (and slope) for bureau, and a random intercept for the individual.

## How to actually run it

**R (`lme4`):** `lmer(performance ~ treatment * time + (1 + time | bureau) + (1 | employee), data = d)`.

For non-Gaussian outcomes, `glmer` with a family.

**Stata:** `mixed performance c.treatment##c.time || bureau: time || employee:`.

**Always report more than p-values:** variance components, the intraclass correlation (ICC, i.e., how much of the variance lives *between* clusters), and a model-comparison metric such as AIC.

A significant fixed effect with a near-zero ICC is a different story than one with ICC = 0.4.

**Watch for convergence failures and singular fits** — they usually signal you specified more random structure than the data support.

## Pitfalls I hit

**Treating a "significant ANOVA" as causal.** Mixed models fix the *variance structure*, not the *identification*.

Your estimate is still observational unless the design says otherwise.

**p-hacking across post-hoc comparisons.** If you must compare groups, correct (Tukey, FDR) or, better, preregister the contrasts.

**Over-specifying random effects** and then quietly deleting the warning.

Simplify, don't hide.

**Misreading random effects** as if they were fixed estimates of each group.

## What I take away

ANOVA is a fine teaching instrument and acceptable for clean, balanced, genuinely independent experiments.

For the messy, nested, longitudinal data that public administration actually produces, mixed-effects models are not a fancy upgrade — they are the honest default.

The skill worth building is knowing exactly when to graduate from one to the other.
