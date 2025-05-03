import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MovieIcon from "@mui/icons-material/Movie";

function Header() {
  return (
    <AppBar position="static" color="secondary" elevation={4}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
        >
          <MovieIcon sx={{ color: "#fdd835" }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#fdd835", fontWeight: "bold" }}
        >
          My Movies Library
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
