import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, SimpleGrid } from "@chakra-ui/react";

// Constants
const prices = [
  500000, 600000, 700000, 800000, 1000000, 1500000, 2000000, 2500000, 3000000,
];

const buttonStyles = {
  colorScheme: "teal",
  variant: "outline",
  borderRadius: "full",
};

// Helper Function
const formatPrice = (price) => price / 100000;

const BudgetButton = ({ price, label }) => (
  <Link
    to={`/new/best-cars-under-${formatPrice(price)}-lakh`}
    state={`/newcars/price/${price}`}
  >
    <Button {...buttonStyles}>{label}</Button>
  </Link>
);

const Budget = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid
      border="var(--grid-border)"
      padding="10"
      minChildWidth="36"
      spacing="5"
      backgroundColor="var(--color-background)"
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
    >
      {prices.map((price) => (
        <BudgetButton
          key={price}
          price={price}
          label={t("findCar.tabs.budgetValue", { price: formatPrice(price) })}
        />
      ))}
    </SimpleGrid>
  );
};

export default Budget;
