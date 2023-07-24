import { Box } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", mt: 5, p: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          color: "white",
          maxWidth: "1180px",
          marginInline: "auto",
        }}
      >
        <div>
          <h1>Aahar</h1>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <h3>Company Details</h3>
          <a href="/">About</a>
          <a href="/">Careers</a>
          <a href="/">Team</a>
          <a href="/">Swiggy One</a>
          <a href="/">Swiggy Instamart</a>
          <a href="/">Swiggy Genie</a>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <h3>Contact us</h3>
          <a href="/">Help</a>
          <a href="/">Support</a>
          <a href="/">Partner with us</a>
          <a href="/">Ride with us</a>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <h3>We deliver to:</h3>
          <a href="/">Bangalore</a>
          <a href="/">Hyderabad</a>
          <a href="/">Kurnool</a>
          <a href="/">Marthahalli</a>
          <a href="/">Pune</a>
          <a href="/">India</a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
