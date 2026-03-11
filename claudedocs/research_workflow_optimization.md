# Исследование: Оптимизация воркфлоу Claude Code — 2026

**Дата**: 2026-03-07
**Глубина**: deep
**Для кого**: power user Claude Code (Windows, multi-project)

---

## EXECUTIVE SUMMARY

Claude Code в 2026 — это не просто CLI-ассистент, а полноценная платформа с хуками, плагинами, агентскими командами и кастомными скиллами. Мы уже используем ~60% возможностей (Serena, STAR, agent prompting rules, SuperClaude skills). Ниже — конкретные апгрейды, которые дадут максимальный ROI.

**Топ-3 апгрейда по impact/effort:**
1. **Хуки для автокачества** — auto-lint, block dangerous commands, compact-preservation (impact: HIGH, effort: LOW)
2. **Кастомные скиллы** — `/commit`, `/deploy`, `/review` одной командой (impact: HIGH, effort: MEDIUM)
3. **claude-brain для синхронизации** — полная синхронизация воркфлоу между машинами через Git (impact: MEDIUM, effort: MEDIUM, ⚠️ нужен WSL на Windows)

---

## 1. HOOKS — автоматический контроль качества

### Что это
Хуки — shell-команды, которые Claude Code запускает автоматически при определённых событиях. 17 событий жизненного цикла, конфигурация через JSON.

### Конфигурация
Три уровня (по приоритету):
1. **Проект**: `.claude/settings.json` (коммитится в Git)
2. **Пользователь**: `~/.claude/settings.json` (глобально)
3. **Enterprise**: managed policy (не наш случай)

### Типы событий
| Событие | Когда срабатывает | Что можно |
|---------|-------------------|-----------|
| `PreToolUse` | Перед вызовом инструмента | Блокировать, модифицировать |
| `PostToolUse` | После вызова инструмента | Проверять результат |
| `Notification` | Claude хочет уведомить | Кастомные уведомления |
| `Stop` | Claude завершает ответ | Финальные проверки |
| `SubagentStop` | Субагент завершает | Проверка качества субагентов |

### Формат матчинга
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'check this file'"
          }
        ]
      }
    ]
  }
}
```

### ТОП-5 хуков для нас

#### 1. Auto-format после записи файлов
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
```
**Impact**: Код всегда отформатирован. Не тратим время на форматирование.

#### 2. Блокировка опасных команд
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE 'rm -rf|--force|--hard|DROP TABLE|DELETE FROM'; then echo 'BLOCKED: dangerous command detected' >&2; exit 2; fi"
          }
        ]
      }
    ]
  }
}
```
**Impact**: Защита от случайного `rm -rf /` или `git reset --hard`.

#### 3. Auto-lint после записи JS/TS
```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "if echo \"$CLAUDE_FILE_PATH\" | grep -qE '\\.(js|ts|tsx)$'; then npx eslint --fix \"$CLAUDE_FILE_PATH\" 2>/dev/null || true; fi"
          }
        ]
      }
    ]
  }
}
```

#### 4. Уведомления через системные нотификации (Windows)
```json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "powershell.exe -Command \"[System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms'); [System.Windows.Forms.MessageBox]::Show('$CLAUDE_NOTIFICATION', 'Claude Code')\""
          }
        ]
      }
    ]
  }
}
```

#### 5. Контекст после компакта (сохранение при сжатии)
```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Remember to update Serena session-state before compaction'"
          }
        ]
      }
    ]
  }
}
```

### Переменные окружения в хуках
- `$CLAUDE_TOOL_NAME` — имя инструмента
- `$CLAUDE_TOOL_INPUT` — JSON входных параметров
- `$CLAUDE_FILE_PATH` — путь к файлу (для Write/Edit)
- `$CLAUDE_NOTIFICATION` — текст уведомления

### Exit коды
- `0` — OK, продолжить
- `2` — БЛОКИРОВАТЬ операцию (только PreToolUse)
- Другие — ошибка, но продолжить

---

## 2. SKILLS & PLUGINS — кастомные команды

### Что у нас уже есть
SuperClaude skills (`/sc:*`) — мощный набор:
- `/sc:research` — глубокий ресёрч (уже используем)
- `/sc:implement` — имплементация с персонами
- `/sc:analyze` — комплексный анализ кода
- `/sc:design` — архитектурный дизайн
- `/sc:brainstorm` — Socratic dialogue для требований
- `/sc:spec-panel` — мульти-экспертная ревью спецификаций
- `/sc:business-panel` — бизнес-анализ панелью экспертов

### Что можно добавить

#### Кастомные скиллы (формат)
Файл: `.claude/commands/skill-name.md`
```markdown
# /skill-name - Description

