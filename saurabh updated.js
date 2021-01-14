let arr = [];
let map = new Map();

function up(num) {
  let newNum = num.sort(function (a, b) {
    return a - b;
  });
  return newNum;
}
function down(num) {
  let newNum = num.sort(function (a, b) {
    return b - a;
  });
  return newNum;
}
function max(num) {
  let max = num.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
}
function min(num) {
  let min = num.reduce(function (a, b) {
    return Math.min(a, b);
  });
  return min;
}
function sum(num) {
  var addition = 0;
  console.log(num);
  for (var i = 0; i < num.length; i++) {
    addition = addition + parseInt(num[i]);
  }
  return addition;
}
function mean(num) {
  var men = sum(num);
  let mid = men / num.length;
  //   let res = mid.toFixe1 2 3 4 6 7 8 9 10d(3);
  return mid;
}
function median(num) {
  num = up(num);
  let mid = Math.floor(num.length / 2);
  if (num.length % 2) {
    return num[mid];
  } else {
    return (num[mid - 1] + num[mid]) / 2.0;
  }
}
function stdev(num) {
  let no = 0;
  const m = mean(num);
  for (i = 0; i < num.length; i++) no = no + Math.pow(num[i] - m, 2);
  const val = Math.sqrt(no / num.length);
  return val; //.toFixed(3);
}

const inputField = document.querySelector(".input");
const btnSubmit = document.querySelector(".btnSubmit");
const dropdown = document.querySelector(".dropdown");
const output = document.querySelector(".output");

btnSubmit.addEventListener("click", function () {
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
});

dropdown.addEventListener("change", function () {
  let choice = Number(dropdown.value);
  map.set(0, " ");
  if (map.get(choice) == undefined) {
    switch (choice) {
      case 1:
        let sortedUp = up(arr);
        console.log(sortedUp);
        map.set(choice, sortedUp);
        break;
      case 2:
        let sortedDown = down(arr);
        console.log(sortedDown);
        map.set(choice, sortedDown);
        break;
      case 3:
        map.set(choice, max(arr).toFixed(3));
        break;
      case 4:
        map.set(choice, min(arr).toFixed(3));
        break;
      case 5:
        map.set(choice, sum(arr).toFixed(3));
        break;
      case 6:
        map.set(choice, mean(arr).toFixed(3));
        break;
      case 7:
        map.set(choice, median(arr).toFixed(3));
        break;
      case 8:
        map.set(choice, stdev(arr).toFixed(3));
        break;
      default:
        break;
    }
  }
  let ans = map.get(choice);
  output.textContent = "Your answer is : " + ans;
});
