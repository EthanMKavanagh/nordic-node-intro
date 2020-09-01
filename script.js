// Node.js uses variables!
let myFavoriteNumber = 14;

// Node.js uses console logs!
console.log(`my fav number is ${myFavoriteNumber}`);
console.log('my fav is', myFavoriteNumber);

// Node.js uses arrays and loops!
let foods = [
  "tacos",
  "pizza",
  "pasta"
];
for (let food of foods) {
  console.log(`I like to eat ${food}.`);
}

// In other words, Node.js can run Javascript,
// just like Chrome can run Javascript.
// It's the same language, spoken in a different land.

// But there are some cultural differences!

// We CAN'T use jQuery
// $('body').append('<h1>Hello World!</h1>');
// ^ there's no body to append to!

// We CAN import stuff from other files!

// Grab our `module.exports` from people.js
let peopleExports = require('./people.js');
console.log(`Here's everything exported from people.js`, peopleExports);

console.log('Some special peeps', peopleExports.specialPeeps);

let codeNames = peopleExports.getCodeNames();
console.log(`Code names: `, codeNames);
