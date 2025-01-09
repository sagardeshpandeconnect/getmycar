// import { createBrowserRouter, Outlet } from "react-router-dom";
// import Home from "@src/pages/home/Home";
// import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
// import NotFoundPage from "@src/pages/notfound/NotFoundPage";
// import Navbar from "@src/components/navbar/Navbar";
// import SpecificBrandPage from "@pages/specificbrand/SpecificBrandPage";
// import FilteredCarsPage from "@pages/filteredcars/FilteredCarsPage";
// import ComparisonPage from "@pages/comparison/ComparisonPage";
// import Footer from "@components/Footer";
// import ManageYourListings from "@pages/manageyourlistings/ManageYourListings";
// import UsedCarsPage from "@pages/usedcars/UsedCarsPage";
// import UsedCarForm from "@components/UsedCarForm";
// import { Flex } from "@chakra-ui/react";

// const Layout = () => {
//   return (
//     <Flex direction={"column"} minHeight={"100vh"}>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </Flex>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "compare-cars/",
//         element: <ComparisonPage />,
//       },
//       {
//         path: "new/:slug",
//         element: <FilteredCarsPage />,
//       },
//       {
//         path: "used-cars",
//         element: <UsedCarsPage />,
//       },
//       {
//         path: "sell-your-car",
//         element: <UsedCarForm />,
//       },
//       {
//         path: "edit-used-car/:carId",
//         element: <UsedCarForm />,
//       },
//       {
//         path: "manage-your-listings/:userId",
//         element: <ManageYourListings />,
//       },
//       {
//         path: ":brandSlug",
//         element: <SpecificBrandPage />,
//       },
//       {
//         path: ":brandSlug/:titleSlug",
//         element: <CarDetailsPage />,
//       },
//       {
//         path: "*",
//         element: <NotFoundPage />, // Create a NotFoundPage component
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter, Outlet, useParams } from "react-router-dom";
import Home from "@src/pages/home/Home";
import CarDetailsPage from "@pages/cardetails/CarDetailsPage";
import NotFoundPage from "@src/pages/notfound/NotFoundPage";
import Navbar from "@src/components/navbar/Navbar";
import SpecificBrandPage from "@pages/specificbrand/SpecificBrandPage";
import FilteredCarsPage from "@pages/filteredcars/FilteredCarsPage";
import ComparisonPage from "@pages/comparison/ComparisonPage";
import Footer from "@components/Footer";
import ManageYourListings from "@pages/manageyourlistings/ManageYourListings";
import UsedCarsPage from "@pages/usedcars/UsedCarsPage";
import UsedCarForm from "@components/UsedCarForm";
import { Flex } from "@chakra-ui/react";
import i18n from "../i18n/i18n"; // Assuming you've set up i18next for translations
import React from "react";

// Layout Component
const Layout = () => {
  return (
    <Flex direction={"column"} minHeight={"100vh"}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  );
};

// Wrapper to Handle Language
const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();

  React.useEffect(() => {
    // Change language based on URL
    i18n.changeLanguage(lang === "hi" ? "hi" : "");
  }, [lang]);

  return children;
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/:lang?", // Optional language prefix
    element: (
      <LanguageWrapper>
        <Layout />
      </LanguageWrapper>
    ),
    children: [
      {
        index: true, // Marks this as the default route for the parent
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
        path: ":brandSlug",
        element: <SpecificBrandPage />,
      },
      {
        path: ":brandSlug/:titleSlug",
        element: <CarDetailsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
