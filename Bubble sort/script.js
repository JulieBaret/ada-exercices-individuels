//exercice individuel
function sortMyArray(arr){
    let stop = arr.length
    while(stop>1){
        for(let i= 0; i<stop-1; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        stop--;
    }
    return arr;
}

let arr1 = [-3, -5, 1, 8, 9];
let result = sortMyArray(arr1);
console.log(result);

//exercice Fizzbuzz
function Fizzbuzz(){
    let array = [];
    for (let i = 1; i <= 100; i++){
        if (i % 15 == 0){
            array.push("Fizzbuzz");
        } else if (i % 3 == 0){
            array.push("Fizz");
        } else if (i % 5 == 0){
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log(Fizzbuzz());