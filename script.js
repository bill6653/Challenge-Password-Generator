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

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
