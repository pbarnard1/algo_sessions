/* Keep your JavaScript skills fresh */

/* Challenge 1: Add max and min to array
Write a function that accepts an array and appends the minimum and maximum, in that order, at the
end of the array.  If the array has 2 or fewer elements, don't append anything - leave the array as is.

Ask yourself - do we need to return the array back?
*/

function appendMinMax(arr) {
    // If 2 or fewer elements, leave the array as is
    if (arr.length <= 2) {
        return;
    }
    // Variables holding the min and max, starting with the first element at index 0
    var min = arr[0], max = arr[0];
    // Loop through remaining items in array - note we're starting at index 1 (2nd item)
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] < min) { // New minimum found
            min = arr[k];
        } else if (arr[k] > max) { // New maximum found
            max = arr[k];
        }
    }
    // Append minimum, then maximum
    arr.push(min,max);
    /* Note: if we define an array in a variable before calling the function, then pass the array
    in here, then the array will stay changed even after the function is finished.  In other words,
    if we did something like:

    var x = [4, -2, -3, 5, 2, 7, 1]; // Define array as a variable
    appendMinMax(x); // Now call the function
    console.log(x); // Here x has min and max added to the array

    Notice that x will be changed even after the function is called, even though we didn't return
    anything from the function.

    Arrays and objects are mutable - in other words, if you give them to a function and change 
    their contents, they remain changed afterwards, whereas other things like strings, numbers 
    and booleans do not. Thus we don't need to do "return arr" here.  (HOWEVER, if you pass an 
    array in without storing it in a variable first - so something like appendMinMax([1, 4, -2, 8, 3]),
    then we do need to either console.log() inside the function or return the array. */
}

/* Challenge 2: Spelling it out
From edabit: https://edabit.com/challenge/Akgh37c6dccEsNBt6
Given a string, return an array where the first element contains the 1st letter, the 2nd contains the
first 2 letters, etc., all the way until the word is spelled out.  If the string is empty, return
an array with an empty string as the only element.

Examples:
"hip" -> ["h","hi","hip"]
"" -> [""]
"please" -> ["p","pl","ple","plea","pleas","please"]
*/

function spellItOut(str) {
    if (str.length == 0) { // Edge case: empty string
        return [""];
    }
    var spelledWord = ""; // String holding the word as spelled out
    var wordArr = []; // Array holding the spelled out words
    for (var k = 0; k < str.length; k++) {
        spelledWord += str[k]; // Add current letter (could also do str.charAt(k))
        wordArr.push(spelledWord); // Push to end of array
    }
    return wordArr;
}

// console.log(spellItOut("hip"));
// console.log(spellItOut(""));
// console.log(spellItOut("please"));

/* Challenge 3: Valid Zip Code
From edabit: https://edabit.com/challenge/Ysk5M8XAscc4fqaAi

A ZIP code is a 5-digit number - no letters in it.  Your goal is to accept a string and return true
if it is a ZIP code and false if it isn't.

Examples:
"90210" -> true
"05184" -> true (ZIP codes can, and do, start with 0)
"8194a" -> false (no letters allowed)
"1942" -> false (too short)
*/

function isValidZIP(str) {
    if (str.length != 5) {
        return false;
    }
    // Lots of ways to check the digits
    for (var k = 0; k < str.length; k++) {
        if (str[k] >= 0 && str[k] <= 9) { // or could say if (!isNaN(parseInt(str[k]))), using the isNaN() and parseInt() functions
            continue; // Got straight to next character if character is a number
        } else { // Not a number - so return false
            return false;
        }
    }
    return true; // Every character is a valid number, so it's a ZIP code
}

// Another version, solved in the session:
function isValidZipV2(str) {
    // Don't do parseInt(str)!  You might be surprised!  Try parseInt("b5511") vs. parseInt("52v11").
    // Check to see if string has EXACTLY 5 characters first
    if (str.length !== 5) {
        return false;
    }
    // The idea is to check each character one at a time and see if it is a number
    for (var k = 0; k < str.length; k++) {
        var curChar = str.charAt(k);
        // isNaN(val) checks to see if val is NaN - true if it is, false if it isn't
        if (parseInt(curChar) >= 0 && parseInt(curChar) <= 9) { // if (!isNaN(parseInt(curChar)))
            continue;
        } else { // Not a numeric character
            return false;
        }
    }
    return true; // All characters are valid digits
}

