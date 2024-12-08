import { Heading } from "@chakra-ui/react";
import TabsContainer from "@components/TabsContainer";
import Wrapper from "@components/Wrapper";
import BodyType from "./data/BodyType";
import FuelType from "./data/FuelType";
import Budget from "./data/Budget";
import Transmission from "./data/TransmissionType";
import SeatingCapacity from "./data/SeatingCapacity";
import ComponentHeading from "@components/HeadingText";

const FindTheCarOfYourChoice = () => {
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
      <ComponentHeading>Find The Cars of Your Choice</ComponentHeading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FindTheCarOfYourChoice;
