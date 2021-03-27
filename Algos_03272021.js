/* 
Review if statements and arrays briefly
Introduce while and do-while loops
The break statement and the continue statement

Demonstrate with examples:
* While loop to find number > X divisible by 2, 3 and 7
* Roll a die until X 1's occur
* Flip a coin X times until we get Y heads or tails
* Continue statement: print values NOT divisible by X from 2 to Y (X >= 2, Y >= 2)
*/

var numLivesLeft = 5;

if (numLivesLeft > 3) {
    console.log("You can still play");
} else if (numLivesLeft > 0) {
    console.log("Be VERY careful...");
} else {
    console.log("GAME OVER");
}

var x = []; // Empty array
var x2 = [1, 3, 2];
var x3 = ['Hi','everybody'];
var x4 = [1, true, 'Nice', [4,8]];

console.log(x4[0]); // Prints 1 - index 0 is the first item, index 1 is the second item, etc.

x.push(8); // 8 is added to the end of the array called x, so now x = [8];
x.push(5); // now x is [8, 5]
console.log(x);
x.pop(); // Removes the last value from the array and returns it - so 5 is popped, now x = [8];
console.log(x);

console.log(x2.length); // Prints 3 since x2 has 3 items

// While loop: used if you don't know how many times you'll need to run code beforehand

/*
while (some_condition[s] is/are true) {
    // Code to run goes here
}
*/

console.log("Demonstrating a while loop:");
var sum = 0;
// Goal: Find the value N such that the sum from 1 to N is at least 5000
var curNum = 1; // Starting number is 1
/*
T diagram:
variable | value
----------------
sum      | 10
curNum   | 5
*/
while (sum < 5000) { // Check the condition before running the code here
    sum += curNum;
    console.log("Current number to be added:",curNum);
    console.log(`Sum so far after adding ${curNum}: ${sum}`);
    curNum++;
}

// // Infinite loop - this is intentional in this case, but be careful that your loop doesn't go on forever!
// while (true) {
//     console.log("This runs forever!!!!");
// }

// Do-while loop: It's a while loop, but the code is guaranteed to run at least once
/* Syntax:
do {
    // Code to run
} while (condition[s] is/aretrue);
*/

var numDaysLeft = -10;
do { // Run this code first before checking the condition
    console.log(`There are ${numDaysLeft} days left`);
    numDaysLeft--;
} while (numDaysLeft > 0);

// Break statement: used to exit out of a for/while/do-while loop immediately
var y1 = [1, 3, 8, 7, 5];

// Goal: Find the index of the first entry bigger than 5
console.log("Demonstrating a break statement:");
for (var k = 0; k < y1.length; k++) { // Loop through array
    // Check to see if the current value is bigger than 5
    if (y1[k] > 5) {
        console.log("Index found:",k);
        break; // Exits the loop immediately
    }
}

// Continue statement: Jump straight to the next iteration of a loop
console.log("Demonstrating a continue statement:");
// Goal: Print all values from 1 to 100 that are NOT divisible by 4
for (var t = 1; t <= 100; t++) { // Loop through values
    if (t % 4 == 0) { // If number is divisible by 4, continue to next number immediately
        continue;
    }
    console.log(t); // Print value but ONLY if not divisible by 4
}

// Basic Algo #7: Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
var example1 = [3, 4, -1, 2, -3, -0.5, 8.4, -11];
var result1 = [3, 4, 'Dojo', 2, 'Dojo', 'Dojo', 8.4, 'Dojo'];

function swapNegativesWithStrings(arr) {
    // Loop through the array, one item at a time
    // Check to see if the value is less than 0.  If it is, replace it with 'Dojo'.
    for (var k = 0; k < arr.length; k++) { // Loop through the array
        if (arr[k] < 0) { // Recall: arr[k] is the item of the array called arr at index k
            arr[k] = 'Dojo';
        }
    }
}

console.log("Before:",example1); // Array from before
swapNegativesWithStrings(example1);
console.log("After:",example1);
// Note: we don't need to return the array since its contents stay changed after the function is done.
// This is because an array is a mutable object, where its contents are modified during the function
// and stay that way afterwards.  The console.logs up above demonstrate this principle.

// Basic Algo #9: Iterate and Print Array
// Iterate through a given array, printing each value.
function iterateAndPrintArray(arr) {
    // Iterate through the array basically means looping through it
    // For each value, we'll print it
    for (var k = 0; k < arr.length; k++) { // Loop through the array
        console.log(arr[k]); // Print the current item
    }
}
console.log("One way to loop and print array:");
var example2 = [1, 4, 2, true, 'Hi'];
iterateAndPrintArray(example2);

// Another way to loop through an array: using a for-of loop
/* Syntax:
for (var value of arr) { // value now takes on the actual values in arr
    // Code goes here.
}
*/
console.log("Another way to loop and print array using a for-of loop:");
for (var val of example2) {
    console.log(val);
}
// A for-of loop is handy if you don't need the index

// Basic Algo #10: Get and Print Average
// Analyze an array’s values and print the average.
function getAndPrintAverage(arr) {
    // We'll need a cumulative sum
    // Loop through the array, then add the current value to the sum
    // Afterwards, we'll take this sum, then divide by the length of the array
    var cumSum = 0; // Cumulative sum - initialized to 0 to begin
    for (var k = 0; k < arr.length; k++) { // Loop through the array
        cumSum += arr[k]; // or cumSum = cumSum + arr[k]; // Adding the current value to the sum
    }
    console.log(`Average value = ${cumSum/arr.length}`);
}

var example3 = [1, 5, 9, 1]; // Average should be 4: (1+5+9+1)/4 = 16/4 = 4
getAndPrintAverage(example3);

// Something to think about on your own: how would you handle an empty array?

// Additional challenge using a while loop:
/* Evenly Dividing by 2
Given a positive integer X, return the number of times you can evenly divide this number by 2.
In other words, how many times can you divide this number with no remainder?

Examples: evenlyDividingBy2(10) returns 1: 10/2 = 5, 5/2 is 2.5 - can't divide 5
evenlyDividingBy2(32) returns 5: 32/2 = 16 (OK), 16/2 = 8 (OK), 8/2 = 4 (OK), 4/2 = 2 (OK), 2/2 = 1 (OK), 1/2 gives 0.5, or a remainder of 1
*/
function evenlyDividingBy2(x) {
    // Divide by 2 as long as we have no remainder
    // Need a variable that keeps track of the number of times we divided by 2
    var numDivisions = 0; // Start at 0
    while (x % 2 === 0) { // While the number is divisible by 2
        numDivisions++; // We can divide evenly, so increment
        x /= 2; // Divide x by 2
    }
    return numDivisions;
}

console.log("Demonstrating algo challenge with a while loop:");
console.log(evenlyDividingBy2(32)); // Returns 5
console.log(evenlyDividingBy2(8)); // Returns 3