// Activity 1: variable Declaration 
// Task 1
var myAge = 22;
console.log(myAge);
// Task 2
let myName = "Harsh Lavania";
console.log(myName);

// -----------------------------------------------------------------------
// Activity 2: Constant Declaration
// Task 3
const myAgeis22 = true;
console.log(myAgeis22);


// -----------------------------------------------------------------------
// Activity 3: Data Types
// Task 4

// 1
const Age = 22;
console.log(Age);
console.log(typeof(Age));

//2
const Name = "Harsh Lavania";
console.log(Name);
console.log(typeof(Name));

//3
const isMarried = false;
console.log(isMarried);
console.log(typeof(isMarried));

//4
const Myself = {
    FirstName: "Harsh",
    LastName: "Lavania",
    Education: "B.Tech(ECE)",
    Percentage: 89
}

console.log(Myself);
console.log(Myself.Percentage);
console.log(typeof(Myself));
console.log(typeof(Myself.Education));  // checked the type of a property of the object 

//5
const TechStack = ["JavaScript", "React.Js", ".Net", "Java"];
console.log(TechStack);
TechStack.push("HTML")     //Pushed an element in the array
console.log(TechStack);

// -----------------------------------------------------------------------
// Activity 4: Reassigned Variables
// Task 5
let value = 10;  // Declared a variable and assigned an initial value
console.log("Initial value:", value); // Output: Initial value: 10

value = 20;      // Reassigned a new value to the variable
console.log("New value:", value); // Output: New value: 20


// -----------------------------------------------------------------------
// Activity 5: Understanding const
// Task 6
const newValue = 10;  // Declared a cnst and assigned an initial value
console.log("Initial const value:", value); // Output: Initial value: 10

newValue = 20;      // Reassigned a new value to the const
console.log("New const value:", value); // Output: New value: 20

