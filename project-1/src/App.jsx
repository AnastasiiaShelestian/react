import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AricleList from "./components/ArticleList";

function App() {
  const name = "Vite";

  return (
    <div>
      <Header />
      <img src={viteLogo} />
      <AricleList />
      <Footer />
    </div>
  );
}

export default App;
