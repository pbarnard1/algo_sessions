/* Room 1 - JavaScript practice */

/* Challenge 1: Convert hours to seconds
Given a number representing hours, return its equivalent in seconds.  In other words, convert hours to seconds.
Examples: 2 hours = 7200 seconds, 3.5 hours = 12600 seconds 
*/

/* Challenge 2: Count even numbers
Given an array of integers, return the number of times an even number appears in the array.
Examples: 
[3, 5, 1, 4] returns 1 since 4 is the only even number in the array
[] returns 0
[4, 8] returns 2
*/

/* Challenge 3: Count vowels
From edabit: https://edabit.com/challenge/3EQGHyiYTNc9LPmhF
Given a string, return how many times a vowel appears in the string.  For the purposes of this challenge, a
vowel is considered "a", "e", "i", "o", or "u".  "y" is not considered a vowel for this exercise.  To start, you may
assume the string consists of lower-case letters and other characters - no upper-case letters.

Additional challenge: How can you solve this challenge if you include upper-case letters as well?
*/

/* Challenge 4: Video length in seconds
From edabit: https://edabit.com/challenge/n7qZMpuLsAMGBGNLA
Given a string in the format "mm:ss", return the number of seconds.  For example, if you're given "05:15", return 315.
If the "ss" is 60 or more, or if "mm" is less than 00, return false.  Note that "mm" could be bigger than 99.
*/

/* Room 2 - String and Array methods */

/* Challenge 1: Braces Valid
From the Algorithm Book, page 67
Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 
For example, given the following:
"w(a{t}s[o(n{c}o)m]e)h[e{r}e]!" returns true
"d(i{a}l[t]o)n{e" returns false
"a(1)s[O(n]0{t)0}k" returns false
*/

/* Challenge 2: Remove duplicates from sorted array
Modified from a LeetCode challenge; also I believe can be found in platform
Given a sorted array of integers, remove all duplicates in place.  For example, if you're given:
x = [1, 1, 3, 3, 3, 4, 5, 6, 6, 7], you should get [1, 3, 4, 5, 6, 7].

If it helps, start with creating a new array with no duplicates.  Then try to solve it in place, i.e. with
no new arrays.
*/

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

    // Other methods will be defined here.
}

class Node {
    constructor(value) {
        this.val = value; // Contains the value we want to put in the node
        this.next = null; // Points to next Node
    }
}

/* Your goal is to implement the following methods in our Stack class:

    // Push: Add a new node to the top of the stack
    push(node) {

    }

    // Pop: Remove and return the topmost node
    pop() {

    }

    // Top: Return, but do NOT remove, the stack's top value
    top() {
    
    }

    // Contains: Return whether the given value is found within the stack
    contains(val) {

    }

    // Is Empty: Return whether the stack is empty
    isEmpty() {

    }

    // Size: Return the number of nodes in the stack
    size() {

    }
*/

var myStack = new Stack(); // How you define a new stack
var myNode = new Node(10); // How you define a new node, in this case containing the value 10

// For testing:
myStack.push(myNode); // Add node
myStack.push(new Node(5));
myStack.push(new Node(15));
myStack.print(); // Should print 15, 5, 10 in order
console.log(myStack.isEmpty()); // Should return false
console.log(myStack.contains(5)); // True
console.log(myStack.contains(8)); // False
console.log(myStack.size()); // Should be 3
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.size()); // Should be 0
console.log(myStack.contains(5)); // Should be false - all nodes are gone


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

    // Other methods will go here:
}

// Our Node will be EXACTLY the same as with the stack, so here's a reminder:
/*
class Node {
    constructor(value) {
        this.val = value; // Contains the value we want to put in the node
        this.next = null; // Points to next Node
    }
}
*/

/* Your goal will be to implement the following methods in the Queue class:
    // Enqueue: Put the given node at the back of the queue
    enqueue(node) {

    }
    
    // Dequeue: Remove & return the node at the front of the queue
    dequeue() {

    }
    
    // Front value: Return the value at the front of the queue, but do NOT remove the node
    frontValue() { // Can't call it front() since we have a property called front in the constructor

    }
    
    // Contains: Look for the given value in the queue and return true if found, false if not
    contains(val) {

    }
    
    // Is Empty: Return whether the queue has no nodes (values)
    isEmpty() {

    }
    
    // Size: Return the number of nodes (values) in the queue
    size() {

    }
*/


// For testing:
var myQueue = new Queue(); // How you define a new queue
var someNode = new Node(3);

myQueue.enqueue(someNode);
myQueue.enqueue(new Node(5));
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(7)); // Queue should be (3)->(5)->(2)->(7)
console.log(myQueue.size()); // Should return 4
console.log(myQueue.contains(5)); // Should return true
console.log(myQueue.contains(11)); // Should return false
console.log(myQueue.frontValue()); // Should return 3
myQueue.dequeue(); // Queue is now (5)->(2)->(7)
console.log(myQueue.size()); // Should return 3
