/*
El proveedor principal de servicios de telefonía móvil en la ciudad está introduciendo una oferta
promocional basada tanto en el monto de recarga realizado por sus clientes como en la duración de
su suscripción con la compañía. Para ser elegible para la promoción, los clientes deben recargar
un mínimo de $20 y  un máximo de $80 y haber estado suscrito durante al menos un año.

En la promoción SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su
recarga es inferior a $38 y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promoción MegaRecharge está dirigida a los clientes que han estado suscritos por
más de tres años, ofreciéndoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto
de la recarga y la duración de su suscripción, y determine si la promoción les aplica y calcule el monto
total de recarga incluyendo la promoción.
*/

const prompt = require('prompt-sync')()

const MIN_AMOUNT = 20
const MAX_AMOUNT = 80
const MIN_MONTHS = 12
const SUPER_MAX_AMOUNT = 38
const SUPER_MULT = 2
const MEGA_MIN_MONTHS = 36
const MEGA_MULT = 3


function validatePromo (amount, subTime){
    if (subTime < MIN_MONTHS) return amount

    let multiplier = 1

    if (amount >= MIN_AMOUNT && amount <= MAX_AMOUNT) {
        if (subTime >= MEGA_MIN_MONTHS) {
            multiplier = MEGA_MULT
        } else if (amount < SUPER_MAX_AMOUNT) {
            multiplier = SUPER_MULT
        }
    }
return amount * multiplier
}

function main () {
    const name = prompt('¿Cuál es su nombre?: ')
    const amount = parseFloat(prompt('¿Cuál es el monto de su recarga?: '))
    const subTime = parseFloat(prompt('¿Cuánto tiempo lleva suscrito?: '))

    const recharge = validatePromo (amount, subTime)
    const promo = recharge - amount

    console.log(`
       Gracias ${name} 
    ___________
    Recarga: $${recharge}
    Promo: $${promo}`)
}

main()












// function validatePromo (amount, firstSub) {
//     const subTime = today.getFullYear() - firstSub.getFullYear()
//     if (subTime < 1) {return false}

//     let multiplier = 1

//     if (subTime >= 20 && subTime <= 80) {
        
//         if (subTime < 38 && subTime < 3) {
//             multiplier = 2
//         }
//     }

//     return true
// }

// function main () {

//     const amount = parseFloat(prompt('¿Cuál es el monto de su recarga?: '))
//     const startDate = prompt('Ingrese la fecha de inicio de su suscripción: ')
//     const firstSub = new Date (startDate)

//     //console.log(amount, startDate, firstSub)
//     const isEligible = validatePromo (amount, firstSub)

//     if (isEligible) {
//         console.log(`Es posible que participe en la promoción por un monto de $${multiplier}`)
//     } else {
//         console.log('No es elegible para la promoción :(')
//     }
// }

// main ()