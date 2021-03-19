// Only change code bellow this line
function largestNumFromArray(arr) {
  var array = [...arr];
  var maxNumArray = [];
  var temp = [];
  var max = 0;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      temp.push(array[i][j]);
    }
    max = Math.max(...temp);
    maxNumArray.push(max);
    temp = [];
  }

  return maxNumArray;
}
// Only change code above this line

console.log(
  largestNumFromArray([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

console.log(
  largestNumFromArray([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);

console.log(
  largestNumFromArray([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
  ])
);

module.exports = largestNumFromArray;
