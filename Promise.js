// console.log("start")

// setTimeout(() => {
//   console.log("inside setTimeout")
// }, 1000)

// console.log("end")



// console.log("Start")

// function importantMessage(username) {
//   setTimeout(() => {
//     return `Hello ${username}`
//   })
// }
// const message = importantMessage("John")
// console.log("End")


// function importantMessage(username, cb) {
//   setTimeout(() => {
//     cb(`Hello ${username}`)
//   }, 1000)
// }

// function goodMorningMsg(username, cb) {
//   setTimeout(() => {
//     cb(`Good Morning ${username}`)
//   }, 1000)
// }

// function goodEveningMsg(username, cb) {
//   setTimeout(() => {
//     cb(`Good Evening ${username}`)
//   }, 2000)
// }

// const message = importantMessage("John", (message) => {
//   console.log(message)

//   goodMorningMsg("Abhilash", (message) => {
//     console.log(message)

//     goodEveningMsg("Abhi", (message) => {
//       console.log(message)
//     })
//   })
// })

// console.log("End")

// console.log("Start")

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true
//     if (result) {
//       resolve("My Promise is resolved")
//     } else {
//       reject(new Error("My Promise is rejected"))
//     }
//   })
// }, 2000)
// console.log(sub)
// sub
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// console.log("End")


// console.log("Start")
// const sub = Promise.resolve("My Promise is resolved")
// // console.log(sub)
// sub.then((res) => {
//   console.log(res)
// })
// console.log("End")


// console.log("Start")
function importantMessage(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${username}`)
    }, 1000)
  })
}

function goodMorningMsg(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Good Morning ${username}`)
    }, 200)
  })
}

function goodEveningMsg(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Good Evening ${username}`)
    }, 500)
  })
}

// importantMessage("john").then((res) => {
//   console.log(res)
//   goodMorningMsg("Abhilash").then((res) => {
//     console.log(res)
//     goodEveningMsg("Abhi").then((res) => {
//       console.log(res)
//     }).catch((err) => {
//       console.log(err)
//     })
//   }).catch((err) => {
//     console.log(err)
//   })
// }).catch((err) => {
//   console.log(err)})

// console.log("End")

// importantMessage("john").then((res) => {
//   console.log(res)
//   return goodMorningMsg("Abhilash")
// }).then((res) => {
//   console.log(res)
//   return goodEveningMsg("Abhi")
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })
// console.log("End")


// console.log("Start1")
// Promise.all([
//   importantMessage("john"),
//   goodMorningMsg("Abhilash"),
//   goodEveningMsg("Abhi")
// ]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("Error of rejection:", err)
// })
// console.log("End1")

// console.log("Start1")
// Promise.race([
//   importantMessage("john"),
//   goodMorningMsg("Abhilash"),
//   goodEveningMsg("Abhi")
// ]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("Error of rejection:", err)
// })
// console.log("End1")

// console.log("Start1")
// Promise.allSettled([
//   importantMessage("john"),
//   goodMorningMsg("Abhilash"),
//   goodEveningMsg("Abhi")
// ]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("Error of rejection:", err)
// })
// console.log("End1")

console.log("Start1")
Promise.any([
  importantMessage("john"),
  goodMorningMsg("Abhilash"),
  goodEveningMsg("Abhi")
]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log("Error of rejection:", err)
})
console.log("End1")


// const response = new Promise((resolve, reject) => {
//   const status = 200
//   if (status === 200) {
//     resolve({
//       message: "Success",
//       success: true
//     })
//   } else {
//     reject({
//       message: "Error",
//       success: false
//     })
//   }
// })

// response
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })