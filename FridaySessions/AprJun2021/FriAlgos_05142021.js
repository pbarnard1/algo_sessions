/* Keep your JavaScript skills fresh */

/* Challenge 1: Add max and min to array
Write a function that accepts an array and appends the minimum and maximum, in that order, at the
end of the array.  If the array has 2 or fewer elements, don't append anything - leave the array as is.

Ask yourself - do we need to return the array back?
*/

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


/* Object challenges */

/* Challenge 6: Online Shopping
From edabit: https://edabit.com/challenge/5qYYauQwYwxz3nd9R

You are shopping online.  Your cart is represented by an object, where each key is the item you're
buying and each value is the price you're paying.  Your order is eligible for free shipping if the
cart totals 100 dollars or more.  Make a function that returns true if you're eligible for free
shipping and false otherwise.
*/

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


/* Challenge 9: Binary search (no recursion)

Binary search is a way to efficiently search for a value in a sorted array.  The idea is that
you split the array up in half each time, then look for the value in the smaller array.  The array that is
picked is the one that has its min <= value <= max.  Then continue to break the array up into smaller
ones until the value is found.  When you are down to two numbers, check to see if either one equals
the value you're searching for.

Your goal is to implement the binary search algorithm to find a value in a sorted array.  Return
the index where the value is found, or -1 if it isn't found.  Do NOT use built-in array methods.

Using big O notation:
Time complexity: O(     )
Space complexity: O(     )
*/