---
title: "Method Notes #2: Measuring Public Service Accessibility with QGIS"
excerpt: "A step-by-step walkthrough of measuring public-service accessibility with QGIS — a practical tool for public administration research."
date: 2026-08-02 11:00:00
show_page_views: true
tags:
  - Methods Notes
  - QGIS
  - GIS
  - Spatial Analysis
---

## Why accessibility belongs in a PA toolkit

Spatial equity is one of the oldest and most pressing concerns in public administration: are public services — schools, clinics, transit stops, libraries — actually reachable for the people who need them, or only for those who happen to live nearby?

**Geographic accessibility analysis** is the workhorse method for turning that normative question into something measurable and mappable.

"Access" is not the same as "availability."

A city may have plenty of clinics on paper, yet if they are all clustered in one district, residents elsewhere face a de facto shortage.

Accessibility analysis makes that gap visible — and once a gap is visible on a map, it becomes an argument that policymakers can't easily ignore.

For anyone studying service delivery, facility siting, or urban equity, this is bread-and-butter method, not a nicety.

## The workflow at a glance

**Step 1 — Assemble the layers.** Administrative boundaries and the facilities (points) you care about; optionally a population layer.

**Step 2 — Pick a metric.** Straight-line distance, network travel time, or a catchment-based index (e.g., 2SFCA).

**Step 3 — Compute it in QGIS.**

**Step 4 — Map and interpret** — carefully.

## Step-by-step in QGIS

**Data.** For facilities and roads, the *QuickOSM* plugin pulls OpenStreetMap features directly (e.g., `amenity=clinic`, `highway=*`).

For administrative boundaries, prefer official open data (e.g., civil-affairs bureau shapefiles) over OSM, whose administrative polygons are often inconsistent.

Load them via *Layer → Add Layer*.

**Coordinate reference system (CRS) — the part people get wrong.** Always do distance and area work in a **projected** CRS, never in WGS84 (EPSG:4326), whose degrees are not meters.

For China, a zone of CGCS2000 / Gauss–Kruger is appropriate; Web Mercator (EPSG:3857) is fine for *display* but distorts area at these latitudes, so don't compute metrics in it.

Set the project CRS with *Project → Properties → CRS*, and reproject layers with *Processing → Reproject layer* if needed.

**Simple reach: Euclidean buffer.** *Processing Toolbox → Buffer* around each facility gives a "straight-line" service radius.

Fast, intuitive, but ignores roads and barriers — treat it as a first-order approximation, not a finding.

**Realistic reach: network travel time.** For anything you'd defend, use the *QNEAT3* plugin (or the older Road Graph) to compute travel-time catchments along the actual road network.

This answers "who can reach a clinic within 15 minutes by car / by bus?" — the question equity actually asks.

**The rigorous option: 2SFCA.** The two-step floating catchment area method weighs each facility by both its capacity and the population it must serve, then assigns each resident an accessibility score.

It needs a population layer and a capacity attribute, but it avoids the fatal flaw of counting facilities without counting people.

If your argument is about equity, this is the metric to learn.

**Visualization.** Use graduated symbols or a heatmap with a *sequential* color ramp (light → dark).

Resist the rainbow; it implies false order.

Always include a scale bar, north arrow, and a legend that states the CRS and the metric definition.

## Pitfalls I hit

**Mixing CRSs** silently produces distances off by orders of magnitude.

Check every layer's CRS before computing.

**Counting facilities, not people.** Raw counts reward dense areas regardless of need.

Use 2SFCA or at least cross with population.

**Boundary mismatches.** OSM and official boundaries rarely align perfectly; clip consistently to one authoritative boundary.

**MAUP.** Results shift with the unit of analysis (block vs. district).

Report sensitivity, don't hide it.

## What I take away

A map is an argument.

An accessibility map doesn't just describe where services are — it makes spatial inequality legible and, therefore, politicizable.

Used honestly (with its CRS, metric, and limitations stated), it is one of the most persuasive evidence tools a public administration researcher can wield.
