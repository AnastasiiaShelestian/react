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
