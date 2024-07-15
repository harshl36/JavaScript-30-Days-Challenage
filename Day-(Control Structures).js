let num = -11,
  age = 21;
const num1 = 10;
const num2 = 5;
const num3 = 8;

// Activity 1: If-else statements
// Task1
if (num > 0) {
  console.log("Positive");
} else if ((num = 0)) {
  console.log("Negative");
} else console.log("Zero");

// Task2
if (age >= 18) {
  console.log(`Since the age is ${age}, Hence ELigible for voting.`);
} else {
  console.log(`Since the age is ${age}, Hence not Eligible for voting.`);
}

// Activity 2: Nested If-Else
// Task3
function findLargest(num1, num2, num3) {
  let largest;

  if (num1 >= num2) {
    if (num1 >= num3) {
      largest = num1;
    } else {
      largest = num3;
    }
  } else {
    if (num2 >= num3) {
      largest = num2;
    } else {
      largest = num3;
    }
  }

  return largest;
}

console.log(
  "The largest number among 5, 8 and 10 is " + findLargest(num1, num2, num3)
);
// const largestNumber = findLargest(num1, num2, num3);
// console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${largestNumber}`);

// Activity 3: Switch Case
// Task 4
const Weekday = 5;
switch (Weekday) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enterded day is wrong");
    break;
}

// Task 5
function GradeIs(score) {
  let grade; //using let instead of Const because if we use const then the grade should be initialized with a value
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 50:
      grade = "E";
      break;
    default:
      grade = "F";
  }
  console.log(`When the Score is : ${score}, Grade will be : ${grade}`);
}

GradeIs(85);

// Activity 4: Conditional(Ternary) Operator
// Task 6

let result = num2 % 2 === 0 ? "an Even number" : "an Odd number";
console.log(`${num2} is ${result}.`);

// Activity 5: Combining Conditions
// Task 7
const CheckLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It is a leap year");
  } else console.log("Not a leap year");
};
CheckLeapYear(2020);
CheckLeapYear(2024);
CheckLeapYear(2025);
