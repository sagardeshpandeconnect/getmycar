import ComponentHeading from "@components/HeadingText";
import TabsContainer from "@components/TabsContainer";
import Wrapper from "@components/Wrapper";
import FeaturedCarType from "./FeaturedCarType";
import { useTranslation } from "react-i18next";

const FeaturedCars = () => {
  const { t } = useTranslation();

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
