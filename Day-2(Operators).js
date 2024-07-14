let 
  num1 = 5,
  num2 = 10,
  num3 = 2,
  num4 = "5",
  num5 = -5;

// ----------------------------------------------------------------------------------------------------------------------------------------
// Activity 1: Arithmetic Operations
// Task 1
let sum = num1 + num2;
// Task 2
let difference = num2 - num1;
// Task 3
let product = num1 * num2;
// Task 4
let quotient = num2 / num1;
// Task 5
let remainder = num2 % num1;

console.log(
  `Sum: ${sum}, Difference: ${difference}, Product: ${product}, Division: ${quotient} and Remainder: ${remainder}`
);
// console.log("The sum is " +sum, "Difference"+ difference,"Product"+ product,"Division"+ quotient," and the Remainder"+ remainder);

// ----------------------------------------------------------------------------------------------------------------------------------------

// Activity 2: Assignment Operators
// Task 6
num1 += num2;
console.log(`The new value of the variable is: ${num1}`);
// Task 7
num1 -= num2;
console.log(`The new value of the variable is: ${num1}`);

// ----------------------------------------------------------------------------------------------------------------------------------------
// Activity 3: Comparison Operators
// Task 8
// console.log(num1>num2);
// console.log(num1<num2);   first approach
if (num1 < num2) {
  console.log(num1 + " is less than " + num2);
} else if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num1 + " is equal to " + num2);
}
// Task 9
if (num2 <= num1) {
  console.log(num1 + " is less or equal to " + num2);
} else if (num2 >= num1) {
  console.log(num1 + " is greater or equal to " + num2);
} else {
  console.log("All the condtions are false");
}
// task 10
console.log(num4 == num1);
console.log(num4 === num1);

// ----------------------------------------------------------------------------------------------------------------------------------------
// Acivity 4: Logical Operators
// Task 11
// console.log(num1>num2 && num1>num3);
if (num1 > num2 && num1 > num3) {
  console.log("true");
} else {
  console.log("false");
}
// Task 12
if (num1 > num2 || num1 > num3) {
  console.log("true");
} else {
  console.log("false");
}

// Task 13
let thisIsJS = true;

// Negate the condition using the ! operator
if (!thisIsJS) {
  console.log("It is not JavaScript");
} else {
  console.log("It is javascript.");
}

// Activity 5: Ternary Operator
// Task 14
const result1 = num1 >= 0 ? "is positive" : "is negative";
const result2 = num5 >= 0 ? "is positive" : "is negative";
console.log(`${num1} ` + result1 + " and " + `${num5} ` + result2);
