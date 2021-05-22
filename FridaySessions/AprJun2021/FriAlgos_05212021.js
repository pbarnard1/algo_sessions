// Keep your JavaScript skills fresh

/* Challenge 1: Hello, Good-bye
From edabit: https://edabit.com/challenge/kLa2w7m4h849k8rmW

Given a string and an integer that can be either 0 or 1, return "Hello"+string if 1 or "Good-bye"+string if 0.
Examples: "John" and 1 returns "Hello John", "Adam" and 0 returns "Good-bye Adam"
*/

/* Challenge 2: Even All the Way
From edabit: https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

Given an array of integers, return a new array containing only even values that occur only at even indices.
Examples:
[2, 1, 7, 4, 6] returns [2, 6] since 2 and 6 are even and at indices 0 and 4, respectively; 4 is at an odd index (3)
[1, 2, 3, 4, 5] returns [] since all even numbers are at odd indices
*/

/* Challenge 3: Is Frequent Enough?

Given a string, a character and a number X, return true if the given character (case-sensitive) occurs X times or more
and false otherwise.  Solve this two different ways: one with a for loop and one with a while loop.  

Examples: "Mississippi", "s", 3 returns true since we have at least 3 occurrences of "s" (four in this case)
"Please", "s", 2 returns false because there's only one "s" and not 2
*/

// String and array challenges

/* Challenge 4: Is Word Alphabetical
(From Learning Platform, found in Projects & Algorithms section)
Given a string, return true if all contained letters are in alphabetical order and false otherwise.
Start with words with no punctuation, all lower case.
For a bonus, ignore case sensitivity.
As a final challenge, have the function ignore punctuation, spaces, etc.
*/

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
      -------------------------------

Suppose you have an array that represents the route in terms of rooms/halls you'd like to
traverse.  Return true if the route is possible and false otherwise.
Examples with this set-up:
[1, 3, "H", 7] returns true
[8, "H", 6, 5, 4] returns false since you can't directly go from the hall to room 6

How can you use objects to represent this room layout?  Are there other ways to represent this room?
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

/* Challenge 9: Implement merge sort itself

In this challenge, implement merge sort.  Use the function you wrote to merge two arrays to help you solve.
*/