let myFavoriteNumber = 14;
console.log(`my fav number is ${myFavoriteNumber}`);
console.log('my fav is', myFavoriteNumber);

let foods = [
  "tacos",
  "pizza",
  "pasta"
];
for (let food of foods) {
  console.log(`I like to eat ${food}.`);
}

console.log(foods);

// Import the people
function sayHiToTacoPeople() {
  let myTacoPeople = require('./people.js');
  console.log('Hello taco people', myTacoPeople);


  let firstResult = myTacoPeople.getCodeName();
  console.log('firstResult', firstResult);

  // Reassign our function to a new variable
  let getCodeName = myTacoPeople.getCodeName;
  let codeNamesResult = getCodeName()
  console.log('code names: ', codeNamesResult);

  ///console.log('Hello secret people', myTacoPeople.getSecretPeople())
}
sayHiToTacoPeople();
