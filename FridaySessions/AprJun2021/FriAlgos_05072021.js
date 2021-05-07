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

/* Challenge 2: Array elements divisible by X

Given a positive integer X > 1 and an array of integers, return a new array containing
only the numbers divisible by X.

Examples:
[3, 4, 7, 10, 5], X = 2 -> returns [4, 10]
[6, 11, 12, 3, 10], X = 3 -> returns [6, 12, 3]
*/

/* Challenge 3: Title Strings
From edabit: https://edabit.com/challenge/6q9iTtQdnZZM5Cbai

A title string is a string where every word is capitalized.  Create a function that
accepts a string and returns true if it is a title string and false otherwise.

Examples:
"I Love Math" -> true
"Green acres"-> false ("acres" not capitalized)
"The Price is Right" -> false ("is" not capitalized)
*/

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


/* Object challenges */

/* Challenge 6: Invert Keys and Values

Given an object, switch the keys and values around in place, where possible.  (Which
types of variables, like booleans, strings, etc., will you be able to perform the reversal?)
You may assume that there will not be any duplicate values (e.g. 'num': 5 and 'rating': 5). */


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