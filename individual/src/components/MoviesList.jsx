import { Box } from "@mui/material";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

function MoviesList({ search, selectedGenres, sort }) {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    fetch("https://6815fe8232debfe95dbd0fd4.mockapi.io/api/v1/movie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add movie");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    let movies = data;
    if (search)
      movies = movies.filter((movie) =>
        Object.values(movie).some(
          (value) => typeof value === "string" && value.includes(search)
        )
      );

    if (sort) {
      movies = [...movies].sort((a, b) => {
        if (sort === "title") {
          return a.title.localeCompare(b.title);
        } else if (sort === "rating") {
          return b.rating - a.rating;
        } else if (sort === "year") {
          return b.releaseYear - a.releaseYear;
        }
        return 0;
      });
    }

    if (selectedGenres && selectedGenres.length > 0) {
      movies = movies.filter((movie) =>
        movie.genres?.some((genre) => selectedGenres.includes(genre))
      );
    }

    setFilteredData(movies);
  }, [data, search, selectedGenres, sort]);

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
      {filteredData &&
        filteredData.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Box>
  );
}

export default MoviesList;
