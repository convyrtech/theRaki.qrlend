# AI Design Tools Research — Awwwards-Level Websites (2025-2026)

**Date**: 2026-03-03
**Methodology**: STAR
**Depth**: Deep (4 hops)
**Confidence**: HIGH (multiple sources cross-validated)

---

## Executive Summary

For создания уникальных сайтов уровня Awwwards в 2026 году наиболее мощная комбинация:

1. **Claude Code + Frontend Design Plugin** — генерация кода с уникальной эстетикой
2. **21st.dev Magic MCP** (УЖЕ УСТАНОВЛЕН) — production-grade UI компоненты
3. **Spline** — интерактивный 3D прямо в браузере
4. **GSAP / Motion** — award-level анимации
5. **Framer** — если нужен визуальный конструктор с Awwwards-качеством

---

## Tier 1: Инструменты которые УЖЕ доступны нам

### 1. Frontend Design Plugin (Anthropic Official)
- **Что**: Официальный плагин Claude Code для генерации уникальных фронтенд-интерфейсов
- **Killer feature**: Избегает "AI slop" — типичного Inter + фиолетовые градиенты. Создаёт УНИКАЛЬНЫЕ дизайны
- **Эстетики**: brutalist, maximalist, retro-futuristic, luxury, playful, solarpunk, cyberpunk
- **Источник**: [GitHub](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) | [Cookbook](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)
- **Установка**: Скачать SKILL.md в `.claude/skills/frontend-design/`
- **Вау-фактор**: 9/10

**Ключевые техники из Cookbook:**
- Типографика: НИКОГДА Inter/Roboto. Использовать Clash Display, Satoshi, Playfair Display, Bricolage Grotesque
- Цвет: доминантный + резкий акцент > равномерное распределение. CSS переменные.
- Движение: один orchestrated page load с staggered reveals > разбросанные микроанимации
- Фон: атмосфера и глубина (layered gradients, geometric patterns), не solid colors
- Экстремы: font-weight 100 vs 900 (не 400 vs 600), размер 3x+ прыжки

