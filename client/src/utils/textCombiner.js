// This functions helps to construct the string to show various types of fuels and transmission etc

export const textCombiner = function (dataArray) {
  const reducedText = dataArray.reduce((accumulator, text, index, array) => {
    // The first element (no comma)
    if (index === 0) {
      return " " + text;
      // Add 'and' before the last element
    } else if (index === array.length - 1) {
      return accumulator + " and " + text;
      // Intermediate elements with a comma
    } else {
      return accumulator + ", " + text;
    }
  }, "");
  return reducedText;
};
