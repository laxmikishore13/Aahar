import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "Kishore Kongani",
    address:
      "flat no: 1234, Apartment: xyz, near abc showroom, Andhra Pradesh, pincode: 12345",
    preferredPaymentMode: "",
    email: "laxmikishore@gmail.com",
    Password: "abcdef",
  },
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
});

export default userInfoSlice.reducer;
