/* Keep your JavaScript skills fresh: */

/* Challenge 1: Countdown array
Given a positive integer, create and return an array starting with that number, counting down by 1 all the way to 0.
Example: 5 should return [5, 4, 3, 2, 1, 0]
*/

function countdown(n) {
    var arr = []; // Start with empty array
    for (var k = n; k >= 0; k--) {
        arr.push(k);
    }
    return arr;
}

/* Challenge 2: Reformat name
Given two strings representing a first name and last name, return a new string with the format
"last name, first name".  For example, given "Jack" and "Sparrow", return "Sparrow, Jack".
*/

function reformatName(firstName,lastName) {
    return lastName + ", " + firstName;
    // alternately, you could type "return `${lastName}, ${firstName}`" (notice the back tick marks)
}

/* Challenge 3: I love threes!
Given an integer X, return a new array of values from 1 to X, except whenever you get a number divisible by 3,
put in the string "I love threes!"
Example: Given 7 -> return [1, 2, "I love threes!", 4, 5, "I love threes!", 7]
*/

function iLoveThrees(x) {
    var arr = []; // Start with empty array
    // Loop from 1 to X, pushing values as we go into the array
    for (var k = 1; k <= x; k++) {
        if (k % 3 == 0) { // Divisible by 3, so push the message
            arr.push("I love threes!");
        } else { // Not divisible by 3, so push the value
            arr.push(k);
        }
    }
    return arr;
}

/* String and array challenges: */

/* Challenge 1: Multiply numbers in a string
From edabit: https://edabit.com/challenge/TzxoYExuxuQw2ahWR
Given a string in a format like so: "3, 8, 11", where each number is separated by a commas, return a number that
is the product of each item in the string.  You may assume that you'll only be given numbers.
Examples: "3, 8, 11" returns 3*8*11 = 264; "2, 3, 4" returns 24; "0, 5, 111, -4" returns 0
Can you think of a way to do this with ONE line?
*/

function multiplyString(str) {
    var numStrArr = str.split(","); // Split the string into an array of smaller strings, e.g. "2, 3, 5" -> "2", " 3", " 5" (note the spaces!)
    var product = 1; // Start product at 1 since 1 * a number gives the number back
    // Loop through each number
    for (var k = 0; k < numStrArr.length; k++) {
        product *= parseInt(numStrArr[k]); // *= means multiply the product by the number on the right, akin to += for adding and -= for subtracting
    }
    return product;
}

// Version 2 without using any string methods:
function multiplyStringV2(str) {
    var product = 1; // Start product at 1
    var curNumStr = ""; // Empty string that will contain a number
    var k = 0;
    while (k < str.length) {
        if (str[k] !== "," && k < str.length - 1) { // If comma found and not at the end
            curNumStr += str[k]; // Add character to string
        } else { // Comma found or at the end, so multiply by number
            if (k == str.length - 1) { // If at the end of the string
                if (!isNaN(parseInt(curNumStr + str[k]))) { // If we actually don't end with a number, e.g. a space, a comma
                    product *= parseInt(curNumStr + str[k]);
                }
            } else { // Number in the middle, so multiply
                product *= parseInt(curNumStr);
                curNumStr = ""; // Reset string for next number
            }
        }
        k++; // Increment index
    }
    return product;
}

// Version 3 with one line inside the function
function multiplyStringV3(str) {
    // This is functional programming - chaining commands like this using the split and reduce methods for a string and array,
    // respectively - note that this version works only if we end with a number
    // The "=>" is called an arrow function - it's a newer way of defining a function; you'll learn more in the MERN stack
    // We also use a ternary operator (condition ? value_if_true: value_if_false)
    return str.split(",").reduce((acc, val) => isNaN(parseInt(val)) ? acc : acc*val, 1);
}

/* Challenge 2: Find common elements
From edabit: https://edabit.com/challenge/jtAvQyyDpFA2EaCcj
Given two sorted arrays, return a new array containing all entries common to both arrays:

Example: Given [1, 3, 5, 8, 11, 12] and [2, 3, 4, 5, 7, 10, 11], return [3, 5, 11]

For this exercise, do not include duplicates, even if they appear in both arrays at least twice.  
Just get the values common to both arrays.
*/

