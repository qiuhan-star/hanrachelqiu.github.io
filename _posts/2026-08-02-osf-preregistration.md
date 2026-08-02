---
title: "Method Notes #1: What I Actually Preregister on OSF"
excerpt: "What I actually preregister on the Open Science Framework, why it matters for public administration research, and what it changed in how I work."
date: 2026-08-02 12:00:00
show_page_views: true
tags:
  - Methods Notes
  - Preregistration
---

## What preregistration actually is

In one sentence: before you collect data or start analysis, write down your research design, hypotheses, and analysis plan, then store it publicly with a timestamp.

Its purpose is not to "swear you'll never make a mistake," but to separate two things — what you thought through in advance, and what you discovered after the fact.

This directly counters two common research problems: p-hacking (fishing for significance by trying model after model) and HARKing (Hypothesizing After Results are Known).

## Why public administration research especially should do it

Empirical work in public administration rarely "runs one model and calls it a day": survey experiments, quasi-experiments, and secondary administrative data all leave plenty of analytic choices.

Which control variables to include, how to handle missing values, whether to add interaction terms, and at which level to cluster — every extra degree of freedom raises the risk that a conclusion "looks significant but was really manufactured."

And what methodology reviewers scrutinize most in public administration is precisely the credibility of causal-identification claims.

Preregistration locks those choices in advance, telling reviewers up front: "this identification strategy was decided beforehand, not picked after seeing the results."

For boosting research credibility, the return on investment is very high.

## How to do it on OSF (hands-on)

**Step 1 — Create a project.** Sign up for an OSF account and create a Project (free, open source).

**Step 2 — Pick a template.** Click "Preregister." Common templates include the official OSF *Preregistration Template* (most complete fields, recommended for the social sciences), *AsPredicted* (minimal), and various discipline-specific ones.

For my empirical PA work I usually choose the official template.

**Step 3 — Fill in the key modules.** Study Information / Design: research question, design type (experiment / survey / observational), sample or data source.

Hypotheses: state each hypothesis explicitly, including direction (positive / negative / non-linear).

Variables: independent, dependent, moderators / mediators, and how each is measured.

Analysis Plan: the easiest to undervalue, and the most critical.

Write to the level of "dependent variable ~ independent + control set, clustered at level X, using R's `lme4` / Stata's `reghdfe`," and state how you handle missing values, multiple-comparison correction, and your planned sample size with its justification (power).

**Step 4 — Submission type.** Choose *Preregistration* (immutable after submission) or *Preregistration+* (keeps an updatable copy).

For your first time, the former forces you to be clear.

**Step 5 — Get a DOI, link it.** After submission you get a permanent link and DOI.

Put it in the methods section of your paper and attach it when you submit.

## Pitfalls I hit

**Analysis plan too vague.** "Will use regression analysis" is as good as writing nothing.

Reviewers want the specific model specification, not methodology jargon.

**Forgot the data-acquisition workflow.** PA administrative data often needs approval; the timeline must be clear.

Otherwise "registered the design but haven't received the data yet" breaks the temporal logic.

**Treated preregistration as a straitjacket.** You can absolutely do exploratory analysis afterward — just clearly label it "outside the preregistration."

Reviewers actually trust you more, because you've separated confirmation from exploration.

## What it really changed

After my first preregistration, the biggest change wasn't that the paper got more rigorous.

It was that writing the plan forced me to turn "I thought I knew" into "I can write it clearly."

Many fuzzy steps exposed themselves the moment I had to fill in the form.

If you also do empirical research in public administration, I strongly suggest starting with preregistration on your next study.

OSF is free and open source — you can set up a project in ten minutes.

And the credibility it buys is worth far more than ten minutes.
