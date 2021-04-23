/* Keep your JavaScript skills fresh: */

/* Challenge 1: Countdown array
Given a positive integer, create and return an array starting with that number, counting down by 1 all the way to 0.
Example: 5 should return [5, 4, 3, 2, 1, 0]
*/

/* Challenge 2: Reformat name
Given two strings representing a first name and last name, return a new string with the format
"last name, first name".  For example, given "Jack" and "Sparrow", return "Sparrow, Jack".
*/

/* Challenge 3: I love threes!
Given an integer X, return a new array of values from 1 to X, except whenever you get a number divisible by 3,
put in the string "I love threes!"
Example: Given 7 -> return [1, 2, "I love threes!", 4, 5, "I love threes!", 7]
*/

/* String and array challenges: */

/* Challenge 1: Multiply numbers in a string
From edabit: https://edabit.com/challenge/TzxoYExuxuQw2ahWR
Given a string in a format like so: "3, 8, 11", where each number is separated by a commas, return a number that
is the product of each item in the string.  You may assume that you'll only be given numbers.
Examples: "3, 8, 11" returns 3*8*11 = 264; "2, 3, 4" returns 24; "0, 5, 111, -4" returns 0
Can you think of a way to do this with ONE line?
*/

/* Challenge 2: Find common elements
From edabit: https://edabit.com/challenge/jtAvQyyDpFA2EaCcj
Given two sorted arrays, return a new array containing all entries common to both arrays:

Example: Given [1, 3, 5, 8, 11, 12] and [2, 3, 4, 5, 7, 10, 11], return [3, 5, 11]

For this exercise, do not include duplicates, even if they appear in both arrays at least twice.  
Just get the values common to both arrays.
*/

/* Object challenges: */

/* Challenge 1: Convert object to array
From Edabit: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM
Given an object, return an array like so:
Example 1: {"a": 10, "b": ['Hello','world']} changes to [["a",10],["b",['Hello','World']]]
In other words, return an array with each index representing another array with the format ["key", value].
The key-value arrays can be in any order, just as long as the keys and values match accordingly.
Should the object be empty, return an empty array.
*/

/* Challenge 2: Map the letters in a string
From Edabit: https://edabit.com/challenge/Bd2jQS9xA6QecB34h
Given a string, return an object where each character is a key, and the value represents an array of indices 
where the character can be found.
Example: "hello" -> {"h": [0], "e": [1], "l": [2, 3], "o": [4]}
What about case sensitivity and spaces?
*/

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

Your challenge is to rewrite this so that you can calculate terms like the 100th term fast without blowing the
call stack. */