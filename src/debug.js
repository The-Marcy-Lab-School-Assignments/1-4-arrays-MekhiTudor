/** FEEDBACK: Great job! */
/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
};

const getFirstItem = (array) => {
  return array[0];
};
const arr1 = [1, 2, 3, 4, 5];
console.log(getFirstItem(arr1))

module.exports = {
  clearArr,
  getFirstItem,
};
