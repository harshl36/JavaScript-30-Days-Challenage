class Stack {
//     constructor() {
//       this.items = [];
//     }
  
//     // Add an element to the top of the stack
//     push(element) {
//       this.items.push(element);
//     }
  
//     // Remove and return the top element from the stack
//     pop() {
//       if (this.isEmpty()) {
//         console.log("Stack is empty");
//         return null;
//       }
//       return this.items.pop();
//     }
  
//     // View the top element of the stack without removing it
//     peek() {
//       if (this.isEmpty()) {
//         console.log("Stack is empty");
//         return null;
//       }
//       return this.items[this.items.length - 1];
//     }
  
//     // Check if the stack is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     // Display all elements in the stack
//     display() {
//       console.log(this.items.join(", "));
//     }
//   }
  
//   // Example usage:
//   let stack = new Stack();
//   stack.push(1);
//   stack.push(2);
//   stack.push(3);
//   stack.display(); // Output: 1, 2, 3
//   console.log(stack.peek()); // Output: 3
//   console.log(stack.pop()); // Output: 3
//   stack.display(); // Output: 1, 2
//   console.log(stack.pop()); // Output: 2
//   console.log(stack.pop()); // Output: 1
//   console.log(stack.pop()); // Output: Stack is empty, null