# Yoga with Lena 🌿

Веб-сайт для йога-тренера. Реализован на [Astro](https://astro.build) с использованием Tailwind CSS.  
Готов для запуска в GitHub Codespaces и локально в VSCode.

## 🚀 Запуск локально

1. Установи зависимости:
```bash
npm install
```

2. Сгенерируй стили:
```bash
npx tailwindcss -i ./public/style.css -o ./public/output.css --watch
```

3. Запусти Astro:
```bash
npm run dev
```

4. Открой в браузере:
```
http://localhost:4321
```

## 📁 Структура проекта

- `src/pages` — страницы сайта
- `src/components` — переиспользуемые компоненты
- `public` — CSS и ассеты
- `astro.config.mjs` — конфигурация Astro

## 🔧 План

- [x] Главная
- [x] Каталог услуг с заглушкой
- [ ] Переключение языка (RU / EN)
- [ ] Контакты и Instagram
- [ ] Оплата через Stripe / TillyPay

---

Сайт в разработке ✨
