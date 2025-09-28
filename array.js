// Question 1: How can you check if two array are equal ?
// const isArrayEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//   for (let i = 0; i <= arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     }
//   }
//   return true
// }
// const isArrayEqual = (arr1, arr2) => {
//   return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
// }
// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]))

// // Question 2: Sort an array
// const x = [1, 4, 6, 0, -5, -9]
// // x.sort()
// // console.log(x)
// // x.sort((a, b) => b - a)
// // console.log(x)

// // Question 3: Reverse an array
// x.reverse()
// console.log(x)