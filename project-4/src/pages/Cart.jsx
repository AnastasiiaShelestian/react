import PizzaCard from "../components/PizzaCard";

function Cart({ cardItems, setCardItems }) {
  const handleEmpty = () => {
    setCardItems([]);
  };

  return (
    <>
      {cardItems.length === 0 ? (
        <>
          <h1>Корзина</h1>
          <p>Ваша корзина пока пуста.</p>
        </>
      ) : (
        <>
          <button onClick={handleEmpty}>Очистить корзину</button>
          {cardItems.map((item) => (
            <div key={item.id}>
              <h2 className="pizza-name">{item.name}</h2>
              <p className="pizza-price">Цена: {item.price} $</p>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Cart;