console.log(isValidZip("00970"));
console.log(isValidZip("14970"));
console.log(isValidZip("48b14"));
console.log(isValidZip("582"));
console.log(isValidZip("?481/"));
console.log(isValidZip("489077829"));

/* String and array challenges */

/* Challenge 4: Instant Jazz
From edabit: https://edabit.com/challenge/EMuszDzF66k9J73HG

You're given an array of notes as strings.  A note will start with a letter from A-G, and could
include a "b" (flat) or "#" (sharp) afterwards.  (There are a few others, but for simplicity we'll
just use these.)  Your goal is to add a "7" to every musical note that doesn't end in "7" in place
in the array.  If the array is empty, leave it as is.

Examples:
["A","D#","E"] should change to ["A7","D#7","E7"]
["G7","Bb7","A"] should change to ["G7","Bb7","A7"] - notice the first two are left alone
[] -> []
*/

function instantJazz(arr) {
    // Loop through the array of notes
    for (var k = 0; k < arr.length; k++) {
        var curNote = arr[k];
        var lastChar = curNote[curNote.length - 1]; // Grab last character
        if (lastChar != "7") { // If note doesn't end in 7, add a 7
            arr[k] = curNote + "7";
        }
    }
}

/* Challenge 5: Palindromic Anagrams
From edabit: https://edabit.com/challenge/8wqJTmobdGWuQKFmy

You're given a string.  Determine if you can form a palindrome out of it - return true if you can
and false if you can't.  (A palindrome is a word that's the same forwards and backwards, like "pop"
or "deed".)

Examples:
"opp" -> true since you can form "pop", a palindrome
"taste" -> false since you can't form a palindrome
"arrecca" -> true since you can form "racecar"

What might be some edge cases to consider?  (Good idea to ask in an interview!)
*/

function isPalindromicAnagram(str) {
    /* Key to this problem: observe that in a palindrome, all characters except at most one
    appear an even number of times.  For example, "deed" has 2 "e"s and 2 "d"s, both even.
    "pop" has 2 "p"s and only 1 "o".  You can't form a palindrome if two or more characters
    appear an odd number of times.  For example, "taste" has only 1 "a", 1 "s" and 1 "e", so that
    is 3 characters that appear an odd number of times, and you can only have at most one do that.
    Thus a palindrome is impossible from "taste".
    */
    if (str.length == 0) { // Edge case: string is empty - we'll say it's not a palindrome
        return false;
    }
    // To help us keep track of the characters and their frequency, we'll use a hash table, or in
    // this case an object.
    var charFreq = {}; // Start with an empty object
    // loop through the string
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k];
        // If letter is already found, increase its count
        if (charFreq[curChar]) { // Can also do charFreq.hasOwnProperty(curChar)
            charFreq[curChar]++;
        } else { // New letter found, so initialize its frequency to 1
            charFreq[curChar] = 1;
        }
    }
    var oddLetterCount = 0;
    // Now loop through the object - check each unique letter
    for (var letter in charFreq) { // Or could use Object.keys(charFreq) to get an array of keys
        if (charFreq[letter] % 2 == 1) {
            oddLetterCount++;
        }
        if (oddLetterCount >= 2) { // If at least 2 characters with odd frequencies found, can't make palindrome
            return false;
        }
    }
    return true; // Palindrome is possible
}

/* Object challenges */

