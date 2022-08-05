//Etape 1

function sum1(array) {
    const sum = array.reduce((a, b) => a + b);
    return sum
}

console.log(sum1([1, 4, 5, 10, 1]));

function sum1Bis(array) {
    let sum = 0;
    for (let number of array) {
        sum += number
    };
    return sum
}

console.log(sum1Bis([1, 4, 5, 10, 1]))

// Etape 2 

function sum2(array, arrayLength) {
    if (arrayLength == 0) {
        return 0;
    }
    console.log(array[arrayLength - 1]);
    return array[arrayLength - 1] + sum2(array, arrayLength - 1);
}

let myArray = [1, 2, 3, 4, 5];
console.log(sum2(myArray, myArray.length));

fun