// Only change code bellow this line

function mySplice(arr1, arr2, n) {
  var mainArray = arr2.slice();

  for (var i = 0; i < arr1.length; i++) {
    mainArray.splice(n, 0, arr1[i]);

    n++;
  }

  return mainArray;
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(['b', 'c'], ['a', 'd'], 1));
console.log(mySplice(['Dell', 'Philips'], ['Samsung', 'AOX', 'Sony'], 2));

module.exports = mySplice;
