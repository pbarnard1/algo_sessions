/* Keep your JavaScript skills fresh */

/* Challenge 1: Ordinal numerals

An ordinal numeral is a number written with a suffix, like 1st for 1, 2nd for 2, 3rd for 3, 4th
for 4, etc.  Here are the rules:
- End in "st" if the last digit is a 1 (e.g. 21st, 31st, 41st)
- End in "nd" if the last digit is a 2 (e.g. 22nd, 32nd, 42nd)
- End in "rd" if the last digit is a 3 (e.g. 23rd, 33rd, 43rd)
- End in "th" otherwise (e.g. 4th, 5th, 6th, 509th)
- EXCEPTION: if the second-to-last (i.e. the tens) digit is a 1, then end in "th" (e.g. 11th,
  12th, 13th, 211th, 117th)

Write a function that takes in a positive integer and returns a string with those rules.
Examples:
8 -> "8th"
12 -> "12th" (see exception)
23 -> "23rd"
42 -> "42nd"
81 -> "81st"
60 -> "60th"
*/

function ordinalNumeral(num) {
    // Handling invalid inputs (using "typeof" to check if we don't have a number, like
    // an object or undefined) - you don't need to include this here, but this is included
    // for posterity
    if (num % 1 != 0 || num < 0 || typeof num != "number") {
        return "Invalid input";
    }
    // If last digit is 1 and the second to last digit is not 1
    if (num % 10 === 1 && (num % 100 < 10 || num % 100 > 19)) {
        return num + "st";
    } else if (num % 10 === 2 && (num % 100 < 10 || num % 100 > 19)) {
        return num + "nd";
    } else if (num % 10 === 3 && (num % 100 < 10 || num % 100 > 19)) {
        return num + "rd";
    } else {
        return num + "th";
    }
}

/* Challenge 2: Array elements divisible by X

Given a positive integer X > 1 and an array of integers, return a new array containing
only the numbers divisible by X.

Examples:
[3, 4, 7, 10, 5], X = 2 -> returns [4, 10]
[6, 11, 12, 3, 10], X = 3 -> returns [6, 12, 3]
*/
function arrDivisibleBy(arr,X) {
    var newArr = []; // Array holding values divisible by X
    // Loop through the array
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] % X == 0) { // If current item is divisible by X
            newArr.push(arr[k]); // Push to the new array
        }
    }
    return newArr;
}

/* Challenge 3: Title Strings
From edabit: https://edabit.com/challenge/6q9iTtQdnZZM5Cbai

A title string is a string where every word is capitalized.  Create a function that
accepts a string and returns true if it is a title string and false otherwise.

Examples:
"I Love Math" -> true
"Green acres"-> false ("acres" not capitalized)
"The Price is Right" -> false ("is" not capitalized)
*/
function isTitleString(str) {
    var words = str.split(" "); // Split string where there's a space
    // Loop through the words
    for (var k = 0; k < words.length; k++) {
        // If word starts with a lower-case letter, return false
        // .charCodeAt(ind) returns the UTF-16 character code at some index in the string
        // "a" returns 97, while "z" returns 122
        if (words[k].charCodeAt(0) >= 97 && words[k].charCodeAt(0) <= 122) {
            return false;
        }
    }
    return true;
}

/* From the session: */
function isTitleStringV2(str) {
    // Split the string up into an array of words (strings)
    // Check each word to see if it is capitalized
    // If even one word isn't capitalized, we return false
    // So if every word is capitalized, we return true
    var wordArr = str.split(" "); // We split the string into a series of words
    // console.log(wordArr);
    // Loop through each word in the array
    for (var i = 0; i < wordArr.length; i++) {
        // Grab the first character in the word
        var firstChar = wordArr[i].charAt(0);
        // ALMOST WORKS BELOW - but doesn't account for nonalphabetic characters
        // like the ampersand (&), numbers, other punctuation marks, etc.
        // if (firstChar === firstChar.toLowerCase()) {
        //     return false;
        // }
        // 97 = "a", 98 = "b", 99 = "c", ..., 122 = "z"
        if (firstChar.charCodeAt(0) >= 97 && firstChar.charCodeAt(0) <= 122) {
            return false;
        }
    }
    return true;
}

console.log(isTitleStringV2("The Price & Right"));

/* String and array challenges */

/* Challenge 4: Trace of a matrix

A matrix is represented as an array of arrays, like so:
var arr1 = [
    [1, 2],
    [5, 8]
]
So arr[1] returns [1,2] and arr[1][0] returns 1.

For this problem, you're given a square matrix, i.e. the number of rows and columns are equal.
In other words, the length of the big array is equal to the length of each smaller subarray.
arr1 above is a square matrix since it has two entries, and each entry is a two-element array.

With this square matrix, calculate and return its trace.  The trace is obtained by summing the 
values along the diagonal from the top left to the bottom right.

Examples:
var arr1 = [
    [1, 2],
    [5, 8]
]
result1 = 1 + 8 = 9

var arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
result2 = 1 + 5 + 9 = 15
*/

