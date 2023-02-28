const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = "1234567890";
const collection = lowerCaseLetters
  .split("")
  .concat(upperCaseLetters.split(""))
  .concat(numbers.split(""));

let res = "";
for (let i = 0; i < 5; i++) {
  res += collection[Math.ceil(Math.random() * 61)];
}

module.exports = res;
