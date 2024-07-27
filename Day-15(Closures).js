//  Activity 1: Understanding Closures
//  Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return `ID_${lastId}`;
  };
}

const generateId = createIdGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
// way 1
console.log(greet("Harsh")());
// way 2
const Harsh = greet("Harsh");
console.log(Harsh());

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


function FunctionArray(n) {
    const functionArray = [];
    
    for (let i = 0; i < n; i++) {
        functionArray.push(function() {
            console.log(i);
        });
    }
    
    return functionArray;
}

const functions = FunctionArray(5);

// Call each function
functions.forEach(func => func());

//Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function ItemManager() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return [...items];
        }
    };
}

// Usage
const manager = ItemManager();

manager.addItem("JavaScript");
manager.addItem("JAVA");
manager.addItem("Python");

console.log(manager.listItems());  // ["JavaScript", "JAVA", "Python"]

manager.removeItem("JAVA");

console.log(manager.listItems());  // ["JavaScript", "Python"]
// Activity 5: Memoization
// Task 7:  Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// Task 8:  Create a memoized version of a function that calculates the factorial of a nurntM.

// task 7 and 8 are combined

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));  // Calculates: 120
console.log(memoizedFactorial(5));  // Returns cached result: 120
console.log(memoizedFactorial(6));  // Calculates: 720