function matrixTrace(arr) {
    var trace = 0;
    // Loop through the array (matrix)
    for (var k = 0; k < arr.length; k++) {
        trace += arr[k][k]; // arr[k] is current subarray, so arr[k][k] is kth indexed item in that array
    }
    return trace;
}

/* From the session: */

function matrixTraceV2(matrix) {
    // We need to grab the kth item in the kth array (1st in 1st array, 2nd in 2nd array, etc.)
    // We'll do a cumulative sum, then return that at the end
    var cumSum = 0; // Starting at 0
    for (var k = 0; k < matrix.length; k++) {
        // // Two-line version
        // var curRow = matrix[k]; // Array we're examining
        // cumSum += curRow[k]; // Item from that array we want

        // One-line version
        cumSum += matrix[k][k]; // matrix[k] gives you the array, so matrix[k][k] gives the kth item in that array
    }
    return cumSum;
}

console.log(matrixTraceV2([
    [1, 2, 3], // matrix[0] = [1, 2, 3] -> matrix[0][0] -> 1
    [4, 5, 6], // matrix[1] = [4, 5, 6] -> matrix[1][1] -> 5
    [7, 8, 9]  // matrix[2] = [7, 8, 9] -> matrix[2][2] -> 9
]));

/* Challenge 5: Add Two String Numbers
From edabit: https://edabit.com/challenge/3q6tbKL8BS4CgaR4c

You're given two numbers as strings.  (This allows for very big numbers.)  Write
a function that outputs the sum as a string.  If either string has a non-numeric
character, return "-1".  You may assume that if you're given a valid number, it'll
be positive.  If a string is empty, treat it as 0.  Do NOT use parseInt() for the entire
number since it might not be able to handle huge numbers - but you may use it for numbers <= 20.

Examples:
"5", "11" -> "16"
"111s", "222" -> "-1" (notice the "s" in the first string)
"23", "" -> "23"
"55", "47" -> "102"
"1874682736267235927359283579235789257", "32652983572985729" -> "1874682736267235927391936562808774986"
*/

function addTwoStrings(str1,str2) {
    var strSum = ""; // String holding the final sum
    var carryOne = false; // Boolean for if the sum of the digits >= 10, requiring us to carry the 1
    var digitDiff = Math.abs(str1.length - str2.length); // Difference in number of digits
    // Loop through the digits - as long as we have any left
    for (var k = Math.min(str1.length,str2.length)-1; k >= 0; k--) {
        var firstDigit, secondDigit;
        if (str1.length > str2.length) { // First number has more digits
            firstDigit = parseInt(str1[k+digitDiff]);
            secondDigit = parseInt(str2[k]);
        } else { // Second number just as long or longer
            firstDigit = parseInt(str1[k]);
            secondDigit = parseInt(str2[k+digitDiff]);
        }
        if (isNaN(firstDigit) || isNaN(secondDigit)) {
            return "-1";
        }
        var sumDigits = firstDigit + secondDigit;
        if (carryOne) { // If we carried a 1 from before, add a 1 to this sum
            sumDigits++;
        }
        // Now append digit - depending on the sum
        if (sumDigits >= 10) {
            carryOne = true;
            var lastDigit = sumDigits % 10; // Get ones digit (e.g. "5" if sum is 15)
            strSum = lastDigit + strSum; // Append digit
        } else {
            carryOne = false;
            strSum = sumDigits + strSum; // Append digit
        }
    }
    if (carryOne && digitDiff == 0) { // Edge case: two numbers have same number of digits, but sum doesn't
        strSum = "1" + strSum;
    }
    // Loop to add remaining digits - including possibly a 1 carried over
    for (var k = digitDiff - 1; k >= 0; k--) {
        var curDigit;
        if (str1.length > str2.length) {
            curDigit = parseInt(str1[k]);
        } else {
            curDigit = parseInt(str2[k]);
        }
        if (isNaN(curDigit)) {
            return "-1";
        }
        if (carryOne) {
            curDigit++;
        }
        if (curDigit == 10) {
            carryOne = true;
            if (k > 0) { // If beginning of number not reached
                strSum = "0" + strSum;
            } else { // Put in "10" since we're carrying the one and the loop is about to end
                strSum = "10" + strSum;
            }
        } else {
            carryOne = false;
            strSum = curDigit + strSum;
        }
    }
    return strSum;
}

/* Object challenges */

