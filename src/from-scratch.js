const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
    return
  }

  arr.push(value)
  return
};
// const hey = ['h', 'e', 'y']
// console.log(hey)
// console.log(addToFrontOrBack(hey, 'y', false))
// console.log(hey)

const reverseString = (str) => {
  return str.split('').reverse().join('')
};

// let g = 'god'
// console.log(reverseString(g))
// console.log(g)

const newArrayFullOf = () => {
};

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
