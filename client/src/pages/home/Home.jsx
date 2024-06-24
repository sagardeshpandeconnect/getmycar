import Navbar from "@components/navbar/Navbar";
import heroDesktop from "@assets/heroDesktop.jpg";
import heroMobile from "@assets/heroMobile.jpg";
import AllBrands from "./components/AllBrands";
import FindTheCarOfYourChoice from "./components/find-the-car-of-your-choice/FindTheCarOfYourChoice";
import CompareCars from "./components/comparecars/CompareCars";
import FeaturedCars from "./components/featuredcars/FeaturedCars";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Home = () => {
  const { isAuthenticated, user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      (async () => {
        const token = await getIdTokenClaims();
        const response = await axios.post(
          "http://localhost:3001/user/authenticate",
          {
            email: user.email,
            name: user.name,
          },
          {
            headers: {
              Authorization: `Bearer ${token.__raw}`,
            },
          }
        );

        console.log("User authenticated and saved", response.data);
      })();
    }
  }, [isAuthenticated, user]);

  // if (!isAuthenticated) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {/* <Navbar /> */}
      <picture>
        <source media="(max-width: 815px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
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
