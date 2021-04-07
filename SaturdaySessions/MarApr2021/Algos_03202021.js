/*
Review for loops and incrementing briefly

Logical operators:
If statements and things like ">", "<", etc.
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)

// 3 === 3 // true
// 3 === "3" // false

If statements:
If-else if-else clauses - write a few demos

Arrays:
.length property
Common methods: .pop(), .push()

*/

// For loops:
for (var k = 1; k <= 10; k++) {
    console.log(k);
}

k += 2; // Increase k by 2
k--; // Decrease k by 1
k -= 5; // Decrease k by 5

// In Google Sheets/Excel/another spreadsheet program, you've probably done "=SUM(A1:A5)"
// =IF(A1>B1,"A1 is bigger","B1 is bigger or the same as A1")

/*
if (some condition or set of conditions is true) {
    run this code here
} else {
    run this code if the condition/set of conditions is false
}
*/

var isOutOfMilk = true;

if (isOutOfMilk === true) { // or simply say if (isOutOfMilk)
    console.log("Time to buy milk at the store");
} else {
    console.log("Still have milk - no need to shop yet");
}

/* An if block can have multiple else-if clauses - and the else clause itself is actually optional:
if (condition1 is true) {
    run this code;
} else if (condition2 is true) { // Can have as many else if clauses as you wish
    run this code;
} else if (condition3 is true) {
    run this code;
} else { // You can have an else clause if you want - but you can only have a single "else" clause
    run this code if none of the conditions are true;
}
*/

var myGPA = 2.8;
console.log("Demonstrating if, else if and else clauses:");
if (myGPA >= 3.7) {
    console.log("Excellent GPA!!!");
} else if (myGPA >= 3.4) {
    console.log("That's pretty good!");
} else if (myGPA >= 3.0) {
    console.log("That's nice!");
} else { // Try removing this else clause yourself to see what happens
    console.log("At least you tried!");
}

var glassesOfWater = 10;
if (glassesOfWater >= 0 && glassesOfWater < 8) { // Demonstrating the AND ("&&") operator
    console.log("At least you had some water today - have some more!");
} else if (glassesOfWater < 0) {
    console.log("Can't have a negative number");
} else {
    console.log("You're fully hydrated!");
}

// Arrays:
var x = []; // Empty array - useful if you want to add values later on
var y = [3, 5, 4, -1, -2, 5];
console.log("Demonstrating arrays:");
console.log(y); // Print the entire array
console.log(y[2]); // Index 0 = 1st item, index 1 = 2nd item, index 2 = 3rd item, etc.
var z = [1, 'Hello', true, [4,8], 9, 1.8, -15, 'Another string'];

// .length property: used to retrieve the number of items in an array
console.log(z.length);
for (var i = 0; i < z.length; i++) {
    console.log("Item at index "+i+": "+z[i]);
}

// Some common methods you'll use with arrays:
// .push() and .pop()
console.log("x before:",x);
x.push(5); // Put the value 5 at the end of array x
x.push(10);
x.push(8);
console.log("x after pushing:",x);
x.pop(); // pop removes the last item in array x
console.log("x after popping once:",x);

// Other array methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// You can use this site for anything with JS, CSS, HTML, etc. - there are other resources
// out there, like W3, as well

console.log(y);
y[0] = 10;
console.log(y);
y[6] = 15; // Another way to add an item at the item
console.log(y);
y[10] = -8; // You can do this in JS, oddly - so indices 7-9 are undefined
console.log(y);

