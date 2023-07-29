import { Box, Container, TextField } from "@mui/material";
import React from "react";
import mypic from "../../src/Assets/mypic.png";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  console.log("x");
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  return (
    <Box sx={{ mt: 7, height: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
          <img
            src={mypic}
            alt=""
            style={{ borderRadius: "50%", height: "300px" }}
          />
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "25px",
            }}
          >
            <TextField
              fullWidth
              label={userInfo.name ? userInfo.name : "name: "}
              id="fullWidth"
            />
            <TextField
              fullWidth
              label={userInfo.address ? userInfo.address : "address: "}
              id="fullWidth"
              sx={{ wordWrap: "wrap" }}
            />
            <TextField
              fullWidth
              label={userInfo.email ? userInfo.email : "email: "}
              id="fullWidth"
            />
            <TextField
              fullWidth
              label="Password: *******"
              id="fullWidth"
              type="password"
              autoComplete="current-password"
              disabled={true}
            />
            <TextField
              fullWidth
              label={
                userInfo.preferredPaymentMode
                  ? userInfo.preferredPaymentMode
                  : "preferred payment mode: "
              }
              id="fullWidth"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AccountDetails;
