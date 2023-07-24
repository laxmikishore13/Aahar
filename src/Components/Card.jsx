import React from "react";
import { IMG_CDN } from "../Utils/Constant";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Card.css";
import StarsIcon from "@mui/icons-material/Stars";
import { addItem, deleteItem } from "../Utils/CartSlice";
import { useDispatch } from "react-redux";

const Cards = ({ restaurants }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, price, imageId } =
    restaurants;
  const dispatch = useDispatch();
  const addCuisine = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {" "}
      <Card sx={{ height: "300px", width: "260px", mt: 5 }}>
        <CardMedia
          component="img"
          image={IMG_CDN + (cloudinaryImageId ? cloudinaryImageId : imageId)}
          alt=""
          sx={{
            height: "170px",
            borderRadius: "5px",
          }}
        />
        <CardContent>
          <Typography gutterBottom noWrap={true} variant="h6">
            {name}
          </Typography>
          {avgRating !== "--" &&
          avgRating !== null &&
          avgRating !== undefined ? (
            <Box sx={{ display: "inline-flex", gap: "5px" }}>
              <StarsIcon color="success" />
              <Typography>{avgRating}</Typography>
            </Box>
          ) : null}
          <Typography noWrap={true} fontWeight={400}>
            {cuisines?.join()}
          </Typography>
          {price ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography noWrap={true} fontWeight={400}>
                {"Cost: " + price / 100 + "/-"}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => addCuisine(restaurants)}
              >
                Add
              </Button>
            </Box>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
