// Initial plan: go over Objects - accessing, looping
// Have Q&A on basics (for loops, if statements, etc.)
// Basic Algos #11-13
// Another Q&A session at the end

// JavaScript object: an object is defined with the curly braces "{" and "}"
// To the left of the colon is a property name, and to the right is a value, for example: 'myProperty': 25
// Values can be anything - strings, arrays, numbers, even objects

var myObj = {
    'myName': 'Adrian Barnard', // Key-value pair: "key": value
    'favoriteNumber': 88,
    'myArray': [1, 3, 5],
    'mySubObject': {
        'favoriteFood': 'pizza',
        'favoriteColor': 'yellow'
    }
};

// To call a property: type varName.propName OR varName['propName']; can chain multiple properties if you have nested objects,
// e.g. myObj.propertyOne.innerProperty1

console.log(myObj.favoriteNumber);
console.log(myObj['myArray']);

var myFieldName = 'myName';
console.log(myObj[myFieldName]); // You can use variables to access properties - but only by
// using brackets
console.log(myObj.myFieldName); // WON'T WORK: can't find field name called "myFieldName"

// Add a new property:
myObj['currentState'] = 'WA';
console.log(myObj);

// Remove a property:
delete myObj['currentState'];
console.log(myObj);

// Looping through objects - use a "for-in" loop for an object
for (var prop in myObj) {
    console.log(prop +": " + myObj[prop]);
}

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// For-of loops - used in ARRAYS
var myArr = [3, 5, 'Hello', 7];
for (var val of myArr) {
    console.log(val);
}
/*
// Analogous to:
for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
*/

// Another way: use a "for-of" loop using Object.keys, which returns an array
for (var key of Object.keys(myObj)) {
    console.log(key); // Prints the property value
    console.log(myObj[key]); // Print the value attached to that property
}

// Alternate way: using Object.entries, which returns an array - use "for-of" loop for an array
for (var [key, value] of Object.entries(myObj)) {
    console.log(key);
    console.log(value);
}

// Handy method for Objects: objName.hasOwnProperty('propName')
console.log(myObj.hasOwnProperty('myArray')); // Returns true since 'myArray' is a property in myObj
console.log(myObj.hasOwnProperty('random')); // Returns false - 'random' doesn't exist in myObj

// Basic Algo #11: Square the Values
// Square each value in a given array, returning that same array with changed values.

// Something "in place" - that means NOT creating a new array; you're basically changing the
// values of the array as you go
function squareValues(arr) {
    // Loop through the entire array
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i];
        // OR
        // arr[i] *= arr[i]; // analogous to arr[i] += 5 or arr[i] -= 3
    }
    return arr;
}
var thisArr = [1, 4, 3, -7];
console.log(squareValues(thisArr));

// Basic Algo #12: Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zeroOutNegatives(arr) {
    // Loop through array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // console.log("Value at index",i,"is negative");
            // console.log(arr[i])
            arr[i] = 0;
        }
    }
    return arr;
}
var arr2 = [3, 0, -4, -2, 5, -15];
console.log(zeroOutNegatives(arr2));

// Basic Algo #13: Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end.

var arr3 = [1, 3, 4, 2, 1, 8];
var expected3 = [3, 4, 2, 1, 8, 0];

function shiftArrayValues(arr) {
    // Take value at index 1 and move it to index 0, value at index 2 and move it to index 1, etc.
    // Then at the end, put in 0
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i]; // i = 5: arr[4] = arr[5] -> arr = [3, 4, 2, 1, 8, 8]
        if (i === arr.length - 1) { // At last index
            arr[i] = 0;
        }
    }
    // OR if you didn't use the if statement above, you could put the 0 in here after the for loop
    // arr[arr.length-1] = 0;
}

console.log(arr3); // Shows original array
shiftArrayValues(arr3);
console.log(arr3); // Shows array modified after calling the function