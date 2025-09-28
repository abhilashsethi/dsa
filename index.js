
// Question 1: Sum of all natural numbers from 1 to n
// const sumOfNaturalNumbers = (n) => {
//   let sum = 0
//   for (let i = 1; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }
// console.log(sumOfNaturalNumbers(10))


// Question 2: Sum of digits of a number
// const sumOfDigits = (num) => {
//   let sum = 0
//   while (num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
//   }
//   return sum
// }
// console.log(sumOfDigits(12345));

// Question 3: Count digits (while loop)
// function countDigits(num) {
//   let count = 0
//   num = Math.abs(num)
//   while (num > 0) {  // 12345 1234 123 12 1
//     count++          // 1 2 3 4 5
//     num = Math.floor(num / 10)
//   }
//   return count
// }
// console.log(countDigits(-1245))

// Question 3: Count digits (do-while loop)
// function countDigits(num) {
//   let count = 0
//   num = Math.abs(num)
//   do {
//     count++
//     num = Math.floor(num / 10)
//   } while (num > 0)
//   return count
// }
// console.log(countDigits(12345))

// Question 4: Check a number is palindrome or not
// const isPalindrome = (num) => {
//   let reverse = 0
//   let copy = num
//   num = Math.abs(num)
//   while (num > 0) {
//     reverse = reverse * 10 + num % 10
//     num = Math.floor(num / 10)
//   }
//   if (reverse === copy) {
//     return true
//   }
//   return false
// }
// console.log(isPalindrome(121))

//Question 5: Fibonacci series
// const fibonacci = (n) => {
//   if (n < 2) {
//     return n
//   }
//   let prev = 0
//   let curr = 1
//   let next
//   for (let i = 2; i <= n; i++) {
//     next = prev + curr;
//     prev = curr;
//     curr = next
//   }
//   return next
// }
// console.log(fibonacci(6))

// Question 6: Missing number
// const missingNumber = (arr) => {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   let total = (arr.length * (arr.length + 1)) / 2
//   let missingNumber = total - sum
//   return missingNumber
// }
// console.log(missingNumber([0, 1, 2, 3, 5]))

// Question 6: Missing number using array reduce
// const missingNumber = (arr) => {

//   return (arr.length * (arr.length + 1)) / 2 - arr.reduce((acc, curr) => curr + acc)
// }
// console.log(missingNumber([0, 1, 2, 3, 5]))



