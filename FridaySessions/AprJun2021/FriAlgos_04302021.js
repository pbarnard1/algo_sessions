/* Keep your JavaScript skills fresh */

/* Challenge 1: Leap year
A leap year occurs when the year is divisible by 4.  There are exceptions, however:
- If the year is divisble by 100 as well, it is NOT a leap year - but there's an exception to this too:
  * If the year is divisible by 400, that is a leap year.
Write a function that returns true if the given year is a leap year and false otherwise. 
Examples: 2008 -> true, 2000 -> true (divisible by 400), 1900 -> false (divisible by 100 but not 400), 1885 -> false */

/* Challenge 2: Sum numbers from 1 to N to a specific goal 
Given a goal sum X, return the smallest integer N such the sum 1 + 2 + 3 + ... + N >= X.
Examples:
* Goal: 100: return 14 since 1 + 2 + 3 + 4 + 5 + ... + 14 = 105 >= 100 (summing 1 to 13 gives us 91, which is not enough)
* Goal: 10: return 4 since 1 + 2 + 3 + 4 = 10 >= 10
HINT: You might find a while loop useful. */

/* Challenge 3: Format phone number
From edabit: https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
You're given an array representing a phone number's digits.  Return a string in the format (XXX) YYY-ZZZZ.
Examples:
* [2, 0, 6, 5, 5, 5, 1, 8, 0, 0] returns "(206) 555-1800"
* [4, 2, 5, 5, 5, 5, 8, 9, 7, 7] returns "(425) 555-8977"
*/

/* String and array challenges */

/* Challenge 4: All rotations of a string
From edabit: https://edabit.com/challenge/XoBFQ9CJDBFEKEAj9
Given a string, return all rotations of the string in an array.  The rotations can be in any order.

Extra challenge: how can we do it so there are no duplicates?  (Example: "mama" should return only ["mama","amam"].)
Examples: 
* "a" -> ["a"]
* "xyz" -> ["xyz","yzx","zxy"]
*/


/* Challenge 5: Stock picker
From edabit: https://edabit.com/challenge/DQR6rjLkFtKgoqgWX
You're given an array representing stock prices.  Return the maximum profit you can make.  

If no profit cannot be made, return -1.  (This means the stock price is always decreasing or staying the same.)

Examples:
* [5, 8, 15, 2, 8] should return 10 because you buy when it's 5 and sell when it's 15.
* [10, 8, 4, 2] returns -1 since you can't make a profit.
* [] returns -1
* [5] returns -1
* [11, 11, 11] returns -1 since you can't make a profit
*/


/* Object challenges */
/* Challenge 6: Highest and lowest averages
You're given an array of objects representing a person and an array of their scores on quizzes.  
Return an array of objects containing at index 0 the highest scorer on average, then the lowest scorer on average in index 1.

Example:
students = [
    {name: 'Mary', scores: [10, 5, 7, 8]},
    {name: 'John', scores: [10, 10, 10]},
    {name: 'George', scores: [3, 4, 1, 9, 8]},
    {name: 'Tina', scores: [2, 4, 9, 10]},
    {name: 'David', scores: [3, 1, 5]},
]
You'd return:
[
    {name: 'John', scores: [10, 10, 10]}, // Highest average
    {name: 'David', scores: [3, 1, 5]} // Lowest average
]
*/ 

/* Challenge 7: Make recipes
You're given an object that represents ingredients with quantities, like 3 bags of flour.
You're also given an object representing the ingredients needed for a recipe.  Your goal is to return
the maximum number of times you can make the recipe with the ingredients you have.  If an ingredient is missing,
return 0.

Examples:
pantry = {
    'Flour (cup)': 10,
    'Milk (cup)': 50,
    'Sugar (cup)': 40,
    'Chocolate chip': 500,
    'Macaroni (cup)': 30,
    'Cheese (slice)': 100
}

recipe1 = {
    'Macaroni (cup)': 2,
    'Milk (cup)': 1,
    'Cheese (slice)': 2  
}
Using pantry and recipe1, you'd return 15 since you can use all the macaroni up and still have milk and cheese left over.

recipe2 = {
    'Bag of brownie mix': 1,
    'Cup of milk': 1
}
Using pantry and recipe2, you'd return 0 since you don't have any brownie mix in your pantry.
*/

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* Challenge 8: Rising Squares
From the Learning Platform in the Projects & Algorithms part of the program

Ever since her dad discovered universal truths about triangles, Sophia Pythagoras has loved square numbers. 
Given a positive integer, successively print squares of integers up to that integer, first ascending odds, 
then descending evens. Solve recursively with no loops. 

Ex.: risingSquare(5) returns "1, 9, 25, 16, 4", risingSquare(8) returns "1, 9, 25, 49, 64, 36, 16, 4".
*/

/* Challenge 9: Binary String Expansion
From page 129 in the Algorithm Book

You are given a string containing chars ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ can be substituted. 
Write a recursive function to return an array of all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. 
binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string functions such as slice(), 
use them sparingly, as they are expensive.
*/