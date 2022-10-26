
# Трекер активности

Ссылка на сервис: <https://activity.netitov.ru/>  
API: <https://api.table.netitov.ru/>

## Суть проекта

Отслеживание фитнес-активности каждый день

## Функциональность

- получение данных таблицы через API
- сортировка таблицы
- фильтрация таблицы

* добавление/удаление данных в таблице через Postman

### Изменения данных в таблице на сервере

1. Получение всех данных из таблицы
`GET https://api.table.netitov.ru/`

2. Добавление данных в таблицу
`POST https://api.table.netitov.ru/`
`Body (пример):{
"date":
    "2022-10-02",
    "title": "Бег",
    "amount": 98,
    "distance": 7
}
`

3. Удаление строки из таблицы
`DELETE https://api.table.netitov.ru/<id строки>`


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
