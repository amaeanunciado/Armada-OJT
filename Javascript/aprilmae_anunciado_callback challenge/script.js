//Custom Map function

function customMap(arr, callback){
    let output=[];
    for (let i=0;i<arr.length;i++){
        output.push(callback (arr[i]));
    }
    return output;
}
let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled); // Should output: [2,4,6]

//Filter Function

function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let filteredResult = filter([1, 2, 3, 4, 15], function(val) { return val < 10; });
console.log(filteredResult); // Should output: [1,2,3,4]

//Some Function

function someFunction(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let result = someFunction([1, 2, 3, 4], function(val) { return val > 2; });
console.log(result); // Should output: true

//Every Function

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}

let everyResult = every([1, 2, 3], function(val) { return val > 0; });
console.log(everyResult); // Should output: true

//Reduce Function
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; }, 0);
console.log(sum); // Should output: 6

//Includes Check Function

function includescheck(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let includesResult = includescheck([1, 2, 3], function(val) { return val === 2; });
console.log(includesResult); // Should output: true