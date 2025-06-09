/*
Voy al supermercado GreenCenter para hacer mis compras habituales y
planeo comprar manzanas y naranjas.
Cuando estoy allí, veo que no hay plátanos ni uvas, así que cambioun poco mi lista.
Veo que 3 cajeros están trabajando, así que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y me dan $50 de cambio
*/

const supermarketName = 'GreenCenter'

const fruit1 = 'manzanas'
const fruit2 = 'naranjas'

const areBananasAvailable = false
const areGrapesAvailable = false

const activeCashiers = 3

const bill = 100
const paid = 150
const change = 50

console.log(`
    Nombre del supermercado: ${supermarketName}\n
    Efectivo entregado: ${paid}\n
    Compra total: ${bill}\n
    Cambio: ${change}\n
    `)