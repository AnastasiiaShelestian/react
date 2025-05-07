import { Box, Button, Typography } from "@mui/material";
import MoviesList from "./MoviesList";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Home() {
  const navigate = useNavigate();

  const handleAddMovieClick = () => {
    navigate("/movies/add");
  };

  return (
    <>
      <Box pb={3}>
        <Typography variant="h3" gutterBottom sx={{ color: "#fdd835" }}>
          <MovieIcon fontSize="large" sx={{ color: "#fdd835" }} /> My Movies
          Library
        </Typography>
        <Typography>
          Browse the list of movies. Add your own movies to the collection!
        </Typography>
        <Typography>
          Click on "Learn more" button to edit or delete movies.
        </Typography>
        <Typography>Create your own movies library.</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddMovieClick}
          sx={{ mb: 4 }}
        >
          <AddBoxIcon sx={{ marginRight: "10px" }} />
          Add Movie
        </Button>
      </Box>

      <MoviesList />
    </>
  );
}

export default Home;
