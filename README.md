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
  - `grid-template-columns: 200px 1fr 200px` — две фиксированные колонки по
    краям и резиновая середина;
  - `grid-template-areas` — текстовая схема макета
    (`header / main sidebar . / footer`), третья область (`.`) ничем не
    занята — это и есть пустая «дырка» из мини-задания 2;
  - `grid-area` у `.header/.sidebar/.main/.footer` привязывает блоки к областям;
  - CSS-переменные в `:root` (`--gap`, `--header-bg` и т. д.) задают общую тему;
  - псевдоклассы `:hover` / `:active` подсвечивают пункты меню;
  - медиа-запрос `@media (max-width: 768px)` перестраивает сетку в одну колонку.

## Мини-задания — уже выполнены в коде

1. **Сайдбар и контент поменяны местами** — в `.layout`
   (`src/styles/index.css`) `grid-template-areas` теперь
   `"main sidebar ."` вместо исходного `"sidebar main"`. JSX не трогали —
   поменялась только текстовая карта сетки.
2. **Добавлена пустая колонка** — `grid-template-columns: 200px 1fr 200px`,
   третья колонка не привязана ни к одному блоку (`.` в
   `grid-template-areas`) — это и есть «дырка» в сетке.
3. **В `MainContent` другой контент** — в `App.jsx` вместо прежнего списка
   пунктов меню теперь абзацы и нумерованный список, который объясняет,
   что изменилось в макете. Сам компонент `MainContent` не менялся — он
   просто рендерит `{children}`, какими бы они ни были.
4. **Адаптив** — медиа-запрос `@media (max-width: 768px)` в
   `src/styles/index.css` уже на месте и не требует правок кода. Чтобы его
   увидеть: откройте сайт в браузере, нажмите F12 (DevTools), затем значок
   «Toggle Device Toolbar» (или Ctrl+Shift+M) и выберите любой мобильный
   профиль — сетка схлопнется в одну колонку.

Все правки отмечены комментариями прямо в `index.css` и `App.jsx` — удобно,
если на защите попросят показать, где именно что поменяли.

## Сборка

```bash
npm run build
npm run preview
```
