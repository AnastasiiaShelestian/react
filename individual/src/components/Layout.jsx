import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 4,
            px: 2,
            backgroundColor: "background.default",
            color: "text.primary",
            minHeight: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
