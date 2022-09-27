## Quick Start
1. Node v8+, npm v5+
2. 
3. `yarn install` or `npm install`
4. `yarn start` or `npm start`

## TLDR

Проект включает в себя все фишки доступные из коробки create-react-app, а также:

- State менеджмент через [redux](https://redux.js.org/), [redux-saga](https://redux-saga.js.org/).
- Стандартный роутинг через [react-router](https://reacttraining.com/react-router/web)

## Структура проекта

#### `src/assets/`

Папка для статических файлов.

#### `src/components/`

Компоненты без внутреннего состояния (глупые компоненты).
#### `src/containers/`

Компоненты, подключенные к хранилищу redux. 

#### `src/pages/`

Компоненты существующие на уровне роутов.

#### `src/store/`

Включает в себя файлы для стейт мендежмента через redux

#### Important mention

> Папка `src` используется в качестве абсолютного пути для импортов. То есть:
>
> ```import Button from '../../../Base/Button```
>
> заменяется на
>
>```import Foo from 'Base/Button/```


