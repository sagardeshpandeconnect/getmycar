import React from "react";
import {
  createBrowserRouter,
  Outlet,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import Home from "@src/pages/home/Home";
import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
import NotFoundPage from "@src/pages/notfound/NotFoundPage";
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

// Custom Error Boundary to handle loader errors and unmatched routes
const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  return (
    <Box textAlign="center" mt={10}>
      <Heading>Error</Heading>
      <Text>Something went wrong!</Text>
      <Button onClick={() => (window.location.href = "/")}>Go Home</Button>
    </Box>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />, // Use the custom error boundary
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "compare-cars/",
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
        loader: async ({ params }) => {
          const validBrands = ["toyota", "honda", "bmw", "audi"];
          if (!validBrands.includes(params.brandSlug)) {
            throw new Response("Not Found", { status: 404 });
          }
        },
      },
      {
        path: "*", // Catch-all route for unmatched paths
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
