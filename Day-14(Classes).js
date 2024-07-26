// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

class person {
  constructor(name, age, firstname, lastname) {
    this.name = name;
    this.age = age;
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullName(fullName) {
    [this.firstname, this.lastname] = fullName.split(" ");
  }
  greeting() {
    return `Hello as your age is ${this.age} so,  ${this.name}, you are elegible for vote`;
  }
  static greetings() {
    return `Hello ${this.name}`;
  }
}

const person1 = new person("Harsh", 23);
console.log(person1.greeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class MAN {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`The age of ${this.name} has been updated to ${this.age}`);
  }
}

const ME = new MAN("Rohit", 22);
ME.updateAge(23);

// Activity 2: Class Inheritance
// Task 3: Define a class student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the student class and log the student ID.

class student extends person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    student.studentCount += 1;
    console.log(`Total number of students: ${student.studentCount}`);
  }
  getStudentId() {
    return this.studentId;
  }
  greeting() {
    return `Hello ${this.name}, as your age is ${this.age}, you are eligible for vote. Your student ID is ${this.studentId}.`;
  }
}
const student1 = new student("Harsh", 23, 1234);
console.log(student1.getStudentId());

// Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.

console.log(student1.greeting());

// Activity 3:
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

console.log(person.greetings());

// Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// student.studentCount += 1;
//     console.log(`Total number of students: ${student.studentCount}`);
//   }   already added in student class

const student2 = new student("Sidd", 24, 1235);
console.log(student2.greeting());
const student3 = new student("Sidd", 24, 1335);
console.log(student3.greeting());

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property) Create an instance and log the full name using the getter.
const person2 = new person("Rohit Lavania", 23, "Rohit", "Lavania");
console.log(person2.fullName);

// Task 8: Add a setter method to the Person class to update the name properties ( firstName and lastName ). Update the name using the setter and log the updated full name.
person2.fullName = "Advait Tiwari";
console.log(person2.fullName);

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can onl be u dated throu h these methods.

class Account {
  #balance; // Private field for balance

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.#balance}.`);
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew ${amount}. New balance is ${this.#balance}.`);
  }

  // Method to check balance
  checkBalance() {
    console.log(`Your balance is ${this.#balance}.`);
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

// Creating an instance of 'Account' and performing some operations.
const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();
