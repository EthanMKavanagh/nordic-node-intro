let specialPeeps = [
  "David",
  "Emma", 
  "Jim",
  "Kieran"
];

let secretPeople = [
  "John",
  "Justus",
  "Derek",
  "Cooper"
];

function getSecretPeople() {
  let secretName = [];
  for (let person of secretPeople) {
    secretName.push(person[0]);
  }

  return secretName;
}

// Share my people with the world!
module.exports = {
  people: specialPeeps,
  getCodeName: getSecretPeople
};