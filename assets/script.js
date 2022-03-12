// pseudocode
// 8 - 128 chars
// lowercase
//  upprcase
//  numbers
//  special characters


//character variables
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
var specialChars = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','<','>','/','?',':',';','~'];
var numChars = ['0','1','2','3','4','5','6','7','8','9'];


function generatePassword() {
  var password = ""
  var choices = []
  var userLength = prompt(
    "Enter Password Character Length 8-128 characters"
  );

  // console.log(parseInt(prompt(
  //   "Enter Password Character Length 8-128 characters"
  // )));

  if (!userLength || userLength < 8 || userLength > 128) {
    window.alert("You must select a length between 8 and 128 characters.");
    return;
  }

  var userUpper = window.confirm("Select ok to include uppercase letters.");
  if (userUpper) {
    choices.push(upper)
  }

  var userLower = window.confirm("Select ok to include lowercase letters.");
  if (userLower) {
    choices.push(lower)
  }

  var userSpecial = window.confirm("Select ok to include special characters.");
  if (userSpecial) {
    choices.push(specialChars)
  }

  var userNumeric = window.confirm("Select ok to include numeric characters.");
  if (userNumeric) {
    choices.push(numChars)
  }
  
  for (var i = 0; i < userLength; i++) {
    password += getChar(choices[Math.floor(Math.random() * choices.length)])
  }
  console.log(password);

  
}

function getChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

  // const randomFunction = {
  //   lower: getRandomLower,
  //   upper: getRandomUpper,
  //   number: getRandomNumber,
  //   symbols: getRandomSymbol,
  // };

  // //functions for character generation.

  // function getRandomLower() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // }

  // function getRandomUpper() {
  //   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // }

  // function getRandomNumber() {
  //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // }

  // function getRandomSymbol() {
  //   const symbols = "!@#$%^&*(){}[]=<>/,.?:;~";
  //   return symbols[Math.floor(Math.random() * symbols.length)];
  // }


  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password; }
  

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

