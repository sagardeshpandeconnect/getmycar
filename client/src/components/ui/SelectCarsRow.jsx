import { Grid } from "@chakra-ui/react";
import React from "react";
import SelectCar from "./SelectCar";

const SelectCarsRow = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)">
      <SelectCar />
      <SelectCar />
      <SelectCar />
      <SelectCar />
    </Grid>
  );
};

export default SelectCarsRow;