/* Challenge 6: Invert Keys and Values

Given an object, switch the keys and values around in place, where possible.  (Which
types of variables, like booleans, strings, etc., will you be able to perform the reversal?)
You may assume that there will not be any duplicate values (e.g. 'num': 5 and 'rating': 5). */

function reverseObject(obj) {
    var allKeys = Object.keys(obj); // Get array of key values for this object
    // Loop through each key
    for (var k = 0; k < allKeys.length; k++) {
        var curVal = obj[allKeys[k]];
        // "typeof" is used to check the type of item a variable is
        if (typeof curVal == 'string' || typeof curVal == 'number') {
            obj[curVal] = allKeys[k]; // Switch key and value
            delete obj[allKeys[k]]; // Delete original order
        }
    }
}

/* Challenge 7: Got Enough Money?
From edabit: https://edabit.com/challenge/Qifo5G2hgWXWXLegi
Given an object of items with prices, and a budget, return an array of keys as strings containing 
the items you can afford to buy.  If you can't afford any of the items, return "-1".

Example:
var inventory = {
    'Radio': 15,
    'TV': 500,
    'Shirt': 20,
    'Washing machine': 1500
}
budget = 500 -> return ['Radio', 'TV', 'Shirt'] since all 3 are <= 500
*/

function canBuy(itemObj,budget) {
    var affordableItemArr = []; // Array holding keys of items we can buy
    // Use a for-in loop to loop through an object (other ways work too, like using Object.keys(obj))
    for (var item in itemObj) {
        if (itemObj[item] <= budget) { // If item is within our budget
            affordableItemArr.push(item); // Push this key to the array
        }
    }
    if (affordableItemArr.length === 0) { // If no items can be bought, return "-1"
        return "-1";
    } else {
        return affordableItemArr;
    }
}

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* Challenge 8: Bubble sort

Handy link for a visual of this sorting algorithm: https://visualgo.net/en/sorting

Bubble sorting through an array of numbers is accomplished by doing the following:
1. Look at the values at consecutive indices (indices 0 and 1, 1 and 2, 2 and 3, etc.), starting
   from the left at index 0.  If the number on the right (bigger index) is smaller than that on 
   the left (smaller index), swap the values.  Keep doing this through the end of the array.  
2. Repeat this process N-2 times, where N is the number of items in the array.

In essence we are moving the biggest value to the end each time we go through the entire array.
Your goal is to implement the bubble sort.  Sort the array in place.
*/

function bubbleSort(arr) {
    // Loop for number of times we need to move items to the end
    for (var i = 0; i < arr.length - 1; i++) {
        // console.log(`Moving ${i+1}st/nd/rd/th biggest value`);
        // Loop that does the actual sorting - note the minus i to save a little time (why?)
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // console.log(`Examining indices ${j} and ${j+1}`);
            if (arr[j] > arr[j+1]) {
                // console.log(`Swapping indices ${j} and ${j+1}`);
                // Swap values
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            // console.log("Array now =",arr);
        }
    }
}

// Test case: var x = [8, 7, 6, 5, 4, 3, 2, 1];

/* Challenge 9: Selection sort

The idea of selection sort is that we will loop through each index, then for each index we'll loop
through the remainder of the array and find the smallest value.  Then we will swap the values at 
the current index being examined and at the index where the min was found.

Illustration:
[5, 2, 8, 14, 1, 7]
Looking for value to put at index 0: we pick the value 1 at index 4, then swap indices 0 and 4:
[1, 2, 8, 14, 5, 7]
Now we look for value to put at index 1: in this case, the smallest value is already there:
[1, 2, 8, 14, 5, 7]
Now look for value to put at index 2: we got to index 4, which has value 5.  Now swap:
[1, 2, 5, 14, 8, 7]
Now look for value to put at index 3: we got to index 5, which has value 7.  Now swap:
[1, 2, 5, 7, 8, 14]
Now look for value to put at index 4: the smaller value of 8 and 14 is already in the right spot:
[1, 2, 5, 7, 8, 14]
Finished

Your challenge is to implement selection sort, with the sorting done in place. */

function selectionSort(arr) {
    // Loop through each index for placement of smallest values, excluding last index
    for (var i = 0; i < arr.length - 1; i++) {
        var smallestValInd = i; // Index where smallest value is found will start at current index
        // Loop to find smallest value; note where the loop starts!
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestValInd]) { // If new smallest value found
                smallestValInd = j; // New index for minimum found
            }
        }
        // console.log(`Swapping values at indices ${i} and ${smallestValInd}`);
        // Swap values
        var temp = arr[i];
        arr[i] = arr[smallestValInd];
        arr[smallestValInd] = temp;
        // console.log("Array now =",arr);
    }
}