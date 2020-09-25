// Assignment Code
// Search the Document and return the first <element> we find matching the specified id.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Setting up candidate arrays.
// The " and \ characters have special meaning and are paired with the escape character \ for inclusion.
var specialArray = ["!", '\"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var combinedArray = [];
var newUserPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate a password based upon the user specified length and character selection.
function generatePassword() {
  //reinitialize newUserPassword and combinedArray so users can generate additional passwords in the same session.
  newUserPassword = '';
  combinedArray = [];
  // Prompt user for desired password length.
  var passwordLength = prompt("Please enter a password length between 8 - 128 characters");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('You must enter a number between 8 and 128');
  } else {

    var includeSpecial = confirm("Include Special characters?");
    var includeLower = confirm("Include lower case characters?");
    var includeUpper = confirm("Include UPPER case characters?");
    var includeNumbers = confirm("Include Numbers 0 - 9?");

    //   if all items are false alert user they must make at least one selection
    if (!includeSpecial && !includeLower && !includeUpper && !includeNumbers) {
      alert("You must make at least one character selection!");
    } else {

      if (includeSpecial) {
        combinedArray = combinedArray.concat(specialArray);
      }

      if (includeLower) {
        combinedArray = combinedArray.concat(lowerCaseArray);
      }

      if (includeUpper) {
        combinedArray = combinedArray.concat(upperCaseArray);
      }

      if (includeNumbers) {
        combinedArray = combinedArray.concat(numArray);
      }

      //   Loop through the array for the specified password length
      for (i = 0; i < passwordLength; i++) {
        newUserPassword = newUserPassword + combinedArray[Math.floor(Math.random() * combinedArray.length)];
      }

    }

    return newUserPassword;
  }
}
