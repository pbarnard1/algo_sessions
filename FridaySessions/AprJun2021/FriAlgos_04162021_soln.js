/* Breakout room 1 - JavaScript practice */

/* Challenge 1: Area of a circle
Given a circle's radius, return the area of the circle.  The area of a circle is given by pi*radius^2, where pi is the math
constant 3.14159....  You are encouraged to look up the Math module in JavaScript to get the value of pi and perhaps use
another method or two along the way.
*/
function areaOfCircle(radius) {
    return Math.PI*Math.pow(radius,2); // pi*r^2 = Area
}

/* Challenge 2: Count characters in a string
From edabit: https://edabit.com/challenge/kbFhwaDyrd79JrgeB
Create a function that takes two strings as arguments and returns the number of times the 
first string (the single character) - case sensitive - is found in the second string.
Examples: 
"e" in "hello" returns 1
"i" in "I love coding!  Yes I do!" returns 1; we're not counting the upper-case "I"s
"M" in "Money! Money! Money is mucho good" returns 3; the lower-case "m" doesn't count
*/

function countChar(char, str) {
    var count = 0; // Initialize count of characters found
    // Loop through string
    for (var k = 0; k < str.length; k++) {
        var curChar = str[k];
        if (curChar === char) { // If characters match, increment count
            count++;
        }
    }
    return count;
}

// // For testing:
// console.log(countChar('e','hello'));
// console.log(countChar('i','I love coding!  Yes I do!'));
// console.log(countChar('M','Money! Money! Money is mucho good'));


/* Challenge 3: Create an array of odd integers EXCLUDING certain values
Create and return an array of odd integers from 1 to 299, EXCLUDING values that are multiples of 5, so for example: 5, 15, 25, etc. 
Solve this two ways: using a for loop, and alternately using a while loop.
Additional challenge: Accept integers X and Y, where Y > X, so that you do the same exact thing from X to Y.
Additional challenge 2: What if X > Y instead?  In other words, the order now doesn't matter for the inputs.
*/

function oddArray() {
    var newArr = []; // Start with empty array, then we'll put in values as we go
    // Loop through odd integers
    for (var k = 1; k <= 299; k += 2) { // Note the increment by 2 here!
        if (k % 5 !== 0) { // Only add to array if not a multiple of two
            newArr.push(k);
        }
    }
    return newArr;
}

// // For testing:
// console.log(oddArray());

function oddArrayV2(X,Y) {
    // To account for if X and Y were reversed so that X was actually bigger
    var smallerVal = Math.min(X,Y);
    var biggerVal = Math.max(X,Y);
    var newArr = [];
    // Loop like before - but now must go by 1 instead of 2 since we don't know if starting value is even or dd
    for (var k = smallerVal; k <= biggerVal; k++) {
        if (k % 2 === 1 && k % 5 !== 0) { // If odd AND not divisible by 5
            newArr.push(k);
        }
    }
    return newArr;
}

// // For testing:
// console.log(oddArrayV2(100,55));
// console.log(oddArrayV2(11,214));


/* Challenge 4: Stack the boxes
From edabit: https://edabit.com/challenge/QifJBFwg32GNdiWQa - has a visual as well

Let n be the height of the tallest stack of boxes.  Now going in two different directions, build another tower that has one
less box, then another tower with one less box than that, etc., until there is only a single box in a stack.  Return the 
total number of boxes used.  Use a loop of your choice to solve this.

Examples:
n = 0: returns 0, no boxes used
n = 1: returns 1 (1), where there is only a single tower of 1 box
n = 2: returns 4 (1 + 2 + 1), where the middle tower is 2 boxes high
n = 3: returns 9 (1 + 2 + 3 + 2 + 1), where the middle tower is 3 boxes high
n = 4: returns 16 (1 + 2 + 3 + 4 + 3 + 2 + 1), where the middle tower is 4 boxes high
*/

