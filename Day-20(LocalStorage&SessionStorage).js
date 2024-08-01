// Activity 1: Understanding LocalStorage

// Task 1
console.log("Task 1:");
localStorage.setItem("myString", "Hello, LocalStorage!");
const retrievedString = localStorage.getItem("myString");
console.log(retrievedString);

// Task 2
console.log("\nTask 2:");
const myObject = { name: "John", age: 30 };
localStorage.setItem("myObject", JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log(retrievedObject);

// Activity 2: Using LocalStorage

// Task 3
console.log("\nTask 3:");
// Note: This task requires HTML. Here's a JavaScript function to handle form submission:
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("userData", JSON.stringify({ name, email }));
}

// Display data on page load
window.onload = function() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        console.log("Stored user data:", userData);
    }
}

// Task 4
console.log("\nTask 4:");
console.log("Before removal:", localStorage.getItem("myString"));
localStorage.removeItem("myString");
console.log("After removal:", localStorage.getItem("myString"));

// Activity 3: Understanding SessionStorage

// Task 5
console.log("\nTask 5:");
sessionStorage.setItem("mySessionString", "Hello, SessionStorage!");
const retrievedSessionString = sessionStorage.getItem("mySessionString");
console.log(retrievedSessionString);

// Task 6
console.log("\nTask 6:");
const mySessionObject = { fruit: "apple", color: "red" };
sessionStorage.setItem("mySessionObject", JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem("mySessionObject"));
console.log(retrievedSessionObject);

// Activity 4: Using SessionStorage

// Task 7
console.log("\nTask 7:");
// Note: This task requires HTML. Here's a JavaScript function to handle form submission:
function handleSessionSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("sessionName").value;
    const email = document.getElementById("sessionEmail").value;
    sessionStorage.setItem("sessionUserData", JSON.stringify({ name, email }));
}

// Display data on page load
window.onload = function() {
    const sessionUserData = JSON.parse(sessionStorage.getItem("sessionUserData"));
    if (sessionUserData) {
        console.log("Stored session user data:", sessionUserData);
    }
}

// Task 8
console.log("\nTask 8:");
console.log("Before removal:", sessionStorage.getItem("mySessionString"));
sessionStorage.removeItem("mySessionString");
console.log("After removal:", sessionStorage.getItem("mySessionString"));

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9
console.log("\nTask 9:");
function saveToStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log("LocalStorage value:", localStorage.getItem(key));
    console.log("SessionStorage value:", sessionStorage.getItem(key));
}

saveToStorages("sharedKey", "Shared Value");

// Task 10
console.log("\nTask 10:");
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("LocalStorage empty:", Object.keys(localStorage).length === 0);
    console.log("SessionStorage empty:", Object.keys(sessionStorage).length === 0);
}

clearAllStorages();