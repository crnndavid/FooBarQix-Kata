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

module.exports = {
  translateNumByValues,
};
