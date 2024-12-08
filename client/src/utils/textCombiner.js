// This functions helps to construct the string to show various types of fuels and transmission etc

export const textCombiner = function (dataArray, car) {
  const reducedText = dataArray.reduce((accumulator, car, index, array) => {
    // Extract property value
    const textToBeCombined = car;

    // The first element (no comma)
    if (index === 0) {
      return " " + textToBeCombined;
    }
    // Add 'and' before the last element
    else if (index === array.length - 1) {
      return accumulator + " and " + textToBeCombined;
    }
    // Intermediate elements with a comma
    else {
      return accumulator + ", " + textToBeCombined;
    }
  }, "");
  return reducedText;
};
