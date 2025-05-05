import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router";

const MovieCard = ({ id, title, description, rating, posterUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: "secondary.main",
        color: "text.primary",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={posterUrl}
        alt={title}
        sx={{
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: "#fdd835", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center" mt={1} mb={1}>
          <Rating
            value={rating / 2}
            precision={0.5}
            readOnly
            sx={{
              color: "#fdd835",
            }}
          />
          <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
            {rating.toFixed(1)} / 10
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description.length > 100
            ? description.slice(0, 100) + "…"
            : description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          size="small"
          onClick={handleClick}
          sx={{
            color: "#fdd835",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Learn more...
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
