import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLocation, clearLocation } from "../Utils/LocationSlice";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const URL = `https://api.api-ninjas.com/v1/city?name=${location}`;

  useEffect(() => {
    dispatch(clearLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLocationDetails = async () => {
    setLoading(true);
    const request = await fetch(URL, {
      headers: { "X-Api-Key": "8m81/+mYRXC94LHOPHFs6A==wqbUTBzJJ7eRraJy" },
    });
    const response = await request.json();
    dispatch(addLocation(response[0]));
    setLoading(false);
    navigate("/");
  };

  return (
    <Box sx={{ mt: 5, height: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ mt: 5, display: "flex", gap: "15px" }}>
          <TextField
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            label="Enter Location"
            id="fullWidth"
          />
          <Button variant="contained" onClick={() => fetchLocationDetails()}>
            Select Location
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Location;
