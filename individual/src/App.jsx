import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Home from "./components/Home";
import Browse from "./components/Browse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/" element={<Browse />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/add" element={<MovieForm />} />
          <Route path="/movies/edit/:id" element={<MovieForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
