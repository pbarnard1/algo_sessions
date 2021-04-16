/* Breakout room 1 - JavaScript practice */

/* Challenge 1: Area of a circle
Given a circle's radius, return the area of the circle.  The area of a circle is given by pi*radius^2, where pi is the math
constant 3.14159....  You are encouraged to look up the Math module in JavaScript to get the value of pi and perhaps use
another method or two along the way.
*/


/* Challenge 2: Count characters in a string
From edabit: https://edabit.com/challenge/kbFhwaDyrd79JrgeB
Create a function that takes two strings as arguments and returns the number of times the 
first string (the single character) - case sensitive - is found in the second string.
Examples: 
"e" in "hello" returns 1
"i" in "I love coding!  Yes I do!" returns 1; we're not counting the upper-case "I"s
"M" in "Money! Money! Money is mucho good" returns 3; the lower-case "m" doesn't count
*/


// // For testing:
// console.log(countChar('e','hello'));
// console.log(countChar('i','I love coding!  Yes I do!'));
// console.log(countChar('M','Money! Money! Money is mucho good'));


/* Challenge 3: Create an array of odd integers EXCLUDING certain values
Create and return an array of odd integers from 1 to 299, EXCLUDING values that are multiples of 5, so for example: 5, 15, 25, etc. 
Solve this two ways: using a for loop, and alternately using a while loop.
Additional challenge: Accept integers X and Y, where Y > X, so that you do the same exact thing from X to Y.
Additional challenge 2: What if X > Y instead?  In other words, the order now doesn't matter for the inputs.
*/

/* Challenge 4: Stack the boxes
From edabit: https://edabit.com/challenge/QifJBFwg32GNdiWQa - has a visual as well

Let n be the height of the tallest stack of boxes.  Now going in two different directions, build another tower that has one
less box, then another tower with one less box than that, etc., until there is only a single box in a stack.  Return the 
total number of boxes used.  Use a loop of your choice to solve this.

Examples:
n = 0: returns 0, no boxes used
n = 1: returns 1 (1), where there is only a single tower of 1 box
n = 2: returns 4 (1 + 2 + 1), where the middle tower is 2 boxes high
n = 3: returns 9 (1 + 2 + 3 + 2 + 1), where the middle tower is 3 boxes high
n = 4: returns 16 (1 + 2 + 3 + 4 + 3 + 2 + 1), where the middle tower is 4 boxes high
*/

// // For testing:
// console.log(stackTheBoxes(0));
// console.log(stackTheBoxes(1));
// console.log(stackTheBoxes(2));
// console.log(stackTheBoxes(3));
// console.log(stackTheBoxes(4));
// console.log(stackTheBoxes(5.5)); // Chops off .5, then should return 25

/* Breakout room 2 - Strings and arrays */

/* Challenge 1: Book Index (from the algorithm book, page 69)
Given a sorted array of pages where a term appears, return an index string like so:
Consecutive pages should form ranges separated by a hyphen, with each page or range separated by a comma.
For [1,13,14,15,37,38,70], return this string: "1, 13-15, 37-38, 70". 
Punctuation MUST be exact.
*/

// // For testing:
// var test1 = [1, 13, 14, 15, 37, 38, 70] // Output: "1, 13-15, 37-38, 70"
// var test2 = [1, 2, 3]; // Output: "1-3"
// var test3 = [5]; // Output: "5"
// var test4 = []; // Output: ""
// var test5 = [1,2,3,4,5,8,9,10,15]; // Output: "1-5, 8-10, 15"
// var test6 = [1, 3, 6, 8, 11, 12, 13, 16, 17]; // Output: "1, 3, 6, 8, 11-13, 16-17"

/* Challenge 2: Dashatize it (from Code Wars)
Given a value "num", return a string with dashes inserted on either side anytime an odd digit appears.  
If the number is negative, remove the negative first, then insert dashes accordingly.
Do NOT have the string start and end with a dash.  If you're given something that isn't a number,
return an empty string.

Examples:
69667793 returns "6-9-66-7-7-9-3" - notice there's no ending dash
5311 returns "5-3-1-1" - notice there's no leading or ending dash
200 returns "200" - no dashes inserted
251025 returns "2-5-1-02-5"
*/



// // For testing:
// console.log(dashatize(69667793));
// console.log(dashatize(5311));
// console.log(dashatize(200));
// console.log(dashatize(251025));


/* Main room - More advanced concepts, including recursion, sorts, various objects like stacks, queues, trees */

// For these two challenges, use the stack and queue classes from last week.

/* Challenge 1: Reverse first k items in a queue
Given a queue, reverse the first k nodes in the queue (i.e. the oldest k nodes).  
If there are not enough nodes, reverse all the nodes you have.
*/

/* Challenge 2: Sort a stack using another stack - only use pop and push methods
Given a stack of numbers, sort it so that its smallest value is at the top and its largest value is at the bottom.
*/