function findCommonElements(arr1, arr2) {
    var commonArr = []; // Array containing common values
    var ind1 = 0, ind2 = 0; // Starting indices for arrays 1 and 2
    // Loop through both arrays
    while (ind1 < arr1.length && ind2 < arr2.length) {
        // Loop through first array while values are less than the current spot in the second array
        while (arr1[ind1] < arr2[ind2]) {
            ind1++;
        }
        // If matching values found, push value in, then continue looping through first array until bigger value found
        // or we reach the end of the array
        if (arr1[ind1] == arr2[ind2]) {
            commonArr.push(arr1[ind1]);
            while (arr1[ind1] == arr2[ind2]) {
                ind1++;
            }
        }
        // Same idea as first array, except loop through second array
        while (arr2[ind2] < arr1[ind1]) {
            ind2++;
        }
        if (arr2[ind2] == arr1[ind1]) {
            commonArr.push(arr2[ind2]);
            while (arr2[ind2] == arr1[ind1]) {
                ind2++;
            }
        }
    }
    return commonArr;
}

/* Object challenges: */

/* Challenge 1: Convert object to array
From Edabit: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
Given an object, return an array like so:
Example 1: {"a": 10, "b": ['Hello','world']} changes to [["a",10],["b",['Hello','World']]]
In other words, return an array with each index representing another array with the format ["key", value].
The key-value arrays can be in any order, just as long as the keys and values match accordingly.
Should the object be empty, return an empty array.
*/

function convertObjToArr(obj) {
    var newArr = []; // Empty array that will hold ["key", value] entries
    // Use a "for-in" loop to loop through the object - we'll loop through the keys
    for (var key in obj) {
        newArr.push([key,obj[key]]);
    }
    return newArr;
}

// Other ways to solve from the session:

function convertObjToArr(obj) {
    var arr = []; // Empty array that will hold the key-value pairs
    var keyArr = Object.keys(obj); // Array holding the key values: ['a','b','c']
    // Three ways to loop:

    // Method 1: a traditional for loop through the object's keys
    for (var k = 0; k < keyArr.length; k++) {
        var curKey = keyArr[k];
        // Array: ["key", value]
        var keyValArr = [curKey,obj[curKey]];
        // console.log(keyValArr);
        // Push that to the array we'll return
        arr.push(keyValArr);
    }
    
    // // Method 2: using a for-of loop is used to get the values of an array without needing the index
    // for (var key of keyArr) { // var value of my_array - loops through the values in the array
    //     arr.push([key,obj[key]]);
    // }
    
    // // Method 3: using a for-in loop
    // for (var key in obj) { // var key in some_object - loop through the keys in the object
    //     arr.push([key,obj[key]]);
    // }
    return arr;

    // A one-line solution:
    // return Object.entries(obj);
}

/* Challenge 2: Map the letters in a string
From Edabit: https://edabit.com/challenge/Bd2jQS9xA6QecB34h
Given a string, return an object where each character is a key, and the value represents an array of indices 
where the character can be found.
Example: "hello" -> {"h": [0], "e": [1], "l": [2, 3], "o": [4]}
What about case sensitivity and spaces?
*/

function mapLetters(str) {
    var strObj = {}; // Empty object that will hold the letters as keys and arrays of indices as values
    // Loop through string
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k]; // Current character in a variable for convenience
        if (strObj[curChar]) { // If character is in the object already
            strObj[curChar].push(k); // Add index to array
        } else { // Character is new, so add it to object with an array containing the current index
            strObj[curChar] = [k];
        }
    }
    return strObj;
}

// From the session:
function mapLettersV2(str) {
    var letterObj = {}; // Start with empty object that will be filled over time
    // Loop that goes through the string
    for (var k = 0; k < str.length; k++) {
        if (str.charAt(k) in letterObj) { // str[k] or str.charAt(k)
            letterObj[str[k]].push(k); // If letter already found, just push current index into the existing array
        } else { // If the letter is new - as in not found in the object
            letterObj[str[k]] = [k]; // We'll make a new key-value pair: key = letter, value = an array starting with the current index
        }
        // console.log("Current letter:",str[k]);
        // console.log(`Index: ${k}`);
        // console.log(letterObj);
    }
    return letterObj;
}

console.log(mapLetters("hello"));

