
let num1 =5;
// Activity 1: For Loop
// Task 1
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// Task 2
for (let num =1; num <= 10; num++){
    console.log(`${num1} * ${num} = `+ num*num1)
}

// Activity 2: While Loop
// Task 3
let sum = 0;
let k = 0;
while(k<=10) {
 sum += k;
 k++;
 }
 console.log(sum);

// Task 4
let j = 10;
while(j>=1) {
 console.log(j);
 j--;
 }

// Activity 3: Do.. While Loop
//Task 5
let num2 = 1;
do{
    console.log(num2)
    num2++;
}while(num2<=5)

// Task 6
let fact = 1;
let num = 6;
let f=1;
do{
    fact *= f;
    f++
}while(f<=num)
console.log(fact)

// uisng function
function factorial(n) {
    let result = 1;
    let l = 1;

    do {
        result *= l;
        l++;
    } while (l <= n);

    return result;
}
console.log(factorial(6));  

// Activity 4: Nested Loop
// Task 7
for(let g =1; g<=num1; g++){
    for(let j=1; j<=g; j++){
        console.log("*")
    }
}


// Task 8
for(let h = 1; h <= num1; h++) {
    let pattern = '';
    for(let j = 1; j <= h; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}

// Activity: Loop control statements
// Task 9
for(let m = 1; m <= 10; m++) {
    if(m === 5) {
        continue;
    }
    console.log(m);
}

// Task 10
for(let v = 1; v <= 10; v++) {
    if(v === 7) {
        break;
    }
    console.log(v);
}