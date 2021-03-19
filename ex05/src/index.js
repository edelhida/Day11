var myNestedArray= [["Toblerone", 5], ["Milka", 3]];

function myNestedFunction(arr) {
var myNest = [...arr];
return myNest;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;