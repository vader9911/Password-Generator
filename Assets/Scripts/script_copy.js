// Assignment Code



// Test document for testing code 


var generateBtn = document.querySelector("#generate");


function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}


// Write password to the #password input
function writePassword() {
   // Get user input for the desired password length
   var passwordLength = prompt("Enter the desired number of characters for the password:");

   // Check if the input is a valid number
   if (isNaN(passwordLength) || passwordLength <= 0) {
     alert("Please enter a valid positive number for the password length.");
     return; // Exit the function if the input is invalid
   }
 
   // Convert the input to an integer
   const length = parseInt(passwordLength, 10);
   
   // Generate the password
   var password = generatePassword(length);
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
