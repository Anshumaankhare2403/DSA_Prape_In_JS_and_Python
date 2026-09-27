# DSA with JavaScript & Python

A structured repository for learning and implementing **Data Structures and Algorithms (DSA)** using **JavaScript** and **Python**.

The goal of this repository is to build strong problem-solving skills by implementing DSA concepts from fundamentals to advanced topics and solving practice problems.

---

## 📚 Topics Covered

### 1. Basics

* Time & Space Complexity
* Big O Notation
* Recursion
* Mathematical Problems
* Bit Manipulation

### 2. Arrays

* Array Traversal
* Searching
* Sorting
* Two Pointer Technique
* Sliding Window
* Prefix Sum
* Kadane's Algorithm

### 3. Strings

* String Manipulation
* Character Frequency
* Palindrome
* Anagrams
* String Searching

### 4. Linked List

* Singly Linked List
* Doubly Linked List
* Circular Linked List
* Insertion
* Deletion
* Reversal
* Fast & Slow Pointer

### 5. Stack & Queue

* Stack
* Queue
* Circular Queue
* Deque
* Monotonic Stack
* Applications of Stack & Queue

### 6. Hashing

* Hash Table
* Hash Map
* Hash Set
* Frequency Counting
* Duplicate Detection

### 7. Searching

* Linear Search
* Binary Search
* Binary Search on Answer

### 8. Sorting

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort
* Counting Sort

### 9. Trees

* Binary Tree
* Binary Search Tree
* Tree Traversal

  * Inorder
  * Preorder
  * Postorder
  * Level Order
* Tree Height & Depth
* Lowest Common Ancestor

### 10. Heap & Priority Queue

* Min Heap
* Max Heap
* Priority Queue
* Heap Sort
* Top K Problems

### 11. Graphs

* Graph Representation
* BFS
* DFS
* Connected Components
* Cycle Detection
* Shortest Path
* Dijkstra's Algorithm
* Topological Sort
* Minimum Spanning Tree

### 12. Dynamic Programming

* Memoization
* Tabulation
* 1D DP
* 2D DP
* Knapsack
* Longest Common Subsequence
* Longest Increasing Subsequence

### 13. Greedy Algorithms

* Activity Selection
* Fractional Knapsack
* Interval Problems
* Job Scheduling

### 14. Backtracking

* Permutations
* Combinations
* Subsets
* N-Queens
* Sudoku

### 15. Advanced Topics

* Trie
* Union Find / DSU
* Segment Tree
* Fenwick Tree
* Advanced Graph Algorithms

---

## 💻 Languages

This repository contains implementations in:

* 🟨 **JavaScript**
* 🐍 **Python**

The same algorithm may be implemented in both languages to understand the differences in syntax, built-in data structures, and implementation approaches.

---

## 📁 Repository Structure

```text
DSA/
│
├── JavaScript/
│   ├── Basics/
│   ├── Arrays/
│   ├── Strings/
│   ├── LinkedList/
│   ├── Stack/
│   ├── Queue/
│   ├── Searching/
│   ├── Sorting/
│   ├── Trees/
│   ├── Graphs/
│   ├── DynamicProgramming/
│   └── Backtracking/
│
├── Python/
│   ├── Basics/
│   ├── Arrays/
│   ├── Strings/
│   ├── LinkedList/
│   ├── Stack/
│   ├── Queue/
│   ├── Searching/
│   ├── Sorting/
│   ├── Trees/
│   ├── Graphs/
│   ├── DynamicProgramming/
│   └── Backtracking/
│
├── Problems/
│   ├── Easy/
│   ├── Medium/
│   └── Hard/
│
└── README.md
```

---

## 🧠 Problem-Solving Approach

For each problem, the following approach is followed:

1. Understand the problem
2. Identify the constraints
3. Develop a brute-force solution
4. Analyze Time & Space Complexity
5. Optimize the solution
6. Implement the solution
7. Test with different test cases
8. Document the approach

---

## 📊 Complexity Analysis

Each important implementation includes its complexity.

Example:

```text
Algorithm: Binary Search

Time Complexity:
O(log n)

Space Complexity:
O(1)
```

---

## 📝 Example

### Binary Search — JavaScript

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

### Binary Search — Python

```python
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        if arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

**Complexity**

```text
Time:  O(log n)
Space: O(1)
```

---

## 🎯 Goals

* Strengthen DSA fundamentals
* Improve problem-solving skills
* Understand algorithmic complexity
* Implement algorithms in JavaScript and Python
* Prepare for technical interviews
* Practice coding problems consistently
* Build a strong DSA portfolio

---

## 📈 Progress

| Topic               | JavaScript | Python |
| ------------------- | ---------- | ------ |
| Basics              | ⬜          | ⬜      |
| Arrays              | ⬜          | ⬜      |
| Strings             | ⬜          | ⬜      |
| Linked List         | ⬜          | ⬜      |
| Stack               | ⬜          | ⬜      |
| Queue               | ⬜          | ⬜      |
| Hashing             | ⬜          | ⬜      |
| Searching           | ⬜          | ⬜      |
| Sorting             | ⬜          | ⬜      |
| Trees               | ⬜          | ⬜      |
| Heap                | ⬜          | ⬜      |
| Graphs              | ⬜          | ⬜      |
| Greedy              | ⬜          | ⬜      |
| Backtracking        | ⬜          | ⬜      |
| Dynamic Programming | ⬜          | ⬜      |
| Advanced DSA        | ⬜          | ⬜      |

Legend:

* ✅ Completed
* 🔄 In Progress
* ⬜ Not Started

---

## 🛠️ How to Run

### JavaScript

Make sure Node.js is installed.

```bash
node JavaScript/Arrays/example.js
```

### Python

Make sure Python is installed.

```bash
python Python/Arrays/example.py
```

---

## 🔄 Daily Practice

The repository follows a consistent practice routine:

```text
Learn → Implement → Analyze → Optimize → Practice → Review
```

Each problem is added with its solution and complexity analysis.

---

## 📌 Future Plans

* [ ] Complete fundamental DSA
* [ ] Implement every major data structure
* [ ] Solve 100+ problems
* [ ] Solve 250+ problems
* [ ] Add interview-based problems
* [ ] Add optimized solutions
* [ ] Add problem explanations
* [ ] Track problem-solving progress
* [ ] Add competitive programming problems

---

## 👨‍💻 Author

**Anshumaan Khare**

This repository is maintained as part of my journey to improve **Data Structures, Algorithms, and Problem-Solving skills** using JavaScript and Python.

---

⭐ If you find this repository useful, consider giving it a star!
