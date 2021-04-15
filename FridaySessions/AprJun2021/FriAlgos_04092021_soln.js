/* Room 1 - JavaScript practice */

/* Challenge 1: Convert hours to seconds
Given a number representing hours, return its equivalent in seconds.  In other words, convert hours to seconds.
Examples: 2 hours = 7200 seconds, 3.5 hours = 12600 seconds 
*/

function convertHoursToSeconds(hrs) {
    return hrs*3600; // 1 hour = 60 minutes, 1 minute = 60 seconds, so 1 hour = 60*60 = 3600 seconds
}

/* Challenge 2: Count even numbers
Given an array of integers, return the number of times an even number appears in the array.
Examples: 
[3, 5, 1, 4] returns 1 since 4 is the only even number in the array
[] returns 0
[4, 8] returns 2
*/

function countEvens(arr) {
    var numOfEvens = 0; // Variable that holds the count of even numbers so far
    // Loop through array
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] % 2 === 0) { // Recall that the "%" is the modulus operator; it returns the remainder
            numOfEvens++;
        }
    }
    return numOfEvens;
}

// // For testing:
// console.log(countEvens([3,5,1,4]));
// console.log(countEvens([]));
// console.log(countEvens([4,8]));

/* Challenge 3: Count vowels
From edabit: https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
Given a string, return how many times a vowel appears in the string.  For the purposes of this challenge, a
vowel is considered "a", "e", "i", "o", or "u".  "y" is not considered a vowel for this exercise.  To start, you may
assume the string consists of lower-case letters and other characters - no upper-case letters.

Additional challenge: How can you solve this challenge if you include upper-case letters as well?
*/

function countVowels(str) {
    var numOfVowels = 0; // Variable that counts the number of vowels found
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k];
        if (curChar === "a" || curChar === "e" || curChar === "i" || curChar === "o" || curChar === "u") {
            numOfVowels++;
        }
    }
    return numOfVowels;
}

// With case sensitivity - I encourage you to write your own version!
function countVowelsV2(str) {
    var numOfVowels = 0; // Variable that counts the number of vowels found
    var lowerStr = str.toLowerCase(); // Convert string to lower case (note this function is a loop as well!)
    for (var k = 0; k < lowerStr.length; k++) {
        var curChar = lowerStr[k];
        if (curChar === "a" || curChar === "e" || curChar === "i" || curChar === "o" || curChar === "u") {
            numOfVowels++;
        }
    }
    return numOfVowels;
}

/* Challenge 4: Video length in seconds
From edabit: https://edabit.com/challenge/n7qZMpuLsAMGBGNLA
Given a string in the format "mm:ss", return the number of seconds.  For example, if you're given "05:15", return 315.
If the "ss" is 60 or more, or if "mm" is less than 00, return false.  Note that "mm" could be bigger than 99.
*/
function videoLength(str) {
    var numArr = str.split(":"); // Split the string by the ":"
    var minutes = parseInt(numArr[0]); // parseInt("numberString") turns a string into an integer
    var seconds = parseInt(numArr[1]);
    if (minutes < 0 || seconds >= 60) {
        return false;
    } else {
        return 60*minutes + seconds;
    }
}

// // For testing:
// console.log(videoLength("11:25"));
// console.log(videoLength("11:88"));
// console.log(videoLength("05:12"));
// console.log(videoLength("-11:25"));
// console.log(videoLength("200:44"));

/* Room 2 - String and Array methods */

/* Challenge 1: Braces Valid
From the Algorithm Book, page 67
Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 
For example, given the following:
"w(a{t}s[o(n{c}o)m]e)h[e{r}e]!" returns true
"d(i{a}l[t]o)n{e" returns false
"a(1)s[O(n]0{t)0}k" returns false
*/
function areBracesValid(str) {
    var braceArr = []; // Array containing all the types of braces encountered
    // Loop through string
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k]; // Variable made for convenience representing current character
        // If left brace found, push into array
        if (curChar === "(" || curChar === "[" || curChar === "{") {
            braceArr.push(curChar);
            continue; // Jump to next character immediately
        }
        // If right brace doesn't match most recent item found in brace array OR if the array is empty, return false
        if (curChar === ")" && (braceArr.length === 0 || braceArr.pop() !== "(")) {
            return false;
        }
        if (curChar === "]" && (braceArr.length === 0 || braceArr.pop() !== "[")) {
            return false;
        }
        if (curChar === "}" && (braceArr.length === 0 || braceArr.pop() !== "{")) {
            return false;
        }
    }
    return braceArr.length === 0; // Could have situation where you have something like "Hi( () there" with a brace leftover
}

