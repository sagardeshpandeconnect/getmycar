import heroDesktop from "@assets/heroDesktop.jpg";
import heroMobile from "@assets/heroMobile.jpg";
import AllBrands from "./components/AllBrands";
import FindTheCarOfYourChoice from "./components/find-the-car-of-your-choice/FindTheCarOfYourChoice";
import CompareCars from "./components/comparecars/CompareCars";
import FeaturedCars from "./components/featuredcars/FeaturedCars";

const Home = () => {
  return (
    <>
      <picture>
        <source media="(max-width: 815px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          width={"100%"}
          height="200px"
          alt="couple sitting lakeside with a car at sunset time"
        />
      </picture>
      <FeaturedCars />
      <AllBrands />
      <FindTheCarOfYourChoice />
      <CompareCars />
    </>
  );
};

export default Home;
