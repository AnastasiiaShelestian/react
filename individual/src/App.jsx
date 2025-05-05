import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import MoviesList from "./components/MoviesList";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/add" element={<MovieForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
