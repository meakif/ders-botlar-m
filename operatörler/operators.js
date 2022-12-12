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