import React from "react";
import {
  createBrowserRouter,
  Outlet,
  useRouteError,
  useNavigate,
} from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Home from "@src/pages/home/Home";
import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
import NotFoundPage from "@pages/notfound/NotFoundPage";
import Navbar from "@src/components/common/navbar/Navbar";
import SpecificBrandPage from "@pages/specificbrand/SpecificBrandPage";
import FilteredCarsPage from "@pages/filteredcars/FilteredCarsPage";
import ComparisonPage from "@pages/comparison/ComparisonPage";
import Footer from "@components/common/Footer";
import ManageYourListings from "@pages/manageyourlistings/ManageYourListings";
import UsedCarsPage from "@pages/usedcars/UsedCarsPage";
import UsedCarForm from "@pages/usedcars/UsedCarForm";

const Layout = () => (
  <Flex direction={"column"} minHeight={"100vh"}>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Flex>
);

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log("ErrorBoundary triggered:", error);

  React.useEffect(() => {
    // Force navigation to NotFoundPage for any routing error
    navigate("/not-found", { replace: true });
  }, [navigate]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "compare-cars",
        element: <ComparisonPage />,
      },
      {
        path: "new/:slug",
        element: <FilteredCarsPage />,
      },
      {
        path: "used-cars",
        element: <UsedCarsPage />,
      },
      {
        path: "sell-your-car",
        element: <UsedCarForm />,
      },
      {
        path: "edit-used-car/:carId",
        element: <UsedCarForm />,
      },
      {
        path: "manage-your-listings/:userId",
        element: <ManageYourListings />,
      },
      {
        path: ":brandSlug/:titleSlug",
        element: <CarDetailsPage />,
      },
      {
        path: ":brandSlug",
        element: <SpecificBrandPage />,
      },
      {
        path: "not-found",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorBoundary />,
  },
]);

export default router;
