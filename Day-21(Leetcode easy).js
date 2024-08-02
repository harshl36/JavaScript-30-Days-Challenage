// Activity 1: Two Sum
// Task 1
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    return [];
  }
  
  // Test cases for Two Sum
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([3, 2, 4], 6));
  console.log(twoSum([3, 3], 6));
  
  // Activity 2: Reverse Integer
  // Task 2
  function reverseInteger(x) {
    const sign = x < 0 ? -1 : 1;
    const reversed =
      parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;
    return reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)
      ? 0
      : reversed;
  }
  
  // Test cases for Reverse Integer
  console.log(reverseInteger(123));
  console.log(reverseInteger(-123));
  console.log(reverseInteger(120));
  console.log(reverseInteger(0));
  console.log(reverseInteger(1534236469));
  
  // Activity 3: Palindrome Number
  // Task 3
  function isPalindrome(x) {
    if (x < 0) return false; 
    const str = x.toString();
    return str === str.split("").reverse().join("");
  }
  
  // Test cases for Palindrome Number
  console.log(isPalindrome(121)); 
  console.log(isPalindrome(-121)); 
  console.log(isPalindrome(10)); 
  console.log(isPalindrome(12321)); 
  
  // Activity 4: Merge Two Sorted Lists
  // Task 4
  class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
  }
  
  // Test cases for Merge Two Sorted Lists
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  
  const mergedList = mergeTwoLists(list1, list2);
  let current = mergedList;
  while (current) {
    console.log(current.val); // Output: 1, 1, 2, 3, 4, 4
    current = current.next;
  }
  
  // Activity 5: Valid Parentheses
  // Task 5
  function isValid(s) {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };
  
    for (const char of s) {
      if (mapping[char]) {
        const topElement = stack.length === 0 ? "#" : stack.pop();
        if (topElement !== mapping[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases for Valid Parentheses
  console.log(isValid("()")); 
  console.log(isValid("()[]{}")); 
  console.log(isValid("(]")); 
  console.log(isValid("([)]")); 
  console.log(isValid("{[]}")); 