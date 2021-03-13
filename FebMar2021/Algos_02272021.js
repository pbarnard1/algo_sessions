/*

Review arrays - .pop and .push methods, plus the .length property
If statements - && and ||, !=(=), "!", else if and else clauses

Introduce while and do-while loops
The break statement and the continue statement

Demonstrate with examples:
* While loop to find number > X divisible by 2, 3 and 7
* Roll a die until X 1's occur
* Flip a coin X times until we get Y heads or tails
* Continue statement: print values NOT divisible by X from 2 to Y (X >= 2, Y >= 2)

Introduce Objects - how you use methods like .push, .pop

*/

var myArr = []; // Empty array
var myArr2 = [2, 4, 8, 'String', [8,4]];

console.log(myArr2[0]); // Print 2
console.log(myArr2[4][0]); // myArr2[4] gives [8,4], so myArr2[4][0] gives 8

myArr.push(10); // myArr will now be [10]
myArr.push(5); // myArr will now be [10, 5]

myArr.pop(); // myArr removes 5, so myArr will now be [10]

console.log(myArr2.length); // Print 5

var luckyNum = 20;

if (luckyNum < 0) {
    console.log("Your lucky number is negative?!");
} else if (luckyNum < 10) {
    console.log("Your lucky number is a single digit");
} else {
    console.log("Your lucky number is 2 or more digits");
}

var myName = 'Henry';
if (myName === 'Adrian') {
    console.log('Yo Adrian!');
} else if (myName === 'John' || myName === 'David' || myName === 'Bob') {
    console.log("That's a common name");
}
// 3 == "3" - returns true
// 3 === "3" - returns false

// "||" means "OR", "&&" means "AND"
var thisNum = 3;
if (thisNum >= 5 && thisNum <= 9) {
    console.log("The number is from 5 to 9");
}

var arr1 = [3, 8, 9];
for (var k = 0; k < arr1.length; k++) {
    console.log(arr1[k]);
}

// Find the smallest value of N so that the sum from 1 to N is at least 100
// 1 + 2 + 3 + ... + N >= 100
var cumSum = 0;
var ind = 0;
/*
while (condition[s] is/are true) {
   run some code here
}
*/
/*
variable | value
----------------
 cumSum  | 21 (1+2+3+4+5+6)
  ind    | 7
*/
while (cumSum < 100) {
    ind++;
    cumSum += ind;
}
console.log("N =",ind);
console.log("cumulative sum =",cumSum);

// Do-while loop:
/*
do {
 run code

} while (condition[s] is/are true);
*/

// Math.min()
// Math.max()
// Math.ceil(3.8); // Rounds UP to 4
// Math.floor(1.7); // Rounds DOWN to 1
// Math.random(); // Generates a random number from 0 (inclusive) to 1 (exclusive)

var numFlips = 0;
var numHeads = 0;
// Flip a coin until we've flipped 10 times or have landed 5 heads 
do {
    var randNum = Math.random();
    if (randNum < 0.5) { // Heads
        numHeads++;
    }
    numFlips++;
} while (numFlips < 10 && numHeads < 5);
console.log("Coins flipped:",numFlips);
console.log("Heads flipped:",numHeads);

// Basic Algo #7: Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
var thisArr1 = [3, -2, 5, 8, -3];
var arr2 = [3, 4, -5];
var expected = [3, 'Dojo', 5, 8, 'Dojo'];
function replaceNegatives(arr) {
    // Comb through the array with a for loop
    // Check to see if the current item in the array is negative - if so, replace with 'Dojo'

    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'; // Replace negative number with the string 'Dojo'
        }
    }
    // return arr; // Not needed here - the array stays changed after the function is done
}
// console.log(replaceNegatives(thisArr1));
// An array is a mutable object - in other words, if you give it to a function, and modify
// its contents, it stays changed after the function is function.

console.log(arr2); // BEFORE
replaceNegatives(arr2);
console.log(arr2); // AFTER

// Basic Algo #8: Print Odds 1-255
// Print all odd integers from 1 to 255.
function printOdds() {
    // Use a for loop to go from to 255
    // If it is odd, print that value
    for (var i = 1; i <= 255; i++) { // i < 256 OR i <= 255
        // Modulus: x % y = remainder
        // Examples: 13 % 4 = 1; 13/4 = 3 with a remainder of 1 (3*4+1 = 13)
        // 15 % 6 = 3; 15/6 is 2 with a remainder of 3 (2*6+3 = 15)
        if (i % 2 === 1) { // If number is odd - i.e. a remainder of 1 by doing modulus 2
            console.log(i);
        }
    }
}
printOdds();

function printOddsV2() {
    // Use a for loop to go from to 255
    // If it is odd, print that value
    for (var i = 1; i <= 255; i += 2) { // Now loop by 2 instead of 1 - so if statement is unnecessary
        console.log(i);
    }
}
console.log("Version 2:");
printOddsV2();
// CHALLENGE: Find a way to print all the odd integers from X to Y, where X < Y
// CHALLENGE 2: What if X > Y?  How would you go about that?

function printOddsV3() {
    var i = 1;
    while (i <= 255) {
        console.log(i);
        i += 2;
    }
    /*
    while (true) { // Infinite loop if you don't have a way to break out - be careful!
        console.log(i);
        i += 2;
        if (i > 255) {
            break; // Break statement is used to exit a for/while loop immediately
        }
    }
    */
}
console.log("Version 3:");
printOddsV3();

// Basic Algo #9: Iterate and Print Array
// Iterate through a given array, printing each value.
function printArrayValues(arr) {
    // Loop through array
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Print each value in array
    }
}
var myArr3 = [8, 5, [1, -3], 'Hello'];
printArrayValues(myArr3);

// CHALLENGE: Now go backwards.  So print from the back and go to the front.

// Basic Algo #10: Get and Print Average
// Analyze an array’s values and print the average.
function averageVal(arr) {
    // We need to add all the values, then divide.
    // To add the numbers, we need a loop
    var cumSum = 0; // Cumulative sum, starting at 0
    // Loop through the array
    for (var i = 0; i < arr.length; i++) {
        cumSum += arr[i]; // Add current item in the array to the sum
    }
    var avg = cumSum/arr.length; // Divide by the number of items, which is the array's length
    console.log(`Average value: ${avg}`);
}

var myArr4 = [1, 3, 6];
averageVal(myArr4);

// Something to consider: what if the array is empty?
averageVal([]); // SURPRISE! You get NaN (not a number)
// Consider edge cases in algo challenges and interviews!