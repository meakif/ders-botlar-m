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