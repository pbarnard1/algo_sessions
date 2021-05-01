/* Keep your JavaScript skills fresh */

/* Challenge 1: Leap year
A leap year occurs when the year is divisible by 4.  There are exceptions, however:
- If the year is divisble by 100 as well, it is NOT a leap year - but there's an exception to this too:
  * If the year is divisible by 400, that is a leap year.
Write a function that returns true if the given year is a leap year and false otherwise. 
Examples: 2008 -> true, 2000 -> true (divisible by 400), 1900 -> false (divisible by 100 but not 400), 1885 -> false */

function isLeapYear(year) {
    if (year % 4 == 0) { // Year is divisible by 4
        if (year % 100 == 0 && year % 400 != 0) { // If divisible by 100 and NOT divisible by 400, then it's not a leap year
            return false;
        } else {
            return true;
        }
    } else { // Year is NOT divisible by 4, so not a leap year
        return false;
    }
}

/* Challenge 2: Sum numbers from 1 to N to a specific goal 
Given a goal sum X, return the smallest integer N such the sum 1 + 2 + 3 + ... + N >= X.
Examples:
* Goal: 100: return 14 since 1 + 2 + 3 + 4 + 5 + ... + 14 = 105 >= 100 (summing 1 to 13 gives us 91, which is not enough)
* Goal: 10: return 4 since 1 + 2 + 3 + 4 = 10 >= 10
HINT: You might find a while loop useful. */

function sum1toN(x) {
    var cumSum = 0; // Start sum off at 0
    var num = 0; // Start number at 0; it'll increment as we go
    // Add numbers as long as goal sum X is not reached, so use a while loop
    while (cumSum < x) {
        num++; // Increment number
        cumSum += num; // Add current number
    }
    return num; // Return the value N
}

/* Challenge 3: Format phone number
From edabit: https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
You're given an array representing a phone number's digits.  Return a string in the format (XXX) YYY-ZZZZ.
Examples:
* [2, 0, 6, 5, 5, 5, 1, 8, 0, 0] returns "(206) 555-1800"
* [4, 2, 5, 5, 5, 5, 8, 9, 7, 7] returns "(425) 555-8977"
*/

function formatPhoneNumber(arr) {
    var phoneStr = "(";
    // Loop through digits
    for (var k = 0; k< arr.length; k++) {
        phoneStr += arr[k];
        if (k == 2) {
            phoneStr += ") "; // Add closing parentheses after 3rd digit (2nd index)
        } else if (k == 5) { // Add hyphen after 6th digit (5th index)
            phoneStr += "-";
        }
    }
    return phoneStr;
}

/* String and array challenges */

/* Challenge 4: All rotations of a string
From edabit: https://edabit.com/challenge/XoBFQ9CJDBFEKEAj9
Given a string, return all rotations of the string in an array.  The rotations can be in any order.

Extra challenge: how can we do it so there are no duplicates?  (Example: "mama" should return only ["mama","amam"].)
Examples: 
* "a" -> ["a"]
* "xyz" -> ["xyz","yzx","zxy"]
*/

// This version allows duplicates
function stringRotations(str) {
    var strArr = [str];
    for (var k = 0; k < str.length - 1; k++) {
        // substring(ind1, ind2) gets a substring starting at ind1 and ending at the index BEFORE ind2.  If ind2 is not
        // specified, it goes to the end of the string.
        // New string = last character(s) + first character(s);
        var rotatedStr = str.substring(k+1) + str.substring(0,k+1);
        strArr.push(rotatedStr);
    }
    return strArr;
}

// This version allows NO duplicates
function stringRotationsV2(str) {
    var strArr = [str];
    var dupesObj = {}; // Object containing keys which are rotations found so far - the values will be set to true (arbitrary)
    dupesObj[str] = true; // Add original string
    for (var k = 0; k < str.length - 1; k++) {
        // substring(ind1, ind2) gets a substring starting at ind1 and ending at the index BEFORE ind2.  If ind2 is not
        // specified, it goes to the end of the string.
        // New string = last character(s) + first character(s);
        var rotatedStr = str.substring(k+1) + str.substring(0,k+1);
        if (dupesObj[rotatedStr] == undefined) { // If no duplicate found, i.e. key not found in dupesObj
            strArr.push(rotatedStr); // Add new value
            dupesObj[rotatedStr] = true; // Insert into object
        }
    }
    return strArr;
}

/* From the session: */

function stringRotationsV3(str) {
    var strArr = []; // Array will eventually hold all the rotations of "str"
    // Loop through all possible rotations
    for (var i = 0; i < str.length; i++) {
        // Split the string in two
        var leftStr = str.substring(0,i);
        var rightStr = str.substring(i);
        strArr.push(rightStr + leftStr); // Right + left = rotation, now push to array
    }
    return strArr;
}

var myStr = "mama";
// "" "abcde" .substring(0,0) .substring(0) i = 0 "abcde" + "" = "abcde"
// "a" "bcde" .substring(0,1) .substring(1) i = 1 "bcde" + "a" = "bcdea"
// "ab" "cde" .substring(0,2) .substring(2) i = 2 "cde" + "ab" = "cdeab"
// "abc" "de" .substring(0,3) .substring(3) i = 3
// "abcd" "e" .substring(0,4) .substring(4)

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

function stockPicker(arr) {
    var diff = 0; // Max difference, initially set to 0
    // Nested for loop: i is index for first day (buying), j is index for second day (selling), and i < j
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            diff = Math.max(diff, arr[j] - arr[i]); // This will check the max profit for us - alternately can do "if" statement
        }
    }
    // If profit is positive, return that, otherwise return -1 for no profit found
    if (diff > 0) {
        return diff;
    } else {
        return -1;
    }
    // One-line version of if block using a ternary operator: "return diff > 0 ? diff : -1;"
}

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

