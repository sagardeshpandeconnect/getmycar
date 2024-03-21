import Navbar from "@components/navbar/Navbar";
import heroDesktop from "@assets/heroDesktop.jpg";
import heroMobile2 from "@assets/heroMobile2.jpg";
import AllBrands from "./components/AllBrands";
import FindTheCarOfYourChoice from "./components/find-the-car-of-your-choice/FindTheCarOfYourChoice";
import CompareCars from "./components/comparecars/CompareCars";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <picture>
        <source media="(max-width: 815px)" srcSet={heroMobile2} />
        <img
          src={heroDesktop}
          alt="couple sitting lakeside with a car at sunset time"
        />
      </picture>
      <AllBrands />
      <FindTheCarOfYourChoice />
      <CompareCars />
    </>
  );
};

export default Home;