// Basic Algo #3: Find and Print Max
// Given an array, find and print its largest element.
function findAndPrintMax(arr) {
    // Starting max value = ???
    // Look at each item in the array - compare that value to the current max to see which is biggest
    // If current value is bigger than the max so far, we'll set that as the new max value
    // Once we're done looking through the array, we'll print the max value out
    // INCORRECT:
    // var curMax = 0; // FLAW: what if every item in the array is negative - or if the array is empty?
    var curMax = arr[0]; // CORRECT: start with first item in the array
    // Loop through the array
    for (var k = 1; k < arr.length; k++) { // Don't need to start at index 0 - we've already taken the first value and set that to the max
        if (arr[k] > curMax) { // If the current value is bigger than maximum so far
            curMax = arr[k]; // Set the current value as the new maximum
        }
    }
    console.log(curMax); // Prints the maximum value
}

console.log("Demonstrating find and print max algorithm:");
var x1 = [-10, -8, -6];
findAndPrintMax(x1);
var x2 = [-2, 8, 5, 10, 4, -3];
findAndPrintMax(x2);

// Basic Algo #4: Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function oddNumberArray() {
    // Look at the numbers 1, 2, 3..., 255 - only add the values that are odd to some array
    var oddArr = []; // Empty array to start that will hold odd integers later on
    for (var k = 1; k <= 255; k++) {
        // % is the modulus operator
        // Examples: 7 % 3 = 1, 6 % 3 = 0
        if (k % 2 === 1) { // If the number is odd
            oddArr.push(k); // Push the current value to the array
        }
    }
    return oddArr;
}

console.log("Demonstrating odd arrays:");
// // Two ways to print the result
console.log(oddNumberArray()); // Method 1
// Method 2:
var myOddArr = oddNumberArray(); // Call the function, then store the result from the return statement
console.log(myOddArr); // Print the array stored in the variable

function oddNumberArrayV2() { // Faster version
    var oddArr = []; // Start with empty array
    for (var k = 1; k <= 255; k += 2) {
        oddArr.push(k);
    }
    return oddArr;
}
console.log("Faster version:");
console.log(oddNumberArrayV2());

// CHALLENGE: Write a function that takes in a number X and creates an array of odd integers from
// 1 to X, where X > 1.

// Basic Algo #5: Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, Y) {
    // Create a count variable that holds the number of values > Y.  Start with 0.
    // Check each item in the array.
    // If the current number is > Y, increment the count by 1.
    // Once we're done with the array, print the number of values.
    var count = 0; // Number of values in the array greater than Y

    /* T diagram through k = 3
    variable    | value
    ----------------------------------------------------
    arr         | [1, 8, 4, -5, 7, 2, 3, 2]; .length = 8
    arr[k]      | arr[3] = -5
    Y           | 4
    count       | 1
    k           | 3
    */
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > Y) { // If the current number is greater than Y
            count++; // increment (increase) the count by 1
        }
    }
    console.log(count);
}
var x3 = [1, 8, 4, -5, 7, 2, 3, 2];
var Y3 = 4;
console.log("Demonstrating greater than Y algorithm:");
greaterThanY(x3,Y3);

// Basic Algo #6: Max, Min, Average
// Given an array, print the max, min and average values for that array.
function findAndPrintMaxMinAvg(arr) {
    // Set an initial minimum and maximum by using the first item in the array
    // Start finding the average by having a cumulative sum
    // Loop through the array starting at index 1 (2nd item)
    // then print max, min and average afterwards
    var curMax = arr[0]; // Starting maximum
    var curMin = arr[0]; // Starting minimum
    var cumSum = arr[0]; // Starting cumulative sum
    for (var k = 1; k < arr.length; k++) {
        // Check to see if new max found
        if (arr[k] > curMax) {
            curMax = arr[k];
        } else if (arr[k] < curMin) { // Else check to see if new minimum found
            curMin = arr[k];
        }
        // Add to cumulative sum
        cumSum += arr[k];
    }
    console.log("Maximum = "+curMax);
    console.log("Minimum =",curMin);
    console.log(`Average value = ${cumSum/arr.length}`);
}
var x4 = [1, 8, 12];
console.log("Demonstrating algorithm finding the max, min and average:");
findAndPrintMaxMinAvg(x4);