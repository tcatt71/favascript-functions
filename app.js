// Exercise 1: Print Odds Cont.

// - In the past, we created a selection statement inside a loop that counted from 1 to 100 and only printed out the odd numbers.
// - Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

// 1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
// 2. The function should take in one parameter named `count`
// 3. The function body should:
//    - contain a `for loop` that counts to the parameter passed in,
//    - an `if/else` statement that determines if the current value is odd,
//    - and then `console.log()` the odd value to the console
// BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.

function printOdds(count) {
  if (count < 0) {
    alert('Please enter a non negative integer');
  } else {
    for (let i = 0; i <= count; i++) {
      if (!(i % 2 === 0)) {
        console.log(i);
      } else {
        continue;
      }
    }
  }
}

printOdds(prompt('Enter a non negative integer'));

// Exercise 2: Legal?

// - Write a function that receives a name and age, and prints a greeting message to the console using the name.

// 1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
// 2. The function should take in two-parameter named `userName` & `age`
// 3. The function body should:
//    - declare and initialize an `aboveSixteen` local variable with string value: `"Congrats ${userName}, you can drive!"`,
//    - declare and initialize an `belowSixteen` local variable with string value: `"Congrats ${userName}, you can drive!"`,
//    - an `if/else` statement that determines if the `age` value is below 16,
//    - and then `console.log()` the correct message to the console.
// 4. BONUS: Remember that parameters are optional, and no `userName` or `age` value could be passed in. Correctly account for no parameter being passed in.

function checkAge(userName = 'kid', age = 15) {
  let aboveSixteen = `"Congrats ${userName}, you can drive!"`;
  let belowSixteen = `"Sorry ${userName}, you can't drive!"`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

let userName = prompt('Enter name');
let userAge = prompt('Enter age');

checkAge();

// More Practice

// - Assign a function to a variable

const addTwoNumbers = function (num1, num2) {
  const total = num1 + num2;
  console.log(total);
}

// - Pass a function as a parameter(argument)

function anotherFunction(callback) {
  num1 = parseInt(prompt('enter first number'));
  num2 = parseInt(prompt('enter second number'));
  callback(num1, num2);
}

anotherFunction(addTwoNumbers);

// - Return a function from a function

// function myfunction() {
//   return function innerFunction() {
//     return 2 * 5;
//   };
// }

// console.log(myfunction());

