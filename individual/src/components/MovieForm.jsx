import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function MovieForm() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    rating: "",
    releaseYear: "",
    producer: "",
    cast: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://6815fe8232debfe95dbd0fd4.mockapi.io/api/v1/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add movie");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Movie added:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        Add New Movie
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
          margin="normal"
          multiline
          rows={3}
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
          label="Producer"
          name="producer"
          fullWidth
          margin="normal"
          value={movie.producer}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default MovieForm;
