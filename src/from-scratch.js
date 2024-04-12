/** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
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

const newArrayFullOf = (value, numOfValues) => {
  let arr = new Array(numOfValues) //created blank template for values
  return arr.fill(value)
};

//console.log(newArrayFullOf(1, 5))


const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value)
  return
};

// const arr1 = [1, 2, 3, 4, 5];
// console.log(insertIntoMiddle(arr1, 6))

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
  return
};

// const arr1 = [1, 2, 3, 4, 5];
// deleteFromMiddle(arr1)
//console.log(arr1)

/** FEEDBACK: Same here! You could just return arr[index] === value. */
const isRightIndex = (arr, value, index) => {
  return arr[index] === value ? true : false;
};


const roundAllNumsDown = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i]))
  }
  return newArr
};

// const arr1 = [1.1, 2.2, 3.3]
// console.log(roundAllNumsDown(arr1))

const getAllYCoordinates = (arrOfCords) => {
  newArr = []
  for (let i = 0; i < arrOfCords.length; i++) {
    newArr.push(arrOfCords[i][1])
  }
  return newArr
};
// const arr1 = [[1, 2], [3, 4], [5, 6]];
// console.log(getAllYCoordinates(arr1))

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
