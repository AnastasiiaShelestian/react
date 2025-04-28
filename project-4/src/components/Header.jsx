import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h1>Пицца</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/about">О нас</Link>
      </nav>
    </header>
  );
}

export default Header;
