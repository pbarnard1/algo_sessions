// Keep your JavaScript skills fresh

/* Challenge 1: Hello, Good-bye
From edabit: https://edabit.com/challenge/kLa2w7m4h849k8rmW

Given a string and an integer that can be either 0 or 1, return "Hello"+string if 1 or "Good-bye"+string if 0.
Examples: "John" and 1 returns "Hello John", "Adam" and 0 returns "Good-bye Adam"
*/

function helloBye(str,num) {
    if (num == 1) {
        return "Hello "+str;
    } else {
        return "Good-bye "+str;
    }
}

/* Challenge 2: Even All the Way
From edabit: https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

Given an array of integers, return a new array containing only even values that occur only at even indices.
Examples:
[2, 1, 7, 4, 6] returns [2, 6] since 2 and 6 are even and at indices 0 and 4, respectively; 4 is at an odd index (3)
[1, 2, 3, 4, 5] returns [] since all even numbers are at odd indices
*/

function evenAllTheWay(arr) {
    var newArr = []; // Empty array that will hold only even values at even indices
    // Loop through array
    for (var k = 0; k < arr.length; k++) {
        // If even number *and* even index
        if (arr[k] % 2 == 0 && k % 2 == 0) {
            newArr.push(arr[k]);
        }
    }
    return newArr;
}

// Faster version:
function evenAllTheWayV2(arr) {
    var newArr = [];
    for (var k = 0; k < arr.length; k += 2) { // Note the increment - ensures we only deal with even indices
        if (arr[k] % 2 == 0) {
            newArr.push(arr[k]);
        }
    }
    return newArr;
}

/* Challenge 3: Is Frequent Enough?

Given a string, a character and a number X, return true if the given character (case-sensitive) occurs X times or more
and false otherwise.  Solve this two different ways: one with a for loop and one with a while loop.  

Examples: "Mississippi", "s", 3 returns true since we have at least 3 occurrences of "s" (four in this case)
"Please", "s", 2 returns false because there's only one "s" and not 2
*/

function isFrequentEnough(str,char,X) {
    var count = 0;
    // Loop through string
    for (var k = 0; k < str.length; k++) {
        // If character is found, increment count
        if (str[k] == char) {
            count++;
        }
        // If we found enough instances of the letter, return true
        if (count == X) {
            return true;
        }
    }
    return false;
}

function isFrequentEnoughV2(str,char,X) {
    var count = 0;
    var ind = 0;
    // While we haven't finished looking at the string AND the number of times the letter is found is not X
    // (Note - if either condition fails, i.e. we're done with the string or the requisite number of occurrences
    // happens - exit the loop)
    while (ind < str.length && count < X) {
        if (str[ind] == char) {
            count++;
        }
        ind++; // Increment index when it comes to the letter found
    }
    if (count == X) {
        return true;
    } else {
        return false;
    }
    // One-line version: return count == X;
}

// String and array challenges

/* Challenge 4: Is Word Alphabetical
(From Learning Platform, found in Projects & Algorithms section)
Given a string, return true if all contained letters are in alphabetical order and false otherwise.
Start with words with no punctuation, all lower case.
For a bonus, ignore case sensitivity.
As a final challenge, have the function ignore punctuation, spaces, etc.
*/

// Works regardless of upper case or lower case letters - doesn't include handling punctuation
function isAlphabetical(str) {
    // Note: for simplicity we're not going to worry about punctuation like ', -, ., etc.
    var lowerStr = str.toLowerCase(); // Convert to lower case
    // Loop through string - we'll look at two letters in a row
    for (var k = 1; k < lowerStr.length; k++) {
        // 'a' < 'b' < 'c', etc.
        // If letter before comes alphabetically after the letter ahead, then the word is not in alphabetical order
        if (lowerStr[k-1] > lowerStr[k]) {
            return false;
        }
    }
    return true; // Word is in alphabetical order all the way
}

