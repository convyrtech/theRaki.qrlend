# The Raki — QR & Landing Page Project

## Project Overview
QR-code system for The Raki restaurant (Moscow crawfish delivery).
- Branded landing page with smart device detection (iOS→App Store, Android→RuStore/APK)
- Designer QR code with logo for delivery vehicle stickers
- Sticker design for Kia Morning 2021

## Brand Guide
- **Name**: The Raki (Раковарня)
- **Tagline**: "Вкусности для гурманов..."
- **Website**: https://theraki.ru/ (built on Tilda)
- **Font**: FuturaPT (fallback: system sans-serif)

### Digital Colors (website, landing page)
  - Deep blue-green (bg): `#0b3237`
  - Teal (accent): `#51a8af`
  - Dark teal: `#2e9099`
  - Gold: `#be9667`
  - Yellow highlight: `#fff705`
  - White: `#ffffff`
  - Style: Premium, dark, minimalist

### Car Wrap Colors (stickers, QR surround)
  - Light blue: PANTONE 14-4130 TCX "Blue Fros"
  - Red: PMS 2347 C / `#e10600`
  - White: Pantone white
  - Style: Russian folk / Gzhel-inspired pattern

### Design Decisions (FINAL)
- **QR code**: black modules, white bg, BLUE surround (PANTONE 14-4130)
- **QR logo center**: black The Raki logo (the_raki_R.png)
- **Landing page**: dark style (#0b3237, #51a8af) like website
- **Car wrap**: owner's wife handles, folk/Gzhel pattern

### Assets (in project root)
- `the_raki_R.png` — black logo on transparent bg (for QR center)
- `photo_2026-02-23_10-51-15.jpg` — mascot (blue+red+white folk crab)
- `photo_2026-02-23_18-32-32.jpg` — wrap pattern (Illustrator)
- Logo (site): `https://static.tildacdn.com/tild6166-6463-4438-a531-663435656263/logo.png`

## App Links (VERIFIED 2025-02-24)
- **Package name**: `com.yumasoft.ypos.theraki.customer`
- **RuStore**: `https://www.rustore.ru/catalog/app/com.yumasoft.ypos.theraki.customer`
- **App Store**: `https://apps.apple.com/app/id1615829936`
- **Google Play**: `https://play.google.com/store/apps/details?id=com.yumasoft.ypos.theraki.customer`
- **Huawei AppGallery**: `https://appgallery.huawei.com/app/C105908103`
- **OLD (DEPRECATED)**: com.ithinkers.theraki, id1475066778 — DO NOT USE

## Vehicle Info
- **Car**: Kia Morning (Picanto) JA 2021, 5-door hatchback
- **Body dimensions**: 3595 x 1595 x 1495 mm
- **Sticker locations**: rear door windows + lower half of rear window
- **Wrap design**: received (folk/Gzhel pattern, blue+red+white)
- **Awaiting**: photos of actual car for precise measurements

## Quality Rules (CRITICAL)
1. **Self-check after every code block**: ask yourself — is this optimal? Am I cutting corners?
2. **Verify all links** before using them in production code
3. **Test on real devices** — always provide QR test instructions
4. **Brand consistency** — every pixel must match The Raki style
5. **Accessibility** — landing page must load < 1 second, work without JS as fallback
6. **Print-ready** — QR and sticker assets must be high-res (SVG + PNG 300dpi)

## File Structure
```
D:\raki\
├── CLAUDE.md              # This file
├── landing/
│   └── index.html         # Smart redirect landing page
├── qr/
│   ├── generate-qr.js     # QR generation script
│   └── output/            # Generated QR files (SVG, PNG)
├── sticker/
│   └── design/            # Sticker mockups
└── assets/
    └── logo/              # Downloaded brand assets
```

## Tech Stack
- Landing: vanilla HTML/CSS/JS (zero dependencies, inline everything)
- QR generation: qr-code-styling (Node.js)
- Sticker mockup: SVG
- Hosting: GitHub Pages or Netlify

## Context Recovery Protocol
After compaction or new session:
1. Read this CLAUDE.md
2. Read Serena session-state memory (project: theraki)
3. Check git log for recent changes
4. Resume from where left off
