"use strict";

let arr = prompt('Enter the array :').split(' ');
for(let i=0;i<arr.length;i++){
    arr[i] = parseInt(arr[i]);
}

// Sort in ascending order
const up = function(){
    let newArr = arr.sort(function(a, b){
        a-b;
    });
    console.log(newArr);
}

// Sort in descending order
const down = function(){
    let newArr = arr.sort(function(a, b){
        b-a;
    });
    let reversed = newArr.reverse();
    console.log(reversed);
}

// Max
const findMax = function(){
    return Math.max(...arr);
}

// Min
const findMin = function(){
    return Math.min(...arr);
}

// Sum
const findSum = function(){
    const sum = arr.reduce((a,b) => a + b, 0);
    return sum;
}

// Median
const findMedian = function(){
    let arr1 = arr.sort(function(a, b){
        a-b;
    });
    let mid = Math.floor(arr1.length/2);
    if(arr1.length%2){
        return arr1[mid]; 
    }
    else{
        return (arr1[mid-1]+arr1[mid])/2;
    }
    // console.log(median);
}

// Deviation
const findDeviation = function(){
    const mean = findMean();
    let sumOfSquares = 0;
    for(let i=0;i<arr.length;i++){
        sumOfSquares += (arr[i]-mean)*(arr[i]-mean);
    }
    const val = sumOfSquares/arr.length;
    return Math.sqrt(val);
}

// Mean
const findMean = function(){
    const sum = findSum();
    const mean = sum/arr.length;
    return mean;
}



console.log('Array Sorted in increasing order : ');
up();

console.log('Array sorted in decreasing order : ');
down();

console.log(`Maximum element in the array is : ${findMax()}`);

console.log(`Minimum element in the array is : ${findMin()}`);

console.log(`Sum of the elements of the array : ${findSum()}`);

console.log(`Median of the elements of the array : ${findMedian().toFixed(3)}`);

console.log(`Mean of the elements of the array is : ${findMean().toFixed(3)}`);

console.log(`Standard deviation of the elements of the array is : ${findDeviation().toFixed(3)}`);