// With punctuation and other characters handled
function isAlphabeticalV2(str) {
    var lowerStr = str.toLowerCase();
    var newStr = ""; // will only contain letters
    // Loop to leave only letters
    for (var k = 0; k < lowerStr.length; k++) {
        var curChar = lowerStr[k];
        // 97 = "a", 98 = "b", ..., 122 = "z"
        if (curChar.charCodeAt(0) >= 97 && curChar.charCodeAt(0) <= 122) {
            newStr += curChar;
        }
    }
    // Now check to see if word is in alphabetical order
    // Loop through string - we'll look at two letters in a row
    for (var w = 1; w < newStr.length; w++) {
        // 'a' < 'b' < 'c', etc.
        // If letter before comes alphabetically after the letter ahead, then the word is not in alphabetical order
        if (newStr[w-1] > newStr[w]) {
            return false;
        }
    }
    return true; // Word is in alphabetical order all the way
}

/* Challenge 5: Matrix Search
(From "To Do 6" in Arrays II in Projects & Algorithms section; also on page 112)

You will be given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each
two-dimensional array represents a black-and-white image, where each integer value is a pixel value.
The second matrix might be a subset of the larger one. Return whether the second image is found
within the larger one.

Example:
var largerMatrix =[
    [10,15,20,25],
    [15,25,18,14],
    [88,14,24,84],
    [22,34,49,55]
];
var smallerMatrix = [
    [18,14],
    [24,84]
]
This returns true.
*/

function matrixContains(bigMatrix,smallMatrix) {
    // Indices for last row and column - note the [] for the columns
    var lastRow = largerMatrix.length - smallerMatrix.length;
    var lastCol = largerMatrix[0].length - smallerMatrix[0].length;
    // Two loops for possible locations for top left spot for smaller matrix
    for (var i = 0; i <= lastRow; i++) {
        for (var j = 0; j <= lastCol; j++) {
            // If there's a matrix for the top left spot, then check to see if the smaller matrix is contained within
            if (bigMatrix[i][j] == smallMatrix[0][0]) {
                // Check to see if smaller matrix is contained
                if (isMatrixMatch(bigMatrix,smallMatrix,i,j) == true) { // Don't really need "== true", but here to be clear
                    return true;
                }
            }
        }
    }
    return false; // Not found
}

// Helper function for matrixContains
function isMatrixMatch(bigMatrix,smallMatrix,i,j) {
    for (var v = 0; v < smallMatrix.length; v++) {
        for (var w = 0; w < smallMatrix[0].length; w++) {
            // If the values don't match, the smaller matrix is not contained within the bigger matrix at indices i, j
            if (bigMatrix[i+v][j+w] != smallMatrix[v][w]) {
                return false;
            }
        }
    }
    return true; // Smaller matrix contained within bigger matrix if we reach this point
}

// Second version with only a single function needed:
function isMatrixFound(bigMatrix,smallMatrix) {
    // Figure out our bounds for the top left corner in terms in indices
    var maxRow = bigMatrix.length - smallMatrix.length;
    var maxCol = bigMatrix[0].length - smallMatrix[0].length;
    // Loop through all possible top left indices
    for (var i = 0; i <= maxRow; i++) { // Loop through all possible starting rows
        for (var j = 0; j <= maxCol; j++) { // Loop through all possible starting columns
            var canFit = true;
            if (bigMatrix[i][j] == smallMatrix[0][0]) {
                // Check to see if everything else matches
                for (var v = 0; v < smallMatrix.length; v++) { // Checking each row in the smaller matrix
                    for (var w = 0; w < smallMatrix[0].length; w++) { // Checking each column in the smaller matrix
                        if (bigMatrix[i+v][j+w] == smallMatrix[v][w]) {
                            // console.log(`Values match at indices ${i+v}, ${j+w}`);
                            continue;
                        } else {
                            // console.log(`Values do NOT match at indices ${i+v}, ${j+w}`);
                            // console.log("Moving on to next possible left corner...");
                            canFit = false;
                            break;
                        }
                    }
                    if (!canFit) {
                        break; // Go on to next possible top left corner
                    } else if (v == smallMatrix.length - 1) {
                        return true; // Found a place to put the smaller matrix
                    }
                }
            }
        }
    }
    return false; // Can't squeeze inner matrix in after checking all top left corners
}

