var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    var total = 0;
    var average = 0;

    for(var i = 0; i < newTemps.length; i++) {
    
        for(var j = 0; j < newTemps[i].length; j++){
            
            total = total + newTemps[i][j];
        }
        average = total / newTemps[i].length;
        averageDayTemp.push(average);
        total = 0;
        average = 0;
        

    }
    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;