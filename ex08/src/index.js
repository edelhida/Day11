// Only change code bellow this line

function myMutation(arr) {
  var array = [...arr];

  var firstWord = '';
  var secondWord = '';
  var compareWord = '';
  var inc = 0;
  var dinc = 0;

  firstWord = array[0];
  secondWord = array[1];

  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.toUpperCase().includes(secondWord.charAt(i).toUpperCase())) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

// Only change code above this line

console.log(myMutation(['hello', 'hey']));
console.log(myMutation(['hello', 'Hello']));
console.log(myMutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));
console.log(myMutation(['Mary', 'Army']));
console.log(myMutation(['Mary', 'Aarmy']));
console.log(myMutation(['Alien', 'line']));
console.log(myMutation(['floor', 'for']));
console.log(myMutation(['hello', 'neo']));
console.log(myMutation(['voodoo', 'no']));
console.log(myMutation(['ate', 'date']));
console.log(myMutation(['Tiger', 'Zebra']));
console.log(myMutation(['Noel', 'Ole']));

module.exports = myMutation;
