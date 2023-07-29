import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import "./Card.css";
import { addItem, deleteItem } from "../Utils/CartSlice";
import { useDispatch } from "react-redux";

const CheckoutCard = ({ restaurants }) => {
  const { name, price } = restaurants;
  const dispatch = useDispatch();
  const addCuisine = (item) => {
    dispatch(addItem(item));
  };
  const deleteCuisine = (item) => {
    dispatch(deleteItem(item));
  };
  return (
    <div>
      {" "}
      <Card sx={{ height: "100px", width: "660px", mt: 5 }}>
        <CardContent>
          <Typography gutterBottom noWrap={true} variant="h6">
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography noWrap={true} fontWeight={400}>
              {"Cost: " + price / 100 + "/-"}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={() => addCuisine(restaurants)}>Add</Button>
              <Button onClick={() => deleteCuisine(restaurants)}>Remove</Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutCard;
