// ---------------Print odd numbers in an array

let inputData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortOddNumbers = (numbers) => {
  let oddNumbers = numbers.filter((number) => number % 2);
  console.log(oddNumbers);
};
console.log(sortOddNumbers(inputData));

// ------------Convert all the strings to title caps in a string array

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

// --------------Sum of all numbers in an array

let arr = [13, 25, 78, 3, 1, 6, 8, 12, 4];

function sumOfNum(arr) {
  return arr.reduce((acc, crr) => acc + crr);
}

console.log(sumOfNum(arr));

// -----------------Return all the prime numbers in an array

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

