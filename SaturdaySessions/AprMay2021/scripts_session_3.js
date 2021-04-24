// Iterate through a given array of numbers, printing each value.

// define a function that accepts a given array
function logArrayValues(arr) {
    // for loop that iterates through the given array
    for(var i = 0; i < arr.length; i++) {
        // print each value in the array
        console.log(arr[i])
    }
}

// logArrayValues([3,45,123,5,23,2])


// Given an array, find and print its highest number.

// define a function that accepts an array
function maxArray(arr) {
    // define a variable called "max" that stores the max number
    var max = arr[0]
    // for loop to iterate through the given array
    for (var i = 1; i < arr.length; i++) {
        // find the highest number in the array
        // if statement compares current value to "max"
        if (max < arr[i]) {
            max = arr[i]
        }
    }

    return max
}

// console.log(maxArray([4,2,40]))


// Given an array of numbers, return the average value of the array

// define a function that accepts an array
function returnAverage(arr) {
    // define a "sum" variable
    var sum = arr[0]
    // for loop for iterating through array
    for (var i = arr.length - 1; i > 0; i--) {
        // add each value to "sum"
        sum += arr[i]
    }
    // return average
    return sum / arr.length
}

console.log(returnAverage([3,43,12,5739]))

