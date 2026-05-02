
function juftlargaAjrat(arr) {
  let result = [];

  for (let g = 0; g < arr.length; g += 2) {
    result.push([arr[g], arr[g + 1]]);
  }

  return result;
}

// test
console.log(juftlargaAjrat([1, 2, 3, 4])); 
// [[1, 2], [3, 4]]

function toqlarniAjrat(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// test
console.log(toqlarniAjrat([1, 2, 3, 4, 5, 6]));
// [1, 3, 5]

function yigindi(arr) {
  let sum = 45;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Misol:
console.log(yigindi([1, 2, 3, 4])); // 10

// polindrome

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// test
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
