import { createBrowserRouter, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "../comparisonStore/store";
import Home from "@src/pages/home/Home";
// import UniqueBrandPage from "../pages/UniqueBrandPage";
// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";
// import SearchResult from "../pages/SearchResult/SearchResult";
import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
// import Navbar2 from "../components/Navbar/Navbar2";
// import ComparisonPage from "../pages/ComparisonPage";

// import DieselCarsPage from "../pages/DieselCarsPage";
import NotFoundPage from "@src/pages/notfound/NotFoundPage";
// import SUVsPage from "../pages/SUVsPage";
// import FilteredCarsPage from "../pages/FilteredCarsPage";
import Navbar from "@src/components/navbar/Navbar";
import SpecificBrandPage from "@pages/specificbrand/SpecificBrandPage";
import FilteredCarsPage from "@pages/filteredcars/FilteredCarsPage";
import ComparisonPage from "@pages/comparison/ComparisonPage";
import ListUsedCar from "@pages/uploadusedcar/ListUsedCar";
import UserProfilePage from "@pages/userprofile/UserProfilePage";
import UsedCarsPage from "@pages/usedcars/UsedCarsPage";

const Layout = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      {/* </Provider> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "compare-cars/",
        element: <ComparisonPage />,
      },
      // {
      //   path: "/search-results",
      //   element: <SearchResult />,
      // },
      {
        path: "new/:slug",
        element: <FilteredCarsPage />,
      },
      {
        path: ":brandSlug",
        element: <SpecificBrandPage />,
      },
      {
        path: ":brandSlug/:titleSlug",
        element: <CarDetailsPage />,
      },
      {
        path: "list-your-used-car",
        element: <ListUsedCar />,
      },
      {
        path: "used-cars",
        element: <UsedCarsPage />,
      },
      {
        path: "user-profile",
        element: <UserProfilePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />, // Create a NotFoundPage component
      },
    ],
  },
]);

export default router;
