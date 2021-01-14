"use strict";
let arr = [];
let map = new Map();

// Sort in ascending order
function up(arr) {
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });

  return newArr;
}

// Sort in descending order
function down(arr) {
  let newArr = arr.sort(function (a, b) {
    return b - a;
  });
  return newArr;
}

// Max
function findMax() {
  return Math.max(...arr);
}

// Min
function findMin() {
  return Math.min(...arr);
}

// Sum
function findSum() {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
}

// Median
function findMedian() {
  let arr1 = arr.sort(function (a, b) {
    a - b;
  });
  let mid = Math.floor(arr1.length / 2);
  if (arr1.length % 2) {
    return arr1[mid];
  } else {
    return (arr1[mid - 1] + arr1[mid]) / 2;
  }
}

// Deviation
function findDeviation() {
  const mean = findMean();
  let sumOfSquares = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfSquares += (arr[i] - mean) * (arr[i] - mean);
  }
  const val = sumOfSquares / arr.length;
  return Math.sqrt(val);
}

// Mean
const findMean = function () {
  if (map.get(5) == undefined) {
    map.set(5, findSum());
  }
  const mean = map.get(5) / arr.length;
  return mean;
};

// CONNECTING HTML ELEMENTS WITH JS
const inputField = document.querySelector(".inputData");
const outputField = document.querySelector(".output");
const dropdown = document.querySelector(".operation");

function takeInput() {
  arr = inputField.value.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (isNaN(arr[i])) {
      alert("Please re-enter your values!");
      inputField.value = "";
      arr = [];
    }
  }
  console.log(arr);
  map.clear();
}

const analyzeData = function () {
  let choice = Number(dropdown.value);
  let ans;
  if (arr.length == 0) {
    alert("Input is empty!");
  }
  console.log(arr);
  switch (choice) {
    case 1:
      if (map.get(choice) == undefined) {
        map.set(choice, up(arr));
      }
      console.log(up(arr));
      ans = map.get(choice);
      break;
    case 2:
      if (map.get(choice) == undefined) {
        map.set(choice, down(arr));
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 3:
      if (map.get(choice) == undefined) {
        map.set(choice, findMax());
      }
      ans = map.get(choice);
      console.log(ans);
      break;

    case 4:
      if (map.get(choice) == undefined) {
        map.set(choice, findMin());
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 5:
      if (map.get(choice) == undefined) {
        map.set(choice, findSum().toFixed(3));
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 6:
      if (map.get(choice) == undefined) {
        map.set(choice, findMean().toFixed(3));
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 7:
      if (map.get(choice) == undefined) {
        map.set(choice, findMedian().toFixed(3));
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 8:
      if (map.get(choice) == undefined) {
        map.set(choice, findDeviation().toFixed(3));
      }
      ans = map.get(choice);
      console.log(ans);
      break;
    case 0:
      alert("Please select a valid option!");
      break;
  }

  ans = "Your result is : " + ans;
  outputField.style.display = "";
  outputField.innerHTML = ans;
};
