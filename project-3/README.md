# README: Лабораторная работа №3. Использование хуков и рендер списков

## Инструкции по запуску проекта

### Требования

- Node.js (версия 16+)
- npm или yarn
- Браузер с поддержкой ES6

### Установка и запуск

1. Клонируйте репозиторий:
   ```sh
   git clone ...
   cd ...
   ```
2. Установите зависимости:
   ```sh
   npm install
   ```
3. Запустите проект:
   ```sh
   npm run dev
   ```
4. Откройте браузер и перейдите по адресу, указанному в консоли.

## Описание лабораторной работы

Этот проект представляет собой лабораторную работу по React, в которой используется `useState` и `useEffect` для управления состоянием и динамического рендеринга списков. В качестве примера реализован интернет-магазин одежды.

## Краткая документация к проекту

### Структура проекта

- `src/components/Header.jsx` – компонент заголовка.
- `src/components/Footer.jsx` – компонент подвала.
- `src/components/PizzaCard.jsx` – карточка товара.
- `src/components/PizzaList.jsx` – список товаров.
- `src/components/Slider.jsx` – слайдер изображений.
- `src/data/products.json` – тестовые данные для списка товаров.

### Основные технологии

- React (Vite)
- Хуки: `useState`, `useEffect`
- JSON для хранения мок-данных

## Примеры использования проекта

### Пример кода

#### Компонент карточки товара :

```jsx
import React, { useState } from "react";

function PizzaCard({ name, image, description, price, sizes }) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const availableSizes = Array.isArray(sizes) ? sizes : [];

  return (
    <div className="pizza-card">
      <img src={`/images/${image}`} alt={name} className="pizza-image" />
      <h2 className="pizza-name">{name}</h2>
      <p className="pizza-description">{description}</p>
      <p className="pizza-price">Цена: {price} $</p>

      <div className="pizza-sizes">
        <p>Доступные размеры:</p>
        <div className="size-buttons">
          {availableSizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSizeChange(size)}
              className={`size-button ${
                selectedSize === size ? "selected" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {selectedSize && (
        <p className="selected-size">Выбранный размер: {selectedSize}</p>
      )}
    </div>
  );
}

export default PizzaCard;
```

#### Компонент списка товаров (`ProductList.jsx`):

```jsx
import { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzaData);
  }, []);

  return (
    <div className="pizza-list">
      {pizzas.length === 0 ? (
        <p>Загрузка пицц...</p>
      ) : (
        pizzas.map((pizza) => <PizzaCard key={pizza.name} {...pizza} />)
      )}
    </div>
  );
}

export default PizzaList;
```

## Ответы на контрольные вопросы

1. **Как работает `useState`?**

   - `useState` используется для создания состояния внутри функционального компонента. Оно возвращает текущий `state` и функцию для его обновления.

2. **Как использовать `useEffect` для загрузки данных?**

   - `useEffect` с пустым массивом зависимостей (`[]`) выполняется один раз при монтировании компонента и используется для загрузки данных, подписок и других побочных эффектов.

3. **Как динамически рендерить списки в React?**
   - Используется метод `map()`, который проходит по массиву данных и возвращает JSX-разметку для каждого элемента.

## Список использованных источников

- [Официальная документация React](https://reactjs.org/)

## Дополнительные важные аспекты

- **Стилизация:** В проекте используются CSS-классы для стилизации компонентов.
- **Адаптивность:** Макет адаптирован для разных экранов.
- **Дополнительный функционал:** В `Slider.jsx` реализовано автоматическое переключение слайдов каждые 3 секунды с помощью `useEffect`.
