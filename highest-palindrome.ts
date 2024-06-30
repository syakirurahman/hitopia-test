function highestPalindrome(stringOfNumbers: string, changingChances: number) {

  function generateHighestPalindrome(arr: string[], left: number, right: number, changingChances: number) {
    if (changingChances < 0) return '-1';

    const isPalindrome = validatePalindrome(arr)    
    if (changingChances === 0) {
      if (isPalindrome) {
        return arr.join('');
      } else {
        return '-1'
      }
    }

    // If changing chance is only 1, but the string is already a palindrome
    if (changingChances === 1 && isPalindrome) return arr.join('');

    if (changingChances > 1 && isPalindrome) {
      if (arr[left] !== '9') {
        arr[left] = arr[right] = '9';
        return generateHighestPalindrome(arr, left + 1, right - 1, changingChances - 2);
      }
      return generateHighestPalindrome(arr, left + 1, right - 1, changingChances);
    } else {
      if (arr[left] !== arr[right]) {
        const maxBetweenLeftAndRight = Math.max(Number(arr[left]), Number(arr[right]))
        arr[left] = arr[right] = String(maxBetweenLeftAndRight);

        const isNewArrPalindrome = validatePalindrome(arr);
        if (isNewArrPalindrome) {
          // restart changing order
          return generateHighestPalindrome(arr, 0, arr.length - 1, changingChances - 1);
        }
        return generateHighestPalindrome(arr, left + 1, right - 1, changingChances - 1);
      } else {
        return generateHighestPalindrome(arr, left + 1, right - 1, changingChances);
      }
    }

  }

  function validatePalindrome(arr: string[]) {
    return arr.join('') === [...arr].reverse().join('') 
  }

  if (Number.isNaN(stringOfNumbers)) return '-1'
  let arr = stringOfNumbers.split('');
  return generateHighestPalindrome(arr, 0, arr.length - 1, changingChances);
}

// Test 1
console.log(highestPalindrome("notnumber", 1));  // "-1"

// Test 2
console.log(highestPalindrome("3943", 1));  // "3993"

// Test 3
console.log(highestPalindrome("932239", 2)); // "992299"

// Test 4
console.log(highestPalindrome("314923", 1));  // "-1"

// Test 5
console.log(highestPalindrome("314923", 3));  // "329923"

// Test 6
console.log(highestPalindrome("314923", 4));  // "929929"

// Test 7
console.log(highestPalindrome("3142923", 6));  // "9992999"
