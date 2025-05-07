import {
  Box,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import MoviesList from "./MoviesList";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { genreList } from "../constants/genres";

function Browse() {
  const [search, setSearch] = useState();
  const [sortBy, setSortBy] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (event) => {
    const genre = event.target.name;
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      gap={4}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "300px" },
          flexShrink: 0,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search for movies..."
          variant="outlined"
          label="Search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "action.active", mr: 1 }} />
            ),
          }}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="sort-label">Sort by...</InputLabel>
          <Select
            labelId="sort-label"
            name="sort"
            value={sortBy}
            label="Sort by..."
            onChange={handleSortChange}
          >
            <MenuItem value="title">Title (A-Z)</MenuItem>
            <MenuItem value="rating">Rating (High → Low)</MenuItem>
            <MenuItem value="year">Year (New → Old)</MenuItem>
          </Select>
        </FormControl>

        <FormLabel component="legend" sx={{ mb: 1 }}>
          Filter by Genre
        </FormLabel>
        <FormGroup>
          {genreList.map((genre) => (
            <FormControlLabel
              key={genre}
              control={
                <Checkbox
                  checked={selectedGenres.includes(genre)}
                  onChange={handleGenreChange}
                  name={genre}
                />
              }
              label={genre}
            />
          ))}
        </FormGroup>
      </Box>

      <Box flexGrow={1} display="flex" justifyContent="center">
        <MoviesList
          search={search}
          sort={sortBy}
          selectedGenres={selectedGenres}
        />
      </Box>
    </Box>
  );
}

export default Browse;
