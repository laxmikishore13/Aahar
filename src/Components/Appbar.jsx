import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Avatar,
  Drawer,
  TextField,
} from "@mui/material";
import mypic from "../../src/Assets/mypic.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// TODO: use theme mui
const Appbar = () => {
  const cart = useSelector((state) => state.cart.items);
  const location = useSelector((state) => state.location?.location[0]?.payload);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/">
              {" "}
              <Typography
                variant="h6"
                noWrap
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Aahar
              </Typography>
            </Link>

            <Box
              sx={{
                display: "flex",
                alignContent: "center",
              }}
            >
              <Link to={"/location"} key={1}>
                <Button key={1} sx={{ color: "black" }}>
                  {location?.name
                    ? `${location?.name} / change location`
                    : "Select Location"}
                </Button>
              </Link>
              <Link to={"/cart"} key={0}>
                <Button key={0} sx={{ color: "black" }}>
                  {`CART - ${cart.length}`}
                </Button>
              </Link>
              <Link to={"/account"} key={2}>
                <Button key={2} sx={{ color: "black" }}>
                  Account
                </Button>
              </Link>
              <Avatar
                alt="Remy Sharp"
                sx={{ height: "40px", marginLeft: "10px" }}
                src={mypic}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Appbar;
