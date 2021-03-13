// Introduction to JavaScript and algorithms - session 1, January 16, 2021

// Take it nice and slow - you'll get the hang of this soon enough!  Be patient, and don't be afraid to ask!

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
var x = 10;
var myTotal = 0;
var y; // Undefined
var X = 5;

/*
Data types:
- Numbers (2, -5, 2.4, 2e6 [2 million])
- Strings (3 ways to write them), also concatenate (i.e. put them together)
- Boolean types (true, false)
- Basic operations (+, -, *, /, % [modulo])
- Casting data types ("3"+5 vs 3+"5" vs 3+5)
*/
var myStr = "Hello world!";
var myStr2 = 'This is a sentence.';
var myStr3 = `Random`; // Back tick symbol (found to the left of the "1" key on the keyboard)
var myStr = myStr + " " + myStr2; // Concatenating (adding two or more strings)
var isGreaterThan0 = true; // Boolean variable

/*
Logical operators:
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)
Will go over more next week
Like in Excel/Google Sheets:
=IF(A1<10,"Less than 10","At least 10")
=IF(NOT(A1<0))
*/

/*
Printing values:
- console.log()
*/
console.log("This is being printed");
var z = 5;
// The back tick symbols are handy for putting in the values of variables, which is done by putting the variable
// inside the ${ }.
console.log(`The value of z is ${z}`);
console.log(`5 plus 3 is ${5 + 3}`); 

// Commenting code: done two ways

// this is a comment - a one-line comment
console.log("Line 67 is a comment"); // This is another comment, where code is ignored for the rest of this line only
console.log("Moving on");
/*
This is a block
comment.
*/
// Ctrl + "/" for a one-line comment

/*
Functions:
- Can accept any number of arguments
- Can return values
*/

function addNumbers(x,y) {
    return x+y;
}

console.log(addNumbers(5,10));
var m = addNumbers(11,-5);
console.log(m);

// For loops
// Incrementing and decrementing (++ [increment by 1], -- [decrement by 1], +=, -=)

// Unwieldy to write the following 100 times:
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// For loop prints values 1 through 100
for (var i = 1; i <= 100; i++) { // i++ means increment i upwards by 1
    console.log(i);
}

// For loop that prints 1 to 99 - odd integers only
for (var i = 1; i <= 99; i += 2) { // i += 2 means increase i by 2
    console.log(i);
}



/* Handy references:
W3 
Mozilla (https://developer.mozilla.org/en-US/docs/Web)
Python Tutor
Eloquent JavaScript
Many others as well
*/

// Basic Algo #1: Print 1-255
// Print all the integers from 1 to 255.
function print1To255() {
    for (var i = 1; i <= 255; i++) { // i++ means increment i upwards by 1
        console.log(i); // Console.log prints values out
    }
    // No return statement necessary since we're printing only
}
print1To255();

// Modification: Print 1 to X
function print1ToX(x) {
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
}
print1ToX(15);

// Basic Algo #2: Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
function printSum() {
    var sum = 0; // Starting sum value
    for (var i = 0; i <= 255; i++) {
        console.log("Current value of i is",i,"now"); // Print current value - using commas will automatically add spaces
        // console.log("The current value of i is "+i+" now"); // Another way to print: you must include spaces yourself when using the "+"
        sum += i; // Increment sum by current value of i
        // sum = sum + i; // ALTERNATE way to increment the sum
        console.log(`Sum is ${sum}`);
        // console.log(sum);
    }
}

printSum();

// On your own: Print sum from X to Y, assuming X and Y are integers and Y > X