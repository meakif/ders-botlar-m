console.log("***** Data Types *****");

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

//? ===================  CONST  ======================

const fs = "Cohort 13";
console.log(fs);

const sayi = 20;
console.log(sayi);
console.log(typeof sayi);

//* Tirnak icindekiler string (text) olarak atanir.
const sayi1 = "33";
console.log(sayi1);
console.log(typeof sayi1);

// sayi1 = 55; //!Assignment to constant variable.

// const pi; //! Missing initializer in const
// pi = 3.14

const s1 = "hello ";
const s2 = "FS13";
console.log(s1 + s2); //? String Concationation
// JS default olarak + operatorunde eger degiskenlerden en az birisi string ise bunlari birine ekler. (Toplama yapmaz)

const n1 = "5";
const n2 = 10;
console.log(n1 + n2); //? String COncationation
