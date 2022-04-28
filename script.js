// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordStart = window.alert("Click OK to review password criteria.");
  var passwordMin = window.prompt("What is the minimum length of your password?");
  if (passwordMin < 8) {
    window.alert("Password cannot be less than 8 characters.")
    return writePassword();
  }
  if (passwordMin >= 8) {
    console.log("Minimum password length " + passwordMin);
    var passwordMax = window.prompt("What is the maximum length of your password?");
    if (passwordMax > 128) {
      window.alert("Password cannot exceed 128 characters.")
      return writePassword();
    }
    if (passwordMax <= 128) {
      console.log("Maximum password length " + passwordMax);
      window.alert("Password will be between " + passwordMin + " and " + passwordMax + " characters.")
    }
  }
  var characterType = window.prompt("Will password include lowercase letters? (type 'yes' or 'no')");
  if (characterType != "yes" || "no") {
    window.alert("You did not provide a valid response. Try again");
  }
  var characterType = window.prompt("Will password include uppercase letters? (type 'yes' or 'no')");
  var characterType = window.prompt("Will password include numeric characters? (type 'yes' or 'no')");
  var characterType = window.prompt("Will password include special characters? (type 'yes' or 'no')");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);