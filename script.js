// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// list of available characters
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~']
var emptyArray = [];
var passwordArray = [];

function generatePassword() {
  // generateLength is the length of password, it is an integer
  var generateLength = window.prompt("How many characters would you like your password to contain?");
  if (generateLength < 8) {
    window.alert("Password must be greater than 7 characters.")
    generatePassword();
    //return
  }
  if (generateLength > 128) {
    window.alert("Password must be less than 129 characters.")
    generatePassword();
    //return
  }
  generateLength = parseInt(generateLength);
  console.log(generateLength);
  return generateCharacters(generateLength);
}

function generateCharacters(generateLength) {
  // prompts to determine password criteria
  var lowerCase = window.confirm("Click OK to confirm including lower case characters.");
  console.log(lowerCase);
  var upperCase = window.confirm("Click OK to confirm including upper case characters.");
  console.log(upperCase);
  var numeric = window.confirm("Click OK to confirm including numeric characters.");
  console.log(numeric);
  var special = window.confirm("Click OK to confirm including special characters.");
  console.log(special);

  // conditionals based on character prompt responses
  if (lowerCase === false && upperCase === false && numeric === false && special === false) {
    window.alert("You must select at least one character type.")
    generateCharacters();
  }

  if (lowerCase === true) {
    var combinedArray = emptyArray.concat(lowerCaseArray);
  }
  if (upperCase === true) {
    var combinedArray = emptyArray.concat(combinedArray, upperCaseArray);
  }
  if (numeric === true) {
    var combinedArray = emptyArray.concat(combinedArray, numericArray);
  }
  if (special === true) {
    var combinedArray = emptyArray.concat(combinedArray, specialArray);
  }
  console.log(combinedArray);

  // generating potential password
  for (let i = 0; i < generateLength; i++) {
    var randomizer = combinedArray[Math.floor(Math.random() * combinedArray.length)];
    console.log(randomizer);
    passwordArray.push(randomizer);
  }
  console.log(passwordArray);
  var possiblePassword = passwordArray.join('');
  console.log(possiblePassword);

  return possiblePassword;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword(); // return a string which should be the final random password
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);