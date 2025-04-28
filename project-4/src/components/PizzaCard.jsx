import React from "react";

function PizzaCard({ name, image, description, price, onClick }) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="pizza-card">
      <img src={`/images/${image}`} alt={name} className="pizza-image" />
      <h2 className="pizza-name">{name}</h2>
      <p className="pizza-description">{description}</p>
      <p className="pizza-price">Цена: {price} $</p>

      <div>
        <button onClick={handleClick} className={`size-button`}>
          Узнать больше
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;
