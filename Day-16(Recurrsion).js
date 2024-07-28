// Activity 1 : Basic Recursion
//  Task 1: Write a recursive function to calculate the factorial of a Log the result for a few test cases.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log("Factorials");
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));

//  Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log("Fibonacci");
console.log(fibonacci(10));
console.log(fibonacci(5));

// Activity 2: Recursion with Arrays
//  Task 3. Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}
console.log("Sum of elements of an array");
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30, 40, 50]));

//  Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let max = Math.max(arr[0], maxArray(arr.slice(1)));
    return max;
  }
}
console.log("Maximum from an array");
console.log(maxArray([1, 2, 3, 4, 5]));
console.log(maxArray([10, 20, 30, 40, 50]));
console.log(maxArray([5, 2, 8, 12, 3]));

// Activity 3: String Manipulation with Recursion
//  Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
  if (str.length === 0) {
    return str;
  } else {
    return reverseString(str.slice(1)) + str[0];
  }
}
console.log("Reversed string");
console.log(reverseString("Chai Aur Code"));
console.log(reverseString("Hello World"));
//  Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, -1));
  }
}
console.log("Palindrome or not");
console.log(isPalindrome("MADAM"));
console.log(isPalindrome("Chai Aur Code"));

// Activity 4: Recursive Search
//  Task 7: Write a recursive function to PMform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === target) {
    return 0;
  } else if (arr[0] > target) {
    return -1 * binarySearch(arr.slice(0, -1), target);
  } else {
    let result = binarySearch(arr.slice(1), target);
    if (result === -1) {
      return -1;
    } else {
      return 1 + result;
    }
  }
}
console.log("Index of target element");
console.log(binarySearch([1, 2, 3, 4, 5], 3));
//  Task 8. Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  } else if (arr[0] === target) {
    return 1 + countOccurrences(arr.slice(1), target);
  } else {
    return countOccurrences(arr.slice(1), target);
  }
}
console.log("Count of target element");
console.log(countOccurrences([1, 3, 3, 4, 5], 3));
console.log(countOccurrences([1, 4, 4, 4, 5], 4));

// Activity 5: Tree Traversal (Optional)
//  Task 9: Write a recursive function to PMform an in-order traversal of a binary tree. Log the nodes as they are visited.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left); // Traverse the left subtree
        console.log(node.value);     // Visit the current node
        inOrderTraversal(node.right); // Traverse the right subtree
    }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log("Nodes are");
inOrderTraversal(root);

//  Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
// Definition for a binary tree node
// Definition for a binary tree node
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to calculate the depth of a binary tree
function maxDepth(root) {
    // Base case: if the root is null, depth is 0
    if (root === null) {
        return 0;
    }
    
    // Recursively calculate the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // Return the maximum of left and right depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test cases
const tree1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const tree2 = new TreeNode(1, null, new TreeNode(2));
const tree3 = null;
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

console.log("Depth of tree1:", maxDepth(tree1));
console.log("Depth of tree2:", maxDepth(tree2));
console.log("Depth of tree3:", maxDepth(tree3));
console.log("Depth of tree4:", maxDepth(tree4));