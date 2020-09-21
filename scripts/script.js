// Assignment Code
// Search the Document and return the first <element> we find matching the specified id.
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Setting up arrays of potential characters.
// The " and \ characters have special meaning and are paired with the escape character \ so they may be included in our list of special characters.
specialArray = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"];
lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
  //if passwordLength < 8 or > 128 or null
  //alert user of length constraint

  //   confirm special characters true/false
  var passwordSpecial = confirm("Include Special characters?");

  //   confirm lower case true/false
  var passwordLower = confirm("Include lower case characters?");

  //   confirm uppper case true/false
  var passwordUpper = confirm("Include UPPER case characters?");

  //   confirm numbers true/false
  var passwordNumbers = confirm("Include Numbers 0 - 9?");

  //   if all items are false alert user they must make at least one selection
  if (!passwordSpecial && !passwordLower && !passwordUpper && !passwordNumbers) {
    console.log("You must make at least one selection!");
    alert("You must make at least one selection!");
  } else {

  //   Combine the selected arrays into one array
  //   loop through the array pulling random characters until we hit the specified user length
  //   then display the results.

  var newUserPassword = "jk;ljds/n&$)#&2588kjj&9%^$";

  }

  return(newUserPassword);
}