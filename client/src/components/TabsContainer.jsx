import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabsContainer = ({ tabData }) => {
  return (
    <Tabs isLazy>
      <TabList
        overflowX={{ base: "scroll" }}
        whiteSpace={"nowrap"}
        paddingY={"3"}
        style={{
          scrollbarWidth: "none",
        }}
      >
        {tabData.map((tab) => (
          <Tab key={tab.tabHeading.toString()}>{tab.tabHeading}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabData.map((tab) => (
          <TabPanel
            // p={4}
            marginX={"-3.5"}
            key={tab.tabHeading.toString()}
          >
            {tab.tabContent}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsContainer;
