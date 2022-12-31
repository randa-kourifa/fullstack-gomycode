//1. sumOfDistinct
let arr1 = [8, 16, 9, 18, 20];
let arr2 = [8, 9, 20, 17, 21];
function sumOfDistinct(arr1, arr2) {
  let hash = {};
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!hash[arr1[i]]) {
      hash[arr1[i]] = true;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!hash[arr2[i]]) {
      hash[arr2[i]] = true;
    } else {
      hash[arr2[i]] = false;
    }
  }
  for (let key in hash) {
    if (hash[key]) {
      key = parseInt(key);
      sum += key;
    }
  }
  return sum;
}
console.log(sumOfDistinct(arr1, arr2));
//sumOfOverlapping
let arr3 = [20, 30, 40, 50];
let arr4 = [20, 40, 60, 80];
function sumOfOverlapping(arr3, arr4) {
  let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr4.length; j++) {
      if (arr3[i] === arr4[j]) {
        sum += arr3[i];
      }
    }
  }
  return sum * 2;
}
console.log(sumOfOverlapping(arr3, arr4));
