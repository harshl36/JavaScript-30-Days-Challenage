// Activity 1: Function Declaration
// Task 1
let num = 5;
function EvenOrOdd(num){
    if(num % 2 === 0){
        console.log("EVEN")
    }
    else{
        console.log("ODD")
    }
}
// console.log(EvenOrOdd(num));
EvenOrOdd(num);

// Task 2
function squareN(num) {
    return num * num;
}
const Sqresult = squareN(num);
console.log(Sqresult);

// Activity 2: Function Expressions
// Task 3
function compare(num1, num2){
    let greater = (num1 > num2) ? num1 : num2;  // used ternary operator
    console.log("The maximum number is " + greater);
}
compare(6,1);

//Task 4
function concatenate(first, last){
    return (first + last);
}
console.log(concatenate("Harsh ", "Lavania"))

// Activity 3: Arrow Function
// Task 5
const Summ = (num1, num2)=>{
    let sum = num1+num2;
console.log(sum)
}
Summ(5,6)

// Task 6
const checkChar = (str, char)=> str.includes(char);
let contains = checkChar("Lavania", 'H')
console.log(contains)

// Activity 4:
// Task 7
let secondNo = 7;
const product = (firstNum, secondNo)=>{
    return firstNum*7;
}
console.log(product(5, secondNo))

// Task 8

function eligibility(username, age=19){

    if (!username) {           // !username alternative of undefined
        console.log("Please enter the username");
    }

   else  return `${username} you are eligible to vote as you are ${age} years old`
}

console.log(eligibility("Harsh"));

// Activity 5: Higher-Order Functions

// Task 9
const printFunction = (loopFunc, num = 5)=>{
    for(let i=0; i<=num; i++){
        loopFunc();
    }
}
const loopFunc = (num)=>{
    console.log("Hello Hii")
}
// printFunction(() => console.log("Hello, World!"), 5);  
// console.log(printFunction("Printed", 5))
// const loopFunc =()=>{
//     console.log(`Printed for the ${i} times`)
// }
//Task 10
// Function 1 to square root a number
function func1(num){
   const sqrt = math.sqrt(num);
   return sqrt(num)
}

// Function 2 print the value after implementation of first Function
function func2(func1){
    console.log(func1)
}
const applyFunctions = (func1, func2, num) => {
    return func2(func1(num));
};


var result = applyFunctions(Math.sqrt, Math.floor, 25);
console.log(result);  // Outputs: 5

