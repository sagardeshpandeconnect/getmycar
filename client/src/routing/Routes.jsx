import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "@src/pages/home/Home";
import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
import NotFoundPage from "@src/pages/notfound/NotFoundPage";
import Navbar from "@src/components/navbar/Navbar";
import SpecificBrandPage from "@pages/specificbrand/SpecificBrandPage";
import FilteredCarsPage from "@pages/filteredcars/FilteredCarsPage";
import ComparisonPage from "@pages/comparison/ComparisonPage";
import Footer from "@components/Footer";
import UsedCarForm from "@components/UsedCarForm";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
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
      {
        path: "new/:slug",
        element: <FilteredCarsPage />,
      },
      {
        path: "sell-your-car",
        element: <UsedCarForm />,
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
        path: "*",
        element: <NotFoundPage />, // Create a NotFoundPage component
      },
    ],
  },
]);

export default router;