### 2. 21st.dev Magic MCP (УЖЕ УСТАНОВЛЕН!)
- **Что**: AI-генерация UI компонентов прямо в Claude Code
- **Инструменты**: `21st_magic_component_builder`, `component_inspiration`, `component_refiner`, `logo_search`
- **Killer feature**: не генерирует с нуля — использует библиотеку проверенных production-grade компонентов
- **Источник**: [21st.dev](https://21st.dev/magic) | [GitHub](https://github.com/21st-dev/magic-mcp)
- **Статус**: Beta, бесплатно
- **Вау-фактор**: 8/10

### 3. Context7 MCP (УЖЕ УСТАНОВЛЕН)
- **Что**: Актуальная документация любой библиотеки прямо в контексте
- **Использование**: GSAP docs, Three.js docs, Motion docs — без галлюцинаций

### 4. Playwright MCP (УЖЕ УСТАНОВЛЕН)
- **Что**: Скриншоты, тестирование, visual QA прямо из Claude Code
- **Использование**: Проверка результата на разных viewport'ах

---

## Tier 2: MCP серверы для установки

### 5. Figma MCP
- **Что**: Подключение к Figma для design-to-code с точностью до пикселя
- **Killer feature**: Вытягивает токены, размеры, цвета из Figma-макетов. Не нужны скриншоты
- **Источник**: [Composio Blog](https://composio.dev/blog/how-to-use-figma-mcp-with-claude-code-to-build-pixel-perfect-designs)
- **Нужен**: Figma аккаунт + API key
- **Вау-фактор**: 8/10 (если есть дизайн в Figma)

### 6. Storybook MCP
- **Что**: Компонентные API, валидированные паттерны, тест-сьюты
- **Killer feature**: Claude видит дизайн-систему проекта и не нарушает паттерны
- **Источник**: [Codrops](https://tympanus.net/codrops/2025/12/09/supercharge-your-design-system-with-llms-and-storybook-mcp/)
- **Вау-фактор**: 7/10

### 7. UI Expert MCP
- **Что**: UI/UX анализ, генерация дизайн-токенов, улучшение компонентов
- **Источник**: [GitHub](https://github.com/reallygood83/ui-expert-mcp)
- **Вау-фактор**: 6/10

### 8. Shadcn MCP
- **Что**: Точные TypeScript props и React-компоненты shadcn/ui без галлюцинаций
- **Источник**: [shadcn.io/mcp](https://www.shadcn.io/mcp/claude-code)
- **Вау-фактор**: 7/10 (для React/Next.js проектов)

---

## Tier 3: Внешние инструменты и сервисы

### 9. Spline — 3D для веба
- **Что**: 3D дизайн-тул прямо в браузере с AI-генерацией из текста
- **Killer feature**: Текст → 3D объект → embed на сайт. Интерактивность, физика, анимации
- **Уровень**: Awwwards-winning sites регулярно используют
- **Цена**: Free tier + Pro $9/mo
- **Источник**: [spline.design](https://spline.design/)
- **Вау-фактор**: 10/10

### 10. Rive — Интерактивные анимации
- **Что**: Дизайн-инструмент для complex interactive animations со state machines
- **Killer feature**: Game-engine производительность в вебе. State machines из коробки
- **Против**: After Effects — быстрее. Lottie — мощнее. CSS animations — интерактивнее
- **Источник**: [rive.app](https://rive.app)
- **Вау-фактор**: 9/10

### 11. Framer
- **Что**: Design-first website builder c $2B valuationом
- **Killer feature**: Visual editor → production site. Framer Motion библиотека. Awwwards sites
- **Уровень**: Несколько Site of the Day на Awwwards в 2026
- **Цена**: Free → $10/mo (Mini) → $20/mo (Basic)
- **Источник**: [framer.com](https://www.framer.com/) | [Awwwards Framer sites](https://www.awwwards.com/websites/framer/)
- **Вау-фактор**: 9/10

### 12. v0.dev (Vercel)
- **Что**: AI-генератор UI компонентов (React/Tailwind/shadcn)
- **Killer feature**: image-to-code (Figma → код), 90% точность
- **Ограничение**: Только фронтенд, нет бэкенда
- **Источник**: [v0.dev](https://v0.dev)
- **Вау-фактор**: 8/10

### 13. Relume
- **Что**: AI-генерация sitemap → wireframes → Figma/Webflow за минуты
- **Killer feature**: 1000+ human-designed responsive компонентов. 60 секунд на sitemap
- **Workflow**: Текст → Sitemap → Wireframes → Figma export → Webflow/React
- **Цена**: Free (3 sitemaps/mo) → Paid
- **Источник**: [relume.io](https://www.relume.io/)
- **Вау-фактор**: 7/10

---

## Tier 4: Анимационные библиотеки

### 14. GSAP (GreenSock)
- **Что**: Король JS-анимаций. Owned by Webflow.
- **Killer feature**: ScrollTrigger, timeline-based, кросс-браузерная стабильность
- **Уровень**: #1 на Awwwards-сайтах (WebGL + GSAP = самая частая связка)
- **Цена**: Free (core) / Club ($99/yr для premium plugins)
- **Вау-фактор**: 10/10 для анимаций

### 15. Motion (бывший Framer Motion)
- **Что**: Open source, самая быстрорастущая анимационная библиотека
- **Killer feature**: React + Vanilla JS. Layout animations. Spring physics.
- **Источник**: [motion.dev](https://motion.dev)
- **Вау-фактор**: 9/10

### 16. Three.js + WebGL/WebGPU
- **Что**: 3D графика в браузере. Десятки миллионов npm downloads/месяц
- **Killer feature**: WebGPU renderer (новый, мощнее WebGL). Generative art
- **AI помощь**: Rosebud AI (текст → Three.js код), Jit.dev (AI code generator)
- **Уровень**: WebGL — #1 технология на Awwwards (11 Site of Year используют)
- **Вау-фактор**: 10/10

---

## Рекомендованный Workflow для Awwwards-Level сайта

```
1. ИДЕЯ & ПЛАНИРОВАНИЕ
   └── Relume AI → sitemap + wireframes (60 сек)
   └── Sequential Thinking MCP → архитектурные решения

2. ДИЗАЙН
   └── Spline → 3D элементы, hero sections
   └── v0.dev → UI компоненты из описания/скриншотов
   └── Figma MCP → design tokens extraction

3. РАЗРАБОТКА (в Claude Code)
   └── Frontend Design Plugin → уникальная эстетика, не "AI slop"
   └── 21st.dev Magic MCP → production-grade компоненты
   └── Context7 MCP → актуальная документация GSAP/Three.js/Motion

4. АНИМАЦИИ
   └── GSAP + ScrollTrigger → scroll-driven animations
   └── Three.js → 3D backgrounds, particle effects
   └── Rive → complex interactive animations

5. QA & POLISH
   └── Playwright MCP → visual testing на всех viewport'ах
   └── Lighthouse → performance audit
```

---

## Awwwards Tech Stack Trends

По данным анализа победителей Awwwards:

| Технология | Использование |
|---|---|
| **WebGL** | #1 — 11 Site of Year |
| **Three.js** | Top 3 |
| **GSAP** | Top 5 |
| **React/Next.js** | Растущий тренд |
| **Framer Motion** | Новый фаворит |

Ключевые паттерны Award-winning сайтов:
- Scroll-triggered 3D трансформации
- Кинетическая типографика
- Custom курсоры и hover-эффекты
- Бесшовные page transitions
- Генеративное искусство как фон

---

## Что установить ПРЯМО СЕЙЧАС

### Уже есть:
- [x] Magic MCP (21st.dev) — компоненты
- [x] Context7 — документация
- [x] Playwright — QA

### Установить (5 мин):
- [ ] **Frontend Design Plugin** — `.claude/skills/frontend-design/SKILL.md`
- [ ] **Figma MCP** (если есть Figma) — `~/.claude/mcp_config.json`

### Внешние аккаунты:
- [ ] **Spline** — [spline.design](https://spline.design) (free)
- [ ] **Rive** — [rive.app](https://rive.app) (free tier)
- [ ] **Relume** — [relume.io](https://www.relume.io) (3 free/mo)

---

## Sources

- [Anthropic Frontend Design Plugin](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)
- [Frontend Aesthetics Cookbook](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)
- [21st.dev Magic MCP](https://github.com/21st-dev/magic-mcp)
- [Codrops: Top Web Design Tools 2026](https://tympanus.net/codrops/2026/01/27/top-web-design-tools-2026/)
- [Codrops: Storybook MCP](https://tympanus.net/codrops/2025/12/09/supercharge-your-design-system-with-llms-and-storybook-mcp/)
- [MCP Servers for Frontend](https://kiadev.net/news/2025-09-22-mcp-servers-frontend-2025)
- [4 MCPs for Frontend Devs](https://www.aiagentshub.net/blog/best-4-mcp-frontend)
- [Spline](https://spline.design/)
- [Rive](https://rive.app)
- [Framer](https://www.framer.com/)
- [Framer on Awwwards](https://www.awwwards.com/websites/framer/)
- [Motion](https://motion.dev)
- [v0.dev](https://v0.dev)
- [Relume](https://www.relume.io/)
- [Awwwards Annual Awards 2025](https://www.awwwards.com/annual-awards/)
- [GSAP vs Motion comparison](https://motion.dev/docs/gsap-vs-motion)
- [Figma MCP + Claude Code](https://composio.dev/blog/how-to-use-figma-mcp-with-claude-code-to-build-pixel-perfect-designs)
- [Shadcn MCP](https://www.shadcn.io/mcp/claude-code)
- [UI Expert MCP](https://github.com/reallygood83/ui-expert-mcp)