// Object challenges

/* Challenge 6: Scrabble score
Given a string representing a word and an object representing how many points each letter is worth, return
how many points the word would score.  Note the word is case-insensitive.

Example:
var scoreObj = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10
}
The word "help" with scoreObj would return 4+1+1+3 = 9 points.
*/

function scrabbleScore(str, scoreObject) {
    var totalScore = 0; // Variable that will hold the score of the word
    var upperStr = str.toUpperCase(); // Convert word to upper case
    // Loop through word
    for (var k = 0; k < upperStr.length; k++) {
        var curChar = upperStr[k];
        totalScore += scoreObject[curChar]; // Access score object to get points for current letter, then add to score itself
    }
    return totalScore;
}

// Second version - note that the string conversion is done outside the function since the object's keys are defined outside
// The keys are all upper case in this example
function scrabbleScoreV2(str,scoreObject) {
    var totalScore = 0; // Hold the total score of the word (string)
    // Loop through the word
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k]; // OR str.charAt(k)
        totalScore += scoreObject[curChar];
    }
    return totalScore;
}

var scoreObj = {
    'A': 1,
    'B': 3,
    'C': 3,
    'D': 2,
    'E': 1,
    'F': 4,
    'G': 2,
    'H': 4,
    'I': 1,
    'J': 8,
    'K': 5,
    'L': 1,
    'M': 3,
    'N': 1,
    'O': 1,
    'P': 3,
    'Q': 10,
    'R': 1,
    'S': 1,
    'T': 1,
    'U': 1,
    'V': 4,
    'W': 4,
    'X': 8,
    'Y': 4,
    'Z': 10
};
var word = "zebra";
console.log(scrabbleScore(word.toUpperCase(),scoreObj));

/* Challenge 7: Hall Monitor
Based on this challenge from edabit: https://edabit.com/challenge/yPa5YwAoqfdJuWK4C

Suppose you have a floor layout that looks like this:
D = door, H = hall
-------------------------------
|     |     |     |     |     |
|  1  D  3  D  H  D  4  D  5  |
|     |     |     |     |     |
|--D--|-----|     |-----|--D--|------
|     |     |     |     |     |     |
|  2  |     |     |     |  6  D  7  |
|     |     |     |     |     |     |
-------     |     |     ---------D--|
            |     |           |     |
            |  H  |           |  H  |
            |     |           |     |
            |     |           |     |
      ------|     -------------     |
      |     |                       |
      |  8  D           H           |            
      |     |                       |
      ------------------D------------
                     Outdoors

Suppose you have an array that represents the route in terms of rooms/halls you'd like to
traverse.  Return true if the route is possible and false otherwise.
Examples with this set-up:
[1, 3, "H", 7] returns true
[8, "H", 6, 5, 4] returns false since you can't directly go from the hall to room 6
*/

// One way to represent this room set-up is with an object like so:
var floorLayout = {
    '1': {'2': true, '3': true},
    '2': {'1': true},
    '3': {'1': true, 'H': true},
    '4': {'5': true, 'H': true},
    '5': {'4': true, '6': true},
    '6': {'5': true, '7': true},
    '7': {'6': true, 'H': true},
    '8': {'H': true},
    'H': {'2': true, '4': true, '7': true, '8': true}
}
// Each key represents a room, and the value is another object whose keys are the rooms you can enter.  We use "true" as
// a placeholder "truthy" value.  This will come in handy in the function below.

function canTakeRoute(floor, pathArr) {
    if (pathArr.length <= 1) { // If only one room, there's no "route", so we'll return false (arbitrary choice - good question to ask in interview about short arrays like this!)
        return false;
    }

    // Loop through each successive room after the first one
    for (var k = 1; k < pathArr.length; k++) {
        var roomFrom = pathArr[k-1];
        var roomTo = pathArr[k];
        // floor[roomFrom] grabs object of rooms/halls you can go to, so floor[roomFrom][roomTo] will be true if we can
        // travel from roomFrom to roomTo, and false otherwise since we'll get undefined, a "falsy" value
        if (!floor[roomFrom][roomTo]) {
            return false; // If we can't go from roomFrom to roomTo, the route is impossible - return false
        }
    }
    return true; // Path is possible
}

