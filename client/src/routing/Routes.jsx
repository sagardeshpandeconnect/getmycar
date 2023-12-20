import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../comparisonStore/store";
import Home from "../pages/Home/Home";
import UniqueBrandPage from "../pages/UniqueBrandPage";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SearchResult from "../pages/SearchResult/SearchResult";
import CarDetailsPage from "../pages/CarDetailsPage/CarDetailsPage";
import Navbar2 from "../components/Navbar/Navbar2";
import ComparisonPage from "../pages/ComparisonPage";
import Navbar3 from "../components/Navbar/Navbar3";
import Navbar4 from "../components/Navbar/Navbar4";
import Navbar5 from "../components/Navbar/Navbar5";
import Navbar6 from "../components/Navbar/Navbar6";
import Navbar7 from "../components/Navbar/Navbar7";
import Navbar8 from "../components/Navbar/Navbar8";
import Navbar9 from "../components/Navbar/Navbar9";
import DieselCarsPage from "../pages/DieselCarsPage";
import NotFoundPage from "../pages/NotFoundPage";
import SUVsPage from "../pages/SUVsPage";
import FilteredCarsPage from "../pages/FilteredCarsPage";

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar9 />
        {/* <Navbar8 /> */}
        {/* <Navbar7 /> */}
        {/* <Navbar6 /> */}
        {/* <Navbar5 /> */}
        {/* <Navbar4/> */}
        {/* <Navbar2 /> */}
        {/* <Navbar3/> */}
        {/* <Navbar /> */}
        <main>
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "compare-cars/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ComparisonPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "compare-cars/:titleSlug1-vs-:titleSlug2",
      //   element: <ComparisonPage />,
      // },
      {
        path: "/search-results",
        element: <SearchResult />,
      },
      {
        path: "new/:slug",
        element: <FilteredCarsPage />,
      },
      {
        path: ":brandSlug",
        element: <UniqueBrandPage />,
      },
      {
        path: ":brandSlug/:titleSlug",
        element: <CarDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />, // Create a NotFoundPage component
      },
    ],
  },
]);

export default router;
