// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*****************************************/

//! Declaration
function printHello() {
  console.log("Hello")
}

printHello() //! invoke, call
printHello() //! invoke, call

//* ORNEK2:
//*****************************************/

function greet(firstName, lastName = "") {
  console.log(`Hi, ${firstName} ${lastName}`)
}

//? invoke examples
greet("Sabata", "2288")
greet("Sercan", "Yilmaz")
greet("Harold", "Mariam")

// const firstName = prompt("Your name:")
// const lastName = prompt("Your surname:")
// greet(firstName, lastName)
//? js de fonksiyonlar parameterlere degiskenleri degil onlarin degerlerinin aktarir.

greet("Ahmet")
greet("Mehmet")

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//******************************************/