import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { genreList } from "../constants/genres";

function MovieForm() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    releaseYear: "",
    producer: "",
    posterUrl: "",
    cast: [],
    genres: [],
  });

  const [castInput, setCastInput] = useState(""); // for displaying comma-separated cast
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`https://6815fe8232debfe95dbd0fd4.mockapi.io/api/v1/movie/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
          setCastInput(data.cast?.join(", ") || "");
        })
        .catch((error) => console.error("Error fetching movie:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleCastChange = (e) => {
    const value = e.target.value;
    setCastInput(value);
    const castArray = value
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);
    setMovie((prev) => ({ ...prev, cast: castArray }));
  };

  const handleGenreChange = (e) => {
    const genre = e.target.name;
    if (e.target.checked) {
      setMovie((prev) => ({
        ...prev,
        genres: [...prev.genres, genre],
      }));
    } else {
      setMovie((prev) => ({
        ...prev,
        genres: prev.genres.filter((g) => g !== genre),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlBase = "https://6815fe8232debfe95dbd0fd4.mockapi.io/api/v1/movie";
    const url = id ? `${urlBase}/${id}` : urlBase;

    fetch(url, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...movie, rating: parseFloat(movie.rating) }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to save movie");
        return response.json();
      })
      .then((data) => {
        navigate(`/movies/${data.id}`);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "secondary.main",
        color: "text.primary",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {id ? "Edit Movie" : "Add New Movie"}
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          margin="normal"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={movie.description}
          onChange={handleChange}
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          fullWidth
          margin="normal"
          value={movie.rating}
          onChange={handleChange}
          required
        />
        <TextField
          label="Release Year"
          name="releaseYear"
          type="number"
          fullWidth
          margin="normal"
          value={movie.releaseYear}
          onChange={handleChange}
          required
        />
        <TextField
          label="Producer Full Name"
          name="producer"
          fullWidth
          margin="normal"
          value={movie.producer}
          onChange={handleChange}
          required
        />
        <TextField
          label="Poster URL"
          name="posterUrl"
          fullWidth
          margin="normal"
          value={movie.posterUrl}
          onChange={handleChange}
        />
        <TextField
          label="Cast (comma-separated)"
          name="cast"
          fullWidth
          margin="normal"
          value={castInput}
          onChange={handleCastChange}
          placeholder="e.g., Tom Hanks, Meryl Streep"
        />
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Genres
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {genreList.map((genre) => (
            <FormControlLabel
              key={genre}
              control={
                <Checkbox
                  name={genre}
                  checked={movie.genres.includes(genre)}
                  onChange={handleGenreChange}
                />
              }
              label={genre}
            />
          ))}
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default MovieForm;
