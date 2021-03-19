// Only change code bellow this line

function myBouncer(arr) {
  var array = [...arr];

  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Only change code above this line

console.log(myBouncer([7, 'ate', '', false, 9]));
console.log(myBouncer(['a', 'b', 'c']));
console.log(myBouncer([false, null, 0, NaN, undefined]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;
