// src/components/Footer.jsx
import React from "react";
import { Box, Typography, IconButton, Link, Container } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d1117",
        color: "white",
        py: 3,  
        mt: 6,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Left Side - Copyright */}
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Irtaza Ahmed Khatri. All rights reserved.
        </Typography>

        {/* Right Side - Social Links */}
        <Box>
          <IconButton
            component={Link}
            href="https://github.com/IrtazaAhmed147"
            target="_blank"
            rel="noopener"
            sx={{ color: "white" }}
          >
            <GitHub />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/irtaza-ahmed-khatri-366731264/"
            target="_blank"
            rel="noopener"
            sx={{ color: "white" }}
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            component={Link}
            href="mailto:irtazaahmedk@gmail.com"
            sx={{ color: "white" }}
          >
            <Email />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