// // Examples:
// console.log(areBracesValid("w(a{t}s[o(n{c}o)m]e)h[e{r}e]!")); // True
// console.log(areBracesValid("d(i{a}l[t]o)n{e")); // False
// console.log(areBracesValid("a(1)s[O(n]0{t)0}k")); // False
// console.log(areBracesValid("hi)([])")); // False
// console.log(areBracesValid("hi())")); // False

/* Challenge 2: Remove duplicates from sorted array
Modified from a LeetCode challenge; also I think can be found in platform
Given a sorted array of integers, remove all duplicates in place.  For example, if you're given:
x = [1, 1, 3, 3, 3, 4, 5, 6, 6, 7], you should get [1, 3, 4, 5, 6, 7].

If it helps, start with creating a new array with no duplicates.  Then try to solve it in place, i.e. with
no new arrays.
*/

function removeDuplicates(arr) {
    if (arr.length <= 1) { // If array has at most 1 element, no need to remove
        return;
    }
    var curVal = arr[0]; // Most recent value found, starting with the first one
    var uniqueValInd = 1; // Index where unique values will be placed - we start at index 1 since the first value won't be touched
    // Loop through array
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] === curVal) { // Duplicate found
            continue; // Move to next value in array immediately
        }
        // Duplicate NOT found
        arr[uniqueValInd] = arr[k];
        curVal = arr[k]; // Set next value in array we're comparing duplicates against
        uniqueValInd++; // Increment index for next unique value to be placed
    }
    arr.length = uniqueValInd; // uniqueValInd also represents number of duplicates
}

/* Main room - More advanced concepts, including recursion, sorts, various objects like stacks, queues, trees */

/* Stacks and Queues
Stacks and queues are two common data structures used in programming.  Here is a breakdown of each:

A stack is built from the bottom up.  Imagine a set of pancakes or legos, each with a value:

-------------
|     5     | <--- head (top) of the stack
-------------
      |
      V
-------------
|    200    |
-------------
      |
      V
     null (end, or bottom, of stack)

This particular stack is built by putting a node with the value 200, then a node with the value 5.
You'll hear the acronym LIFO used - that stands for Last In, First Out.

To remove values, you start from the top: the first value removed is 5, leaving the stack with only
the value 200.

We'll start by defining our stack and nodes like so:
*/

class Stack {
    constructor() { // The keyword "constructor" is used to define an object, like "__init__" in Python.
        this.top = null; // The top points to the topmost node in our stack
    }
    
    // This is a function built into our stack class
    print() {
        var runner = this.top; // Runner is a common word used to point to the current node we're examining.
        while(runner !== null) { // While we have nodes to look at - alternately could just type "while(runner)"
            console.log(runner.val); // Print the value
            runner = runner.next; // Move down the stack to the next node
        }
    }

    // Push: Add a new node to the top of the stack
    push(node) {
        node.next = this.top; // Have new node point to the original top of the stack from before
        this.top = node; // Make the new node the top of the stack
    }

    // Pop: Remove and return the topmost node
    pop() {
        if (!this.top) { // If no nodes to remove, exit
            return null;
        }
        var removedNode = this.top; // Grab the topmost node
        this.top = removedNode.next; // Move top pointer to next node in stack, which is now the new top
        removedNode.next = null; // Disconnect node from stack
        return removedNode;
    }

    // Top: Return, but do NOT remove, the stack's top value
    top() {
        if (this.top) { // If there is at least one node in the stack
            return this.top.val; // Return the topmost node's value
        } else { // No nodes in stack
            return null; // Arbitrary value to return
        } // One-line solution with a ternary operator: return this.top ? this.top.val : null;
    }

    // Contains: Return whether the given value is found within the stack
    contains(val) {
        var runner = this.top; // Start at top of stack
        while (runner) { // While there are nodes to look at
            // console.log("Current value:",runner.val);
            if (runner.val === val) { // If the current node's value matches the one we're looking for
                return true;
            }
            runner = runner.next; // Move down the stack to next node
        }
        return false; // Couldn't find value after traversing the entire stack
    }

    // Is Empty: Return whether the stack is empty
    isEmpty() {
        return this.top === null; // If the top is pointing to null, there are no nodes, so it's empty
    }

    // Size: Return the number of nodes in the stack
    size() {
        var runner = this.top; // Start at top of stack
        var numNodes = 0; // Number of nodes found
        while (runner) { // While there are nodes to look at
            numNodes++; // Increment count
            // console.log("Current value in stack:", runner.val);
            // console.log("Number of nodes so far:", numNodes);
            runner = runner.next; // Move down the stack to next node
        }
        return numNodes; // Return number of nodes in stack
    }
}

class Node {
    constructor(value) {
        this.val = value; // Contains the value we want to put in the node
        this.next = null; // Points to next Node
    }
}

// var myStack = new Stack(); // How you define a new stack
// var myNode = new Node(10); // How you define a new node, in this case containing the value 10

