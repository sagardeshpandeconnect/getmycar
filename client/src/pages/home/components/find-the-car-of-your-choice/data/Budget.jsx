import { Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const prices = [5, 6, 7, 8, 10, 15, 20, 25, 30];

const Budget = () => {
  const { t } = useTranslation();

  return (
    // <Wrapper>
    <SimpleGrid
      border={"var(--grid-border)"}
      padding={"10"}
      minChildWidth="36"
      spacing="5"
      // columns={{ sm: 1, md: 2, lg: 3 }}
      backgroundColor={"var(--color-background)"}
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(6, 1fr)",
      }}
    >
      {prices.map((price) => {
        return (
          <Link
            to={`/new/best-cars-under-${price}-lakh`}
            key={price}
            state={{ price: `${price}` }}
          >
            <Button
              colorScheme="teal"
              variant="outline"
              // paddingX={"10"}
              borderRadius={"full"}
            >
              {/* Under {price} Lakh */}
              {t("findCar.tabs.budgetValue", { price })}
            </Button>
          </Link>
        );
      })}
      <Link>
        <Button
          colorScheme="teal"
          variant="outline"
          // paddingX={"10"}
          borderRadius={"full"}
        >
          Luxary Cars
        </Button>
      </Link>
    </SimpleGrid>
    // </Wrapper>
  );
};

export default Budget;
