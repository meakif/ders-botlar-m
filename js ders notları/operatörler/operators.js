// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

 console.log(" **** Operators ****")


const cola = 20
const gumm = 5 
const biscuits = 15

const totalprice = cola + gumm + biscuits

console.log( "toplam fiyat:" , totalprice)
console.log("toplam fiyat:" + totalprice)  //toplama yapmaz birleştirdi (string concatination)


const firstName = "Mehmet"
const lastName = "Akif"
console.log(firstName + " " + lastName); // " " string ile boşluk oluşturduk.

const s1= 5,   //  bu iki sayı const s1 = 5, s2 = 4 şeklinde yazılabilir.
 s2 = "4"
 s3 = "Akif"

console.log(s1 + s2); // 54
console.log(s1 - s2); // 1    insiyatif kullanıyor çıkartma işlemini anladı.
console.log(s1 - s3); // Nan (Not a  Number) //numbera çevirmeye çalıştı fakat mümkün olmadığı için nan dondurdu.

const  difference = s1 - s2
console.log(difference, typeof NaN); // Nan'ın datatype'ı numberdır.
console.log(isNaN(difference)) // nan mıdır? kontrolü yapar.

// ÖRNEK

const yearOfBirth = 2000
const name = "Akif"
console.log(name+ " is " + (2022 - yearOfBirth) +" years old.");

//! Template literals

console.log(`${name} is ${2022 - yearOfBirth} years old.`)


// Carpma ve Us alma

const pi = 3.14
const r = Number(prompt("Please enter r"))
console.log(r);
const square = pi * r**2
console.log(`Square of circle: ${square}`);

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

const randomNumber = Math.random()
console.log(randomNumber);

// 0 ile 100 arası rastgele tam sayı üretme

const rastgelesayı = Math.round(Math.random() * 100) // maksimum 99.99 yapar.
console.log(rastgelesayı);


// arttırma ve azaltma (ınc dec)

let a = 5
a++
console.log(a++); // 6
y = a + 5 // 7 + 5
console.log(--y); // 11

let z = 4
z = z + 5
z += 10 // z = z + 10
console.log(z);

let k = 20
k -= 10 
console.log("k", --k);
console.log({ k });

// ornek 3 katina alma
let b = 4
b = b * 3
b *= 3 //b = b * 3
console.log({b});



// MOD

const number = prompt("Please enter a 3-digits number:")

const ones = number % 10
const tens = Math.floor(number / 10) % 10
const hundreds = Math.trunc(number / 100)
console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones} `)

// Karşılaştırma  operatörleri

const num1 = 3

console.log(num1 == 3);
console.log(num1 === 3);
console.log(num1 === `3`);

const num2 = "3"

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);


// Mantıksal Operatörler

const v1 = true
const v2 = false

console.log(v1 && v2) // false
console.log(v1 || v2) // true
console.log(!v1) //false


// ORNEK

const age = prompt("Please enter your age")
const healty = confirm("Are you healty?")
console.log(age, healty);

if(age>=18 && healty == true){
    console.log("Ehliyet Alabilir");
}else{
    console.log("ehliyet alımaz");
}


// Javascripte surekli falsy olan 6 deger bulunmaktadir.
const nal = null
const tanimsiz = undefined
const bos = ""
const sayiDegil = NaN
const sifir = 0
const falsy = false

console.log(Boolean(0)) // false
console.log(Boolean(5)) // true
console.log(Boolean(-5)) // true
console.log(Boolean(12.4)) // true

console.log(v1 && null && true && true) // null
console.log(v1 && 4 && true && 5) // 5
console.log(0 && v1) // 0
console.log(v1 || 0) // true

const num5 = 0 // falsy

if (num5 === true) {
  console.log("sayi sifir degildir")
} else {
  console.log("sayi sifirdir")
}

// * =============================================
// *            TIP DONUSUMLERI
// * =============================================

const dolar = "1000"
const tl = "500"

const totalMoney = Number(dolar) + Number(tl)
const totalMoney1 = +dolar + +tl
const totalMoney2 = parseInt(dolar) + parseInt(tl)
const totalMoney3 = parseFloat(dolar) + parseFloat(tl)
console.log(totalMoney3)

console.log(Number(null)) // 0
console.log(Number("")) // 0
console.log(Number("12.3")) // 12.3
console.log(Number("1ab")) // NaN
console.log(Number("0b101")) // 5 ("binary sayi sistemi")
console.log(Number("0x10")) // 16  (hex sayi sistemi)
console.log(String(55))


