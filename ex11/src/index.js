// Only change code bellow this line

function splitArrayInGroups(arr, n) {
  myArray = [...arr];

  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, n));
  }

  return results;
}

// Only change code above this line

console.log(splitArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2).splice(0, 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2).splice(0, 2));

module.exports = splitArrayInGroups;