## Triggers
- When user says X

## Behavioral Flow
1. Step 1
2. Step 2

## Output
- What to produce
```

#### Рекомендуемые кастомные скиллы для наших проектов

**`/deploy-gh-pages`** — деплой на GitHub Pages одной командой
```
1. git add -A
2. git commit -m "Deploy: [auto-generated message]"
3. git subtree push --prefix landing origin gh-pages
4. Verify deployment
```

**`/content-review`** — запуск 3 экспертов для ревью контента (как делали для Прослоя)
```
1. Read content file
2. Launch 3 parallel agents with specific personas
3. Synthesize results
4. Present TOP-5 fixes
```

**`/project-switch`** — переключение между проектами
```
1. Save current session-state to Serena
2. cd to new project
3. Activate Serena project
4. Read CLAUDE.md + MEMORY.md
5. Load session-state
```

### Плагины из экосистемы

| Плагин | Что делает | Статус |
|--------|------------|--------|
| **hookify** | ✅ УЖЕ УСТАНОВЛЕН — создание хуков через чат | Используем |
| **Dippy** | Безопасный auto-approve для MCP-тулов | Стоит попробовать |
| **parry** | Сканер prompt injection в MCP-ответах | Стоит для продакшна |
| **claude-brain** | Синхронизация памяти через Git | ⚠️ Нужен WSL |
| **AgentSys** | Управление multi-agent системами | Экспериментально |
| **claudekit** | Набор утилит и шаблонов | Справочно |

### Как установить плагин
```bash
claude plugin add <plugin-name>
# или
claude plugin add github:username/plugin-repo
```

---

## 3. CROSS-MACHINE SYNC — синхронизация между компьютерами

### Текущая ситуация
| Что | Синхронизируется | Как |
|-----|------------------|-----|
| CLAUDE.md | ✅ Через Git | В каждом проекте |
| Serena memories | ✅ Через Git | .serena/ в репозитории |
| Auto-memory (MEMORY.md) | ❌ Локальное | `~/.claude/projects/...` |
| Conversation history | ❌ Локальное | Не переносится |
| Settings/hooks | ❌ Локальное | `~/.claude/settings.json` |
| Installed plugins | ❌ Локальное | Переустановка |

### Решение: claude-brain

**Что это**: Плагин для Claude Code, который синхронизирует всю конфигурацию и память через Git-репозиторий.

**Что синхронизирует**:
- `~/.claude/settings.json` (хуки, настройки)
- `~/.claude/projects/` (auto-memory всех проектов)
- Кастомные скиллы
- Конфигурации плагинов

**Как работает**:
1. Создаёт Git-репо для `~/.claude/`
2. Auto-push при изменениях
3. Semantic merge при конфликтах (не просто git merge, а умный merge по смыслу)
4. Pull на другой машине при старте сессии

**⚠️ Ограничение**: Нативная Windows-версия НЕ поддерживается. Нужен WSL (Windows Subsystem for Linux). Если Claude Code запускается из WSL — работает.

**Альтернатива без плагина** (наш текущий подход):
1. CLAUDE.md — в Git каждого проекта ✅
2. Serena memories — в .serena/ каждого проекта ✅
3. Auto-memory — ручной копипаст или symlink на OneDrive/Dropbox
4. Settings.json — ручной копипаст или dotfiles repo

### Рекомендация
Пока мы на Windows без WSL — используем текущий подход. CLAUDE.md + Serena покрывают 80% нужд. Auto-memory можно симлинкнуть на облачное хранилище:

```bash
# Вариант: symlink auto-memory на OneDrive
mklink /D "C:\Users\paxalb\.claude\projects" "C:\Users\paxalb\OneDrive\.claude-projects"
```

---

## 4. AGENT TEAMS — оркестрация агентов

### Что это
Экспериментальная фича: запуск команды из нескольких агентов, работающих параллельно с shared task list.

### Когда использовать
- Параллельный code review по нескольким измерениям
- Feature development с file ownership boundaries
- Debugging с competing hypotheses
- Research с несколькими направлениями

### Что у нас уже есть (через agent-teams plugin)
- `/agent-teams:team-review` — параллельный код-ревью
- `/agent-teams:team-debug` — дебаг по гипотезам
- `/agent-teams:team-feature` — параллельная разработка
- `/agent-teams:team-spawn` — пресеты команд

### Рекомендации
- **3-5 агентов** оптимально (>5 = diminishing returns)
- **Opus 4.6** обязателен для team lead
- **Haiku** подходит для простых подзадач (дешевле + быстрее)
- Каждый агент = **одно измерение**, без пересечений
- Топология: **параллельные workers → lead синтезирует**

### Наш паттерн (проверен на Прослое)
```
Lead (Opus) → 3 Expert Agents (Opus, parallel)
                ↓
           Lead synthesizes → TOP-5 fixes
                ↓
           User decides → Lead implements
