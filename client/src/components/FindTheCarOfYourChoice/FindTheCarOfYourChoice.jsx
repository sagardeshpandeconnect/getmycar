import { Heading } from "@chakra-ui/react";
import TabsContainer from "../layout/TabsContainer";
import Wrapper from "../layout/Wrapper";
import BodyType from "./data/BodyType";
import FuelType from "./data/FuelType";
import Budget from "./data/Budget";
import Transmission from "./data/Transmission";
import SeatingCapacity from "./data/SeatingCapacity";

const FindTheCarOfYourChoice = () => {
  // const tabHeadings = ["Budget", "Body Type", "Fuel Type"];
  // const allTabContent = [<Budget />, <BodyType />, <FuelType />];

  const tabData = [
    {
      tabHeading: "Budget",
      tabContent: <Budget />,
    },
    {
      tabHeading: "Body Type",
      tabContent: <BodyType />,
    },
    {
      tabHeading: "Fuel Type",
      tabContent: <FuelType />,
    },
    {
      tabHeading: "Transmission",
      tabContent: <Transmission />,
    },
    {
      tabHeading: "Seating Capacity",
      tabContent: <SeatingCapacity />,
    },
  ];

  return (
    <Wrapper>
      <Heading as="h3" size="md" fontWeight={"medium"}>
        Find The Cars of Your Choice
      </Heading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FindTheCarOfYourChoice;
