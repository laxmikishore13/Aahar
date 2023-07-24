import React, { useEffect, useState } from "react";
import Cards from "./Card";
import { Box, Container, InputBase } from "@mui/material";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const searchRestaurants = (restaurants, searchText) => {
  return restaurants.filter((data) =>
    data.data.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Cardcontainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [offset, setOffSet] = useState(15);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const location = useSelector(
    (state) => state?.location?.location[0]?.payload
  );
  // console.log("location", latitude, longitude);

  useEffect(() => {
    fetchRestaurantData(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", () => infiniteScroll());
    return () => window.removeEventListener("scroll", () => infiniteScroll());
  }, []);

  const infiniteScroll = async () => {
    // End of the document reached - points to check if we reached the end of the document.
    // console.log("scroll height", document.documentElement.scrollHeight);
    // console.log("inner height", window.innerHeight);
    // console.log("scrollTop", document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight / 1.25
      ) {
        setOffSet((prev) => prev + 16);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRestaurantData = async (offset) => {
    setLoading(true);
    const fetchData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${
        location?.latitude ? location?.latitude : 15.8315641
      }&lng=${
        location?.longitude ? location?.longitude : 78.0266735
      }&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    );
    const data = await fetchData.json();
    if (data.data.cards) {
      if (search.length > 0) {
        const searchedRestaurants = searchRestaurants(data.data.cards, search);
        setRestaurants((prev) => [...prev, ...data?.data?.cards]);
        setFilteredRestaurants((prev) => [...prev, ...searchedRestaurants]);
      } else {
        setRestaurants((prev) => [...prev, ...data?.data?.cards]);
        setFilteredRestaurants((prev) => [...prev, ...data?.data?.cards]);
      }
      setLoading(false);
    } else {
      window.removeEventListener("scroll", () => infiniteScroll());
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 5, p: 5 }}>
      <Container maxWidth="lg">
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          fullWidth={true}
          sx={{ pl: 2 }}
          value={search}
          onChange={(e) => {
            const searchedRestaurants = searchRestaurants(
              restaurants,
              e.target.value
            );
            setFilteredRestaurants(searchedRestaurants);
            setSearch(e.target.value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "15px",
            // mt: 5,
          }}
        >
          {filteredRestaurants.map((restaurant, index) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.data.id} key={index}>
                <Cards restaurants={restaurant.data.data} />
              </Link>
            );
          })}
        </Box>
        {loading && <Shimmer />}
      </Container>
    </Box>
  );
};

export default Cardcontainer;
