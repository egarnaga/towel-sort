
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }

  let arr = matrix;

  for (let i = 1; i < arr.length; i = i + 2) {
    arr[i].reverse();
  }

  arr = arr.reduce(
    (result, element) => result.concat(element),
    []
  );

  return arr;
}
