import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "text.secondary",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2" sx={{ color: "#fdd835" }}>
        © {new Date().getFullYear()} My Movies Library by Anastasiia Shelestian.
      </Typography>
    </Box>
  );
}

export default Footer;
