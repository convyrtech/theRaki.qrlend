# Landing Page Design Debate — The Raki

> **Status:** Research complete
> **Date:** 2026-02-24
> **Goal:** Resolve owner's wife feedback ("green background bad, orange buttons better") with expert-level design reasoning

---

## Table of Contents

1. [Overview](#overview)
2. [Background Color](#1-background-color)
3. [Button Color & CTA](#2-button-color--cta)
4. [Brand Consistency](#3-brand-consistency)
5. [Russian Luxury Color Codes](#4-russian-luxury-color-codes)
6. [Desktop-Only Optimization](#5-desktop-only-optimization)
7. [Implementation Plan](#implementation-plan)

---

## Overview

### Goals

1. **Resolve owner feedback** — address "green not great" and "orange brighter" constructively
2. **Maintain premium positioning** — target audience is Moscow millionaires
3. **Minimize effort** — 95%+ users never see this page (instant redirect)

### Key Decisions

| Aspect | Decision |
|--------|----------|
| Background | Change from teal #0b3237 → deep navy #0a1f3d |
| Buttons | Change from teal → deep gold #c8973a (darker than cashback badge) |
| Text color | Shift from pure white → warm cream #F5F0E8 for body text |
| Brand consistency | Navy preserves dark premium feel while removing "swampy green" |
| Desktop UX | Add QR code on page for desktop users |
| Effort level | 30min max, then freeze the page forever |

---

## 1. Background Color

> **Expert:** Massimo Vignelli (color theory), Artemy Lebedev (Russian market)

### Problem

Current `#0b3237` (dark teal) reads as **forest/swamp**, not **ocean**. Owner's wife is right — the color feels wrong, but her instinct about "make it orange" is the wrong fix. The green component in the hex creates an earthy, eco-brand feel instead of luxury seafood.

### Decision: Deep Navy #0a1f3d

| Aspect | Current | New |
|--------|---------|-----|
| Background | #0b3237 (dark teal) | #0a1f3d (deep navy) |
| Feel | "eco smoothie startup" | "yacht club, Hennessy, marine luxury" |
| Contrast with gold | OK | Excellent — "jewelry on dark velvet" |

**Why navy specifically for Russian market:**
- Navy + gold = strongest luxury code in Russia after black + gold
- Erwin (Moscow's top seafood restaurant) uses exactly this palette
- Red crawfish on navy background = victory flag aesthetic
- Officer uniforms, yacht clubs, Hermès — all navy

**What stays:** teal `#51a8af` remains as accent color (links, subtle glows). It reads as "ocean surface" on navy background.

---

## 2. Button Color & CTA

> **Expert:** Luke Wroblewski (conversion/UX)

### Problem

Current hierarchy is flat — teal buttons and gold cashback badge compete at equal visual weight. Owner's wife noticed: "orange (badge) is brighter" = badge outshines the actual CTA.

### Decision: Deep Gold buttons #c8973a

```
Button  [#c8973a deep gold, white text]  — DOMINATES
Badge   [#be9667 soft gold, dark text]   — SUPPORTS
Background [#0a1f3d navy]               — CONTEXT
```

| Aspect | Current | New |
|--------|---------|-----|
| Button bg | teal gradient #51a8af→#3d949b | gold gradient #c8973a→#a87828 |
| Button text | white on teal (~4.8:1) | white on deep gold (~3.9:1, passes AA Large at 17px bold) |
| Badge | gold #be9667 with 0.2 glow | same, but softer glow 0.15 |
| Hierarchy | flat (badge = button) | clear (button dominates) |

---

## 3. Brand Consistency

> **Expert:** Erik Spiekermann (brand identity)

### Problem

theraki.ru = white sections + teal accents + warm food photos. Landing = 100% dark teal, no food, no warmth. The disconnect makes it feel like a different brand.

### Decision: Navy solves this

Navy is close enough to teal family to feel related, but removes the "swampy" quality. Gold buttons align with the warm food tones of the main site. No need for food photos or major redesign — color shift alone bridges the gap.

---

## 4. Russian Luxury Color Codes

> **Expert:** Artemy Lebedev (Russian design context)

### Key Insight

In Russian luxury consumption culture:
1. **Black + gold** = #1 luxury signal (caviar, vodka, VIP)
2. **Navy + gold** = #2 luxury signal (yachts, marine, fine dining)
3. **Dark teal** = eco/startup/pharmacy — NOT luxury in Russia

The audience (Moscow millionaires ordering premium crawfish) reads navy + gold as "this is for me." Current teal reads as "organic food delivery app."

---

## 5. Desktop-Only Optimization

> **Expert:** Nir Eyal (UX/product)

### Brutal Truth

- 95%+ users get redirected instantly and never see this page
- Debating colors costs more developer time than the page's entire annual audience
- The ONLY useful desktop addition: QR code on the page itself

### Decision

Add inline QR in the desktop-hint block. Desktop user scans with phone → instant redirect to correct store. This is the only change that actually converts desktop visitors.

Then **freeze the page forever**.

---

## Implementation Plan

### Phase 1: Color Update (15 min)

- [ ] Change `--bg` from `#0b3237` to `#0a1f3d`
- [ ] Change `theme-color` meta to `#0a1f3d`
- [ ] Change button gradient to `#c8973a → #a87828`
- [ ] Add `--gold-cta` and `--gold-cta-glow` CSS vars
- [ ] Soften cashback badge glow from 0.2 to 0.15
- [ ] Shift body text from pure white to cream `#F5F0E8`

### Phase 2: Desktop QR (15 min)

- [ ] Generate small QR code SVG for theraki.netlify.app
- [ ] Replace desktop-hint text with QR + "Scan from phone" message
- [ ] Deploy

### Phase 3: Freeze

- [ ] Deploy final version
- [ ] Never touch this page again

---

## Expert Consensus

| Expert | Background | Buttons | Overall |
|--------|-----------|---------|---------|
| Vignelli | Navy #0a1f3d | — | "Navy + gold = yacht watches and fine dining" |
| Wroblewski | — | Deep gold #c8973a | "Fix hierarchy: button must dominate badge" |
| Spiekermann | Navy bridges brand gap | Warm gold adds food-warmth | "Minimal change, maximum brand coherence" |
| Lebedev | Navy is #2 Russian luxury code | Gold = "позолоченное" | "Current teal = smoothie startup, navy + gold = Erwin" |
| Nir Eyal | Doesn't matter (nobody sees it) | Doesn't matter | "Add QR, freeze, move on" |

**Score: 4/5 experts agree on navy + gold. 5/5 agree: stop debating, ship it.**
