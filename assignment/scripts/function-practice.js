console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
} // end helloName

// Remember to call the function to test
console.log( helloName('Chris') );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber ) {
  let result = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return result;
} // end addNumbers

console.log('Logging addNumbers: ', addNumbers(28.7, 44.3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
let result = num1 * num2 * num3;
return result;
} // end multiplyThree

console.log('Logging multiplyThree: ', multiplyThree(2, 3, 100));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
} // end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
 if (array.length === 0) {
   return 'undefined';
 } else {
   return array[array.length - 1];
 }
} // end getLast

let minnesotaCities = ['Minneapolis', 'Saint Paul', 'Duluth']; // array to test getLast
console.log('Testing getLast - should be undefined: ', getLast([]));
console.log('Testing getLast - should be "Duluth": ', getLast(minnesotaCities));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let valueFound = false;
  for (element of array) {
    if (element === value) {
      valueFound = true;
    }
  }
  return valueFound; 
} // end find

// testing find function
const dndClasses = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']; // test array for find
console.log('Finding Warlock: ', find('Warlock', dndClasses));
console.log('Finding Knight: ', find('Knight', dndClasses));
console.log('Finding Cleric: ', find('Cleric', dndClasses));
console.log('Finding Necromancer: ', find('Necromancer', dndClasses));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
} // end isFirstLetter

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (element of array) {
    sum += element;
  }
  return sum;
}
// testing sumAll
console.log('Testing sumAll - 3, 6, 9: ', sumAll([3, 6, 9]));
console.log('Testing sumAll - 28.2, 11.8, 60: ', sumAll([28.2, 11.8, 60]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
const testInputArray1 = [-10, 4, -6, 0, 1, 2.8, 7];
const testInputArray2 = [-1, -2, -3, -4, -5, -6, -7.824951]
const toPositiveArray = (input) => { // trying out function expressions & arrow syntax
  let positiveArray = [];
  for (element of input) {
    if (element > 0) {
      positiveArray.push(element);
    }
  }
  return positiveArray;
} // end toPositiveArray

//testing toPositiveArray
console.log(`Testing toPositiveArray - test array ${testInputArray1} :`, toPositiveArray(testInputArray1));
console.log(`Testing toPositiveArray - test array ${testInputArray2} :`, toPositiveArray(testInputArray2));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Edabit challenge, Highest Digit: Create a function that takes a number as an argument and returns the highest digit in that number.

const highestDigit = number => {
  let highest = 0
  for (let i = 0; i < number.toString().length; i++) { // converting number to string to evaluate each digit/character individually
    if (number.toString()[i] > highest) {
      highest = number.toString()[i];
    }
  }
  return highest;
} // end highestDigit

console.log(`Testing highestDigit - number is 3867: `, highestDigit(3867));
console.log(`Testing highestDigit - number is 1111112111: `, highestDigit(1111112111));
console.log(`Testing highestDigit - number is 98001: `, highestDigit(98001));
console.log(`Testing highestDigit - number is -1445: `, highestDigit(-1445));
