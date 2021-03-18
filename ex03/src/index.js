var  myPetsArray = ["Dog", "Cat"]

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    var firstPet = myNewPets;
    var lastPet = firstPet;
firstPet.push("Bird", "Fish");
firstPet.pop();
lastPet.shift();
lastPet.unshift("Lion")
return myNewPets;

}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
