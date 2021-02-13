// Introduction to JavaScript and algorithms - session 1, February 13, 2021

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
var nameOfVariable; // Undeclared variable - "undefined" is its value
var x = 10;
var y = 'Cookie';
x = x + 5; // Now x is 15

/* Data types:
- Numbers (2, -5, 2.4, 2e6 [2 million])
- Strings (3 ways to write them), also concatenate (i.e. put them together)
- Boolean types (true, false)
- Basic operations (+, -, *, /, % [modulo])
- Casting data types ("3"+5 vs 3+"5" vs 3+5) */
var isHappy = true;
console.log("3"+5);
var z = "3" + 5; // z will become "35"
var z1 = parseInt(z); // z1 now is the *numerical value* 35
// parseFloat("3.3") // 3.3 as a value

/* Logical operators:
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)
*/
// 3 === 3 // true
// 3 === "3" // false

/* Printing values:
- console.log()
*/
console.log(isHappy); // prints "true" since the variable isHappy holds the value "true"
console.log("Hello world!");
console.log('This is a string');
var b1 = 25;
console.log(`My favorite number is ${b1}, and 3 + 5 is ${3 + 5}`);

// Commenting code: done two ways
// "//" is for commenting code for that line only
/* This is 
a block comment, where
code is ignored between the two pairs
of symbols */

/* Functions:
- Can accept any number of arguments
- Can return values
*/
// f(x) = 2*x + 5 // x is the input, and then f(x) gives you an output
// f(5) = 2*5 + 5 = 10 + 5 = 15
function nameOfFunction(x) { // x is the input
    return x * x; // the return statement will give some value back at the end
}

console.log(nameOfFunction(10));

var x2 = -15;
console.log(nameOfFunction(x2));

var newVal = nameOfFunction(x2);
console.log(`Squared value = ${newVal}`);

// For loops
// Incrementing and decrementing (++, --, +=, -=)
for (var k = 1; k < 5; k++) { // var k = 1 is the starting value
    console.log("I'm running a for loop!");
    console.log(`Current value of k is ${k}`);
}

for (var p = 10; p > 0; p--) {
    console.log(`Current countdown value is ${p}`);
}
console.log("Liftoff!!!!");

// x++ means increase x by 1; x-- means decrease x by 1,
// x += 5 means increase x by 5; x -= 3 means decrease by 3
// (You can also do x *= 2, which multiplies x by 2, and x /= 10, which divides x by 10)

for (var p1 = 2; p1 < 17; p1 += 3) {
    console.log(p1);
}
console.log(p1); // p1 is 17
// variable name | value
// ---------------------- 
//      p1       |   17

// If time permits - if statements

// Demonstrate T diagrams
// Show a few ways to run code
// Take it nice and slow - you'll get the hang of this soon enough!  Be patient, and don't be afraid to ask!
// Have Q&A session at end to open up for questions

// Handy references:
// W3, Mozilla, Python Tutor, Eloquent JavaScript, many others as well

// Basic Algo #1: Print 1-255
// Print all the integers from 1 to 255.
function printInts() {
    // Print 1, 2, 3, ... 255
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
printInts();

// CHALLENGE: Change this function to print values from 1 to X, where X > 1.

// Basic Algo #2: Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum() {
    // Print 0, then the sum 0, then print 1, then the sum 1, then 2 and the sum 3, etc.
    var sum = 0; // Initializing the sum to 0    
    for (var i = 0; i < 256; i++) {
        console.log("Current value of i:",i); // Print the integer - if you use a comma, a space is added for you
        // console.log("i = "+i); // If you use "+", you must add the space yourself
        sum = sum + i; // Add the current value of i to the sum
        // OR: sum += i
        console.log(`Sum so far: ${sum}`);
    }
}

printIntsAndSum();

// CHALLENGE: Write a new function that prints the values from X to Y, 
// where Y > X.  Also print the sum so far.