import { Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const prices = [5, 6, 7, 8, 10, 15, 20, 25, 30];

const Budget = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid
      border={"var(--grid-border)"}
      padding={"10"}
      minChildWidth="36"
      spacing="5"
      backgroundColor={"var(--color-background)"}
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
    >
      {prices.map((price) => {
        return (
          <Link
            to={`/new/best-cars-under-${price}-lakh`}
            key={price}
            state={{ price: `${price}` }}
          >
            <Button colorScheme="teal" variant="outline" borderRadius={"full"}>
              {t("findCar.tabs.budgetValue", { price })}
            </Button>
          </Link>
        );
      })}
      <Link>
        <Button colorScheme="teal" variant="outline" borderRadius={"full"}>
          {t("findCar.tabs.luxuryCars")}
        </Button>
      </Link>
    </SimpleGrid>
  );
};

export default Budget;
