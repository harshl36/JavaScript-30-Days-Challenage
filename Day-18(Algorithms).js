// Tasks/Activities:
// Activity 1 : Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  console.log("<---------Bubble Sort--------->");
  let BubbleArr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted array is: ", BubbleArr);
  console.log("Sorted array is: ", bubbleSort(BubbleArr));
  
  // Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
  function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (min !== i) {
        // Swap arr[i] and arr[min]
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
    return arr;
  }
  
  console.log("<---------Selection Sort--------->");
  let SelectionArr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted array is: ", SelectionArr);
  console.log("Sorted array is: ", selectionSort(SelectionArr));
  
  // Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
  function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
    return arr;
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }
  console.log("<---------Quick Sort--------->");
  let QuickArr = [64, 34, 25, 12, 22, 11, 90];
  console.log("Unsorted array is: ", QuickArr);
  console.log("Sorted array is: ", quickSort(QuickArr));
  
  // Activity 2: Searching Algorithms
  // Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  console.log("<---------Linear Search--------->");
  let LinearArr = [64, 34, 25, 12, 22, 11, 90];
  let Lineartarget = 22;
  let LinearResult = linearSearch(LinearArr, Lineartarget);
  if (LinearResult !== -1) {
    console.log(
      `Target ${Lineartarget} found at index: ${LinearResult} in array ${LinearArr}`
    );
  } else {
    console.log("Target not found in array");
  }
  
  // Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
  
  // Test the function
  let BinaryArr = [11, 12, 23, 22, 25, 34, 64, 90];
  let BinaryTarget = 22;
  let BinaryResult = binarySearch(BinaryArr, BinaryTarget);
  
  console.log("<---------Binary Search--------->");
  if (BinaryResult !== -1) {
    console.log(
      `Target ${BinaryTarget} found at index: ${BinaryResult} in array ${BinaryArr}`
    );
  } else {
    console.log("Target not found in array");
  }
  
  // Activity 3: String Algorithms
  // Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
  function countCharacters(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    return charCount;
  }
  
  // Test the function
  let OccurStr = "HARSH";
  console.log(
    `Character counts in "${OccurStr}" are: `,
    countCharacters(OccurStr)
  );
  
  // Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
  function longestSubstring(str) {
    let seen = {};
    let start = 0;
    let maxLength = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char in seen && start <= seen[char]) {
        start = seen[char] + 1;
      } else {
        maxLength = Math.max(maxLength, i - start + 1);
      }
      seen[char] = i;
    }
  
    return maxLength;
  }
  
  // Test the function
  let MaxStr = "HARSH";
  console.log(
    `Length of the longest substring without repeating characters in "${MaxStr}" is: `,
    longestSubstring(MaxStr)
  );
  
  // Activity 4: Array Algorithms
  // Task 8: Write a function to rotate an array by k positions. Log the rotated array.
  function rotateArray(arr, k) {
    k = k % arr.length;
    let rotatedArray = [...arr.slice(-k), ...arr.slice(0, -k)];
    return rotatedArray;
  }
  let RoatateArrK = [1, 2, 3, 4, 5, 6, 7];
  let k = 3;
  console.log(
    `Array "${RoatateArrK}" rotated by ${k} positions is: `,
    rotateArray(RoatateArrK, k)
  );
  
  // Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
  function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [...arr1, ...arr2];
    mergedArray.sort((a, b) => a - b);
    return mergedArray;
  }
  
  // Test the function
  let ToMergeArr1 = [1, 3, 5, 7];
  let ToMergeArr2 = [2, 4, 6, 8];
  console.log(
    `Merged array of "${ToMergeArr1}" and "${ToMergeArr2}" is: `,
    mergeSortedArrays(ToMergeArr1, ToMergeArr2)
  );
  
  // Activity 5: Dynamic Programming (Optional)
  // Task IO: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
  function fibonacci(n) {
    let fib = Array(n + 1).fill(0);
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
  // Test the function
  let n = 5;
  console.log(`First ${n} Fibonacci numbers are: `, fibonacci(n));
  
  // Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
  function knapsack(values, weights, capacity) {
    let n = values.length;
    let dp = Array(n + 1)
      .fill()
      .map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            values[i - 1] + dp[i - 1][w - weights[i - 1]],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][capacity];
  }
  
  // Test the function
  let values = [60, 100, 120];
  let weights = [10, 20, 30];
  let capacity = 50;
  console.log(
    `Maximum value that can be obtained is: `,
    knapsack(values, weights, capacity)
  );
  