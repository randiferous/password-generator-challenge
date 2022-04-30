// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // generateLength is the length of password, it is an integer
  var generateLength = window.prompt("How many characters would you like your password to contain?");
  if (generateLength < 8) {
    window.alert("Password must be greater than 7 characters.")
    generatePassword();
  }
  if (generateLength > 128) {
    window.alert("Password must be less than 129 characters.")
    generatePassword();
  }
  generateLength = parseInt(generateLength);
  console.log(generateLength);
  generateCharacters();

  // list of available characters
  function generateCharacters() {
    var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    var specialArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~']

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
    // how to loop these if true??
    if (lowerCase === true) {
      var lowerCaseRandom = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      console.log(lowerCaseRandom);
    }
    if (upperCase === true) {
      var upperCaseRandom = upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
      console.log(upperCaseRandom);
    }
    if (numeric === true) {
      var numericRandom = numericArray[Math.floor(Math.random() * numericArray.length)];
      console.log(numericRandom);
    }
    if (special === true) {
      var specialRandom = specialArray[Math.floor(Math.random() * specialArray.length)];
      console.log(specialRandom);
    }
    // how do we collect these random generated characters? and then how do we random those??? do we create another array?
    // var storedPassword;
  }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword(); // return a string which should be the final random password
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);