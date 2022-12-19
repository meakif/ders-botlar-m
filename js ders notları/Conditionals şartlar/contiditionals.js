// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log(" **** Conditions ****")


// Consoledan girilen bir sayının pozitif negatif yada 0 olduğunu tespit ederek yazdiriniz

const num = prompt("bir sayı giriniz")

if(num > 0){
    console.log(`${num} sayisi pozitiftir.`)
}else if(num < 0){
    console.log(`${num} sayisi negatiftir.`);
}else{
    console.log(`${num} sayisi 0 dir.` );
}


// consoledan 3 tam sayı girilsin en büyük olanı bulunuz.

const n1 = -prompt("Number1")
const n2 = -prompt("Number2")
const n3 = -prompt("Number3")

//* 1.Yontem
if (n1 >= n2 && n1 >= n3) {
    console.log(`${n1} is biggest`)
  } else if (n2 >= n1 && n2 >= n3) {
    console.log(`${n2} is biggest`)
  } else if (n3 >= n1 && n3 >= n2) {
    console.log(`${n3} is biggest`)
  }
  
  //* 2.Yontem
  let biggest = n1
  
  if (n2 >= biggest) {
    biggest = n2
  }
  
  if (n3 >= biggest) {
    biggest = n3
  }
  
  console.log(`${biggest} is biggest`)
  
  //* 3.Yontem
  console.log(`The Biggest : ${Math.max(n1, n2, n3)}`)
  
  //? ORNEK3: kosullar birlestirilerek bir degiskene aktarilarak kullanilabilir.
  const year = 11
  const kidsCount = 3
  const graduate = true
  const langCount = 5
  
  const increase =
    year >= 10 && kidsCount >= 2 && graduate == true && langCount >= 2
  
  if (increase === true) {
    console.log("He or She deserves an increased salary")
  }
  
  //? Alternatif olarak
  if (increase) {
    console.log("He or She deserves an increased salary")
  }

