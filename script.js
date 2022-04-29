// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
};

function generatePassword() {
  var lowerCase = window.confirm("Click OK to confirm including lower case characters.");
  console.log(lowerCase);
  var upperCase = window.confirm("Click OK to confirm including upper case characters.");
  console.log(upperCase);
  var numeric = window.confirm("Click OK to confirm including numeric characters.");
  console.log(numeric);
  var special = window.confirm("Click OK to confirm including special characters.");
  console.log(special);
  if (lowerCase === false && upperCase === false && numeric === false && special === false) {
    window.alert("You must select at least one character type.")
    return generatePassword;
  }


  var arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
  var arr3 = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var arr4 = [ ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~']
  }
  // need a way to activate specific arrays based on character confirms


// Write password to the #password input
function writePassword() {
  var generateLength = window.prompt("How many characters would you like your password to contain?");
  if (generateLength < 8) {
    window.alert("Password must be greater than 7 characters.")
    return writePassword();
  }
  if (generateLength > 128) {
    window.alert("Password must be less than 129 characters.")
    return writePassword();
  }
  generateLength = parseInt(generateLength);
  console.log(generateLength);

  var passwordLength = randomNumber(8, generateLength);
  console.log(passwordLength);
  generatePassword();

  
  var password = generatePassword(); // return a string which should be the final random password
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);