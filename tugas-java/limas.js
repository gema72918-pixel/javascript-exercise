<<<<<<< HEAD
const prompt = require('prompt-sync')({sigint: true});
let Lalas = Number(prompt('Masukan alas : '))
let tinggi = Number(prompt('Masukan tinggi : '))
let sclubung = Number(prompt('Masukan sclubung : '))
let Volume = 1/3 * Lalas * tinggi
let Luasp = Lalas * sclubung

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(`Volume limas\t: ${Volume.toFixed(2)} cm`)
=======
const prompt = require('prompt-sync')({sigint: true});
let Lalas = Number(prompt('Masukan alas : '))
let tinggi = Number(prompt('Masukan tinggi : '))
let sclubung = Number(prompt('Masukan sclubung : '))
let Volume = 1/3 * Lalas * tinggi
let Luasp = Lalas * sclubung

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(`Volume limas\t: ${Volume.toFixed(2)} cm`)
>>>>>>> 6bb5fc044fd5d0ef35e98b690422d492aacf4a76
console.log(`Lalas limas\t: ${Lalas.toFixed(2)} cm `)