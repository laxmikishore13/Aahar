import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";
import PaymentCardCheckout from "./PaymentCardCheckout";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.items);
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  return cart?.length > 0 ? (
    <Box sx={{ mt: 5, p: 5 }}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          {cart?.map((cartItem) => {
            return (
              <CheckoutCard
                restaurants={cartItem?.payload}
                key={cartItem?.payload.id}
              />
            );
          })}
        </Box>
        <PaymentCardCheckout restaurant={restaurant[0]?.payload} cart={cart} />
      </Container>
    </Box>
  ) : null;
};

export default CartDetails;
