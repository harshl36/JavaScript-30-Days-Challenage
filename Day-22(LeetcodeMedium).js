// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Test cases for Activity 1
console.log("Activity 1: Add Two Numbers");
const testCase1 = addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
);
console.log("Test case 1:", linkedListToArray(testCase1)); // Expected: [7,0,8]

const testCase2 = addTwoNumbers(
    new ListNode(0),
    new ListNode(0)
);
console.log("Test case 2:", linkedListToArray(testCase2)); // Expected: [0]

const testCase3 = addTwoNumbers(
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    new ListNode(9, new ListNode(9, new ListNode(9)))
);
console.log("Test case 3:", linkedListToArray(testCase3)); // Expected: [8,9,9,0,1]

// Helper function to convert linked list to array for easier logging
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(charMap.get(s[end]) + 1, start);
        }
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases for Activity 2
console.log("\nActivity 2: Longest Substring Without Repeating Characters");
console.log("Test case 1:", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log("Test case 2:", lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log("Test case 3:", lengthOfLongestSubstring("pwwkew")); // Expected: 3
console.log("Test case 4:", lengthOfLongestSubstring("")); // Expected: 0
console.log("Test case 5:", lengthOfLongestSubstring("dvdf")); // Expected: 3

// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);
        const water = width * containerHeight;
        maxWater = Math.max(maxWater, water);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases for Activity 3
console.log("\nActivity 3: Container With Most Water");
console.log("Test case 1:", maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log("Test case 2:", maxArea([1,1])); // Expected: 1
console.log("Test case 3:", maxArea([4,3,2,1,4])); // Expected: 16
console.log("Test case 4:", maxArea([1,2,1])); // Expected: 2

// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Test cases for Activity 4
console.log("\nActivity 4: 3Sum");
console.log("Test case 1:", threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log("Test case 2:", threeSum([0,1,1])); // Expected: []
console.log("Test case 3:", threeSum([0,0,0])); // Expected: [[0,0,0]]

// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem

function groupAnagrams(strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
}

// Test cases for Activity 5
console.log("\nActivity 5: Group Anagrams");
console.log("Test case 1:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log("Test case 2:", groupAnagrams([""]));
// Expected: [[""]]
console.log("Test case 3:", groupAnagrams(["a"]));
// Expected: [["a"]]