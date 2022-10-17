// ---------------Print odd numbers in an array------------------------------------

let inputData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortOddNumbers = (numbers) => {
  let oddNumbers = numbers.filter((number) => number % 2);
  console.log(oddNumbers);
};
console.log(sortOddNumbers(inputData));

// ------------Convert all the strings to title caps in a string array--------------

let msg = "Convert all the strings to title caps in a string array";

function titleCase(msg) {
  let step1 = msg.split(" ");
  let step2 = step1.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
  let step3 = step2.join(" ");
  console.log(step3);
}

titleCase(msg);

// --------------Sum of all numbers in an array--------------------------------------

let arr = [13, 25, 78, 3, 1, 6, 8, 12, 4];

function sumOfNum(arr) {
  return arr.reduce((acc, crr) => acc + crr);
}

console.log(sumOfNum(arr));

// -----------------Return all the prime numbers in an array-------------------------

let findPrimeNum = function isPrime(n) {
  if (n < 2) return `${n} is not a Prime Number`;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a Prime Number`;
    }
  }
  return `${n} is a Prime Number`;
};
console.log(findPrimeNum(117));

// ------------------- Return all the prime numbers in an array-----------------------

let checkPalin = function palindrome(input) {
  let reveresePalin = input.split("").reverse().join("");
  if (reveresePalin === input) {
    return `${input} is a palindrome`;
  } else {
    return `${input} is not a palindrome`;
  }
};
console.log(checkPalin("racecar"));

//-------------------Remove duplicates from an array---------------------------------

let arr = [1, 2, 3, 4, 2, 3, 6, 7, 9, 6, 9];
let obj = {};

for (let i of arr) {
  obj[i] = true;
}
let b = Object.keys(obj);

console.log(b);

//---------------------Rotate an array by k times-----------------------------------

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 10;

function arrRotation(arr, numOfRotation) {
  for (let i = 0; i < numOfRotation; i++) {
    arr.unshift(arr.pop());
    console.log(`step${i + 1}:`, arr);
  }
}

arrRotation(num, k);


