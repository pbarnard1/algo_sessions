/*
Review variables, functions, for loops and incrementing briefly

Go over nested for loops (from Carl Wright II)
If statements and things like ">", "<", etc.
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)

// 3 === 3 // true
// 3 === "3" // false

If statements:
If-else if-else clauses - write a few demos

Logical operators:
- >, <, >=, <=, ==, !=, &&, ||, "!" (not operator) - also === and !== (won't go over in too much detail)

Arrays:
.length property
Common methods: .pop(), .push()

*/

var variable_name = 'some_value';
var x = 10;
var isValid = true;
x++; // Increase x by one
// y--; // Decrease y by one
x += 10; // Increase x by 10
x -= 5; // Decrease x by 5
var y = x + 8; // y is x + 8, or 16 + 8 = 24

function name_of_function(x) {
    console.log(`The value of x is ${x}`);
    return x*5;
}

// console.log(name_of_function(10));
var z = name_of_function(10);
console.log(z);

for (var k = 0; k < 10; k++) {
    console.log(k);
}
// Google Sheets and Excel: =IF(A1 > 0,"Cell is positive","Cell is not positive")

var myGrade = 65;
if (myGrade >= 90) {
    console.log("Yay!  I got an A!");
} else if (myGrade >= 80) {
    console.log("I did okay - I got a B");
} else if (myGrade >= 70) {
    console.log("I did average - I got a C");
} else {
    console.log("I need to do better...");
}

var score = 5;
// "&&" is basically "and" - so both statements must be true
if (score >= 5 && score < 10) {
    console.log("Score is okay");
}

// "||" is basically "or" - so either statement must be true to run
if (score > 10 || score < 0) {
    console.log("Your score is an outlier");
}

// >, <, >=, <=, != (not equal to), == (is equal to), !== (not equal to and NOT the same type of object), === (same value and type)
// Example: 5 == "5" - TRUE
// 5 === "5" - FALSE

// "!" means "NOT" - so !true = false, !false = true

var isUsed = false;
if (!isUsed) {
    console.log("Is not used");
}
/*
// !isUsed is the same as isUsed == false
if (isUsed == false) {

}
*/

// Array: hold a bunch of items together
var arr1 = []; // This is an empty array
var arr2 = [1, 8, -4, 5]; // An array of numbers
var arr3 = ['Hello','World','I love coding']; // An array of strings
var arr4 = [[1,3],[2,8],[4,-3]]; // An array of arrays

// Indexes start at 0, NOT 1
console.log(arr2[0]); // That prints the first value in arr2, in this case 1

console.log(arr4[0]); // Get [1,3]
console.log(arr4[1][1]); // arr4[1] gives [2,8], so arr4[1][1] gives you 8
var mySubArr = arr4[2];
console.log(mySubArr[0]); // Prints "4"; same as saying arr4[2][0]

// length is a property of all arrays - it returns the number of values in the array
console.log(arr2.length);

// method .push(val) - Add "val" to the end of the array
arr2.push(7);
console.log(arr2);

// method .pop() - removes the value at the end of the array and returns it
var removedVal = arr2.pop();
console.log("Removed value:",removedVal);
console.log(arr2);

// Basic Algo #3: Find and Print Max
// Given an array, find and print its largest element.
function findAndPrintMax(arr) {
    var maxVal = arr[0]; // Start with first value in array - DON'T PICK AN ARBITRARY VALUE LIKE 0!!
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > maxVal) { // arr[k] is the value of the array at the current index, k
            maxVal = arr[k]; // Set the new max value
        }
    }
    console.log(maxVal);
    // return maxVal; // To allow this value to be used outside the function
}

var myArr1 = [12, 1, 3, 8, 4, 10]; // What happens if the array is empty?
findAndPrintMax(myArr1);

// Alternate universe: what if we started at the end instead?
function findAndPrintMaxV2(arr) {
    var maxVal = arr[arr.length - 1]; // Start with first value in array - DON'T PICK AN ARBITRARY VALUE LIKE 0!!
    for (var k = arr.length - 1; k >= 0; k--) { // Or k -= 1
        if (arr[k] > maxVal) { // arr[k] is the value of the array at the current index, k
            maxVal = arr[k]; // Set the new max value
        }
    }
    console.log(maxVal);
}
findAndPrintMaxV2(myArr1);

// Is there a way to shorten this algo with finding and printing max value a little bit?

// Basic Algo #4: Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function makeOddArray() {
    var oddArr = [];
    for (var k = 1; k <= 255; k += 2) {
        oddArr.push(k);
    }
    return oddArr;
}
// console.log(makeOddArray());
var myOddArr = makeOddArray();
for (var k = 0; k < myOddArr.length; k++) {
    console.log(`Current odd number: ${myOddArr[k]}`);
}

// Basic Algo #5: Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
// Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Y = 7 -> returns 3
function countGreaterThanY(arr, Y) {
    var count = 0; // Start with 0
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] > Y) {
            count++; // Increment count if current number is bigger than Y
        }
    }
    console.log(`Number of values greater than ${Y} in array: ${count}`);
}
var myArr2 = [-4, 8, 4, 5, 7]
countGreaterThanY(myArr2,5);

// Basic Algo #6: Max, Min, Average
// Given an array, print the max, min and average values for that array.
function findMaxMinAvg(arr) {
    var minVal = arr[0];
    var maxVal = arr[0];
    var cumSum = 0; // Cumulative sum
    // Loop through array
    for (var k = 0; k < arr.length; k++) {
        // Check to see if new minimum found
        if (arr[k] < minVal) {
            minVal = arr[k];
        }
        // Check to see if new maximum found
        if (arr[k] > maxVal) {
            maxVal = arr[k];
        }
        // Increment cumulative sum
        cumSum += arr[k];
        // console.log("Cumulative sum so far is",cumSum);
    }
    console.log("Minimum value =",minVal);
    console.log("Maximum value = "+maxVal);
    console.log(`Average value = ${cumSum/arr.length}`);
}

var myArr3 = [1, 3, 5]; // What if the array is empty?
findMaxMinAvg(myArr3);

// Using findAndPrintMax:
function findMaxMinAvgV2(arr) {
    var minVal = arr[0];
    var cumSum = 0; // Cumulative sum
    // Loop through array
    for (var k = 0; k < arr.length; k++) {
        // Check to see if new minimum found
        if (arr[k] < minVal) {
            minVal = arr[k];
        }
        // Increment cumulative sum
        cumSum += arr[k];
        // console.log("Cumulative sum so far is",cumSum);
    }
    console.log("Minimum value =",minVal);
    console.log("Maximum value:");
    findAndPrintMax(arr);
    console.log(`Average value = ${cumSum/arr.length}`);
}

findMaxMinAvgV2(myArr3);

// Nested for loops:
// Given a value X, print the following arrays:
// k = 1: [1],
// k = 2: [1,2],
// k = 3: [1,2,3],
// ...
// k = X: [1, 2, 3, ..., X]

function printArrays(x) {
    var arr = [];
    for (var k = 0; k < x; k++) {
        arr.push([]); // Start with a new, empty array
        // console.log("Current index =",k);
        // console.log("Array now is",arr);
        // Loop to push in values into the newly created array
        for (var p = 1; p <= k + 1; p++) {
            arr[k].push(p);
        }
    }
    console.log(arr);
}

printArrays(10);