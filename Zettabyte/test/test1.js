// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
    let temp = 0;
    // Your Code Here
    for (let i = 0; i < input.length; i++) {
        temp += input[i];
    }
    return temp;
}

console.log(result(input));