
// function importantMessage(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hello ${username}`)
//     }, 1000)
//   })
// }

// function goodMorningMsg(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Good Morning ${username}`)
//     }, 200)
//   })
// }

// function goodEveningMsg(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Good Evening ${username}`)
//     }, 500)
//   })
// }

// console.log("Start1")
// const result = async () => {
//   try {
//     const message = await importantMessage("john")
//     console.log(message)
//     const morning = await goodMorningMsg("Abhilash")
//     console.log(morning)
//     const evening = await goodEveningMsg("Abhi")
//     console.log(evening)

//     console.log({ message, morning, evening })
//   } catch (error) {
//     console.error("Promise rejected:", error)
//   }
// }

// result()
// console.log("End1")

// console.log("Start2")

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(5)
// })

// promise1.then((res) => {
//   console.log(res)
//   console.log(3)
// })
// console.log(4)
// console.log("End2")

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first")
// })

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise)
// }).then((res) => {
//   return res
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve(1)
//   .then(value => {
//     throw new Error('Oops');
//     return value + 1;
//   })
//   .then(value => console.log(value))
//   .catch(err => console.log('Error caught'));


const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Error');
const p3 = new Promise((resolve) => setTimeout(() => resolve('Delayed'), 100));
Promise.allSettled([p1, p2, p3]).then(results => {
  console.log(results[1].status);
});