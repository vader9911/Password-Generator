// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(length, special, lower, upper, num){

//Paramater definitions
  const charsLower = "abcdefghijklmnopqrstuvwxyz";
  const charsUpper = "ABCDEFGHIJKLMNOPQRSUVWXYZ";
  const charsNums = "0123456789";
  const charsSpec = "\u0021\u0040\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";

  //Variable that updates with parameters.
  const charSet = "";

  


  //Sets password to blank
  password = "";

  // special == || lower == || upper == || num ==

  switch (charSet) {
    case 1:
      if (special === false && lower === false && upper === false && num === false) {
        charSet = "";
      }
      break;
  
    case 2:
      if (special === false && lower === false && upper === false && num === true) {
        charSet = charsNums;
      }
      break;
  
    case 3:
      if (special === false && lower === false && upper === true && num === false) {
        charSet = charsUpper;
      }
      break;
  
    case 4:
      if (special === false && lower === false && upper === true && num === true) {
        charSet = charsUpper + charsNums;
      }
      break;
  
    case 5:
      if (special === false && lower === true && upper === false && num === false) {
        charSet = charsLower;
      }
      break;
  
    case 6:
      if (special === false && lower === true && upper === false && num === true) {
        charSet = charsLower + charsNums;
      }
      break;
  
    case 7:
      if (special === false && lower === true && upper === true && num === false) {
        charSet = charsLower + charsUpper;
      }
      break;
  
    case 8:
      if (special === false && lower === true && upper === true && num === true) {
        charSet = charsLower + charsUpper + charsNums;
      }
      break;
  
    case 9:
      if (special === true && lower === false && upper === false && num === false) {
        charSet = charsSpec;
      }
      break;
  
    case 10:
      if (special === true && lower === false && upper === false && num === true) {
        charSet = charsSpec + charsNums;
      }
      break;
  
    case 11:
      if (special === true && lower === false && upper === true && num === false) {
        charSet = charsSpec + charsUpper;
      }
      break;
  
    case 12:
      if (special === true && lower === false && upper === true && num === true) {
        charSet = charsSpec + charsUpper + charsNums;
      }
      break;
  
    case 13:
      if (special === true && lower === true && upper === false && num === false) {
        charSet = charsSpec + charsLower;
      }
      break;
  
    case 14:
      if (special === true && lower === true && upper === false && num === true) {
        charSet = charsSpec + charsLower + charsNums;
      }
      break;
  
    case 15:
      if (special === true && lower === true && upper === true && num === false) {
        charSet = charsSpec + charsLower + charsUpper;
      }
      break;
  
    case 16:
      if (special === true && lower === true && upper === true && num === true) {
        charSet = charsSpec + charsLower + charsUpper + charsNums;
      }
      break;
  
    default:
      // Handle the default case if needed.
      break;
  }
  

  if (charSet == ""){
    alert("You must select at least one paramater");
  }








  for (let i = 0; i < length; i++) {
    const chosenLen = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(chosenLen);
  }

 //generates the password
  
//  for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * charset);
//   password += charset.charAt(randomIndex);
// }

  return password;

}

// Write password to the #password input
function writePassword() {

// Selects the password text box on the page 
  var passwordText = document.querySelector("#password");
  
//check the desired length of the password within a limit
  var passLength = prompt("How many characters should your password be? (8-128 characters)");
  
//passLength conditional checks 
  if (isNaN(passLength) || passLength <= 0) {
    alert("Please enter a valid positive number for the password length.");
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  }


//check if to include special chars
  var passSpecial  = confirm("Should the password include special characters?");

//check if to include lowercase chars
  var passLower  = confirm("Should the password include lowercase characters?"); 

//check if to include uppercase chars
  var passUpper = confirm("Should the password include lowercase characters?");

//check if to include numbers
  var passNum  = confirm("Should the password include numbers?");  


// Relates all function vars to user inputs
  const length = passLength;

//converts to boolean
  const special = passSpecial ? true : false;
  const lower = passLower ? true : false; 
  const upper = passUpper ? true : false;
  const num = passNum ? true : false;


  
//Assings the password to use the fucntion generatePassword and its parameters.
  var password = generatePassword(length, special, lower, upper, num);
   

// Checks if the result will be blank, in which case, it will prompt to enter a paramater.
 
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