/* Challenge 6: Online Shopping
From edabit: https://edabit.com/challenge/5qYYauQwYwxz3nd9R

You are shopping online.  Your cart is represented by an object, where each key is the item you're
buying and each value is the price you're paying.  Your order is eligible for free shipping if the
cart totals 100 dollars or more.  Make a function that returns true if you're eligible for free
shipping and false otherwise.
*/
function isFreeShipping(obj) {
    var cumSum = 0; // Total of the order
    for (var item in obj) { // Loop through the object's keys
        cumSum += obj[item]; // Add value of current item to sum
    }
    return cumSum >= 100; // Could do if block if it's easier to understand
}

/* Challenge 7: Top racer

In auto racing, racers are often scored with points, with a person finishing well getting more points.
At the end of a season, whoever has the most points is crowned the winner.

You're given an array of objects, which each object following this format:
{
    name: 'Johnny Racer',
    points: 500,
    placements: {
        '1': 3,
        '2': 2,
        '3': 2,
        '4': 1,
        '5': 1,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 1,
        '10': 0
    }
}
The name and points are self-explanatory.  "placements" is an object representing the number of times
the racer has placed.  For example, '1': 3 means three 1st-place finishes.

Return the name of the highest-scoring racer.  If two or more racers are tied for most points,
break the tie by finding who has more 1st place finishes.  If there's still a tie, go to 2nd place
finishes, then 3rd place finishes, etc.  You may assume there will only be one winner each race.  
If by some chance we're still tied after these tie-breaking procedures, return "Tie".  Also assume
that the placements object will have the same keys for all racers.

{
    name: 'Bobby Unser',
    points: 500,
    placements: {
        '1': 2,
        '2': 3,
        '3': 0,
        '4': 0,
        '5': 1,
        '6': 1,
        '7': 1,
        '8': 1,
        '9': 0,
        '10': 1
    }
}

If Bobby and Johnny were racing, Johnny would win since he has 3 1st place finishes while Bobby only
has 2 1st place finishes, even though they both have the same points.

What should we return if there's an empty array of racers (i.e. no racers)?
*/

function topRacer(arr) {
    var maxScore = -Infinity; // Start max score at -Infinity since that's as small as you can get
    var indMax = []; // Array of indices where the max score is found
    // Loop through array of racers
    for (var k = 0; k < arr.length; k++) {
        // If new max score found, reset
        if (arr[k].points > maxScore) {
            maxScore = arr[k].points;
            indMax = [k]; // Notice the [] since we need an array
        } else if (arr[k].points == maxScore) { // 2+ racers found with max score, so expand array
            indMax.push(k);
        }
    }
    if (indMax.length == 0) { // If no racers, we'll return an empty string
        return "";
    } else if (indMax.length == 1) { // Only one racer with top score
        return arr[indMax[0]].name; // Return name - notice the indMax[0], which gets the index we need
    }
    /* Two or more racers tied with top score, so break the tie */
    var numPlaces = Object.keys(arr[0].placements).length; // Get number of keys
    // Loop through placements
    for (var k = 1; k <= numPlaces; k++) {
        var newIndMax = []; // New array that will hold who remains in the tiebreaking procedure
        var maxCount = -Infinity; // Count of highest frequencies
        // Loop through each person's number of placements
        for (var z = 0; z < indMax.length; z++) {
            // If new max count found, reset
            if (arr[indMax[z]].placements[k] > maxCount) {
                maxCount = arr[indMax[z]].placements[k];
                newIndMax = [indMax[z]]; // Notice the [] since we need an array
            } else if (arr[indMax[z]].placements[k] == maxCount) { // 2+ racers found with same max placements, so expand array
                newIndMax.push(indMax[z]);
            }
        }
        if (newIndMax.length == 1) {
            return arr[newIndMax[0]].name;
        } else {
            indMax = newIndMax.slice(); // Basically make a new copy of array
            // Using ES6 notation: indMax = [...newIndMax]; // Using the spread "..." operator
        }
    }
    return "Tie";
}

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* Challenge 8: Insertion sort
Handy link for a visual of this sorting algorithm: https://visualgo.net/en/sorting
Insertion sort works like this:
[3, 2, 4, 8, 5, 6]
Start with item 2 (index 1): move the value to the left to its correct place:
[2, 3, 4, 8, 5, 6]
Look at index 2: move to the left if needed - in this case, we don't need to:
[2, 3, 4, 8, 5, 6]
Look at index 3: move the value 8 to the left if needed - no need this time:
[2, 3, 4, 8, 5, 6]
Look at index 4: move the value 5 to the left if needed - we will:
[2, 3, 4, 5, 8, 6]
Look at index 4: move the value 6 to the left if needed - we will:
[2, 3, 4, 5, 6, 8]
Your goal is to implement insertion sort, sorting the array in place.
*/

