import { Grid } from "@chakra-ui/react";

const SpecsWrapper = ({ children }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(1, 1fr)",
      }}
      border={"1px solid var(--color-border)"}
      backgroundColor={"var(--color-background)"}
      padding={"2"}
    >
      {children}
    </Grid>
  );
};

export default SpecsWrapper;