function stackTheBoxes(n) {
    n = Math.floor(n); // Round n down to turn it into an integer
    if (n <= 0) { // If n is negative or 0, there are no boxes
        return 0;
    }
    var totalBoxes = n; // Start with tallest tower
    // Loop for smaller towers
    for (var k = n - 1; k > 0; k--) { // Start with second-tallest tower, then go down from there
        totalBoxes += 2*k; // Two smaller towers each time, so must multiply k by 2, then add to total
    }
    return totalBoxes;
}

// // For testing:
// console.log(stackTheBoxes(0));
// console.log(stackTheBoxes(1));
// console.log(stackTheBoxes(2));
// console.log(stackTheBoxes(3));
// console.log(stackTheBoxes(4));
// console.log(stackTheBoxes(5.5)); // Chops off .5, then should return 25

/* Breakout room 2 - Strings and arrays */

/* Challenge 1: Book Index (from the algorithm book, page 69)
Given a sorted array of pages where a term appears, return an index string like so:
Consecutive pages should form ranges separated by a hyphen, with each page or range separated by a comma.
For [1,13,14,15,37,38,70], return this string: "1, 13-15, 37-38, 70". 
Punctuation MUST be exact.
*/

function bookIndex(arr) {
    var bookStr = "";
    if (arr.length == 0) { // If array is empty
        return bookStr; // Return empty string
    } else { // At least one page
        bookStr += arr[0]; // Start with first page
        var needHyphen = true;
        for (var k = 1; k < arr.length; k++) { // Loop for each page in array after first one
            if (arr[k] - 1 == arr[k - 1]) { // If part of consecutive page streak
                if (needHyphen) { // If hyphen not included yet, add it
                    needHyphen = false;
                    bookStr += "-";
                }
                if (k == arr.length - 1) { // If at end of array (or loop) and you're in a range
                    bookStr += arr[k]; // Add last page
                }
            } else { // End of streak or separate page by itself
                if (bookStr[bookStr.length-1] == "-") { // End of range, so store final page number in that sequence
                    bookStr += arr[k-1];
                }
                bookStr += ", "+arr[k];
                needHyphen = true; // Have hyphen ready if needed (like start of streak)
            }
        }
        return bookStr;
    }
}

// Similar version worked on in the algorithm session:
function bookIndexV2(arr) {
    // Start with an empty string that we will return eventually
    // Use a boolean to indicate if we need a hyphen when we're not in a sequence or at the start of one
    var rangeStr = "";
    // Edge case - an empty array - so return an empty string
    if (arr.length === 0) {
        return rangeStr;
    }
    rangeStr += arr[0]; // Start string with first page number given
    // Edge case - only one page given
    if (arr.length === 1) {
        return rangeStr;
    }
    // [1, 2] "1-2"
    // [1, 3] "1, 3"
    // [1, 2, 3] "1-3"
    // [1, 3, 4] "1, 3-4"
    // [1, 2, 3, 4] "1-4"
    // [1, 2, 8, 9] "1-2, 8-9"
    // [1, 2, 3, 10] "1-3, 10"
    // [1, 2, 3, 8, 11, 14] "1-3, 8, 11"
    var needsHyphen = true; // True if we're not in a sequence or one is about to start
    // Starting with the *second* given page (index 1), loop through each page
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] - arr[k-1] === 1) { // We're in a sequence
            if (needsHyphen) {
                rangeStr += "-";
                if (arr.length - 1 === k) { // At end of sequence
                    rangeStr += arr[k];
                }
                needsHyphen = false; // Hyphen now inserted
            } else if (arr.length - 1 === k) { // At end of sequence
                rangeStr += arr[k];
            } 
        } else { // Not in sequence
            if (!needsHyphen) {
                rangeStr += arr[k-1]; // Add previous page number - end of sequence
                needsHyphen = true; // Now sequence is over, so get ready for next sequence, whenever thta is
            } 
            rangeStr += ", " + arr[k]; // Insert comma and space after sequence or lone page
        }
    }
    return rangeStr;
}

// // For testing:
// var test1 = [1, 13, 14, 15, 37, 38, 70] // Output: "1, 13-15, 37-38, 70"
// var test2 = [1, 2, 3]; // Output: "1-3"
// var test3 = [5]; // Output: "5"
// var test4 = []; // Output: ""
// var test5 = [1,2,3,4,5,8,9,10,15]; // Output: "1-5, 8-10, 15"
// var test6 = [1, 3, 6, 8, 11, 12, 13, 16, 17]; // Output: "1, 3, 6, 8, 11-13, 16-17"

