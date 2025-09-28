// Question 1: valid anagram
// function anagram(s1, s2) {
//   return s1.split("").sort().join("") === s2.split("").sort().join("")
// }
//time complexity O(nlogn) how???
// how the time complexity is O(nlogn) - answer - timeComplexity of split = O(n) timeComplexity of sort = O(nlogn) timeComplexity of join = O(n) so total time complexity is O(nlogn)

// console.log(anagram("listen", "silent"))

// Question 2: Longest common prefix

// function longestCommonPrefix(str) {
//   if (str.length === 0) {
//     return false
//   }
//   let prefix = ""
//   for (let i = 0; i < str[0].length; i++) {
//     let char = str[0][i]
//     for (let j = 1; j < str.length; j++) {
//       if (i >= str[j].length || str[j][i] !== char) {
//         return prefix
//       }
//     }
//     prefix += char
//   }
// }
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// function longestPrefix(str) {
//   if (str.length === 0) {
//     return ""
//   }
//   let prefix = ""
//   for (let i = 0; i < str[0].length; i++) {
//     let char = str[0][i]
//     for (let j = 1; j < str.length; j++) {
//       if (i >= str[j].length || str[j][i] !== char) {
//         return prefix
//       }
//     }
//     prefix += char
//   }
// }
// console.log(longestPrefix(["flower", "flow", "flight"]))

// function mergerAlternatively(str1, str2) {
//   let result = ""
//   let n = Math.max(str1.length, str2.length)
//   for (let i = 0; i < n; i++) {
//     if (i < str1.length) {
//       result = result + str1[i]
//     }
//     if (i < str2.length) {
//       result = result + str2[i]
//     }
//   }
//   return result
// }

// console.log(mergerAlternatively("abc", "xyz"))

// Question 4: Length of last word - "   I am Abhilash  "
// function lengthOfLastWord(str) {
//   // let lastWord = str.trim().split(" ").at(-1).length
//   // return lastWord
//   let lastWord = str.trim().split(" ")
//   lastWord = lastWord[lastWord.length - 1].length
//   return lastWord
// }

// console.log(lengthOfLastWord("   I am Abhilash  "))

// const factorial = (n) => {
//   if (n === 0) {
//     return 1
//   }
//   return n * factorial(n - 1)
// }
// console.log(factorial(5))

// const sumOfArrays = (arr) => {
//   if (arr.length === 0) {
//     return 0
//   }
//   return arr[arr.length - 1] + sumOfArrays(arr.slice(0, arr.length - 1))
// }
// console.log(sumOfArrays([1, 2, 3, 4, 5]))

// const fibonacci = (n) => {
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(5))

// const linearSearch = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i
//     }
//   }
//   return -1
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 3))
// console.log([1, 2, 3, 4, 5].indexOf(5))

// function findFirstOccurrence(str, target) {
//   for (let i = 0; i <= (str.length - target.length); i++) {
//     let match = true
//     for (let j = 0; j < target.length; j++) {
//       if (str[i + j] !== target[j]) {
//         match = false
//         break
//       }
//     }
//     if (match) {
//       return i
//     }

//   }
//   return -1
// }

// console.log(findFirstOccurrence("banbna", "na")) // 6
// console.log(findFirstOccurrence("hello world", "world")) // 2
// console.log("hello world".indexOf("world")) // 2

// Question 1: Contain duplicate
// const containsDuplicate = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true
//       }
//     }
//     return false
//   }
// }
// console.log(containsDuplicate([1, 2, 3, 4]))

// Question 2: Contain duplicate using map and 
// const containsDuplicate = (arr) => {
//   let map = new Map()
//   for (let n of arr) {
//     if (map.has(n)) {
//       return true
//     }
//     map.set(n, true)
//   }
//   return false
// }
// console.log(containsDuplicate([1, 2, 3, 4]))
// console.log(containsDuplicate([1, 2, 3, 4, 1]))

// Question 3: Contain duplicate using map and also set the occurrence of the number
// const countOccurrences = (arr) => {
//   let map = new Map()
//   let hasDuplicate = false
//   for (let n of arr) {
//     if (map.has(n)) {
//       map.set(n, map.get(n) + 1)
//       hasDuplicate = true
//     } else {
//       map.set(n, 1)
//     }
//   }
//   return {
//     hasDuplicate,
//     occurrence: Object.fromEntries(map)
//   }
// }
// console.log(countOccurrences([1, 2, 3, 4]))
// console.log(countOccurrences([1, 2, 3, 4, 1, 2, 1]))

//Question 4: Contain duplicate using set
// const containsDuplicate = (arr) => {
//   const set = new Set(arr)
//   return set.size !== arr.length
// }
// console.log(containsDuplicate([1, 2, 3, 4]))
// console.log(containsDuplicate([1, 2, 3, 4, 1]))

// add number of occurrence using set
// const countOccurrences = (arr) => {
//   const set = new Set(arr)
//   let hasDuplicate = set.size !== arr.length
//   const occurrence = {}
//   for (let n of set) {
//     occurrence[n] = arr.filter((ele, i) => {
//       return ele === n
//     }).length
//   }
//   return {
//     hasDuplicate,
//     occurrence
//   }
// }
// console.log(countOccurrences([1, 2, 3, 4]))
// console.log(countOccurrences([1, 2, 3, 4, 1, 2, 1]))

// Question 4: Valid anagram using map
// const isAnagram = (s1, s2) => {
//   let map = new Map()
//   if (s1.length !== s2.length) {
//     return false
//   }
//   for (let i = 0; i < s1.length; i++) {
//     if (map.has(s1[i])) {
//       map.set(s1[i], map.get(s1[i]) + 1)
//     } else { map.set(s1[i], 1) }
//   }
//   console.log(map)

//   for (j = 0; j < s2.length; j++) {
//     if (!map.has(s2[j])) {
//       return false
//     } else {
//       map.set(s2[j], map.get(s2[j]) - 1)
//     }
//     if (map.get(s2[j]) === 0) {
//       map.delete(s2[j])
//     }
//   }
//   if (map.size === 0) {
//     return true
//   }
//   console.log(map)
//   return false
// }
// console.log(isAnagram("listen", "silentl"))

// Question 5: Valid anagram using string methods
const isAnagramString = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false
  }
  return s1.split("").sort().join("") === s2.split("").sort().join("")
}
console.log(isAnagramString("listen", "silent"))