function averageObjects(students) {
    if (students.length === 0) {
        return [];
    }
    // Set lowest and highest average to first person's average
    var lowestAvg = 0;
    // Loop through scores
    for (var k = 0; k < students[0].scores.length; k++) {
        lowestAvg += students[0].scores[k];
    }
    lowestAvg /= students[0].scores.length;
    var highestAvg = lowestAvg;
    // Indices indicating where the min and max averages are
    var lowestInd = 0, highestInd = 0;
    // Loop through remaining students
    for (var i = 1; i < students.length; i++) {
        var curStudent = students[i];
        var curAvg = 0;
        // Loop through current student's scores
        for (var j = 0; j < curStudent.scores.length; j++) {
            curAvg += curStudent.scores[j];
        }
        curAvg /= curStudent.scores.length;
        // Now compare to see if average is less than lowest or more than highest
        if (curAvg < lowestAvg) {
            lowestAvg = curAvg;
            lowestInd = i;
        } else if (curAvg > highestAvg) {
            highestAvg = curAvg;
            highestInd = i;
        }
    }
    return [students[highestInd], students[lowestInd]];
}

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

function makeRecipes(items, recipe) {
    var maxCount = Infinity;
    // Loop through ingredients in the recipe
    for (var ingredient in recipe) {
        if (!items[ingredient]) { // If item not found in pantry
            return 0;
        }
        // Number of times you can make recipe possibly with this specific ingredient
        // Example: 5 cups of milk for one recipe, but have 22 cups available - so you can use this recipe 4 times (22/4 rounded down)
        var numberCanBeMade = Math.floor(items[ingredient]/recipe[ingredient]);
        maxCount = Math.min(numberCanBeMade,maxCount);
    }
    return maxCount;
}

/* From the session: */
function makeRecipesV2(pantry,recipe) {
    var maxTimes = Infinity; // Maximum number of times you can make recipe (start at Infinity)
    // Loop through all the ingredients in the recipe
    for (var ingredient in recipe) {
        if (pantry[ingredient]) { // If ingredient is in pantry
            // Calculate number of times recipe can be make with current ingredient alone
            var numTimes = Math.floor(pantry[ingredient]/recipe[ingredient]);
            // Compare to previous ingredients how many times we can make recipe, taking the
            // smaller value
            maxTimes = Math.min(numTimes,maxTimes);
        } else { // Ingredient is NOT in pantry
            return 0;
        }
    }
    return maxTimes;
}

/* Challenges with more advanced concepts (e.g. recursion, binary search, sorts, memoization) 
and object-oriented programming (e.g. stacks, queues, trees, tries): */

/* Challenge 8: Rising Squares
From the Learning Platform in the Projects & Algorithms part of the program

Ever since her dad discovered universal truths about triangles, Sophia Pythagoras has loved square numbers. 
Given a positive integer, successively print squares of integers up to that integer, first ascending odds, 
then descending evens. Solve recursively with no loops. 

Ex.: risingSquare(5) returns "1, 9, 25, 16, 4", risingSquare(8) returns "1, 9, 25, 49, 64, 36, 16, 4".
*/

function risingSquares(num) {
    var sqrStr = "";
    if (num == 1) { // If number is 1, only print that
        sqrStr = "1";
    } else if (num > 1) { // If number is > 1, solve recursively
        sqrStr = recRisingSquares(num,1,sqrStr,true);
    }
    console.log(sqrStr);
}

function recRisingSquares(num,val,sqrStr,isIncreasing) {
    if (!isIncreasing && val <= 0) { // End of string
        return sqrStr;
    }
    if (isIncreasing) {
        if (val == num) { // Now begin decreasing evens if number matches exactly
            return recRisingSquares(num,val-1,sqrStr+", "+val*val,false);
        } else if (val + 2 > num) { // Begin decreasing evens, starting with the number 
            if (val === 1) { // Edge case: at val = 1 (beginning), so don't add a comma
                return recRisingSquares(num,val+1,sqrStr+val*val,false);
            } else {
                return recRisingSquares(num,val+1,sqrStr+", "+val*val,false);
            }
        } else { // Still increasing odds
            if (val === 1) { // Edge case: at val = 1 (beginning), so don't add a comma
                return recRisingSquares(num,val+2,sqrStr+val*val,true);
            } else {
                return recRisingSquares(num,val+2,sqrStr+", "+val*val,true);
            }
        }
    } else { // Decreasing evens continue
        return recRisingSquares(num,val-2,sqrStr+", "+val*val,false);
    }
}

/* Challenge 9: Binary String Expansion
From page 129 in the Algorithm Book

You are given a string containing chars ‘0’, ‘1’, and ‘?’. For every ‘?’, either ‘0’ or ‘1’ can be substituted. 
Write a recursive function to return an array of all valid strings with ‘?’ chars expanded to ‘0’ or ‘1’. 
binStrExpand("1?0?") => ["1000","1001","1100","1101"]. If you use string functions such as slice(), 
use them sparingly, as they are expensive.
*/

function binaryString(str) {
    var allCombos = [];
    rBinaryString(str,"",allCombos);
    return allCombos;
}

function rBinaryString(origStr, curStr, allCombos) {
    if (curStr.length === origStr.length) { // Base case: end of string, so push result to array
        allCombos.push(curStr);
    } else {
        var curInd = curStr.length;
        if (origStr[curInd] === '?') {
            rBinaryString(origStr,curStr+'0',allCombos);
            rBinaryString(origStr,curStr+'1',allCombos);
        } else {
            rBinaryString(origStr,curStr+origStr[curInd],allCombos);;
        }
    }
}
