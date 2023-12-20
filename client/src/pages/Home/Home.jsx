import React from "react";
// import "./Home.css";
import Search from "../../components/Search";
import Search2 from "../../components/Search2";
import BrandsBanner from "../../components/BrandsBanner/BrandsBanner";
import Navbar2 from "../../components/Navbar/Navbar2";
import heroImage from "../../assets/heroImage.jpg";
import HomePageSearchBar from "../../components/HomePageSearchBar";
import { Box } from "@chakra-ui/react";
import ComparisonComponent from "../../components/Comparison/ComparisonComponent";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars";
import FindTheCarOfYourChoice from "../../components/FindTheCarOfYourChoice/FindTheCarOfYourChoice";

const Home = () => {
  return (
    <Box position={"relative"}>
      <img
        src={heroImage}
        style={{ height: 400, objectFit: "cover" }}
        alt="couple sitting lakeside with a car at sunset time"
      />
      <HomePageSearchBar />
      {/* <Navbar2 /> */}
      <h1>Home Page</h1>
      {/* <Search /> */}
      {/* <Search2 /> */}
      <FeaturedCars />
      <BrandsBanner />
      <ComparisonComponent />
      <FindTheCarOfYourChoice />
    </Box>
  );
};

export default Home;
