import { Box, Container, Divider, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Card";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../Utils/RestaurantSlice";

const RestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [restaurantMenuDetails, setRestaurantMenuDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { resId } = useParams();
  const URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.8315641&lng=78.0266735&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

  useEffect(() => {
    fetchRestaurantDetails(URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRestaurantDetails = async (url) => {
    setLoading(true);
    const fetchRequest = await fetch(url);
    const response = await fetchRequest.json();
    setRestaurantDetails(response?.data?.cards[0]?.card?.card?.info);
    //sending restaurant details to store to use in checkout page
    dispatch(addRestaurant(response?.data?.cards[0]?.card?.card?.info));
    setRestaurantMenuDetails(
      response?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
    setLoading(false);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{restaurantDetails.name}</Typography>
          <Typography variant="h5">
            {`Recommended (${restaurantMenuDetails?.length})`}
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "15px",
          }}
        >
          {restaurantMenuDetails?.map((restaurant, index) => {
            return (
              <Cards
                restaurants={restaurant?.card?.info}
                key={restaurant?.card?.info?.id}
              />
            );
          })}
        </Box>
        {loading && <Shimmer />}
      </Container>
    </Box>
  );
};

export default RestaurantDetails;
