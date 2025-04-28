import Header from "./components/Header";
import Footer from "./components/Footer";
import PizzaCard from "./components/PizzaCard";
import PizzaList from "./components/PizzaList";
import Slider from "./components/Slider";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <PizzaList />
      <Footer />
    </div>
  );
}

export default App;
