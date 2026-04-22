// sebelumnya install dengan perintah : npm instal prompt-sync
//per folder lakukan lagi perintah
const prompt = require("prompt-sync")({sigint: true})
let sisi = Number(prompt('masukan  sisi : '))
let luas = sisi ^ 2
let keliling = 4 * sisi

console.log ("========================")
console.log ("         HASIL          ")
console.log ("========================")

console.log (
`luas persegi\t\t: ${ luas.toFixed(2) } cm2
keliling persegi\t: ${ keliling.toFixed(2) } cm `);