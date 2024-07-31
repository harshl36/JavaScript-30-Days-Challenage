// Activity 1: Basic Regular Expressions

// Task 1
console.log("Task 1:");
const task1String = "JavaScript is awesome. I love JavaScript!";
const task1Regex = /JavaScript/g;
console.log(task1String.match(task1Regex));

// Task 2
console.log("\nTask 2:");
const task2String = "There are 42 apples and 7 oranges.";
const task2Regex = /\d/g;
console.log(task2String.match(task2Regex));

// Activity 2: Character Classes and Quantifiers

// Task 3
console.log("\nTask 3:");
const task3String = "The Quick Brown Fox Jumps Over The Lazy Dog";
const task3Regex = /[A-Z][a-z]+/g;
console.log(task3String.match(task3Regex));

// Task 4
console.log("\nTask 4:");
const task4String = "There are 42 apples, 7 oranges, and 1337 pears.";
const task4Regex = /\d+/g;
console.log(task4String.match(task4Regex));

// Activity 3: Grouping and Capturing

// Task 5
console.log("\nTask 5:");
const task5String = "(123) 456-7890";
const task5Regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const task5Match = task5String.match(task5Regex);
if (task5Match) {
    console.log("Area Code:", task5Match[1]);
    console.log("Central Office Code:", task5Match[2]);
    console.log("Line Number:", task5Match[3]);
}

// Task 6
console.log("\nTask 6:");
const task6String = "user@example.com";
const task6Regex = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
const task6Match = task6String.match(task6Regex);
if (task6Match) {
    console.log("Username:", task6Match[1]);
    console.log("Domain:", task6Match[2]);
}

// Activity 4: Assertions and Boundaries

// Task 7
console.log("\nTask 7:");
const task7String = "JavaScript is awesome";
const task7Regex = /^JavaScript/;
console.log(task7String.match(task7Regex));

// Task 8
console.log("\nTask 8:");
const task8String = "The language is JavaScript";
const task8Regex = /JavaScript$/;
console.log(task8String.match(task8Regex));

// Activity 5: Practical Applications

// Task 9
console.log("\nTask 9:");
const task9Password = "P@ssw0rd";
const task9Regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;
console.log("Password is valid:", task9Regex.test(task9Password));

// Task 10
console.log("\nTask 10:");
const task10URL = "https://www.example.com";
const task10Regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
console.log("URL is valid:", task10Regex.test(task10URL));