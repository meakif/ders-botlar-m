//* ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator, if-elseif)

const n1 = Number(prompt("Enter first number"))
const n2 = Number(prompt("Enter second number"))
const proccees = prompt("enter a proccessing : +, *, -, /") 


if (proccees === "+"){
    console.log(n1+n2);
}else if( proccees === "*"){
    console.log(n1*n2);
}else if(proccees === "/"){
    console.log(n1/n2);
}else if(proccees === "-"){
    console.log(n1-n2);
}else {
    console.log("Please make the right choice");
}


//* Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

const day = prompt("enter a day");
switch (day) {
  case "Monday": case "Tuesday": case "Wednesday": case "Thursday":
    console.log("selected day: InClass");
    break;
  case "Friday":
    console.log("selected day: Teamwork");
    break;
  case "Saturday":
    console.log("selected day: InClass and Workshop");
    break;
  case "Sunday":
    console.log("selected day: Self-Study");
    break;
  default:
    console.log("wrong day entered");
    break;
}


//* ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.

const min_wage = 5500;
let salary = Number(prompt("Enter your salary"));
if (salary >= min_wage) {
  salary *= 1.1;
} else {
  salary *= 1.5;
}
console.log(`Your salary after raise is: ${salary}`);

//* Kredi Risk Programı

const gelir= +prompt("Lütfen gelirinizi giriniz.")
const gider= +prompt("Lütfen giderinizi giriniz.")
asgariucret=5500;
const result=
gelir>=gider+asgariucret ? `Size kredi verilebilir 🤑` : `Kredi için yeterli geliriniz yok.🥺`
console.log(result);

