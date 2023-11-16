// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, special, lower, upper, num) {
  //Paramater definitions
  const charsLower = "abcdefghijklmnopqrstuvwxyz";
  const charsUpper = "ABCDEFGHIJKLMNOPQRSUVWXYZ";
  const charsNums = "0123456789";
  const charsSpec =
    "\u0021\u0040\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";

  //Variable that updates with parameters.
  let charSet = "";

  //Sets password to blank
  let password = "";

  // Main logic to modify the charSet variable by appending different character groups to the variable

  if (special) charSet += charsSpec;
  if (lower) charSet += charsLower;
  if (upper) charSet += charsUpper;
  if (num) charSet += charsNums;

  //conditional check in case no options are selected
  if (charSet === "") {
    alert("You must select at least one paramater");
  }

  //generates the password
  for (let i = 0; i < length; i++) {
    const chosenLen = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(chosenLen);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  // Selects the password text box on the page
  var passwordText = document.querySelector("#password");

  //check the desired length of the password within a limit
  var passLength = prompt(
    "How many characters should your password be? (8-128 characters)"
  );

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
  var passSpecial = confirm("Should the password include special characters?");

  //check if to include lowercase chars
  var passLower = confirm("shoul the password include lowercase characters?");

  //check if to include uppercase chars
  var passUpper = confirm("Should the password include uppercase characters?");

  //check if to include numbers
  var passNum = confirm("Should the password include numbers?");

  // Relates all function vars to user inputs
  var length = passLength;

  //converts to boolean
  var special = passSpecial ? true : false;
  var lower = passLower ? true : false;
  var upper = passUpper ? true : false;
  var num = passNum ? true : false;

  //Assings the password to use the fucntion generatePassword and its parameters.
  var password = generatePassword(length, special, lower, upper, num);

  // Checks if the result will be blank, in which case, it will prompt to enter a paramater.

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