/* 
If you want to, on your own you can create a graph data structure to represent this room structure.  There are
many ways to implement this, using OOP and arrays/objects.  Have fun with it!
*/



/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* For these two challenges we will implement merge sort.  The idea of merge sort is to do the following:
1. Split the array in half.  Repeat as needed until we have every number in its own array.
2. Now take two arrays that were split.  We will sort and merge them together.  For example, if you split
[8, 5] into [8] and [5], now we sort and merge them to become [5, 8].
3. Repeat the sorting and merging as needed until all items are sorted.

This set of challenges will require recursion to solve.

Here's an example of an array being sorted:
[3, 4, 1, 8, 2, 5]
Split into:
[3, 4, 1] and [8, 2, 5]
Split again into:
[3] and [4, 1], then [8] and [2, 5]
Now the arrays [4, 1] and [2, 5] are split again:
[3]; [4] and [1]; [8]; [2] and [5]
Now we sort the arrays upward and merge them together, starting with the [4] and [1] pair and the [2] and [5] pair:
[4] and [1] are sorted and merged to become [1, 4], while [2] and [5] are sorted and merged to become [2, 5]
Now we sort and merge these arrays: [3] and [1, 4]; [8]; [2, 5]
[3] and [1, 4] are sorted and merged to become [1, 3, 4], while [8] and [2, 5] are sorted and merged to become [2, 5, 8]
Finally, let's sort and merge [1, 3, 4] and [2, 5, 8]:
[1, 2, 3, 4, 5, 8]

Handy link for a visual of this sorting algorithm: https://visualgo.net/en/sorting
*/

/* Challenge 8: Merge two sorted arrays
Given two *sorted* arrays, make a new array with all the numbers sorted and merged together.
Example: [4, 11] and [5, 7] should merge and become [4, 5, 7, 11].
*/

function merge(left, right) {
    var totalElements = left.length + right.length; // Count of total number of items in the two arrays
    var newArr = []; // Array that will hold the merged values
    var leftInd = 0;
    var rightInd = 0;
    var leftMaxInd = left.length - 1;
    var rightMaxInd = right.length - 1;
    for (var k = 0; k < totalElements; k++) {
        if (leftInd > leftMaxInd) { // All done with left array, so use right array
            newArr.push(right[rightInd]);
            rightInd++;
        } else if (rightInd > rightMaxInd) { // All done with right array, so use left array
            newArr.push(left[leftInd]);
            leftInd++;
        } else if (left[leftInd] < right[rightInd]) { // If left element is smaller
            newArr.push(left[leftInd]);
            leftInd++; // Increment index
        } else { // Right element is smaller than or equal to that of left element
            newArr.push(right[rightInd]);
            rightInd++; // Increment index
        }
    }
    return newArr;
}

/* Challenge 9: Implement merge sort itself

In this challenge, implement merge sort.  Use the function you wrote to merge two arrays to help you solve.
*/

function mergeSort(nums) {
    if (nums.length <= 1) { // Base case of 1 element OR an empty array
        return nums;
    }
    // Split into two arrays
    var middle = Math.floor(nums.length/2);
    var leftArray = nums.slice(0,middle);
    var rightArray = nums.slice(middle);
    // console.log("Left array =",leftArray);
    // console.log("Right array =",rightArray);
    // Now sort (and merge) each of the smaller arrays separately
    leftArray = mergeSort(leftArray);
    // console.log("Sorted left array =",leftArray);
    rightArray = mergeSort(rightArray);
    // console.log("Sorted right array =",rightArray);
    // console.log("Now merging");
    // Return merged version of the two now sorted arrays
    var mergedArray = merge(leftArray,rightArray);
    // console.log("Merged array =",mergedArray);
    return mergedArray;
}