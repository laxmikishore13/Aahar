import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { IMG_CDN } from "../Utils/Constant";
import { Link } from "react-router-dom";

const PaymentCardCheckout = ({ restaurant, cart }) => {
  const { name, cloudinaryImageId, city } = restaurant;
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amount = 0;
    cart?.map((cartItem, i) => {
      let price = cartItem.payload.price / 100;
      return (amount += price);
    });
    setTotalAmount(amount);
  }, [cart]);

  return (
    <div>
      <Card sx={{ height: "auto", width: "460px", mt: 5 }}>
        <Box sx={{ display: "flex", gap: "10px", m: 2 }}>
          <img
            src={IMG_CDN + cloudinaryImageId}
            alt=""
            style={{ height: "60px", width: "60px" }}
          />
          <Box>
            <Typography
              gutterBottom
              noWrap={true}
              sx={{ fontSize: "17px", fontWeight: "500" }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              noWrap={true}
              sx={{ fontSize: "13px", fontWeight: "500" }}
            >
              {city}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ textAlign: "center" }}>
          {cart?.map((cart) => {
            return (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  gutterBottom
                  noWrap={true}
                  sx={{ fontSize: "15px", fontWeight: "500" }}
                >
                  {cart?.payload.name}
                </Typography>
                <Typography
                  gutterBottom
                  noWrap={true}
                  sx={{ fontSize: "15px", fontWeight: "500" }}
                >
                  {cart?.payload.price / 100 + " /-"}
                </Typography>
              </Box>
            );
          })}
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
            <Typography
              gutterBottom
              noWrap={true}
              sx={{ fontSize: "17px", fontWeight: "500" }}
            >
              Total
            </Typography>
            <Typography
              noWrap={true}
              sx={{ fontSize: "17px", fontWeight: "500" }}
            >
              {totalAmount + " /-"}
            </Typography>
          </Box>
          <Link to="/checkout">
            <Button variant="contained" sx={{ minWidth: "300px", mt: 5 }}>
              Place order
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCardCheckout;
