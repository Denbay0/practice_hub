# Protocol 7 — Django Practice Archive

Атмосферный Lain/Wired-inspired Hub для трёх учебных Django-проектов. Интерфейс создан с нуля на React + TypeScript: CRT scanlines, процедурный SVG/noise, сетка узлов, терминальный boot-screen и пасхалка Wired mode. Официальные арты и кадры не используются.

## Проекты

| Node | Project | Source | Local URL |
|---|---|---|---|
| NODE_01 | Learning Logs | https://github.com/Denbay0/learning_logs | http://localhost:8001 |
| NODE_02 | Blog | https://github.com/Denbay0/blog | http://localhost:8002 |
| NODE_03 | Task Manager | https://github.com/Denbay0/task_manager | http://localhost:8003 |

Три каталога в `projects/` — Git submodules. Production-адреса задаются переменными из `.env.example`; неизвестные домены не захардкожены.

## Клонирование

```bash
git clone --recurse-submodules https://github.com/Denbay0/practice_hub.git
cd practice_hub
```

Если репозиторий уже клонирован: `git submodule update --init --recursive`.

## Hub development

```bash
npm ci
npm run dev
npm run build
```

## Полный комплект в Docker

```bash
docker compose up --build
```

Порты: Hub `3000`, Learning Logs `8001`, Blog `8002`, Task Manager `8003`.

## Архитектура

- `src/` — React-компоненты, конфигурация проектов и CSS-анимации;
- `public/` — оригинальный SVG-символ;
- `projects/` — три независимых Django-репозитория как submodules;
- `.github/workflows/` — сборка Hub и тесты всех submodules.

## Screenshots

После запуска снимок главного экрана можно сохранить в `docs/screenshots/hub.png`.

## CI

GitHub Actions выполняет `npm ci`, `npm run build`, затем `python manage.py check` и `python manage.py test` для каждого Django-проекта. Деплой намеренно не настроен.