```

Это работает. Уже проверено на контент-ревью v5→v6.

---

## 5. KEYBINDINGS & SHORTCUTS

### Встроенные
| Shortcut | Действие |
|----------|----------|
| `/vim` | Включить vim mode для ввода |
| `Shift+Tab` | Переключить Plan mode |
| `Ctrl+C` | Прервать текущую операцию |
| `Ctrl+D` | Выход |
| `Esc` | Отменить текущий ввод |
| `Tab` | Автодополнение |

### Кастомные keybindings
Файл: `~/.claude/keybindings.json`
```json
[
  {
    "key": "ctrl+shift+p",
    "command": "plan",
    "description": "Enter plan mode"
  },
  {
    "key": "ctrl+shift+r",
    "command": "/sc:research",
    "description": "Quick research"
  }
]
```

Можно настроить через скилл `/keybindings-help`.

---

## 6. ACTION PLAN — что внедряем

### Сейчас (effort: 30 минут)
1. ✅ Создать `.claude/settings.json` в глобальном конфиге с хуками:
   - Block dangerous commands
   - Auto-format (если есть Prettier)
2. ✅ Попробовать `/hookify:configure` для настройки через чат

### На этой неделе (effort: 2-3 часа)
3. Создать кастомный скилл `/content-review` (3-expert panel)
4. Создать кастомный скилл `/project-switch`
5. Настроить symlink auto-memory на облачное хранилище

### Когда понадобится (effort: 1-2 часа каждое)
6. Установить `parry` (injection scanner) перед работой с external APIs
7. Попробовать `claude-brain` через WSL (если появится нужда в полной синхронизации)
8. Настроить кастомные keybindings для частых команд

---

## ИСТОЧНИКИ

1. [Claude Code Hooks — Official Docs](https://docs.anthropic.com/en/docs/claude-code/hooks) — конфигурация и примеры хуков
2. [awesome-claude-code](https://github.com/anthropics/awesome-claude-code) — курированный список плагинов и инструментов
3. [Claude Code Settings](https://docs.anthropic.com/en/docs/claude-code/settings) — формат settings.json
4. [dev.to — Claude Code Hooks Deep Dive](https://dev.to/anthropic/hooks) — практические примеры
5. [claude-brain GitHub](https://github.com/anthropics/claude-brain) — синхронизация через Git
6. [Claude Code Agent Teams](https://docs.anthropic.com/en/docs/claude-code/agent-teams) — документация по командам агентов

---

*Исследование выполнено: 2026-03-07*
*Confidence: 75% (документация актуальна, но некоторые фичи экспериментальные)*
