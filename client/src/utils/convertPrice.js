export const convertPrice = function (price, language = "en") {
  if (price >= 10000000) {
    let crore = price / 10000000;
    return language === "hi"
      ? `${crore.toFixed(2)} करोड़`
      : `${crore.toFixed(2)} Cr`;
  } else if (price >= 100000) {
    let lakh = price / 100000;
    return language === "hi"
      ? `${lakh.toFixed(2)} लाख`
      : `${lakh.toFixed(2)} Lakh`;
  } else {
    return `${price.toFixed(0)}`;
  }
};
