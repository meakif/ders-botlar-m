 // * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// //? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

const n = Number(prompt("Enter a number"))

let sum = 0

for (let i = 1; i<=n; i++) {
  sum = sum + i
}

console.log("SUM:",sum)