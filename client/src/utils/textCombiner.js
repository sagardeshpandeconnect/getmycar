export const textCombiner = function (dataArray, currentLang = "en") {
  const reducedText = dataArray.reduce((accumulator, car, index, array) => {
    // Extract property value
    const textToBeCombined = car;

    // The first element (no comma)
    if (index === 0) {
      return " " + textToBeCombined;
    }
    // Add 'and' (or 'और' in Hindi) before the last element
    else if (index === array.length - 1) {
      return currentLang === "en"
        ? accumulator + " and " + textToBeCombined
        : accumulator + " और " + textToBeCombined;
    }
    // Intermediate elements with a comma
    else {
      return accumulator + ", " + textToBeCombined;
    }
  }, "");
  return reducedText;
};
