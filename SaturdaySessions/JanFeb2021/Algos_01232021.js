/*
Review for loops and incrementing briefly

If statements:
If-else if-else clauses - write a few demos

Logical operators:
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)

Arrays:
.length property
Common methods: .pop(), .push()

*/
for (var i = 1; i <= 15; i++) { // Increment by 1
    console.log(i);
}

for (var k = 10; k >= 0; k--) { // Decrement by 1
    console.log(`Countdown: ${k}`);
}

for (var j = 0; j <= 20; j += 2) { // Increment by 2
    console.log("Counting up by 2, now at",j);
}

// In Excel: =IF(A1 > 0,"Positive","Negative")
var p = 10;
if (p > 5) {
    console.log("p is greater than 5");
}

var t = 7;
if (t < 5) {
    console.log("t is < 5");
} else {
    console.log("t is greater than or equal to 5");
}

var grade = 55;
if (grade >= 90) {
    console.log("You got an A");
} else if (grade >= 80 && grade < 90) { // "&&" means AND, "||" means OR; you can have as many of these as you want
    console.log("You got a B");
} else if (grade >= 70 && grade < 80) {
    console.log("You got a C");
} else if (grade >= 60 && grade < 70) {
    console.log("You got a D");
} else {
    console.log("Try again next time!");
}

// You can have as many else if statements as you want - they're optional; 
// the else clause will execute if ALL if/else if statements fail.
// The else clause is also optional.

// An array is an object that holds a bunch of items.
var x = []; // An empty array
var y = [3,2,5,-4,8]; // An array of numbers
var z = [`Hello`,"Dolly"]; // An array of strings
var m = [2, 'Hello',8,4,'I love coding']; // A mixed array

// Arrays start at index 0.  In other words, index 0 is the first element, index 1 is the second element, etc.
console.log(y[0]); // Print 3
console.log(m[2]); // Print 8

// Handy property: .length property
console.log(z.length); // .length property gives you the number of elements in the array

// Common methods in arrays: .pop() and .push()
var q = y.pop(); // Removes the last element in the array called "y" and returns it
console.log(q);
console.log(y);

console.log(z);
z.push("Sheep"); // .push adds the element inside the parentheses to the end of the array called "z"
console.log(z);

// Basic Algo #3: Find and Print Max
// Given an array, find and print its largest element.
function findAndPrintMax(arr) {
    var curMax = arr[0]; // current maximum value - start with the first entry
    // You can start at index 0, but you don't need to because you've already
    // examined the first entry by defining curMax at index 0, so you don't
    // need to check it again.  So here we start at index 1 instead.
    for (var i = 1; i < arr.length; i++) { // i < arr.length OR i <= arr.length - 1
        if (arr[i] > curMax) { // If the value at index i is greater than the current maximum value
            curMax = arr[i];
        }
    }
    // Wait until AFTER you finish running the loop to print the max value
    console.log(curMax);
}

var myArr = [3, 8, 2, -4, 10, 5, -5];
findAndPrintMax(myArr);

// Basic Algo #4: Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function arrayWithOdds() {
    var oddArr = []; // Array with odd numbers
    for (var i = 1; i <= 255; i += 2) {
        oddArr.push(i);
    }
    return oddArr;
}
console.log(arrayWithOdds());

function arrayWithOdds2() { // Alternate, and not quite as efficient, way
    var oddArr = []; // Array with odd numbers
    for (var i = 1; i <= 255; i++) { // Can start at 0 or 1
        if (i % 2 === 1) { // % is the modulus symbol
            oddArr.push(i);
        }
    }
    return oddArr;
} // "1" == 1 TRUE; "1" === 1 FALSE (different types)

console.log(arrayWithOdds2());

// Basic Algo #5: Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, Y) {
    var count = 0; // Start the count at 0
    for (var i = 0; i < arr.length; i++) { // Loop through array
        if (arr[i] > Y) {
            count++; // OR count = count + 1 OR count += 1;
        }
    }
    console.log(count);
    // Loop through the array
    // Check to see if the current value is > Y
    // Increment count
    /* Pseudocode
    for (each element in array) {
        check to see if current value > Y
        if yes, increment count
    }
    */
}

var thisArr = [3, 5, 8, 1, -4];
var thisVal = 2;

greaterThanY(thisArr,thisVal);

// Basic Algo #6: Max, Min, Average
// Given an array, print the max, min and average values for that array.

function findMaxMinAvg(arr) {
    var curMax = arr[0]; // Set maximum value
    var curMin = arr[0]; // Set minimum value
    var cumSum = 0; // Cumulative sum

    // Loop for finding the max
    for (var i = 1; i < arr.length; i++) { // i < arr.length OR i <= arr.length - 1
        if (arr[i] > curMax) { // If the value at index i is greater than the current maximum value
            curMax = arr[i];
        }
    }
    console.log(`Maximum value = ${curMax}`);
    // OR: findAndPrintMax(arr)

    // Loop for finding the min
    for (var j = 1; j < arr.length; j++) { // i < arr.length OR i <= arr.length - 1
        if (arr[j] < curMin) { // If the value at index i is less than the current minimum value
            curMin = arr[j];
        }
    }
    console.log(`Minimum value = ${curMin}`);

    // Loop for finding the cumulative sum
    for (var k = 0; k < arr.length; k++) {
        cumSum += arr[k];
    }
    console.log(`Average value = ${cumSum/arr.length}`);
}

findMaxMinAvg([2,4,6]);

function findMaxMinAvg2(arr) {
    var curMax = arr[0]; // Set maximum value
    var curMin = arr[0]; // Set minimum value
    var cumSum = arr[0]; // Cumulative sum

    // Loop for finding the max, min and cumulative sum
    // Loop through array starting at the SECOND element
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > curMax) { // If the value at index i is greater than the current maximum value
            curMax = arr[i];
        } else if (arr[i] < curMin) { // If the value at index i is less than the current minimum value
            curMin = arr[i];
        }
        cumSum += arr[i];
    }
    console.log(`Maximum value = ${curMax}`);
    console.log(`Minimum value = ${curMin}`);
    console.log(`Average value = ${cumSum/arr.length}`);
}

findMaxMinAvg2([1,4,3,8,-4,5,9,2]);