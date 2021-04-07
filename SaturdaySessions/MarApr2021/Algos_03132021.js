// Introduction to JavaScript and algorithms - session 1, March 13, 2021

/* JavaScript is used a lot in web pages.  You can do stuff to the webpage after it loads, 
when you click on a button, etc.  Remember that web pages use HTML, CSS and JavaScript.

An algorithm, often referred to as an algo for short, is a set of instructions that is to be
executed, or run.  For example, you might write an algorithm to run a bunch of simulations to see
how often you get 3 heads out of 5 coin flips 100 times.  You could write one to retrieve and search
for data.  There is no limit to what you can do with algorithms.

For the next four weeks, we will go over the basics of JavaScript and what are called the Basic 13
algos that you have hopefully nail down quickly by the time you graduate from Coding Dojo.
*/

/* Introduction to JavaScript:
Variables:
- MUST start with a letter
- Typically written in camelCase (first word not capitalized, each word thereafter capitalized)
- Can also contain numbers, underscores (_) and dollar signs ($)
- Cannot use keywords (e.g. "if", "else", "do", "while", "for")
- Case sensitive (so "M" is different from "m")
*/

var x = 5; // Number (can be an integer or a decimal)
var y1 = 'Hello'; // String - bunch of characters within single quotes, double quotes, or the back tick mark
var y2 = "world";
var y3 = `Lovely`;
var z = true; // Boolean (true or false)
var z1 = []; // Empty array (I'll talk about arrays next week)
var z2 = {}; // Empty Object (will go over these in 3 weeks)
var q; // Variable that doesn't hold anything - so it's undefined
var thisIsALongVariableName = 'some_value'; // Be descriptive with your variable names!

/* Data types:
- Numbers (2, -5, 2.4, 2e6 [2 million])
- Strings (3 ways to write them), also concatenate (i.e. put them together)
- Boolean types (true, false)
- Basic operations (+, -, *, /, % [modulo])
- Casting data types ("3"+5 vs 3+"5" vs 3+5)
*/
var y = 8;
var z3 = x * y; // z3 is now 40 and is assigned to z3
console.log(z3); 

// Commenting code:
// This is a one-line comment

/*
This is a 
multi-line comment.
*/

/*
Printing values and strings can be done with console.log()
*/

console.log("Hello world!");
console.log(`The value of z3 is ${z3}`); // MUST use `` in order to put the value of a variable in, which can be put inside like so: ${varName}
console.log("The value of z3 is",z3); // Spaces inserted automatically with each use of the comma ","
console.log('The value of z3 is '+z3); // If you use a "+", you need to add the space yourself

/*
Functions:
- Can accept any number of arguments
- Can return values
*/

// f(x) = x^2, f(8) = 8^2 = 64; input: 8, output: 64

function squareX(x) { // Input: x
    return x*x; // Output: x^2
}
// Two ways to see the result
console.log(squareX(5)); // Method A
// Method B - put result in variable so you can use it for later, then print it afterwards
var ans = squareX(7);
console.log(ans);

/*
Logical operators:
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)
"x == y" means is x equal to y?  (Note the double "=")
"x != y" means is x NOT equal to y?
"true && false" - the "&&" means AND; so true AND false evaluates to false
"true || false" - the "||" means OR; so true OR false evaluates to true
"!true" - "!" means NOT, so !true evaluates to false
"===" and "!==" compare values AND types
*/
console.log("Testing === and !==");
console.log(3 == "3"); // Checking values, regardless of type - so this is true
console.log(3 === "3"); // Checking values AND type - so this is false, since you're comparing a number to a string, even though the values are equivalent
// Question from someone: can you treat "true" as 1 and "false" as 0?  And the answer is YES!
console.log(1 == true); // Evaluates to true, but if you did "1 === true", it's false because a number is not the same as a boolean
console.log(0 == false);

// For loops
// Incrementing and decrementing (++, --, +=, -=)
// Imagine this: you want to do essentially the same thing a bunch or times.  It'd be a bit unwieldy - and long - to type the same code, and it's probable you'll make a mistake somewhere along the way.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

/* For loop syntax:
for (var i = starting value; condition to break out; i incremented here) {
    // Your code here
}
*/
// For loop printing values from 1 to 10
console.log("Demonstrating a for loop:");
for (var k = 1; k <= 10; k++) {
    console.log(k);
}
// Step 1: initialize k to 1
// Step 2: Check condition: k <= 10 - if true, go to step 3, if not, end loop
// Step 3: Run code between curly braces {}
// Step 4: Increment - in this case, k++ means add 1 to k, then go back to step 2

console.log("Loop backwards from 20 to 1:");
for (var p = 20; p >= 1; p--) {
    console.log(p);
}
// Increment and decrement a variable like so:
var r = 10;
r++; // Increase r by 1
r += 8; // Increase r by 8
r -= 5; // Decrease r by 5
r--; // Decrease r by 1

// Demonstrate T diagrams
// Show a few ways to run code
// Take it nice and slow - you'll get the hang of this soon enough!  Be patient, and don't be afraid to ask!
// Have Q&A session at end to open up for questions

// Handy references:
// W3, Mozilla, Python Tutor, Eloquent JavaScript, many others as well

// Basic Algo #1: Print 1-255
// Print all the integers from 1 to 255.
function print1To255() {
    // Print 1, 2, 3, ... 255
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}
console.log("Demonstrating basic algo 1: printing 1 to 255");
print1To255();

// Modification to this: print 1 to X, where X is an integer > 1
function print1ToX(x) {
    // Print 1, 2, 3, ... x
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
}
var x5 = 100;
console.log(`Demonstrating basic algo 1 with a twist: printing 1 to ${x5}`);
print1ToX(x5);

// Basic Algo #8: Print Odds 1-255
// Print all odd integers from 1 to 255.
function printOdds1To255() {
    // Print 1, 3, 5, ... 255
    for (var k = 1; k <= 255; k += 2) {
        console.log(k);
    }
}
console.log("Demonstrating basic algo 8: printing odds from 1 to 255");
printOdds1To255();

// CHALLENGE: Find a way to print all odd integers from X to Y, where X and Y are integers and X < Y.
// HINT: function printOddsXToY(x,y) {} // Passes in two parameters named x and y

// Basic Algo #2: Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntAndSum0To255() {
    // Print 0, then the sum 0
    // Print 1, then the sum 1
    // Print 2, then the sum 3 (1+2)
    // Print 3, then the sum 6 (1+2+3)
    // etc.

    /* T diagram
    variable     |  value
    ---------------------------
    cumSum       | 10
    i            | 4
    */
    var cumSum = 0; // Cumulative sum
    // Loop from 0 to 255 inclusively
    for (var i = 0; i <= 255; i++) {
        console.log(`Current number is: ${i}`); // Prints the current value
        cumSum += i; // Add the current value to the cumulative sum
        console.log('Current cumulative sum is:',cumSum); // Print the cumulative sum so far
    }
}
console.log("Demonstrating basic algo 2: printing integers AND the sum from 0 to 255");
printIntAndSum0To255();


// Challenge from leetcode:
