/* 
Introduce while loops and the do-while loop
The break statement and the continue statement

Demonstrate with examples:
* Roll a die until X 1's occur
* Flip a coin X times until we get Y heads or tails
* Print values NOT divisible by X from 2 to Y (X >= 2, Y >= 2)

*/

// Basic Algos #7-10

// At the end by request in the Q&A session: 
// .slice and .splice method with arrays

/* Basic syntax for a while loop: 
while (some condition[s] is/are true) {
    run some code here
}
Used when you don't know how often you will run the loop
*/

var x = 0;

while (x < 10) {
    console.log(`Current value of x is ${x}`);
    x += 2;
}

// BE CAREFUL: if you create a bug in your code when you write a while loop, you may get stuck in Apple's HQ (joke!) - 
// 1 Infinite Loop

/* 
while (true) {
    console.log("This is true");
}
*/

// Break statement: allows one to exit a while/for loop

x = 0;
while (true) { // NOT ADVISABLE TO START A WHILE LOOP LIKE THIS!
    console.log('The value of x is',x);
    if (x > 10) {
        break;
    }
    // Make sure at least one variable will change in the loop!  Otherwise it runs forever
    x++;
}

// Do-while loop: a do while loop will ALWAYS execute at least once, while a regular
// while loop is not guaranteed to run
x = 5;
do {
    console.log(x);
    x--;
} while (x < 0); // Will run at least once

// Won't run - condition never satisfied
while (x < 0) {
    console.log(x);
    x--;
}

// Simulate rolling a singular die (plural dice) until we get 3 sixes

// We will utilize Math.random() and Math.floor()
// Math.random(): Generates a random number that is from 0 (inclusive) to 1 (exclusive)
// Math.floor(): Rounds a number downward (e.g. Math.floor(2.8) -> 2)
// For those curious: Math.ceil() rounds upward
var z;
for (var i = 0; i < 10; i++) {
    z = Math.floor(3*Math.random()); // Generates a random number from 0 to 2
    console.log(z);
}

function roll3Sixes() {
    // Roll a die until we get three sixes
    // Need a variable to track how many sixes we've rolled
    // Return: a variable to track how many times we rolled
    var numOfSixes = 0; // Number of sixes rolled
    var numOfRolls = 0; // Number of rolls
    while (numOfSixes < 3) { // Don't know how many times we'll roll - so use a while loop
        // Roll the die
        var x = Math.floor(6*Math.random())+1; // Generates a random number from 1 to 6
        console.log("Number rolled:",x);
        numOfRolls++; // Increment the number of rolls
        console.log("Number of rolls so far:",numOfRolls);
        if (x === 6) {
            numOfSixes++;
        }
    }
    return numOfRolls;
}

console.log(roll3Sixes());

// Challenge: Make it so you can roll any number from 1 to 6 on the die X times

// continue statement: means go on to the next iteration - usually used in a for loop

// Write a for loop to print values from 1 to 100 that are NOT divisible by 3
for (var k = 1; k <= 100; k++) {
    if (k % 3 === 0) { // % operator (modulus) - checks to see if number is divisible by 3
        continue; // Go straight to next iteration of loop, skipping the code below
    }
    console.log(k);
}

// Basic Algo #7: Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
var myArr = [1, 3, 5, -2, 4, -1, 3];
var expected = [1, 3, 5, 'Dojo', 4, 'Dojo', 3];

// Doing something: an array is a mutable object - in other words,
// when it's passed into a function and modified, it stays changed after the
// function is finished

function swapNegatives(arr) {
    // Look through the array - if a value is negative, replace with 'Dojo'
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    // Because we are modifying an array, we don't need to return it
}

console.log(myArr);
swapNegatives(myArr);
console.log(myArr);

// Basic Algo #8: Print Odds 1-255
// Print all odd integers from 1 to 255.

function printOdds() {
    for (var i = 1; i <= 255; i += 2) {
        console.log(i);
    }
}
printOdds();

// Alternate, albeit slower, way
function printOddsV2() {
    for (var i = 1; i <= 255; i++) {
        if (i % 2 === 1) { // If number is odd
            console.log(i);
        }
    }
}
printOddsV2();

// Challenge: print all the odds from 1 to X - or better yet - from X to Y, where Y > X

// Basic Algo #9: Iterate and Print Array
// Iterate through a given array, printing each value.
function printArrayValues(arr) {
    // Look through the array
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArrayValues([3,5,1,-2]);

// Basic Algo #10: Get and Print Average
// Analyze an array’s values and print the average.
function findAverageValue(arr) {
    var cumSum = 0; // Cumulative sum
    // Look through the array
    for (var i = 0; i < arr.length; i++) {
        cumSum += arr[i];
    }
    console.log(cumSum/arr.length);
}

findAverageValue([3,5,1,-2]);

// Something to think about: What if you pass in an empty array?
// findAverageValue([]) - this is an edge case with the empty array

myArr = [3, 1, 9, 7, -4, 0, -2, 5, 11];

// .slice method: start at first argument and end at index BEFORE the second argument
x = myArr.slice(2,6); // Start at index 2 and finish at the last index BEFORE 6
console.log(x); // [9, 7, -4, 0]

// .splice method
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
myArr.splice(6,0,1,4); // Inserts 1 and 4 (in order) at index 6
console.log(myArr);

myArr.splice(1, 2, 0) // At index 1, removes the values 1 and 9 [indices 1 and 2] and then puts in 0 to replace them
console.log(myArr);