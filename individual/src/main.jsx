import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fdd835",
      contrastText: "#000",
    },
    secondary: {
      main: "#333333",
      contrastText: "#fff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bdbdbd",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa000",
    },
    success: {
      main: "#66bb6a",
    },
    info: {
      main: "#29b6f6",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h5: {
      fontWeight: 700,
      color: "#fdd835",
    },
    body1: {
      color: "#ffffff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
