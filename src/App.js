import { Box } from "@mui/material";
import Appbar from "./Components/Appbar";
import Cardcontainer from "./Components/Cardcontainer";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantDetails from "./Components/RestaurantDetails";
import AccountDetails from "./Components/AccountDetails";
import CartDetails from "./Components/CartDetails";
import Location from "./Components/Location";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Appbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/account",
        element: <AccountDetails />,
      },
      {
        path: "/cart",
        element: <CartDetails />,
      },
      {
        path: "/",
        element: <Cardcontainer />,
      },
      {
        path: "/location",
        element: <Location />,
      },
    ],
  },
]);

export default App;