/* Challenge 2: Dashatize it (from Code Wars)
Given a value "num", return a string with dashes inserted on either side anytime an odd digit appears.  
If the number is negative, remove the negative first, then insert dashes accordingly.
Do NOT have the string start and end with a dash.  If you're given something that isn't a number,
return an empty string.

Examples:
69667793 returns "6-9-66-7-7-9-3" - notice there's no ending dash
5311 returns "5-3-1-1" - notice there's no leading or ending dash
200 returns "200" - no dashes inserted
251025 returns "2-5-1-02-5"
*/

function dashatize(num) {
    if (isNaN(parseInt(num))) { // If given a string, null, NaN, true/false, etc.
        return "";
    }
    num = Math.abs(num); // Remove negative
    var strNum = ""+num; // Turn number into string
    var dashedNum = ""; // Dashed number
    // Loop through string
    for (var k = 0; k < strNum.length; k++) {
        var curNum = parseInt(strNum[k]);
        if (curNum % 2 === 0) { // Even number
            dashedNum += curNum;
        } else { // Odd number
            // If no dash from before, add a dash if it's not the first digit
            if (dashedNum[dashedNum.length - 1] !== "-" && k > 0) {
                dashedNum += "-";
            }
            dashedNum += curNum; // Add number
            if (k < strNum.length - 1) { // If not the last digit, add a "-" afterwards
                dashedNum += "-";
            }
        }
    }
    return dashedNum;
}

// // For testing:
// console.log(dashatize(69667793));
// console.log(dashatize(5311));
// console.log(dashatize(200));
// console.log(dashatize(251025));


/* Main room - More advanced concepts, including recursion, sorts, various objects like stacks, queues, trees */

// For these two challenges, use the stack and queue classes from last week.

/* Challenge 1: Reverse first k items in a queue
Given a queue, reverse the first k nodes in the queue (i.e. the oldest k nodes).  
If there are not enough nodes, reverse all the nodes you have.
*/

function reverseKQueue(queue, k) {
    if (k < 1) { // If k is negative or 0 (or a decimal less than 1), no need to reverse
        return;
    }
    k = Math.floor(k); // Round k down
    var leftoverCount = Math.max(queue.size() - k,0); // Check to see how many nodes are left after removing - can't be negative
    var tempStack = new Stack(); // Temporary stack
    var count = 0;
    // Remove k nodes from queue and put them in stack - provided there are nodes available
    while (queue.front && count < k) {
        tempStack.push(queue.dequeue());
        count++;
    }
    // Move nodes from stack to queue
    while (tempStack.top) {
        queue.enqueue(tempStack.pop());
    }
    // Now put old nodes in the back
    count = 0;
    while (count < leftoverCount) {
        queue.enqueue(queue.dequeue());
        count++;
    }
}

/* Challenge 2: Sort a stack using another stack - only use pop and push methods
Given a stack of numbers, sort it so that its smallest value is at the top and its largest value is at the bottom.
*/

function sortStack(stack) {
    if (!stack.top || !stack.top.next) { // If no nodes or at most one node - no need to sort
        return;
    }
    var tempStack = new Stack(); // Second stack for storage
    tempStack.push(stack.pop()); // Move first value to new stack temporarily
    while (stack.top) { // While there is at least one node in the stack
        var curNode = stack.pop(); // Get node at top of stack
        if (tempStack.top && curNode.val < tempStack.top.val) { // If value is smaller than that in top of temporary stack
            while (tempStack.top && curNode.val < tempStack.top.val) { // Move values in temp stack back to original stack until a value smaller than curNode found
                stack.push(tempStack.pop());
            }
        }
        tempStack.push(curNode); // Now put new node in temporary stack
    }
    // Move back to original stack after everything's sorted
    while (tempStack.top) {
        stack.push(tempStack.pop());
    }
}