
// Review while and do-while loops
// Go over the break and continue statements
// Go over Objects - accessing, looping

// Basic Algos #11-13
// Q&A session at the end

// A while loop is used to run code a bunch of times - and you might not know how many times
// you'll run the code

var x = 2000;

// Not guaranteed to run - in this case, it won't run
while (x < 1000) {
    x *= 2;
    console.log(x);
}

// Will run at least once
do {
    x *= 2;
    console.log(x);
} while (x < 1000);

var y = 0;
// Break statement
while (true) { // Infinite loop!  Try to avoid these!!!
    y += 5;
    console.log(y);
    if (y > 100) {
        break; // Exit loop
    }
}

for (var k = 0; k < 10; k++) {
    console.log(k);
    if (3*k > 10) { // k = 4 is the first value where this is true
        break;
    }
}

// Continue statement - use to end execution of the code for the *current* iteration only

console.log("Demonstrating continue statement:");
// Example: Print all values *not* divisible by 3 from 1 to 20
for (var k = 1; k <= 20; k++) {
    if (k % 3 === 0) {
        continue;
    }
    console.log(k);
}

console.log("Demonstrating continue statement in a while loop:");
var z = 0;
while (z < 30) {
    z++;
    if (z % 4 === 0) {
        continue;
    }
    console.log(z);
}

// JavaScript object: an object is defined with the curly braces "{" and "}"
// To the left of the colon is a property name, and to the right is a value, for example: 'myProperty': 25
// Values can be anything - strings, arrays, numbers, even objects

var x1 = {}; // This is a JS object - with the curly braces
// To the left of the colon is a property name, and to the right is a value
// Values can be anything - strings, arrays, numbers, even objects
var x2 = {
    'name': 'Adrian',
    'eye_color': 'brown',
    'myArray': [1, 1, 2, 3, 5, 8, 13, 21],
    'favoriteNumber': 17,
    'hobbyRatings': {
        'crosswords': 10,
        'art': 6,
        'coding': 42        
    }
}
// To call a property: type varName.propName OR varName['propName']; 
// can chain multiple properties if you have nested objects
console.log("Demonstrating JS objects and their property-value pairs:");
console.log(x2.name);
console.log(x2.number); // Undefined
console.log(x2['myArray']);
console.log(x2.hobbyRatings); // Prints entire hobbyRatings object
console.log(x2.hobbyRatings.coding); // Accesses the coding property in the hobbyRatings Object
console.log(x2['hobbyRatings']['art']);
// Two ways to access a specific value in an array
console.log(x2.myArray[5]);
console.log(x2['myArray'][5]);

var propName = 'eye_color';
console.log(x2[propName]); // MUST use the square brackets here - no "."
console.log(x2.propName); // Undefined - no property called "propName" in x2

console.log("Looping through an object - method 1:");
// Looping through objects - use a "for-in" loop for an object
// for (var propName in objName) {} // Syntax
for (var property in x2) {
    console.log(`${property}: ${x2[property]}`);
    // console.log(x2[property]);
}

// // An example of a "for-of" loop with arrays:
// var myArr = [1, 3, 8, 2, 4, -1, -3];
// for (var val of myArr) {
//     console.log(val); // Prints the value itself - notice it's NOT the index
// }

// Another way: use a "for-of" loop using Object.keys, which returns an array
console.log("Looping through an object - method 2:");
console.log(Object.keys(x2));
for (var prop of Object.keys(x2)) { // prop will represent a property in the array of property names
    console.log(x2[prop]);
}

// Handy reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference

// Alternate way: using Object.entries, which returns an array - use "for-of" loop for an array
console.log("Looping through an object - method 3:");
console.log(Object.entries(x2));
for (var [key, value] of Object.entries(x2)) {
    console.log(key +": "+value);
    // console.log(key,":",value);
}
// Handy method for Objects: objName.hasOwnProperty('propName') - checks to see if
// propName exists in objName
console.log(x2.hasOwnProperty('random'));
if (x2.hasOwnProperty('count')) {
    // x2.count++;
    x2['count']++;
} else {
    // x2.count = 1;
    x2['count'] = 1;
}
console.log(x2);

if (x2.hasOwnProperty('count')) {
    // x2.count++;
    x2['count']++;
} else {
    // x2.count = 1;
    x2['count'] = 1;
}
console.log(x2);

// Question asked: == vs. ===
console.log(3 == "3");
console.log(3 === "3");
// Handy methods: parseInt(str) and parseFloat(str)
console.log(3 === parseInt("3"));

// Basic Algo #11: Square the Values
// Square each value in a given array, returning that same array with changed values.
function squareValues(arr) {
    // Give the function an array.  
    // Then we'll square each value by doing a for loop.  
    // Then return it.  (Not really needed since array stays changed after function is done)

    // Loop through the array, squaring each value in the process
    for (var k = 0; k < arr.length; k++) {
        // Remember that "k" is the index, whereas arr[k] gives the value at index k
        arr[k] = arr[k] * arr[k];
    }
    // Changing the value without making a new array is called changing it "in place".
    // return arr;
}
var arr1 = [1, 2, -3, -4, 5];
// console.log(squareValues(arr1));
console.log("Original array:");
console.log(arr1);
squareValues(arr1);
console.log("Changed array:");
console.log(arr1);

// Basic Algo #12: Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroOutNegatives(arr) {
    // Give the function an array
    // Go through the array - replace any values that are negative with zero
    // (Return the array - not really needed)
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] < 0) {
            arr[k] = 0;
        }
    }
}
var arr2 = [-3, 4, -7, 2, 8];
zeroOutNegatives(arr2);
console.log(arr2);
// What about an empty array?  Will this work?

// Basic Algo #13: Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.
var arr3 = [2, 8, 4, 5, 11];
var exp3 = [8, 4, 5, 11, 0];
function shiftValues(arr) {
    /*
    variable    value
    --------------------
    arr         [2, 8, 4, 5, 11]
    arr[0] = arr[1]; k = 0
    arr         [8, 8, 4, 5, 11]
    arr[1] = arr[2]; k = 1
    arr         [8, 4, 4, 5, 11]
    arr[2] = arr[3]; k = 2
    arr         [8, 4, 5, 5, 11]
    arr[3] = arr[4]; k = 3
    arr         [8, 4, 5, 11, 11]
    arr[4] = arr[5]; k = 4 - CAN'T DO since there's no arr[5]
    arr.length = 5
    arr[4] = 0;
    arr         [8, 4, 5, 11, 0]
    */
    // arr[1] gets moved to arr[0], arr[2] gets moved to arr[1], etc.
    // Put in 0 at the end
    for (var k = 0; k < arr.length - 1; k++) {
        arr[k] = arr[k+1];
    }
    arr[arr.length-1] = 0; // Zero out last entry
}
console.log("Original array:");
console.log(arr3);
shiftValues(arr3);
console.log("Modified array:");
console.log(arr3);
// Question: would this work for an empty array?  How about an array of 1 element?