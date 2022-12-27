//  ************** Javascript Conditional Statements ***************/
//  *********  Sorular  *********** //

//  1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız.
// 1. SORU ÇÖZÜM

const sayi = Number(+prompt("Enter first number"))
if(sayi % 2 === 0){
console.log("Bu bir çift sayidir.");
}else{
    console.log("Bu bir tek sayidir.");
}

//  2- Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran ternary yapıyı yazınız.
//2. SORU ÇÖZÜM

const deger = 555;

0 < deger && deger < 100 ?  console.log("sağlar") : console.log("sağlamaz");

//  3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile  konsola yazdıran kodu yazınız.
// 3. Soru çözüm

const yas = 18

18 < 18 ? console.log("küçüktür") : console.log("büyüktür");


//  4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne
//  karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.
//  pazar 0
//  Pazartesi 1
//  Salı 2
//  Çarşamba 3
//  Perşembe 4
//  Cuma 5
//  Cumartesi 6

//4. soru cözüm

const gün = 2;

switch (new Date().getDay()) {
    case 0:
        console.log("pazar");
        break;
    case 1:
        console.log("pazartesi");
        break;
    case 2:
        console.log("sali");
        break;
    case 3:
        console.log("carsamba");
        break;
    case 4:
        console.log("persembe");
        break;
    case 5:
        console.log("cuma");
        break;
    case 6:
        console.log("cumartes");
        break;
    case 7:
        console.log("pazar");
        break;

    default:
        break;
}


//  5-
//  Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//   Not:
//  90'dan büyükse AA.
//  80'den büyük yada 90'a eşitse AA,
//  70'den büyük yada 80'a eşitse BB,
//  60'den büyük yada 70'a eşitse BC,
//  50'den büyük yada 60'a eşitse CC,
//  40'den büyük yada 50'a eşitse CD,
//  30'den büyük yada 40'a eşitse DD,
//  30'dan küçük yada eşitse FF ,

// 5. soru cözüm

const not = Number(+prompt("Notunuzu giriniz"))

if(not > 100 || not < 0){
    console.log("Lütfen geçerli bir değer giriniz.");
}else if(not >  90){
    console.log("Harf Notunuz AA tebrikler");
}else if(not > 80){
    console.log("Harf Notunuz BB iyisin");
}else if(not > 70){
    console.log("Harf Notunuz BC fena değil ");
}else if(not > 60){
    console.log("Harf Notunuz CC eh işte");
}else if(not > 50){
    console.log("Harf Notunuz CD koşula kaldın dostum");
}else if(not > 40){
    console.log("Harf Notunuz DD geçmez");
}else if(not <= 30){
    console.log("Harf Notunuz FF kaldın büte çalış");
}

//  6- Artık yıl sorusu
//  Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün
//  olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
//  Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır.
//  BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.
//  Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// 6. soru çözüm
const yil = prompt(`Lütfen bir yıl giriniz.`)

if (yil % 400 === 0){
    console.log(`${yil} artık yıldır.`);
}else if(yil % 4 === 0 && yil % 100 !== 0){
    console.log(`${yil} artık yıldır`);
}else{
    console.log(`${yil} artık yıl değildir.`);
}

// 7- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız.
// (2024'ün 2. ayı 29 çeker.)

const year = 2023
const ay = 5

if (ay == 2) {
  if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
    console.log(`${yil} yılını ${ay} ayı 29 çeker.`)
  } else {
    console.log(`${yil} yılını ${ay} ayı 28 çeker.`)
  }
} else if (
  ay == 1 ||
  ay == 3 ||
  ay == 5 ||
  ay == 7 ||
  ay == 8 ||
  ay == 10 ||
  ay == 12
) {
  console.log(`${year} yılını ${ay} ayı 31 çeker.`)
} else if (ay == 4 || ay == 6 || ay == 9 || ay == 11) {
  console.log(`${year} yılını ${ay} ayı 30 çeker.`)
}



function addTax(total) {
    return total * 1.05;
    }