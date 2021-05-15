var x = 6;
var y = 6;
var z = 8;
var first_array = [x, y, z, 45, 1];

// if (x < y) {
//     console.log('First condition was true!')
// } else if (z == 8) {
//     console.log('Second condition was true!')
// } else {
//     console.log('Nothing was true!')
// }

// console.log('Script is finished!')

function logArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            console.log(arr[i])
        }
    }

    return true
}

var returnedValue = logArray([1,2,3,4,5])

console.log(returnedValue)