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

/* Challenge 2: Nth to Last
Given an array and an integer N, return the Nth to last item in the array.  If the array is too short or the input
is invalid (e.g. N <= 0), return null.

Examples:
[3, 1, 4, 5, 3], N = 2 - return 5
[3, 1, 4, 5, 8], N = 1 - return 8
[1, 8, 2], N = 4 - return null (only 3 elements)
*/

/* Challenge 3: Reverse string

Given a string, return a new string with its contents reversed.  Do NOT use built-in methods like reverse().
*/

/* String and array challenges */

/* Challenge 4: Is Pangram

A pangram is a sequence of words that contain all 26 letters of the English alphabet at least once.  Write a
function that returns whether a string is a pangram, case insensitive.

Examples:
"How quickly daft jumping zebras vex!" - return true
"abcdef ghijkl mno pqrs tuv wxy, not so fast!" - return false
*/

/* Challenge 5: Balance Index

An array is balanced at a specific index if the sum of the values to the left of the index (but not including the index itself)
equals the sum of the numbers to the right of the index, again excluding the index.  Write a function that takes in an array
and returns the balance index or -1 if it cannot be found.

Example:
[3, 4, 5, -2, 9] returns 2 since 3 + 4 = 7 and -2 + 9 = 7; index 2 is where we separate the two
[4, 3, 7] returns -1
[3, 3] returns -1
[1, 2, 3, 5, 6] returns 3 since 1 + 2 + 3 = 6 and we only have 6 to the right
*/

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

/* Challenge 9: Quick sort

Using your partitioning function from challenge 8, implement quick sort.  All operations should be in place.
*/