# Аудит theraki.ru — 24.02.2026

## Общая оценка: 2.2 / 10

---

## КРИТИЧЕСКИЕ ПРОБЛЕМЫ (сайт ломается)

| # | Проблема | Где | Severity |
|---|---------|-----|----------|
| 1 | Branch.io SDK не грузится — TLS failure на cdn.branch.io. Deep-linking мёртв | Все страницы | CRITICAL |
| 2 | Google Fonts сломан — два тега link склеены в один, шрифт Oswald НЕ грузится | Все страницы | CRITICAL |
| 3 | custom.css — 404 (кастомный CSS не найден) | Все страницы | CRITICAL |
| 4 | /blog — 404, ссылка есть в навигации на каждой странице | Навигация | HIGH |
| 5 | /holodnye-salatu — 404, ссылка на странице /menu | /menu | HIGH |
| 6 | Ссылки на приложение ведут на СТАРЫЕ/УДАЛЁННЫЕ ID | /app | CRITICAL |
| 7 | Google Play не работает в РФ для установки приложений | /app, мобильный баннер | HIGH |

### Ссылки на приложение (все мёртвые!)

| Ссылка на сайте | Статус |
|-----------------|--------|
| Google Play com.ithinkers.theraki | **404 — приложение УДАЛЕНО** |
| App Store id1475066778 | **404 — приложение УДАЛЕНО** |
| Branch.io deep links | **SSL failure — не работает** |

Актуальные ссылки (используются на theraki.netlify.app):
- RuStore: com.yumasoft.ypos.theraki.customer — 200 OK
- App Store: id1615829936 — 200 OK

---

## БЕЗОПАСНОСТЬ

| # | Проблема | Severity |
|---|---------|----------|
| 8 | Нет HSTS заголовка — первый запрос по HTTP, MitM возможен | HIGH |
| 9 | Cookie __ddg9_ содержит IP пользователя без HttpOnly/Secure | HIGH |
| 10 | Нет Content-Security-Policy — нет защиты от XSS | MEDIUM |
| 11 | Нет X-Content-Type-Options: nosniff | MEDIUM |
| 12 | Cookies без SameSite атрибута (CSRF risk) | MEDIUM |
| 13 | Нет SRI для внешних скриптов | MEDIUM |
| 14 | Нет Referrer-Policy, Permissions-Policy | LOW |
| 15 | Раскрытие инфраструктуры Tilda в заголовках (X-Tilda-Server, UUID) | LOW |
| 16 | Branch.io Live API key в исходном коде | LOW |
| 17 | HTTP-ссылка на onelink.to | LOW |

### SSL/TLS

- Издатель: Let's Encrypt (R13)
- Протокол: TLSv1.3 / TLSv1.2
- TLS 1.0/1.1: отключены (хорошо)
- Срок: до 17.04.2026

### Защита чувствительных путей

- /admin — 404
- /.git — 429 (DDoS-Guard блокирует)
- /.env — 429 (DDoS-Guard блокирует)
- /wp-admin — 403
- robots.txt — корректный

---

## SEO

| # | Проблема | Severity |
|---|---------|----------|
| 18 | H1 на главной странице ПУСТОЙ | HIGH |
| 19 | Нет lang="ru" на html | HIGH |
| 20 | Нет JSON-LD разметки (LocalBusiness, Organization, Product) | HIGH |
| 21 | ВСЕ alt="" пустые — ни одна картинка не описана | HIGH |
| 22 | Title бесполезные: "Меню" (4 символа), "О нас" (4), "Контакты" (8) | MEDIUM |
| 23 | Meta Description по 13-26 символов вместо 120-160 | MEDIUM |
| 24 | В sitemap.xml битая ссылка: theraki.ru/https//holodnye-salatu | MEDIUM |
| 25 | Несогласованность написания бренда: "The raki"/"The Raki"/"THE RAKI" | LOW |
| 26 | Нет og:image на странице /app | LOW |
| 27 | Нет twitter:card разметки | LOW |
| 28 | Нет hreflang тегов | LOW |

---

## UX / БРЕНД

| # | Проблема | Severity |
|---|---------|----------|
| 29 | "WEBDESIGN & MARKETING @Polyakova_Elena" — чужая подпись в шапке | HIGH |
| 30 | Сайт на бесплатном Tilda — не премиум для бренда этого уровня | MEDIUM |
| 31 | Грамматические ошибки: "ингридиентом", "привращаются", "конфидициальности" | MEDIUM |
| 32 | Кнопка "ЗАКАЗАТЬ" ведёт на /menu, а не в корзину | LOW |

---

## ИТОГОВЫЕ ОЦЕНКИ

| Категория | Оценка |
|-----------|--------|
| Техническое здоровье | 2/10 |
| Безопасность | 3/10 |
| SEO | 2/10 |
| Ссылки на приложение | 1/10 |
| Премиум-позиционирование | 3/10 |
| **Общая** | **2.2/10** |

---

*Аудит проведён: 24.02.2026*
*Инструменты: Playwright, curl, manual code inspection*
*Проверено страниц: 21*
*Найдено проблем: 32*
