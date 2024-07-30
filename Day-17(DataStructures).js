// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Example usage:
let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;

console.log(node1.value); // Output: 1
console.log(node1.next.value); // Output: 2

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the linked list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Remove a node from the end of the linked list
  remove() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  // Display all nodes in the linked list
  display() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1 2 3
list.remove();
list.display(); // Output: 1 2
list.remove();
list.display(); // Output: 1
list.remove();
list.display(); // Output: List is empty

// Activity 2: Stack
// • Task 3. Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
// class Stack {
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

  
// • Task 4. Use the Stack class to reverse a string by pushing all characters onto the stack and then them off.
class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items.pop();
    }
  
    // View the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the stack
    display() {
      console.log(this.items.join(", "));
    }
  }
  
  // Function to reverse a string using a stack
  function reverseString(str) {
    let stack = new Stack();
  
    // Push all characters of the string onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    // Pop all characters from the stack and form the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  let originalString = "Hello, World!";
  let reversedString = reverseString(originalString);
  console.log(reversedString); // Output: !dlroW ,olleH
  
// Activity 3: Queue
// • Task 5. Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the first element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items.shift();
    }
  
    // View the first element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the queue
    display() {
      console.log(this.items.join(", "));
    }
  }
  
  // Example usage:
  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.display(); // Output: 1, 2, 3
  console.log(queue.front()); // Output: 1
  console.log(queue.dequeue()); // Output: 1
  queue.display(); // Output: 2, 3
  console.log(queue.dequeue()); // Output: 2
  console.log(queue.dequeue()); // Output: 3
  console.log(queue.dequeue()); // Output: Queue is empty, null
  
// • Task 6. Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the first element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items.shift();
    }
  
    // View the first element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the queue
    display() {
      console.log(this.items.join(", "));
    }
  }
  
  // Printer Queue Simulation
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the queue
    addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Added print job: ${job}`);
    }
  
    // Process the next print job in the queue
    processPrintJob() {
      if (this.queue.isEmpty()) {
        console.log("No print jobs to process");
        return;
      }
      const job = this.queue.dequeue();
      console.log(`Processing print job: ${job}`);
    }
  
    // View the next print job in the queue
    viewNextPrintJob() {
      const job = this.queue.front();
      if (job !== null) {
        console.log(`Next print job: ${job}`);
      }
    }  

// Activity 4: Binary Tree
// • Task 7: Implement a TreeN0de class to represent a node in a binary tree with properties value , left , and right .
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  // Example usage:
  let root = new TreeNode(1);
  let leftChild = new TreeNode(2);
  let rightChild = new TreeNode(3);
  
  root.left = leftChild;
  root.right = rightChild;
  
  console.log(root.value); // Output: 1
  console.log(root.left.value); // Output: 2
  console.log(root.right.value); // Output: 3
  
// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node into the binary tree
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Perform in-order traversal and display nodes
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
  let tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(13);
  tree.insert(18);
  
  tree.inOrderTraversal();
  // Output: 3, 5, 7, 10, 13, 15, 18
  
// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  
    // Perform a breadth-first search starting from the given starting node
    bfs(startingNode) {
      let visited = new Set();
      let queue = [];
      let result = [];
  
      visited.add(startingNode);
      queue.push(startingNode);
  
      while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode);
  
        let neighbors = this.adjacencyList.get(currentNode);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
  
      return result;
    }
  }
  
  // Example usage:
  let graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'A');
  
  console.log(graph.bfs('A')); // Output: [ 'A', 'B', 'C', 'D', 'E' ]
  
// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }
  
    // Perform a breadth-first search starting from the given starting node
    bfs(startingNode) {
      let visited = new Set();
      let queue = [];
      let result = [];
  
      visited.add(startingNode);
      queue.push(startingNode);
  
      while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode);
  
        let neighbors = this.adjacencyList.get(currentNode);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
  
      return result;
    }
  
    // Find the shortest path between two nodes using BFS
    findShortestPath(startNode, endNode) {
      let visited = new Set();
      let queue = [];
      let parentMap = new Map(); // To store the shortest path
  
      visited.add(startNode);
      queue.push(startNode);
      parentMap.set(startNode, null);
  
      while (queue.length > 0) {
        let currentNode = queue.shift();
  
        if (currentNode === endNode) {
          return this.constructPath(parentMap, endNode);
        }
  
        let neighbors = this.adjacencyList.get(currentNode);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
            parentMap.set(neighbor, currentNode);
          }
        }
      }
  
      return null; // Return null if no path exists
    }
  
    // Construct the path from the parent map
    constructPath(parentMap, endNode) {
      let path = [];
      for (let at = endNode; at !== null; at = parentMap.get(at)) {
        path.push(at);
      }
      path.reverse();
      return path;
    }
  }
  
  // Example usage:
  let graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');
  graph.addEdge('D', 'E');
  graph.addEdge('E', 'A');
  
  console.log(graph.findShortestPath('A', 'D')); // Output: [ 'A', 'B', 'D' ]
  console.log(graph.findShortestPath('A', 'E')); // Output: [ 'A', 'C', 'E' ]
  