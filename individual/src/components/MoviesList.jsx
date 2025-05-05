import { Box } from "@mui/material";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

function MoviesList() {
  const [data, setData] = useState();

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

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
      {data && data.map((movie) => <MovieCard key={movie.id} {...movie} />)}
    </Box>
  );
}

export default MoviesList;
