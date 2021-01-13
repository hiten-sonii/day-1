"use strict";

// Sort in ascending order
const up = function (arr) {
  let newArr = arr.sort(function(a, b)
  {
      return a - b;
  });
  return newArr;
}
// Sort in descending order
const down = function(arr) {
  let newArr = arr.sort(function(a, b)
  {
      return b - a;
  });
  return newArr;
}

// Max
const findMax = function () {
  return Math.max(...arr);
};

// Min
const findMin = function () {
  return Math.min(...arr);
};

// Sum
const findSum = function () {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

// Median
const findMedian = function () {
  let arr1 = arr.sort(function (a, b) {
    a - b;
  });
  let mid = Math.floor(arr1.length / 2);
  if (arr1.length % 2) {
    return arr1[mid];
  } else {
    return (arr1[mid - 1] + arr1[mid]) / 2;
  }
  // console.log(median);
};

// Deviation
const findDeviation = function () {
  const mean = findMean();
  let sumOfSquares = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfSquares += (arr[i] - mean) * (arr[i] - mean);
  }
  const val = sumOfSquares / arr.length;
  return Math.sqrt(val);
};

// Mean
const findMean = function () {
  const sum = findSum();
  const mean = sum / arr.length;
  return mean;
};


// CONNECTING HTML ELEMENTS WITH JS
const inputField = document.querySelector('.input');
const outputField = document.querySelector('.result');
let arr = [];


// ADDING EVENT LISTENERS TO BUTTONS

document.querySelector('.btnSubmit').addEventListener('click',function(){
  arr = [];
  let strArray = inputField.value.split(' ');
  for(let i = 0;i<strArray.length;i++){
    arr.push(Number(strArray[i]));
  }
});


document.querySelector('.btnSortUp').addEventListener('click', function(){
  let sorted = up(arr);
  console.log('Sorted array', sorted);
  outputField.innerHTML = sorted;
});


document.querySelector('.btnSortDown').addEventListener('click', function(){
  let sorted = down(arr);
  console.log(sorted);
  outputField.innerHTML = sorted;
});

document.querySelector('.btnFindMin').addEventListener('click', function(){
  let min = findMin(arr);
  console.log(min);
  outputField.innerHTML = min;
});

document.querySelector('.btnFindMax').addEventListener('click', function(){
  let max = findMax(arr);
  console.log(max);
  outputField.innerHTML = max;
});

document.querySelector('.btnFindSum').addEventListener('click', function(){
  let sum = findSum(arr);
  console.log(sum);
  outputField.innerHTML = sum.toFixed(3);
});

document.querySelector('.btnFindMean').addEventListener('click', function(){
  let mean = findMean(arr);
  console.log(mean);
  outputField.innerHTML = mean.toFixed(3);
});

document.querySelector('.btnFindMedian').addEventListener('click', function(){
  let median = findMedian(arr);
  console.log(median);
  outputField.innerHTML = median.toFixed(3);
});

document.querySelector('.btnFindDeviation').addEventListener('click', function(){
  let deviation = findDeviation(arr);
  console.log(deviation);
  outputField.innerHTML = deviation.toFixed(3);
});