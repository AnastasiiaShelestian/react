import { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import { useNavigate, useParams } from "react-router";

function ProductPage({ setCardItems }) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddItem = (data) => {
    setCardItems((prev) => {
      return [...prev, data];
    });
  };

  useEffect(() => {
    if (isNaN(Number(id))) navigate("/404");
    setData(pizzaData.find((pizza) => pizza.id == id));
  }, []);

  return (
    <div className="pizza-card">
      <img
        src={`/images/${data.image}`}
        alt={data.name}
        className="pizza-image"
      />
      <h2 className="pizza-name">{data.name}</h2>
      <p className="pizza-description">{data.description}</p>
      <p className="pizza-price">Цена: {data.price} $</p>

      <div className="pizza-sizes">
        <p>Доступные размеры:</p>
        <div className="size-buttons">
          {(Array.isArray(data.sizes) ? data.sizes : []).map((size, index) => (
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
        <div>
          <button onClick={() => handleAddItem(data)} className={`size-button`}>
            Добавить в корзину
          </button>
        </div>
      </div>

      {selectedSize && (
        <p className="selected-size">Выбранный размер: {selectedSize}</p>
      )}
    </div>
  );
}

export default ProductPage;
