// Print all the integers from 1 to 255.

// for loop with a counter
// for (var i = 1; i <= 255; i++) {
//     console.log(i)
// }
// console.log(number)

// Print all odd integers from 1 to 255.

// for loop with a counter
// for (var i = 1; i <= 255; i+=2) {
//     console.log(i)
// }

// Print integers from 0 to 255, with each integer print the sum so far.

// variable to store sum in
var sum = 0
// for loop with a counter that starts at 0 and finishes at 255
for (var i = 0; i <= 255; i++) {
    // print i
    console.log(i)
    // add i to sum
    sum += i
    // print sum
    console.log(sum)
}