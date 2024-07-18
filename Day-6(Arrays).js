// Activity 1: Array creation and acsess
// Task 1:
const numArray = [1,2,3,4,5];
console.log("New Array")
console.log(numArray);
//Task 2:
const newNumArr = [numArray[0], numArray[numArray.length-1]]; //console the result in the new array
console.log("First and Last element")
console.log(newNumArr);

// Activity 2: Array Methods (Basic)
// Task 3:
numArray.push(6)
console.log("Pushed 6 in the array")
console.log(numArray)

// Task 4:
numArray.pop()
console.log("Popped 6 (Last element from the array)")
console.log(numArray)

// Task 5:
numArray.shift()
console.log("Popped the first element using shift()")
console.log(numArray)

// Task 6:
numArray.unshift(0)
console.log("Added an element at start of array using unshift()")
console.log(numArray)

// Activity 3: Array Methods (Intermediate)
// Task 7:
const doubleArr = numArray.map(num => num*2)
console.log("Doubled the element of old array and made a new array using map()")
console.log(doubleArr)

// Task 8:
const evenArr = numArray.filter(num => num%2 ===0)
console.log("Filtered out the even element and stored in the new array using filter()")
console.log(evenArr)

// Task 9:
const sum = numArray.reduce((acc,num)=> acc+num, 0);
console.log("Did the sum of all the elements of an array using reduce");
console.log(sum)

// Activity 4: Array Iteration
// Task 10:
console.log("Iterated the numArray and printed each element of the array")
for(let i=0; i<=numArray.length-1; i++){
    console.log(numArray[i])
}

// Task 11:
console.log("Iterated and printed each element using foreach() method")
numArray.forEach(num => console.log(num))

// Activity 2: Multi-Dimentional Array
// Task 12:
const multiArr =[[1,2], [3,4], [5,6], [7,8],[9,10]];
console.log("Multi-Dimentional array printed")
console.log(multiArr)

// Task 13:
console.log("Accessed a specific element from multi-dimentional array")
console.log(multiArr[0][1]);
console.log(multiArr[2][1]);
console.log(multiArr[3][1]);
