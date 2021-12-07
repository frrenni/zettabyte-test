// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
    // Your Code Here
    arr2.forEach(function(i) {
        if (arr1.indexOf(i) < 0) {
            if (arr2.indexOf(i) % 2 !== 0) {
                arr1.push(i);
            } else {
                arr1.unshift(i);
            }
        }
    });
    return arr1;
}

console.log(result(arr1, arr2));