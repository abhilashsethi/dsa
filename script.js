// let unit = Number(prompt("Enter your electricity unit")) // 900
// let amount = 0

// if (unit > 400) {
//   amount = (unit - 400) * 13 // 500 *13 = 6500
//   unit = 400
// }

// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8 // 200 * 8 = 1600
//   unit = 200
// }

// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6 // 100 * 6 = 600
//   unit = 100
// }

// amount += unit * 4 // 100 * 4 = 400

// console.log(`Your electricity bill is ${amount}`) 

// let amount = 5001

// if (amount >= 500) {
//   console.log("500 notes", Math.floor(amount / 500))
//   amount = amount % 500
// }
// if (amount >= 200) {
//   console.log("200 notes", Math.floor(amount / 200))
//   amount = amount % 200
// }
// if (amount >= 100) {
//   console.log("100 notes", Math.floor(amount / 100))
//   amount = amount % 100
// }
// if (amount >= 50) {
//   console.log("50 notes", Math.floor(amount / 50))
//   amount = amount % 50
// }
// if (amount >= 20) {
//   console.log("20 notes", Math.floor(amount / 20))
//   amount = amount % 20
// }
// if (amount >= 10) {
//   console.log("10 notes", Math.floor(amount / 10))
//   amount = amount % 10
// }
// if (amount >= 5) {
//   console.log("5 notes", Math.floor(amount / 5))
//   amount = amount % 5
// }
// if (amount >= 2) {
//   console.log("2 notes", Math.floor(amount / 2))
//   amount = amount % 2
// }
// if (amount === 1) {
//   console.log("1 notes", amount)
// }

// function isPrime(n){
//   if(n<=1) return false;
//   if(n===2) return true;
//   if(n%2 === 0 ) return false;
//   for(let i=3; i<= Math.sqrt(n); i+=2){
//     if(n%i === 0) return false;
//   }
//   return true;
// }

let pr = prompt("Enter a number")

if (pr === null) {
  console.log("cancelled")
}
else {

  let n = Number(pr)
  if (isNaN(n)) {
    console.log("Invalid input")
  } else {
    if (n > 0) {
      let sum = 0
      let copy = n
      while (n > 0) {
        let rem = n % 10
        let fact = 1
        for (i = 1; i <= rem; i++) {
          fact = fact * i
        }
        sum = sum + fact
        n = Math.floor(n / 10)
      }
      console.log(sum)
      if (sum === copy) {
        console.log(`${copy} is a strong number`)
      } else {
        console.log(`${copy} is not a strong number`)
      }
    } else {
      console.log("Enter a positive number")
    }
  }
}