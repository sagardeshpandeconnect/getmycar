import { Heading } from "@chakra-ui/react";
import TabsContainer from "../layout/TabsContainer";
import Wrapper from "../layout/Wrapper";
import PopularCars from "../../data/PopularCars";
import JustLaunchedCars from "../../data/JustLaunchedCars";
import UpcomingCars from "../../data/UpcomingCars";

const FeaturedCars2 = () => {
  const tabHeadings = ["POPULAR", "JUST LAUNCHED", "UPCOMING"];
  const allTabContent = [
    <PopularCars />,
    <JustLaunchedCars />,
    <UpcomingCars />,
  ];
  // const tabData = [
  //   { tabHeading: "POPULAR", tabContent: '<PopularCars />' },
  //   { tabHeading: "JUST LAUNCHED", tabContent: '<JustLaunchedCars />' },
  //   { tabHeading: "UPCOMING", tabContent: '<UpcomingCars />' },
  // ];
  // console.log(tabData[0].tabContent);

  const tabData = [
    {
      tabHeading: "POPULAR",
      tabContent: <PopularCars />,
    },
    {
      tabHeading: "JUST LAUNCHED",
      tabContent: <JustLaunchedCars />,
    },
    {
      tabHeading: "UPCOMING",
      tabContent: <UpcomingCars />,
    },
  ];
  return (
    <Wrapper>
      <Heading as="h3" size="md" fontWeight={"medium"}>
        Featured Cars
      </Heading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FeaturedCars2;
