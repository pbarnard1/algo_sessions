/* Keep your JavaScript skills fresh */

/* Challenge 1: Hero's Formula
More information can be found here: https://en.wikipedia.org/wiki/Heron%27s_formula

Given the three sides of a triangle, we can calculate its area by doing the following:
Area = square root of s*(s-a)*s(s-b)*s(s-c), where:
- a, b and c are the lengths of the three sides
- s = (a + b + c)/2

Write a function that takes in the lengths of the 3 sides of the triangle and returns the area of the triangle
using Hero's Formula.  (You might find some methods in the Math object helpful.)
*/

function herosFormula(a,b,c) {
    var s = (a + b + c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

/* Challenge 2: Nth to Last
Given an array and an integer N, return the Nth to last item in the array.  If the array is too short or the input
is invalid (e.g. N <= 0), return null.

Examples:
[3, 1, 4, 5, 3], N = 2 - return 5
[3, 1, 4, 5, 8], N = 1 - return 8
[1, 8, 2], N = 4 - return null (only 3 elements)
*/

function nthToLast(arr, N) {
    if (N > arr.length || N <= 0) { // If array is too short or N is <= 0
        return null;
    } else {
        return arr[arr.length - N]; // arr.length - 1 = last element, arr.length - 2 = 2nd to last element, etc.
    }
}

/* Challenge 3: Reverse string

Given a string, return a new string with its contents reversed.  Do NOT use built-in methods like reverse().
*/

function reverseString(str) { // Function that reverses a string
    var revStr = ""; // Empty string to start
    // Loop through string starting at the end and going towards the front
    for (var k = str.length - 1; k >= 0; k--) {
        revStr += str[k]; // str.charAt(k);
    } 
    // If you were looping forwards, you would do revStr = str[k] + revStr;
    return revStr;
}

console.log(reverseString("money is something you spend"));

/* String and array challenges */

/* Challenge 4: Is Pangram

A pangram is a sequence of words that contain all 26 letters of the English alphabet at least once.  Write a
function that returns whether a string is a pangram, case insensitive.

Examples:
"How quickly daft jumping zebras vex!" - return true
"abcdef ghijkl mno pqrs tuv wxy, not so fast!" - return false
*/

function isPangram(str) {
    str = str.toUpperCase(); // Convert to upper case first (won't change original string outside function)
    // Object representing letters we've found
    var letterObj = {}; // We'll add letters as we go
    var numLettersFound = 0; // Number of unique letters found
    // Loop through string
    for (var k = 0; k < str.length; k++) {
        // If current character is a letter, do something with it
        if (str[k] >= "A" && str[k] <= "Z") { // Alternately, can use charCodeAt(ind)
            if (letterObj[str[k]] == undefined) { // If letter was not found before
                letterObj[str[k]] = 1; // Initialize its count to 0
                numLettersFound++; // Increase count of number of unique letters found
            } else { // Increase its count if found before
                letterObj[str[k]]++;
            }
        }
    }
    return numLettersFound == 26; // Pangram if all 26 letters were found
}

/* Challenge 5: Balance Index

An array is balanced at a specific index if the sum of the values to the left of the index (but not including the index itself)
equals the sum of the numbers to the right of the index, again excluding the index.  Write a function that takes in an array
and returns the balance index or -1 if it cannot be found.

Example:
[3, 4, 5, -2, 9] returns 2 since 3 + 4 = 7 and -2 + 9 = 7; index 2 is where we separate the two
[4, 3, 7] returns -1
[3, 3] returns - 1
[1, 2, 3, 5, 6] returns 3 since 1 + 2 + 3 = 6 and we only have 6 to the right
*/

function balanceIndex(arr) {
    // Loop to find cumulative sum to start, which will start as the right sum
    var rightSum = 0;
    // Note we start at index 1 instead of 0 - this is because of the next loop
    for (var k = 1; k < arr.length; k++) {
        rightSum += arr[k];
    }
    var leftSum = 0;
    // Loop to find possible balance indices - note the starting and ending points since the index
    // can't be at the start or the end
    for (var k = 1; k < arr.length - 1; k++) {
        leftSum += arr[k-1];
        rightSum -= arr[k];
        if (leftSum == rightSum) { // If sums are equal on both sides, balance index is found
            return k;
        }
    }
    return -1; // Couldn't find balance index
}

// From the session:

// Method 1:
// Sum values from 0 to i-1, i = prospective balance index, sum values from i +1 to end of the array
// Outer for loop for possible balance indices from i = 1 through i = arr.length - 2
// Inner for loop: calculate the two sums
// Check to see if sums are equal - if so, return i, but if not, keep checking
// If no balance index found, return -1

/* Method 2 - that's the version implemented below:
[3, 4, 5, -2, 9] sum from index 1 to the end - this is the right sum
right sum = 16
left sum = 0

i = 1:
left sum = 3 += arr[0]
right sum = 5 + -2 + 9 = 12 = 16 - 4 -> -= arr[1]

i = 2:
left sum = 3 + 4 = 7 += arr[1]
right sum = 12 - 5 = 7 = -2 + 9 -> -= arr[2]
BALANCE INDEX FOUND: return i = 2
*/ 

function balanceIndexV2(arr) {
    // Calculate the initial right sum - starting at the second value
    var rightSum = 0;
    // Loop through the array
    for (var k = 1; k < arr.length; k++) {
        rightSum += arr[k];
    }
    var leftSum = 0;
    // console.log("Initial right sum =",rightSum);
    // Loop through all possible balance indices
    for (var i = 1; i < arr.length - 1; i++) {
        // Increment left and right sums accordingly
        leftSum += arr[i-1];
        rightSum -= arr[i];
        // console.log("Examining possible balance index at index",i);
        // console.log("Left sum from indices 0 to",i-1,"=",leftSum);
        // console.log("Right sum from indices",i+1,"to",arr.length-1,"=",rightSum);
        // If sums are equal, balance index found
        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1; // Balance index not found
}

console.log(balanceIndexV2([3, 4, 5, -2, 9]));

/* Object challenges */

/* Challenge 6: International Greetings
From edabit: https://edabit.com/challenge/83sWemMhpG6pScXKp

You're given a guest list of students and the country they are from, stored like so:
var guest_list = {
    'Evonne': 'Australia',
    'Rafael': 'Spain',
    'Roger': 'Switzerland',
    'Bjorn': 'Sweden'
}

Write a function that accepts two parameters: a string representing a name, then an object with the key-value
pairs representing the names and the countries of origin.  Return a new string that says, "Hello! I'm {name} from {country}!", or
if the name isn't on the list, return "Hello! I'm a guest!".
*/

function intlGreeting(name,guestObj) {
    if (name in guestObj) { // Python-like logic for checking if a key is in an object (many other ways to check if key is in object)
        return `Hello! I'm ${name} from ${guestObj[name]}!`
    } else {
        return "Hello! I'm a guest!";
    }
}

/* Challenge 7: Nearest Chapter
From edabit: https://edabit.com/challenge/E5kxeJA782rNX2bch

You're given an object representing a title and the starting page number.  Write that function that accepts that object and a page number
and returns a string representing the chapter that the page number is closest two.  Should two chapters be equidistant from the page
number, return the chapter with the higher page number.

Examples:
{
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
} and 10 -> returns "Chapter 2"

{
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
} and 3 -> returns "Chapter 1b" since 3 is equidistant from 1 and 5, so pick the chapter with the higher page number
*/

function nearestChapter(chapterObj, pageNum) {
    var nearestChapter = []; // An ARRAY of chapters closest to page number (could be two of them)
    var smallestDistance = Infinity; // Start with big number
    // Loop through all the chapters
    for (var chapter in chapterObj) {
        // If new nearest chapter is found, make that the nearest chapter
        if (Math.abs(chapterObj[chapter] - pageNum) < smallestDistance) {
            smallestDistance = Math.abs(chapterObj[chapter] - pageNum);
            nearestChapter = [chapter];
        } else if (Math.abs(chapterObj[chapter] - pageNum) == smallestDistance) { // Second chapter equidistant from page number
            nearestChapter.push(chapter);
        }
    }
    // Determine chapter to return
    if (nearestChapter.length == 1) { // One chapter only
        return nearestChapter[0];
    } else { // Two chapters equidistant, so pick the one with the bigger page number
        if (chapterObj[nearestChapter[0]] > chapterObj[nearestChapter[1]]) {
            return nearestChapter[0];
        } else {
            return nearestChapter[1];
        }
    }
}

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* One of the sorting mechanisms that's commonly used is quick sort.  It's a sorting mechanism that is done
in place.  The idea behind quick sort is this:

1. Pick a pivot value.
2. Then place all values smaller than the pivot to the left, and values bigger than the pivot to the right.  
(You might need to move the pivot in the array.)  So we're partitioning the array into three parts: one with
values smaller than the pivot, the pivot value itself (and possibly any duplicates), and values bigger than
the pivot.
3. Repeat steps 1 and 2 for the smaller subarrays to the left and right of the pivot.

Thus is a recursive sort.  Notice that the pivots are moved to the correctly spot immediately, so we don't
need to touch them again after partitioning the array.

*/

/* Challenge 8: Partition the array

You're given an array and a pivot value, plus an optional starting and ending index, with those two values defaulting to
0 and the last index in the array, respectively.  Your goal is to partition the array in place so that all values smaller
than the pivot are to the left, all values equal to the pivot are in the middle, and all values greater than
the pivot are to the right.  Return an array containing these values: 
[index of last value smaller than pivot, index of first value larger than pivot]

You might find some information on what's called the "Dutch national flag problem" useful to help you write this function.
*/

function partition(arr, midVal, i = 0, k = arr.length - 1) {
    /* Goal: Rearrange array into 3 partitions so that:
    - Partition 1: All values < midVal occur at indices [0, i-1]
    - Partition 2: All values = midVal occur at indices [i, k]
    - Partition 3: All values > midVal occur at indices [k+1, array's length - 1]

    j is a pointer indicating where in the array we are right now
    */
    j = i;
    while (j <= k) {
        if (arr[j] < midVal) {
            // console.log("Swapping values at indices",i,"and",j);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
            // console.log("Array now =",arr);
        } else if (arr[j] > midVal) {
            // console.log("Swapping values at indices",j,"and",k);
            var temp = arr[k];
            arr[k] = arr[j];
            arr[j] = temp;
            k--;
            // console.log("Array now =",arr);
        } else {
            // console.log("Matching value found at index",j);
            j++;
        }
    }
    return [i-1,k+1]; // Return indices indicating where the first partition ends and the last partition starts
}

/* Challenge 9: Quick sort

Using your partitioning function from challenge 8, implement quick sort.  All operations should be in place.
*/

function quickSort(arr, leftInd = 0, rightInd = arr.length - 1) {
    // If indices out of bounds or we have at most 1 element
    if (leftInd < 0 || rightInd > arr.length - 1 || leftInd >= rightInd) {
        return;
    }
    // Pick pivot value - we'll pick value in middle of array by choice
    var pivotInd = Math.floor((leftInd+rightInd)/2);
    var pivotVal = arr[pivotInd];
    // Partition array
    var newInd = partition(arr,pivotVal,leftInd,rightInd);
    var newLeftInd = newInd[0], newRightInd = newInd[1];
    // Quick sort left partition
    // console.log(`Array partitioned into indices ${leftInd} to ${newLeftInd}, ${newLeftInd+1} to ${newRightInd-1} and ${newRightInd} to ${rightInd}`);
    // console.log(`Quick sorting left array from indices ${leftInd} to ${newLeftInd}`);
    quickSort(arr, leftInd, newLeftInd);
    // Quick sort right partition
    // console.log(`Quick sorting right array from indices ${newRightInd} to ${rightInd}`);
    quickSort(arr, newRightInd, rightInd);
}