// // For testing:
// myStack.push(myNode); // Add node
// myStack.push(new Node(5));
// myStack.push(new Node(15));
// myStack.print(); // Should print 15, 5, 10 in order
// console.log(myStack.isEmpty()); // Should return false
// console.log(myStack.contains(5)); // True
// console.log(myStack.contains(8)); // False
// console.log(myStack.size()); // Should be 3
// myStack.pop();
// myStack.print(); // Should print 5, 10 in order
// myStack.pop();
// myStack.pop();
// console.log(myStack.size()); // Should be 0
// console.log(myStack.contains(5)); // Should be false - all nodes are gone


/* Queue:

Imagine you're waiting in line at the supermarket.  You're part of a queue.  The person who got there first gets
served, then the next person who arrived, then the next, etc.  So this follows a FIFO pattern, or First In,
First Out.  The person in front is first in line, and the person in the back is last in line to be served.

Here's a visual of what the queue will look like:

-------       -------       -------       -------       -------       
|  1  | ----> |  5  | ----> |  3  | ----> |  8  | ----> |  4  | ----> null (end of queue)
-------       -------       -------       -------       -------       
   ^                                                       ^
   |                                                       |
   |                                                       |
 Front                                                    Back

I realize that the arrows in the middle seem like they should point the other way, but in order for this
to be a queue, adding and removing should be O(1) operations, not O(n).

Here is how we'll define our queue and node:
*/

class Queue {
    constructor() {
        this.front = null; // Points to the node at the front that will be the first removed
        this.back = null; // Points to the node at the back that is the first that arrived, so last to be removed
    }

    // Print: Prints each value in the queue starting from the front
    print() {
        var runner = this.front; // Start at the front
        while(runner !== null) { // While we're not at the end
            console.log(runner.val); // Print value at current node
            runner = runner.next; // Move to next node
        }
    }

    // Enqueue: Put the given node at the back of the queue
    enqueue(node) {
        if (!this.front) { // Edge case: no nodes in the queue, so this node is the front AND back
            this.front = node;
        } else { // At least one node already in queue, so put it in the back
            this.back.next = node; // Put new node in the back, so link the queue to the new node
        }
        this.back = node; // Move the back point to the new node
    }
    
    // Dequeue: Remove & return the node at the front of the queue
    dequeue() {
        if (!this.front) { // If no nodes to remove, exit
            return null;
        }
        var removedNode = this.front; // Oldest node is at the front
        this.front = removedNode.next; // Move front to next oldest node (or null if that's the only node)
        if (!this.front) { // If there was only one node, have the back point to null as well
            this.back = null;
        }
        removedNode.next = null; // Cut off oldest node from queue
        return removedNode;
    }
    
    // Front value: Return the value at the front of the queue, but do NOT remove the node
    frontValue() { // Can't call it front() since we have a property called front in the constructor
        if (this.front) { // If there is at least one node...
            return this.front.val; // ...return its value
        } else { // But if there are no nodes in the queue...
            return null; // Return this arbitrary value
        } // One-line solution using a ternary operator: return this.front ? this.front.val : null;
    }
    
    // Contains: Look for the given value in the queue and return true if found, false if not
    contains(val) {
        var runner = this.front; // Start at the front (oldest value)
        while (runner) {
            // console.log("Current value:",runner.val);
            if (runner.val === val) { // If value found, return runner
                return true;
            }
            runner = runner.next; // Move to next node
        }
        return false; // Value not found after traversing queue
    }
    
    // Is Empty: Return whether the queue has no nodes (values)
    isEmpty() {
        return this.front === null; // If there are no nodes, this.front points to nothing
    }
    
    // Size: Return the number of nodes (values) in the queue
    size() {
        var runner = this.front; // Start at the front (oldest value)
        var numNodes = 0; // Number of nodes so far
        while (runner) {
            numNodes++;
            // console.log("Current value:",runner.val);
            // console.log("Number of nodes so far:",numNodes);
            runner = runner.next; // Move to next node
        }
        return numNodes;
    }
}

// For testing:
var myQueue = new Queue(); // How you define a new queue
var someNode = new Node(3);
myQueue.enqueue(someNode);
myQueue.print(); // Queue is (3)->
console.log(myQueue.size()); // Should return 1
myQueue.enqueue(new Node(5));
myQueue.print(); // Queue is (3)->(5)
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(7)); // Queue should be (3)->(5)->(2)->(7)->
console.log(myQueue.size()); // Should return 4
console.log(myQueue.contains(5)); // Should return true
console.log(myQueue.contains(11)); // Should return false
console.log(myQueue.frontValue()); // Should return 3
myQueue.dequeue(); // Queue is now (5)->(2)->(7)
console.log(myQueue.size()); // Should return 3