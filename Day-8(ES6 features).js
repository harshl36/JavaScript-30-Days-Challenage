// Activity 1: Template Literals
// Task 1:
let name = "Harsh Lavania";
const age = 22;
console.log(`The name of the user is ${name} and his age is ${age}`);

// Task 2:

let intro = `Hello, My name is Harsh Lavania,
Currently I'm doing 30Days JavaScript challanege
curated by ChaiCode.`;

console.log(intro);

// Activity 2: Destructing
// Task 3:

const languages = ["Java", "JavaScript", "Python", "Ruby"];
let [FirstLang, SecondLang] = languages;
console.log(
  `The first language is ${FirstLang} and the second language is ${SecondLang}`
);

// Task 4:
const Book = {
  Title: "I Love Js",
  Author: "Harsh Lavania",
  Published: "2024",
  Edition: "1st",
};

let { Title, Author } = Book;
console.log(`The book ${Title} is written by ${Author} `);

// Activity 3: Spread and Rest Operators
// Task 5:
const ExtraLanguages = ["C#", "C++", ...languages];
console.log(ExtraLanguages);

// Task 6:
function summ(...numbers) {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(summ(1, 2, 3, 4, 5));

// Activity 4: Default parameters
// Task 7:
function product(firstNum, secondNum = 1) {
  return firstNum * secondNum;
}
console.log(product(2, 5));
console.log(product(2));

// Activity 5: Enhanced Object Literals
// Task 8:
const year = 2024;

// Create an object using enhanced object literal syntax
const ME = {
  firstName: "Harsh",
  lastName: "Lavania",

  // Method shorthand
  FullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Computed property name
  [`age${year}`]: 22,

  // added a property
  role: "Developer",

  // Shorthand for setting prototype
  __proto__: {
    introduction() {
      console.log(`Hello, I'm ${this.FullName()} and I work as ${this.role}`); //using `this` we are taking reference of this function
    },
  },
};

// Log the object to the console
console.log(ME);

// Demonstrate usage
console.log(ME.FullName());
console.log(ME.age2024);
ME.introduction();

// Task 9:
// Define some variables to use as property names
const nameKey = "name";
const ageKey = "age";
const skillKey = "Skill";

// Define some values
const MYName = "Harsh Lavania";
const MYAge = 22;
const MYSkill = "programming in JavaScript";

// Create an object with computed property names
const MY = {
  [nameKey]: MYName,
  [ageKey]: MYAge,
  [`primary${skillKey}`]: MYSkill,
  [`MyInfo`]: function () {
    return `My name is ${this[nameKey]} aged ${this[ageKey]} and skilled in ${
      this[`primary${skillKey}`]
    }.`;
  },
};

// Log the object to the console
console.log(MY);

// Demonstrate usage
console.log(MY.name);
console.log(MY.age);
console.log(MY.primarySkill);
console.log(MY.MyInfo());
