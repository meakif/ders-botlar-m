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
