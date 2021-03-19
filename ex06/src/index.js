var m1 = [[2], [5, 6, 7], [8, 9]];
var m2 = [[2.5, 2],[0.5,0.2],[8]];
var m3 = [[1,2], [3,4,5,6],[7,8,9]];

function multiplyArrayFunction(myArray) {
    
    var array = [...myArray];
    var arr = [];
    var sum = 0.0;
    var product = 1.0;

    for (var i=0; i<array.length; i++) {
        for (var j=0; j<array[i].length; j++){
        
            sum = sum + array[i][j];
            product = product * array[i][j];
    } 
  
}
    arr.push(product);
    arr.push(sum);
    

    
  return arr;

}

console.log(multiplyArrayFunction(m1));
console.log(multiplyArrayFunction(m2));
console.log(multiplyArrayFunction(m3));


module.exports = multiplyArrayFunction();