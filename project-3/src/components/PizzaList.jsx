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