// var obj2 = {
//     'hi': 'there',
//     'color': 'blue'
// }

// // Explanation for if statement - checking to see if key is in the object:
// if ('money' in obj2) { // Try 'hi' in obj2 vs. 'money' in obj2
//     console.log("Key exists");
// } else {
//     console.log("Key doesn't exist");
// }

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* Memoization is a handy technique in solving problems recursively.   It's used when you need to perform
expensive operations efficiently, and can be used to store results temporarily and/or permanently when you
return the final value.  For example, in the Fibonacci sequence, you find you might calculate several terms
twice when you don't need to - you can use an array or a hash table (object) to store results as you can to
save time.  These problems today will focus on utilizing memoization.  These problems assume you're comfortable
with recursion, which is essentially a function calling itself to solve a problem through simpler cases. */

/* Challenge 1: Telephone words
From page 132 in the Algorithm book

On older telephones, the keypad associates letters with each numeral.  Given a seven-digit telephone
number, return an array of all possible strings that equate to that phone number.  For reference, here is
the mapping: [2:ABC; 3:DEF; 4:GHI; 5:JKL; 6:MNO; 7:PQRS; 8:TUV; 9:WXYZ] – for
completeness, map 1 to I and zero to O.  As an example, given the phone number 6937130, you should
return an array of 1296 different strings, including “mydrifo” and “oyesido”. */

function telephoneWords(num) {
    var mapObj = {
        '0': 'O',
        '1': 'I',
        '2': 'ABC',
        '3': 'DEF',
        '4': 'GHI',
        '5': 'JKL',
        '6': 'MNO',
        '7': 'PQRS',
        '8': 'TUV',
        '9': 'WXYZ'
    }
    // Start recursive call, with the number converted to a string, the codes, etc.
    return rTelephoneWords(num.toString(),mapObj,0,"",[]);
}

// Recursive call: phone number as a string, the object representing numbers and corresponding letters, the index of the current
// digit, the word built so far (recursively) and the word array containing all possible words we can make
function rTelephoneWords(num,mapObj,ind,wordStr,wordArr) {
    if (ind === num.length) { // If we're at the end of the number
        wordArr.push(wordStr); // Put the word we found in
    } else { // Still have digits remaining
        // Loop through all possible letters for current digit
        for (var k = 0; k < mapObj[num[ind]].length; k++) {
            rTelephoneWords(num,mapObj,ind+1,wordStr+mapObj[num[ind]][k],wordArr); // Recursively go through remaining digits
        }
    }
    return wordArr; // Return all the words found (so far)
}

/* Challenge 2: Calculating high-order Fibonacci terms

The Fibonacci sequence starts with the numbers 1 and 1, and each term afterwards is the sum of the previous
two terms.  (Some people start with 0 and 1, but for simplicity we'll start with 1 and 1.)  Thus:
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21
etc.
So the sequence is: [1, 1, 2, 3, 5, 8, 13, 21, ...].

One common way to solve this is by writing the following (assumes only positive integers for simplicity):
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
While this works, the problem is when you calculate higher order terms like the 50th term.  Chances are you'll
blow your call stack and get stack overflow because of too much memory being used to solve the problem.

Your challenge is to rewrite this so that you can calculate terms like the 100th term fast. */

function fibonacci(n) {
    n = Math.floor(n); // Round number down
    return n < 1 ? 0 : rFibonacci(n); // Ternary operator: if n < 1 [so 0 or negative integer], return 0, otherwise solve
}

function rFibonacci(n,fibObj = {}) {
    // console.log(fibObj);
    // console.log("Current value for n =",n);
    if (n <= 1) {
        return n;
    }
    if (fibObj[n]) { // If value already calculated ("truthy" since value assigned will be >= 1, so "true" if key found)
        // console.log("Retrieving value for n = "+n+": "+fibObj[n]);
        var returnVal = fibObj[n]; // Grab term in object since it's already calculated
        delete fibObj[n]; // Now remove it - don't need it anymore - to save space; we'll have at most 2 values at a time
        return returnVal;
    }
    fibObj[n] = rFibonacci(n-1,fibObj) + rFibonacci(n-2,fibObj); // Since value doesn't exist, we'll store it in the object
    // console.log("Calculated value for n = "+n+": "+fibObj[n]);
    return fibObj[n];
}