# news-analyzer

## Автор учебного проекта - Горшкова Алёна

При создании проекта были задействованы: HTML, CSS, JS, Git, сборка на Webpack. 
Принцип вёрстки основан на методологии БЭМ.

Проект состоит из трёх, связанных между собой страниц: 
1. index.html содержит строку поиска и при запросе к NewsApi, формирует и выводит новостные карточки с сервера.
2. about.html рассказывает о проекте и подгружает слайдер с карточками-ссылками на авторов коммитов с GithubApi. 
3. analitics.html  - подгружает в виде графика количество запросов искомого слова за неделю.

Развернуть проект можно по ссылке: https://alenita.github.io/news-analyzer/ или, скопировав себе репозиторий, запустить: 
`npm install
npm run build
npm run dev`

Наиболее актуальная версия - 1.0.5.

Следующий шаг в работе над проектом - оптимизировать  методы обработки данных на странице с аналитикой добавлением ES6 класса.