import { useState, useEffect } from "react";
import pizzaData from "../data/pizza.json";
import PizzaCard from "./PizzaCard";
import { useNavigate } from "react-router";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPizzas(pizzaData);
  }, []);

  return (
    <div className="pizza-list">
      {pizzas.length === 0 ? (
        <p>Загрузка пицц...</p>
      ) : (
        pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.name}
            {...pizza}
            onClick={() => {
              navigate(`/pizzas/${pizza.id}`);
            }}
          />
        ))
      )}
    </div>
  );
}

export default PizzaList;
