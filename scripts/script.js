// Assignment Code
// Search the Document and return the first <element> we find matching the specified id.
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Setting up arrays of potential characters.
// The " and \ characters have special meaning and are paired with the escape character \ so they may be included in our list of special characters.
var specialArray = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var combinedArray = [];
var newUserPassword = '';

// Write password to the #password input
function writePassword() {
  console.log("I'm inside the writePassword function?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  console.log("I'm inside the generatePassword function?");

  // Prompt user for desired password length.
  var passwordLength =  prompt("Please enter a password length between 8 - 128 characters");
  //  See how to enforce a number between 8 and 128 has been entered.

  //   confirm special characters true/false
  var passwordSpecial = confirm("Include Special characters?");
  if (passwordSpecial) {
    combinedArray = combinedArray.concat(specialArray);
    console.log(combinedArray);
  }

  //   confirm lower case true/false
  var passwordLower = confirm("Include lower case characters?");
  if (passwordLower) {
    combinedArray = combinedArray.concat(lowerCaseArray);
    console.log(combinedArray);
  }

  //   confirm uppper case true/false
  var passwordUpper = confirm("Include UPPER case characters?");
  if (passwordUpper) {
    combinedArray = combinedArray.concat(upperCaseArray);
    console.log(combinedArray);
  }

  //   confirm numbers true/false
  var passwordNumbers = confirm("Include Numbers 0 - 9?");
  if (passwordNumbers) {
    combinedArray = combinedArray.concat(numArray);
    console.log(combinedArray);
  }

  //   if all items are false alert user they must make at least one selection
  if (!passwordSpecial && !passwordLower && !passwordUpper && !passwordNumbers) {
    console.log("You must make at least one selection!");
    alert("You must make at least one selection!");
  } else {

  //   loop through the array for the specified password length
  //   generate a random character for each iteration and append to newUserPassword.
  //   display newUserPassword.
  for (i = 0; i < passwordLength; i++) {
    console.log("This is iteraiton " + i +"!");
    newUserPassword = newUserPassword + combinedArray[Math.floor(Math.random() * combinedArray.length)];
  }

  // var newUserPassword = "jk;ljds/n&$)#&2588kjj&9%^$";

  }

  return(newUserPassword);
}