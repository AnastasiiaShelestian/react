import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router";
import { Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" color="secondary" elevation={4}>
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <MovieIcon sx={{ marginRight: "10px" }} />
          Home
        </Button>
        <Button color="inherit" component={Link} to="/movies">
          Browse
        </Button>
        <Button color="inherit" component={Link} to="/movies/add">
          Add Movie
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
