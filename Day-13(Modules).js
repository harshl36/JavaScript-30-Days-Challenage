// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
let addition = require("./demo");

let result = addition.addTwoNumbers(3, 5);
console.log("The result is " + result);

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this nmodule in another script.

let personDetails = require("./demo");
console.log("Details are", personDetails);

// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

let mathFunctions = require("./demo");

console.log(mathFunctions.add(3, 5)); // Outputs: 8
console.log(mathFunctions.subtract(3, 5)); // Outputs: -2
console.log(mathFunctions.multiply(3, 5)); // Outputs: 15
console.log(mathFunctions.divide(3, 5)); // Outputs: 0.6

// Task 4:
const greet = require("./demo");
console.log(greet("Harsh"));
console.log(greet("Rohit"));

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const mathUtils = require("./demo");

console.log("Pi:", mathUtils.PI);
console.log("e:", mathUtils.E);

console.log("Square of 5:", mathUtils.square(5));
console.log("Cube of 3:", mathUtils.cube(3));
console.log(
  "Circumference of a circle with radius 4:",
  mathUtils.circumference(4)
);
console.log("Factorial of 5:", mathUtils.factorial(5));

// Using object destructuring for selective imports
const { square, cube } = mathUtils;
console.log("Using destructured functions:");
console.log("Square of 6:", square(6));
console.log("Cube of 4:", cube(4));

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.

lodashExample.js;

const _ = require("lodash");

// Sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using Lodash to get the sum of the array
const sum = _.sum(numbers);
console.log("Sum of numbers:", sum);

// Using Lodash to get the average of the array
const average = _.mean(numbers);
console.log("Average of numbers:", average);

// Using Lodash to get the maximum value in the array
const max = _.max(numbers);
console.log("Maximum number:", max);

// Using Lodash to chunk the array into smaller arrays
const chunkedArrays = _.chunk(numbers, 3);
console.log("Array chunked into groups of 3:", chunkedArrays);

// // Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

// axiosExample.js

const axios = require("axios");

// Function to fetch data from an API
async function fetchData() {
  try {
    // Make a GET request to the JSONPlaceholder API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Log the response data
    console.log("Fetched data:", response.data);

    // Log some specific fields
    console.log("Post title:", response.data.title);
    console.log("Post body:", response.data.body);
  } catch (error) {
    // If an error occurs, log it
    console.error("An error occurred:", error.message);
  }
}

// Call the function
fetchData();

// Example of a POST request
async function createPost() {
  try {
    const postData = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );

    console.log("Created post:", response.data);
  } catch (error) {
    console.error("An error occurred while creating the post:", error.message);
  }
}

// Call the function
createPost();

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

import { add, subtract } from "./demo.js";
import { greet } from "./greet.js";

console.log(add(5, 3));
// console.log(subtract(10, 4));
console.log(greet("Webpack"));
