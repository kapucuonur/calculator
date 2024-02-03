//* (Hesap Makinası)
//**************************************************/
const topla = (s1, s2) => s1 + s2
const carp = (s1, s2) => s1 * s2
const cikar = (s1, s2) => s1 - s2
const bol = (s1, s2) => s1 / s2

const hesapla = (num1, num2, op) => {
  let sonuc = 0
  switch (op) {
    case "+":
      sonuc = topla(num1, num2)
      break
    case "-":
      sonuc = cikar(num1, num2)
      break
    case "/":
      sonuc = bol(num1, num2)
      break
    case "*":
      sonuc = carp(num1, num2)
      break
    default:
      alert("Yanlis islem")
      break
  }
  return sonuc
}
const num1 = +prompt("1.Sayi:")
const op = prompt("Islemi giriniz: +,-,*,/:")
const num2 = +prompt("2.Sayi:")
const sonuc = hesapla(num1, num2, op)
console.log(`${num1}${op}${num2}=${sonuc}`)