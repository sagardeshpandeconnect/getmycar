import ComponentHeading from "@components/HeadingText";
import TabsContainer from "@components/TabsContainer";
import Wrapper from "@components/Wrapper";
import FeaturedCarType from "./FeaturedCarType";

const FeaturedCars = () => {
  const tabData = [
    {
      tabHeading: "TRENDING",
      tabContent: <FeaturedCarType featuredType="trending" />,
    },
    {
      tabHeading: "POPULAR",
      tabContent: <FeaturedCarType featuredType="popular" />,
    },

    {
      tabHeading: "UPCOMING",
      tabContent: <FeaturedCarType featuredType="upcoming" />,
    },
  ];

  return (
    <Wrapper>
      <ComponentHeading>Featured Cars</ComponentHeading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FeaturedCars;
