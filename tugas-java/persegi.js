const prompt = require("prompt-sync")({ sigint: true })
let sisi = Number(prompt('Masukan sisi: '))
let luas = sisi * sisi
let keliling = 4 * sisi

console.log("========================")
console.log("         HASIL          ")
console.log("========================")

console.log(`Luas persegi\t\t: ${luas.toFixed(2)} cm2`)
console.log(`Keliling persegi\t: ${keliling.toFixed(2)} cm`)