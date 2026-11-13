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

## Три Django-приложения

```bash
cd projects/learning_logs && docker compose up -d --build
cd ../blog && docker compose up -d --build
cd ../task_manager && docker compose up -d --build
```

Порты по умолчанию: Learning Log `8001`, Blog `8002`, Task Manager `8003`. У каждого приложения свой `.env`, том SQLite и README с инструкциями. Перед запуском скопируйте `.env.example` в `.env` в каждой папке и задайте отдельный случайный `DJANGO_SECRET_KEY`.

## Hub в Docker

Из корня репозитория: `docker compose up -d --build`. Compose здесь запускает только дополнительный React Hub на порту `3000`. Для внешнего доступа задайте в корневом `.env` переменные `VITE_LEARNING_LOGS_URL`, `VITE_BLOG_URL`, `VITE_TASK_MANAGER_URL` с публичными адресами трёх приложений: Vite встраивает их во время сборки. После изменения адресов пересоберите Hub.

## Архитектура

- `src/` — React-компоненты, конфигурация проектов и CSS-анимации;
- `public/` — оригинальный SVG-символ;
- `projects/` — три независимых Django-репозитория как submodules;
- `.github/workflows/` — сборка Hub и тесты всех submodules.

## Screenshots

После запуска снимок главного экрана можно сохранить в `docs/screenshots/hub.png`.

## CI

GitHub Actions выполняет `npm ci`, `npm run build`, затем `python manage.py check` и `python manage.py test` для каждого Django-проекта.
