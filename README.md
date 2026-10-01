# my-grid-demo

Лабораторная работа №2 — React + CSS Grid + Flexbox.

## Цель работы

Собрать макет страницы на CSS Grid (`grid-template-areas`) из переиспользуемых
React-компонентов, передать данные через `props` и контент через `children`,
разобраться с CSS-переменными, псевдоклассами и адаптивом через медиа-запрос.

## Структура проекта

```
my-grid-demo/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Layout.jsx
    │   ├── Header.jsx
    │   ├── Sidebar.jsx
    │   ├── MainContent.jsx
    │   └── Footer.jsx
    └── styles/
        └── index.css
```

## Как запустить

```bash
npm install
npm run dev
```

Откройте http://localhost:5173.

## Что внутри

- **Layout** — обёртка с `className="layout"`, которая через `children`
  принимает всё, что положили внутрь (`Header`, `Sidebar`, `MainContent`, `Footer`).
- **Header / Sidebar / MainContent / Footer** — компоненты, получающие данные
  через `props` (`title`, `userName`, `items`, `year`).
- **CSS Grid** в `src/styles/index.css`:
  - `grid-template-columns: 250px 1fr` — фиксированный сайдбар + резиновый контент;
  - `grid-template-areas` — текстовая схема макета (`header / sidebar main / footer`);
  - `grid-area` у `.header/.sidebar/.main/.footer` привязывает блоки к областям;
  - CSS-переменные в `:root` (`--gap`, `--header-bg` и т. д.) задают общую тему;
  - псевдоклассы `:hover` / `:active` подсвечивают пункты меню;
  - медиа-запрос `@media (max-width: 768px)` перестраивает сетку в одну колонку
    (сайдбар уходит под контент).

## Мини-задания (самопроверка)

1. **Поменять сайдбар и контент местами** — в `.layout` замените
   `grid-template-areas` на `"header header" "main sidebar" "footer footer"`
   и в CSS увидите, как блоки поменяются местами без изменения JSX.
2. **Добавить пустую колонку** — замените колонки на
   `grid-template-columns: 200px 1fr 200px` и используйте `.` в
   `grid-template-areas` (например, `"header header header"`,
   `"sidebar main ."`, `"footer footer footer"`), чтобы получить «дырку» сбоку.
3. **Другой контент в MainContent** — в `App.jsx` замените содержимое между
   `<MainContent>...</MainContent>` на список или абзацы — `children`
   отрисует что угодно, без правок самого компонента.
4. **Адаптив** — откройте DevTools → Toggle Device Toolbar, выберите
   мобильный экран и проверьте срабатывание `@media (max-width: 768px)`.

## Сборка

```bash
npm run build
npm run preview
```
