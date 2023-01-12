// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    // Prompt user about length of the password
    // while the user input is not a number or < 10 or > 64, we prompt them again about the length of the password

    // use confirm to ask user if they want Lowercase
    // use confirm to ask user if they want Uppercase
    // use confirm to ask user if they want Numeric
    // use confirm to ask user if they want Special characters
    // while the user says no to all of the above, repeat these series of confirm

    
      var passwordLength = prompt( 'How long would you like your password to be? Please enter a number between 10 and 64')
      if (isNaN(passwordLength) ){
        alert ('Please enter a number.')
        return;

      }
      if (passwordLength < 10){
        alert('Please choose a longer password.')
        return;
      } if (passwordLength > 64) {
        alert('Please choose a shorter password.')
        return;
      }
      
      var isLowercaseIncluded = confirm('Do you want to include lowercase characters in your password?');
      var isUppercaseIncluded = confirm ('Do you want to include uppercase characters in your password?');
      var isNumberIncluded = confirm ('Do you want to include numbers in your password?');
      var isSpecialCharsIncluded = confirm('Do you want to include any special chacaters in your password?');
    
    return {
        passwordLength: parseInt(passwordLength),
        isLowercaseIncluded: isLowercaseIncluded,
        isUppercaseIncluded: isUppercaseIncluded,
        isNumberIncluded: isNumberIncluded,
        isSpecialCharsIncluded: isSpecialCharsIncluded,
    };
  }// return as object, use object keys to call in generatePassword function

// Function for getting a random element from an array
function getRandom(arr) {
 return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
    var passwordOptions = getPasswordOptions();

    var possibleCharacters = [];

    
    var password = '';
     //If lowercase included then add lowerCasedCharacters array to possibleCharacters array => possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
    // If uppercase included then add upperCasedCharacters array to possibleCharacters array
    // If numeric included then add numericCharacters array to possibleCharacters array
    // If special characters included then add specialCharacters array to possibleCharacters array

    // possibleCharacters = ['a', 'A', 1, '!', ... 'z', 'Z']

   
    

    // Check if password satisfy isLowercaseIncluded, isUppercaseIncluded, isNumberIncluded, isSpecialCharsIncluded requirements
    if (passwordOptions.isLowercaseIncluded) {
      possibleCharacters.push(...lowerCasedCharacters)
      var randomLower = getRandom(lowerCasedCharacters)
      password += randomLower;
        // check if password variable have element from lowerCasedCharacters array
        // if not then
        // option 1. regenerate random password and do this check again
        // option 2. get random character from lowerCasedCharacters then put that character in a random position of the string
    }

    if (passwordOptions.isUppercaseIncluded) {
        // check if password variable have element from upperCasedCharacters array
        possibleCharacters.push(...upperCasedCharacters)
        var randomUpper = getRandom(upperCasedCharacters)
        password += randomUpper;
        // if not then
        // option 1. regenerate random password and do this check again
        // option 2. get random character from upperCasedCharacters then put that character in a random position of the string
    }

    if (passwordOptions.isNumberIncluded) {
      possibleCharacters.push(...numericCharacters)
      var randomNumber = getRandom(numericCharacters)
      password += randomNumber;
      
        // check if password variable have element from numericCharacters array

        // if not then
        // option 1. regenerate random password and do this check again
        // option 2. get random character from numericCharacters then put that character in a random position of the string
    }

    if (passwordOptions.isSpecialCharsIncluded) {
      possibleCharacters.push(...specialCharacters)
      var randomCharacter = getRandom(specialCharacters)
      password += randomCharacter;
        // check if password variable have element from specialCharacters array

        // if not then
        // option 1. regenerate random password and do this check again
        // option 2. get random character from specialCharacters then put that character in a random position of the string
    }

    // either wrap this for loop and the check in a while loop or
    // wrap the check and the 4 ifs statements below in a while loop
    while( password.length < passwordOptions.passwordLength) {
        // choose 1 random element from possibleCharacters array say randomCharacter variable, use getRandom function
        password = password + getRandom(possibleCharacters)
    }
    return password;
    
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);