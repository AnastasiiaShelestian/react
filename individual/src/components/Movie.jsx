import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Rating, Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const url = `https://6815fe8232debfe95dbd0fd4.mockapi.io/api/v1/movie/${id}`;

  const handleEdit = () => navigate(`/movies/edit/${id}`);

  const handleDelete = () => {
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete movie");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch movie");
        return res.json();
      })
      .then(setData)
      .catch((err) => console.error(err));
  }, [url]);

  if (!data) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        maxWidth: 1000,
        mx: "auto",
        mt: 5,
        px: 2,
      }}
    >
      <Box
        component="img"
        src={data.posterUrl}
        alt={data.title}
        sx={{
          width: { xs: "100%", md: 350 },
          height: "auto",
          borderRadius: 2,
          boxShadow: 3,
          objectFit: "cover",
        }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fdd835" }}>
          {data.title}
        </Typography>

        <Box display="flex" alignItems="center" mt={1} mb={2}>
          <Rating value={data.rating / 2} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ ml: 1, color: "text.secondary" }}>
            {data.rating.toFixed(1)} / 10
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography sx={{ fontWeight: "bold" }}>Year:</Typography>
        <Typography sx={{ mb: 1 }}>{data.releaseYear}</Typography>

        <Typography sx={{ fontWeight: "bold" }}>Producer:</Typography>
        <Typography sx={{ mb: 1 }}>{data.producer}</Typography>

        {data.genres?.length > 0 && (
          <>
            <Typography sx={{ fontWeight: "bold" }} mb={1}>
              Genres:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
              {data.genres.map((genre, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    border: "1px solid #fdd835",
                    color: "#fdd835",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                  }}
                >
                  {genre}
                </Typography>
              ))}
            </Box>
          </>
        )}

        {data.cast?.length > 0 && (
          <>
            <Typography sx={{ fontWeight: "bold" }}>Cast:</Typography>
            <Box component="ul" sx={{ pl: 2, mb: 1 }}>
              {data.cast.map((actor, index) => (
                <li key={index}>
                  <Typography variant="body2">{actor}</Typography>
                </li>
              ))}
            </Box>
          </>
        )}

        <Typography sx={{ fontWeight: "bold", mt: 2 }}>Description:</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {data.description}
        </Typography>

        <Box display="flex" gap={2} mt={4}>
          <Button
            onClick={handleEdit}
            variant="contained"
            sx={{
              backgroundColor: "#fdd835",
              color: "#000",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#fbc02d",
              },
            }}
          >
            <EditIcon sx={{ marginRight: "10px" }} />
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            variant="outlined"
            sx={{
              borderColor: "#fdd835",
              color: "#fdd835",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                borderColor: "#fbc02d",
                color: "#fbc02d",
              },
            }}
          >
            <DeleteForeverIcon sx={{ marginRight: "10px" }} />
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;
