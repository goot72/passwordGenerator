// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.querySelector("#password");
// Write password to the #password input
    
function writePassword() {
  //var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var length = prompt("How long do you want your password to be? (8-128 characters)");
    var lowercase = confirm("Do you want lowercase letters?");
    var uppercase = confirm ("Do you want uppercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
  
    var password = generatePassword(parseInt(length), lowercase, uppercase, numbers, special);

  document.getElementById("password").value = password;
}
  function generatePassword(length, lowercase, uppercase, numbers, special) {
    var characters = '';
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz'
    }
    if(uppercase){
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(numbers){
      characters += '1234567890'
    }
    if(special){
      characters += '!@#$%^&*()_+=-[]{}|;:,.<>/?'
    }
  
    if (characters === ''){
      return null;
    }
    var password = '';

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword)
  console.log(generatePassword(8, true, true, true, true));