function insertionSort(arr) {
    if (arr.length <= 1) {
        return; // No need to sort if array is empty or has only one element
    }
    // Loop for value we're moving, starting at index 1
    for (var i = 1; i < arr.length; i++) {
        // console.log("Looking at index "+i);
        // console.log("Array current =",arr);
        // Loop for moving the value to the left
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j+1]) {
                // Swap values if value on left is bigger than that on right
                // console.log(`Swapping indices ${j} and ${j+1}`);
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // console.log("Array now =",arr);
            } else { // If smaller or the same, no need to move left
                // console.log("Value in its correct place");
                break; // Exit out of inner for loop - go to next value immediately
            }
        }
    }
}

// another (basically same) version, solved in the session:

function insertionSortV2(arr) {
    // Start at index 1 - loop for each remaining index
    // Starting at the index in question, we'll move the value to the left as long as we don't have a value smaller than the
    // one we're moving on the left
    // Loop is for the value we're looking at, starting at index 1
    for (var i = 1; i < arr.length; i++) {
        console.log(`Looking at index ${i}: array =`,arr);
        // Loop is for moving the value to the left until we have a number less than or equal to the current value
        // being moved
        for (var j = i; j > 0; j--) {
            if (arr[j-1] > arr[j]) { // Number on left > value on right
                // Swap values
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
                console.log(`Value at indices ${j-1} and ${j} swapped.  Array now =`,arr);
            } else { // Number on left <= value on right - that means we don't have to move that value anymore
                console.log("Done swapping. Array now =",arr);
                break;
            }
        }
    }
}

/* Challenge 9: Binary search (no recursion)

Binary search is a way to efficiently search for a value in a sorted array.  The idea is that
you split the array up in half each time, then look for the value in the smaller array.  The array that is
picked is the one that has its min <= value <= max.  Then continue to break the array up into smaller
ones until the value is found.  When you are down to two numbers, check to see if either one equals
the value you're searching for.

Your goal is to implement the binary search algorithm to find a value in a sorted array.  Return
the index where the value is found, or -1 if it isn't found.  Do NOT use built-in array methods.

Using big O notation:
Time complexity: O(log n)
Space complexity: O(1)
*/

function binarySearch(arr, val) {
    // Edge cases
    if (arr.length == 0) { // Empty array
        return -1;
    } else if (arr.length == 1) { // One item in array only, so see if it matches
        if (arr[0] == val) {
            return 0;
        } else {
            return -1;
        }
        // One-line version: return arr[0] == val ? 0 : -1;
    }
    // Two or more values in array
    var leftInd = 0;
    var rightInd = arr.length - 1;
    // If value is smallest than smallest in array or bigger than biggest in array, it can't be found
    if (val < arr[leftInd] || val > arr[rightInd]) {
        return -1;
    }
    // Now do binary search
    while (leftInd <= rightInd) {
        // console.log("Searching between indices",leftInd,"and",rightInd);
        var middleInd = Math.floor((leftInd + rightInd)/2);
        if (arr[middleInd] < val) { // Go to left subarray if value is within that range
            leftInd = middleInd + 1;
            // console.log("Narrowing down to indices",leftInd,"and",rightInd);
        } else if (arr[middleInd] > val) { // Go to right subarray if value is within that range
            rightInd = middleInd - 1;
            // console.log("Narrowing down to indices",leftInd,"and",rightInd);
        } else { // Value found
            // console.log("Value found at index",middleInd);
            return middleInd;
        }
    }
    // console.log("Value not found");
    return -1; // Value not found
}