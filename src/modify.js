const uppercaseAll = (...str) => {
  const newArr = [];
  for (const i of str) {
    newArr.push(i.toUpperCase())
  }
  return newArr;
};
// console.log(uppercaseAll("hello", "hello", "hello"))


const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

console.log(destructureCoordinates([3, 4]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
