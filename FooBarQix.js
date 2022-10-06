const { VALUES_CONDITION } = require("./constant");

// Check if numString is divisible by ValuesConditions

const translateNumByValues = (numString) => {
  let result = "";
  if (numString % VALUES_CONDITION.values[0] === 0)
    result += VALUES_CONDITION.replaceBy[0];
  if (numString % VALUES_CONDITION.values[1] === 0)
    result += VALUES_CONDITION.replaceBy[1];
  if (numString % VALUES_CONDITION.values[2] === 0)
    result += VALUES_CONDITION.replaceBy[2];

  // If numString is not divisible by previous values then return numString
  if (result === "") result += numString;

  return result;
};

// Change numstring to array
const stringToArr = (str) => str.split("");

// Check if values in Array contain Values conditions
const replaceValue = (arrOfNumString) => {
  const arrWithNewValue = arrOfNumString.map((element) => {
    let containingValue = "";
    if (element === VALUES_CONDITION.values[0].toString())
      containingValue += VALUES_CONDITION.replaceBy[0];
    if (element === VALUES_CONDITION.values[1].toString())
      containingValue += VALUES_CONDITION.replaceBy[1];
    if (element === VALUES_CONDITION.values[2].toString())
      containingValue += VALUES_CONDITION.replaceBy[2];
    if (element === VALUES_CONDITION.values[3].toString())
      containingValue += VALUES_CONDITION.replaceBy[3];
    // If arr is not containing values then return initial value
    if (containingValue === "") containingValue += element;
    return containingValue;
  });
  return arrWithNewValue;
};

module.exports = {
  translateNumByValues,
  replaceValue,
};
