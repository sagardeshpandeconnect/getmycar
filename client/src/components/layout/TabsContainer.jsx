import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabsContainer = ({ tabData}) => {
  return (
    <Tabs isLazy>
      <TabList>
          {tabData.map((tab) => (
            <Tab key={tab.tabHeading.toString()}>{tab.tabHeading}</Tab>
          ))}
      </TabList>

      <TabPanels>
          {tabData.map((tab) => (
            <TabPanel p={4} key={tab.tabHeading.toString()}>
              {tab.tabContent}
            </TabPanel>
          ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsContainer;
