// Assignment Code
var generateBtn = document.querySelector("#generate");

//, lower, upper, num, special

function generatePassword(length, special, lower, upper){

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const speChars = "\u0021\u0040\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
  
  const charSet = chars + speChars;

  
  // const 
  // const ;

  let password = "";


  if (special == true){
    for (let i = 0; i < length; i++) {
      var chosenLen = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(chosenLen);
    }
  }else {
    for (let i = 0; i < length; i++) {
      var chosenLen = Math.floor(Math.random() * chars.length);
      password += chars.charAt(chosenLen);
    }
}

  if (lower == true){
    for (let i = 0; i < length; i++) {
      var chosenLen = Math.floor(Math.random() * charSet.length);
      password += charSet.charAt(chosenLen);
    }
  }else {
    for (let i = 0; i < length; i++) {
      var chosenLen = Math.floor(Math.random() * chars.length);
      password += chars.charAt(chosenLen);
    }
  }






  return password;

}
// Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");
  
  var passLength = prompt("How many characters should your password be? (8-128 characters)");
  // var passLower  = alert("Should the password include lowercase characters?"); 
  // var passUpper = prompt("Should the password include lowercase characters? (yes/no)");
  // var passNum  = prompt("Should the password include numbers? (yes/no)");
 

  if (isNaN(passLength) || passLength <= 0) {
    alert("Please enter a valid positive number for the password length.");
    return;
    // Exit the function if the input is invalid
  }

  if (passLength <= 8 || passLength >= 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  var passSpecial  = confirm("Should the password include special characters?");
  // Convert passLength to a number and passSpecial to a boolean
  const length = passLength;
  const special = passSpecial ? true : false;

  var password = generatePassword(length, special);
   

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




/*
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const chosenLen = Math.floor(Math.random() * chars.length);
    password += chars.charAt(chosenLen);
  }

  return password;
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  var passLength = prompt("How many characters should your password be? (8-128 characters)");

  if (isNaN(passLength) || passLength <= 0) {
    alert("Please enter a valid positive number for the password length.");
    return;
  }

  var length = parseInt(passLength, 10);
  var password = generatePassword(length);

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
*/