import { Box } from "@mui/material";
import MovieCard from "./MovieCard";

function MoviesList() {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
      <MovieCard
        id="1"
        name="Interstellar"
        description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        imageUrl="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        rating={9.4}
      />
      <MovieCard
        id="1"
        name="Interstellar"
        description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        imageUrl="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        rating={9.4}
      />
      <MovieCard
        id="1"
        name="Interstellar"
        description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        imageUrl="https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        rating={9.4}
      />
    </Box>
  );
}

export default MoviesList;
