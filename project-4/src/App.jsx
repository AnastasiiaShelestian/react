import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";

import { Routes, Route, BrowserRouter } from "react-router";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import ProductPage from "./components/ProductPage";
import { useState } from "react";

function App() {
  const [cardItems, setCardItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cardItems={cardItems} setCardItems={setCardItems} />}
          />
          <Route
            path="/pizzas/:id"
            element={<ProductPage setCardItems={setCardItems} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
