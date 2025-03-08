import PostCard from "./components/PostCard/PostCard";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <PostCard
            title="Hello, World!"
            content="This is my first post"
            date="2025-01-17"
          />
          <PostCard
            title="React Props"
            content="Learn how to use props in React"
            date="2024-04-20"
          />
          <PostCard
            title="React Components"
            content="Explore the world of React components"
            date="2022-01-17"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
