// Initial plan: go over Objects - accessing, looping
// Have Q&A on basics (for loops, if statements, etc.)
// Basic Algos #11-13
// Another Q&A session at the end

// JavaScript object: an object is defined with the curly braces "{" and "}"
// To the left of the colon is a property name, and to the right is a value, for example: 'myProperty': 25
// Values can be anything - strings, arrays, numbers, even objects

// Find the number N such that when you do 1 * 2 * 3 * ... * N, the product is at least 1 million

var product = 1;
var currentNum = 1;

while (product < 1000000) {
    console.log("Current number =",currentNum);
    product = product * currentNum;
    console.log("Current product =",product);
    // product *= currentNum;
    // akin to "sum += number;"
    currentNum++;
}

var myObject = {}; // This is an empty object

var myFavoriteObject = {
    'name': 'Adrian',
    'wearsGlasses': true,
    'favoriteNumber': 27,
    'myArray': [3, 11, -4, 'hello'],
    'myOtherObject': {
        'number': 10,
        'favoriteWord': 'education'
    }
}

// How to access the values in these objects:
console.log(myFavoriteObject.favoriteNumber); // objectName.propertyName
console.log(myFavoriteObject['myArray']); // objectName['propertyName']
var myPropertyName = 'name';
console.log(myFavoriteObject[myPropertyName]); // If you use a variable, must use square brackets
// // Will NOT work:
// console.log(myFavoriteObject.myPropertyName); // Gives undefined - will NOT replace myPropertyName with 'name'

// Looping through objects - use a "for-in" loop for an object
/*
for (var propertyName in objectName) {

}
*/
console.log("Demonstrating a for-in loop:");
// For-in loop to display the key-value pairs
for (var prop in myFavoriteObject) {
    console.log(`${prop}: ${myFavoriteObject[prop]}`);
}

// One way to loop through an array
var arr = [1, 3, 5, 8];
for (var k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

// Another way to loop through an array using a for-of loop:
/* for (var value of array) {

}
*/
console.log("Demonstrating a for-of loop with an array:");
for (var val of arr) {
    console.log(val); // Print 1, 3, 5, 8 in order
}


// Another way: use a "for-of" loop using Object.keys, which returns an array
// console.log(Object.keys(myFavoriteObject)); // Displays an array of all the property names defined in your object
// Display each property
for (var prop of Object.keys(myFavoriteObject)) {
    console.log(prop); // Prints the property itself
    console.log(myFavoriteObject[prop]); // Prints the value linked to the property
}

// Alternate way: using Object.entries, which returns an array - use "for-of" loop for an array
// console.log(Object.entries(myFavoriteObject)); // Prints an array with each entry being an array of the form ['propertyName', value]
for (var [key, value] of Object.entries(myFavoriteObject)) {
    console.log(key +": "+value);
}

// // Handy method for Objects: objName.hasOwnProperty('propName')
console.log(myFavoriteObject.hasOwnProperty('name')); // Return true because 'name' is a property in this object

// Count the number of letters in a word
var myWord = "mississippi";
var myWordObj = {}; // Start with an empty object
console.log("Demonstrating building an object on the fly");
// Loop through each character in the word
for (var k = 0; k < myWord.length; k++) {
    var currentLetter = myWord[k]; // Retrieves the current letter
    console.log("Current index =",k);
    console.log("Current letter =",currentLetter);
    // If a new letter is found, put that letter into the object and set its initial value to 1
    // But if the letter has already been found, increment its count by 1
    // objName[propertyName] is "truthy" if it exists, otherwise is "falsy" if it doesn't
    // "falsy" values (not an exhaustive list): NaN, null, false, undefined, 0
    // "truthy" values (not an exhaustive list): any number > 0, true
    if (myWordObj[currentLetter]) { // If letter has already been found
        myWordObj[currentLetter]++; // Increment count
    } else { // New letter found
        myWordObj[currentLetter] = 1;
    }
    console.log("Current object =",myWordObj);
}

// Basic Algo #11: Square the Values
// Square each value in a given array, returning that same array with changed values.
var arr1 = [3, 5, 4, -2, 9];
var expected1 = [9, 25, 16, 4, 81];
function squareValues(arr) {
    // Look at each value, then square the number, then store that new number
    // Look through each value with a for loop
    for (var k = 0; k < arr.length; k++) {
        arr[k] = arr[k] * arr[k];
        // Alternately, you can write "arr[k] *= arr[k];"
    }
    // return arr; // Don't need to return since the array stays changed afterwards
}
console.log("Demonstrating squaring values algo");
console.log(arr1); // Print original array
squareValues(arr1); // Square the array
// If your function doesn't return a value - i.e., there's no return statement - do not console.log the
// function directly.  So don't do console.log(functionName()) if functionName() doesn't return a value.
console.log(arr1); // Print the modified - i.e., squared - array
// Arrays and objects are mutable - i.e., if you pass them into a function, and then change their
// contents, they stay changed even after the function is done.

// Basic Algo #12: Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
var arr2 = [4, -5, -0.5, 3, 8, -11, 7];
var expected2 = [4, 0, 0, 3, 8, 0, 7];

function zeroOutNegatives(arr) {
    // Loop through the array - if the value is negative, replace it with 0.
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] < 0) { // If the value is negative
            arr[k] = 0; // Replace it with 0
        }
    }
    // No need to return arr here since arrays are mutable
}

console.log("Demonstrating zeroing out negatives algo:");
zeroOutNegatives(arr2);
console.log(arr2); // Prints the modified array

// Basic Algo #13: Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
var arr3 = [4, 3, 8, 2, 11, 5];
var expected3 = [3, 8, 2, 11, 5, 0];
function shiftArrayValues(arr) {
    /*
    variable | value
    --------------------------------
    arr      | 
    k        | 
    */

    // Take item at index 1, move it to index 0
    // arr[0] = arr[1]; k = 0
    // Take item at index 2, move it to index 1
    // arr[1] = arr[2]; k = 1
    // Take item at index 3, move it to index 2
    // arr[2] = arr[3]; k = 3
    // etc.
    // Set last value to 0.
    // Loop through array
    console.log("Original array:",arr);
    for (var k = 0; k < arr.length - 1; k++) {
        arr[k] = arr[k+1]; // Move value to the left
        console.log(arr);
    }
    // Zero out last value
    arr[arr.length - 1] = 0; // arr.length - 1 gives the last valid index in arr
    /* OR another way to solve this:
    for (var k = 1; k < arr.length; k++) {
        arr[k-1] = arr[k];
    }
    arr[arr.length - 1] = 0;
    */
}
console.log("Demonstrating shifting values algo:");
shiftArrayValues(arr3);
console.log(arr3);