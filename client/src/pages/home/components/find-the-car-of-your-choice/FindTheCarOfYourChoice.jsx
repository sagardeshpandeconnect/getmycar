import { useTranslation } from "react-i18next";
import TabsContainer from "@components/TabsContainer";
import Wrapper from "@components/Wrapper";
import BodyType from "./data/BodyType";
import FuelType from "./data/FuelType";
import Budget from "./data/Budget";
import Transmission from "./data/TransmissionType";
import SeatingCapacity from "./data/SeatingCapacity";
import ComponentHeading from "@components/HeadingText";
import useLanguageLoading from "@hooks/useLanguageLoading";

const FindTheCarOfYourChoice = () => {
  const { t } = useTranslation();
  const loading = useLanguageLoading(); // Use the custom hook to get the loading state

  // If language is not loaded, show a loading state
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or more styled loading component
  }

  const tabData = [
    { tabHeading: t("findCar.tabs.budget"), tabContent: <Budget /> },
    { tabHeading: t("findCar.tabs.bodyType"), tabContent: <BodyType /> },
    { tabHeading: t("findCar.tabs.fuelType"), tabContent: <FuelType /> },
    {
      tabHeading: t("findCar.tabs.transmission"),
      tabContent: <Transmission />,
    },
    {
      tabHeading: t("findCar.tabs.seatingCapacity"),
      tabContent: <SeatingCapacity />,
    },
  ];

  return (
    <Wrapper>
      <ComponentHeading>{t("findCar.heading")}</ComponentHeading>
      <TabsContainer tabData={tabData} />
    </Wrapper>
  );
};

export default FindTheCarOfYourChoice;
