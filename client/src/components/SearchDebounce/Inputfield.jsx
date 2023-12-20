import React from "react";
import { Input } from "@chakra-ui/react";

const Inputfield = ({ onChange, value }) => {
  return (
    <div>
      <Input
        onChange={onChange}
        value={value}
        placeholder="Search your character"
        size="md"
      />
    </div>
  );
};

export default Inputfield;
