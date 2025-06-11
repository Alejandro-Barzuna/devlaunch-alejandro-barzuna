/*
Crea un programa JavaScript que calcule la factura total de una personaen un hotel,
donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%.

El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular
la factura total
Si el usuario se quedó 5 noches, la salida será: $450.
*/

const prompt = require('prompt-sync')()
const noches = parseInt(prompt('¿Cuántas noches desea quedarse? '))

const PRICE_PER_DAY = 100
const discount = 1-0.05

let total = PRICE_PER_DAY*noches*discount

console.log(total)