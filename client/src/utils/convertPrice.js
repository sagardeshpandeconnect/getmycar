export const convertPrice = function (price) {
  if (price >= 10000000) {
    let crore = price / 10000000;
    return `${crore.toFixed(2)} Cr`;
  } else if (price >= 100000) {
    let lakh = price / 100000;
    return `${lakh.toFixed(2)} Lakh`;
  } else {
    return `${price.toFixed(0)}`;
  }
};
