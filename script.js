// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (){

var passwordLength =parseInt(prompt("Enter password Length?"));
if(passwordLength<8 || passwordLength> 126 || isNaN(passwordLength)){
  return "Invalid Password Length entered...Please enter valid characters"
}
var uppercaseYes = confirm("Do you like to have Uppercase in your password");
var lowercaseYes = confirm("Must have a lower case letter in password");
var lowercaseNumbers = confirm("Must have a lowercase number")
var lowercaseSymbols = confirm("Must have Lowercase Symbols")
var userChoice = []
if(uppercaseYes){
  userChoice += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
if(lowercaseYes) {
  userChoice += 'abcdefghijklmnopqrstuvwxyz'
}
if(lowercaseNumbers) {
  userchoice += '0123456789'
}
if (lowercaseSymbols){
  userChoice += '~!@#$%^&*()_+'
}
if (userChoice.length === 0){
  return 'Invalid Password'
}
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
