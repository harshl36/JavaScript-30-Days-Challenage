// Day 23: LeetCode Hard

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;
    
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        
        const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
}

// Test cases for Activity 1
console.log("Activity 1: Median of Two Sorted Arrays");
console.log(findMedianSortedArrays([1, 3], [2])); // Expected: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Expected: 0
console.log(findMedianSortedArrays([], [1])); // Expected: 1

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    
    while (lists.length > 1) {
        let mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }
    
    return lists[0];
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode();
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test cases for Activity 2
console.log("\nActivity 2: Merge k Sorted Lists");
const lists1 = [
    createLinkedList([1,4,5]),
    createLinkedList([1,3,4]),
    createLinkedList([2,6])
];
console.log(linkedListToArray(mergeKLists(lists1))); // Expected: [1,1,2,3,4,4,5,6]

const lists2 = [];
console.log(linkedListToArray(mergeKLists(lists2))); // Expected: []

const lists3 = [createLinkedList([])];
console.log(linkedListToArray(mergeKLists(lists3))); // Expected: []

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

// Test cases for Activity 3
console.log("\nActivity 3: Trapping Rain Water");
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem

function solveNQueens(n) {
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    const result = [];
    
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}

// Test cases for Activity 4
console.log("\nActivity 4: N-Queens");
console.log(solveNQueens(4));
console.log(solveNQueens(1));

// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    
    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);
    
    while (queue.length) {
        const [word, level] = queue.shift();
        
        if (word === endWord) return level;
        
        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j <= 122; j++) {
                const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    visited.add(newWord);
                }
            }
        }
    }
    
    return 0;
}

// Test cases for Activity 5
console.log("\nActivity 5: Word Ladder");
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // Expected: 5
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])); // Expected: 0