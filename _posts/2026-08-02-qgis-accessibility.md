---
title: "Method Notes #2: Measuring Public Service Accessibility with QGIS"
date: 2026-08-02
tags:
  - 方法笔记
  - QGIS
  - 空间分析
  - Methods Notes
  - GIS
  - Spatial Analysis
---

## Why accessibility belongs in a PA toolkit

Spatial equity is one of the oldest and most pressing concerns in public administration: are public services — schools, clinics, transit stops, libraries — actually reachable for the people who need them, or only for those who happen to live nearby?
空间公平是公共管理中历史最久、也最紧迫的议题之一：学校、诊所、公交站、图书馆等公共服务，究竟是真正可达于需要它们的人，还是只便宜了恰好住在附近的居民？

**Geographic accessibility analysis** is the workhorse method for turning that normative question into something measurable and mappable.
**地理可达性分析**正是把这种规范性问题变成可度量、可制图对象的主力方法。

"Access" is not the same as "availability."
"有"不等于"能用到"。

A city may have plenty of clinics on paper, yet if they are all clustered in one district, residents elsewhere face a de facto shortage.
一座城市账面上诊所不少，但若全挤在一个区，其他区居民就面临事实上的短缺。

Accessibility analysis makes that gap visible — and once a gap is visible on a map, it becomes an argument that policymakers can't easily ignore.
可达性分析让这种落差显形——而一旦落差被画在地图上，它就变成政策制定者难以忽视的论证。

For anyone studying service delivery, facility siting, or urban equity, this is bread-and-butter method, not a nicety.
对任何研究服务供给、设施选址或城市公平的人，这是基本功，不是点缀。

## The workflow at a glance

**Step 1 — Assemble the layers.** Administrative boundaries and the facilities (points) you care about; optionally a population layer.
**第 1 步——准备图层。** 行政区划边界，以及你关心的设施（点）；可选再加一个人口图层。

**Step 2 — Pick a metric.** Straight-line distance, network travel time, or a catchment-based index (e.g., 2SFCA).
**第 2 步——选指标。** 直线距离、路网出行时间，或基于 catchment 的指数（如 2SFCA）。

**Step 3 — Compute it in QGIS.**
**第 3 步——在 QGIS 里计算。**

**Step 4 — Map and interpret** — carefully.
**第 4 步——制图与解读**——要谨慎。

## Step-by-step in QGIS

**Data.** For facilities and roads, the *QuickOSM* plugin pulls OpenStreetMap features directly (e.g., `amenity=clinic`, `highway=*`).
**数据。** 设施与道路可用 *QuickOSM* 插件直接拉取 OpenStreetMap 要素（如 `amenity=clinic`、`highway=*`）。

For administrative boundaries, prefer official open data (e.g., civil-affairs bureau shapefiles) over OSM, whose administrative polygons are often inconsistent.
行政区划则优先用官方开放数据（如民政局的 shapefile），别用 OSM——它的行政多边形经常不一致。

Load them via *Layer → Add Layer*.
通过 *图层 → 添加图层* 载入。

**Coordinate reference system (CRS) — the part people get wrong.** Always do distance and area work in a **projected** CRS, never in WGS84 (EPSG:4326), whose degrees are not meters.
**坐标系（CRS）——最容易被搞错的一步。** 凡是算距离、算面积，一律用**投影坐标系**，绝不能用 WGS84（EPSG:4326），因为它的"度"不是米。

For China, a zone of CGCS2000 / Gauss–Kruger is appropriate; Web Mercator (EPSG:3857) is fine for *display* but distorts area at these latitudes, so don't compute metrics in it.
中国范围内用 CGCS2000 / 高斯–克吕格的某个带最合适；Web Mercator（EPSG:3857）拿来显示没问题，但在该纬度会扭曲面积，所以别拿它算指标。

Set the project CRS with *Project → Properties → CRS*, and reproject layers with *Processing → Reproject layer* if needed.
用 *工程 → 属性 → CRS* 设定工程坐标系，必要时用 *处理工具箱 → 重投影图层* 转换。

**Simple reach: Euclidean buffer.** *Processing Toolbox → Buffer* around each facility gives a "straight-line" service radius.
**粗略可达：欧氏缓冲。** *处理工具箱 → 缓冲* 绕每个设施画一个"直线"服务半径。

Fast, intuitive, but ignores roads and barriers — treat it as a first-order approximation, not a finding.
快、直观，但不考虑道路和障碍——只当一阶近似，别当成结论。

**Realistic reach: network travel time.** For anything you'd defend, use the *QNEAT3* plugin (or the older Road Graph) to compute travel-time catchments along the actual road network.
**真实可达：路网出行时间。** 凡是你要拿去论证的，用 *QNEAT3* 插件（或较早的 Road Graph）沿真实路网算出行时间 catchment。

This answers "who can reach a clinic within 15 minutes by car / by bus?" — the question equity actually asks.
它回答的是"谁能在 15 分钟内开车/坐公交到达诊所？"——这才是公平真正在问的问题。

**The rigorous option: 2SFCA.** The two-step floating catchment area method weighs each facility by both its capacity and the population it must serve, then assigns each resident an accessibility score.
**严谨选项：2SFCA。** 两步浮动 catchment 法同时按每个设施的供给能力和它所服务人口的规模来加权，再给每位居民一个可达性得分。

It needs a population layer and a capacity attribute, but it avoids the fatal flaw of counting facilities without counting people.
它需要人口图层和能力属性，但避开了"只数设施、不数人"的致命缺陷。

If your argument is about equity, this is the metric to learn.
如果你的论点是关于公平的，这是最该学的指标。

**Visualization.** Use graduated symbols or a heatmap with a *sequential* color ramp (light → dark).
**可视化。** 用分级符号或热力图，配顺序色带（浅→深）。

Resist the rainbow; it implies false order.
别用彩虹色，它会暗示不存在的排序。

Always include a scale bar, north arrow, and a legend that states the CRS and the metric definition.
务必带比例尺、指北针，以及注明 CRS 和指标定义的图例。

## Pitfalls I hit

**Mixing CRSs** silently produces distances off by orders of magnitude.
**混用 CRS** 会静默地让距离差出好几个数量级。

Check every layer's CRS before computing.
计算前逐个核对每个图层的 CRS。

**Counting facilities, not people.** Raw counts reward dense areas regardless of need.
**数设施不数人。** 原始计数只会奖励密集区，无视需求。

Use 2SFCA or at least cross with population.
用 2SFCA，或至少和人口交叉。

**Boundary mismatches.** OSM and official boundaries rarely align perfectly; clip consistently to one authoritative boundary.
**边界对不齐。** OSM 和官方边界很少完全吻合；统一裁剪到一个权威边界上。

**MAUP.** Results shift with the unit of analysis (block vs. district).
**MAUP（可改性面积单元问题）。** 结果会随分析单元（街区 vs 区县）变化。

Report sensitivity, don't hide it.
报告敏感性，别藏着。

## What I take away

A map is an argument.
一张地图就是一个论证。

An accessibility map doesn't just describe where services are — it makes spatial inequality legible and, therefore, politicizable.
可达性地图不只是描述服务在哪，它让空间不平等变得可读，因而也变得可被政治化讨论。

Used honestly (with its CRS, metric, and limitations stated), it is one of the most persuasive evidence tools a public administration researcher can wield.
只要诚实地使用（写明 CRS、指标与局限），它就是公共管理研究者能挥舞的最有说服力的证据工具之一。
