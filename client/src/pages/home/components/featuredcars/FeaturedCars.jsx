// import ComponentHeading from "@components/HeadingText";
// import TabsContainer from "@components/TabsContainer";
// import Wrapper from "@components/Wrapper";
// import FeaturedCarType from "./FeaturedCarType";
// import { useTranslation } from "react-i18next";

// const FeaturedCars = () => {
//   const { t } = useTranslation();

//   const tabData = [
//     {
//       tabHeading: t("featuredCars.tabs.trending"),
//       tabContent: <FeaturedCarType featuredType="trending" />,
//     },
//     {
//       tabHeading: t("featuredCars.tabs.popular"),
//       tabContent: <FeaturedCarType featuredType="popular" />,
//     },
//     {
//       tabHeading: t("featuredCars.tabs.upcoming"),
//       tabContent: <FeaturedCarType featuredType="upcoming" />,
//     },
//   ];

//   return (
//     <Wrapper>
//       <ComponentHeading>{t("featuredCars.heading")}</ComponentHeading>
//       <TabsContainer tabData={tabData} />
//     </Wrapper>
//   );
// };

// export default FeaturedCars;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ComponentHeading from "@components/HeadingText";
import TabsContainer from "@components/TabsContainer";
import Wrapper from "@components/Wrapper";
import FeaturedCarType from "./FeaturedCarType";
import useLanguageLoading from "@hooks/useLanguageLoading";

const FeaturedCars = () => {
  const { t } = useTranslation();
  const loading = useLanguageLoading(); // Use the custom hook to get the loading state

  // If language is not loaded, show a loading state
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or a custom loading component
  }

  const tabData = [
    {
      tabHeading: t("featuredCars.tabs.trending"),
      tabContent: <FeaturedCarType featuredType="trending" />,
    },
    {
      tabHeading: t("featuredCars.tabs.popular"),
      tabContent: <FeaturedCarType featuredType="popular" />,
    },
    {
      tabHeading: t("featuredCars.tabs.upcoming"),
      tabContent: <FeaturedCarType featuredType="upcoming" />,
    },
  ];

  return (
    <Wrapper>
      <ComponentHeading>{t("featuredCars.heading")}</ComponentHeading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FeaturedCars;
