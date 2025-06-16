/*
Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD.

Cálculo de la Edad: Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando de 
nacimiento al año actual. También se verifica si ya ha pasado el cumpleaños del año actual, para ajustar
la edad si es necesario.

Verificación de Edad: se utiliza un if-else para determinar si la persona cumple con la edad legal para
beber (18 años o más). Este programa permite que el proceso de verificación de edad sea automático y
preciso.

Puedes guierte con esto:

const birthday = new Date(birthdate)
const today = new Date
const age = today.getFullYear() - birthday.getFullYear() //takes the age of a person

*/

const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthdate in format YYYY/MM/DD? ')
const birthday = new Date(birthdate)
const today = new Date
let age = today.getFullYear() - birthday.getFullYear()
const minimumAge = 18

const birthdatePassed = (
    today.getMonth() > birthday.getMonth() ||
    (
        today.getMonth() === birthday.getMonth() &&
        today.getDate() >= birthday.getDate()
    )
// sin los parentesis no funciona
// getDay es para dias de la semana
)


if (!birthdatePassed){
    age--
}



if (age >= minimumAge) {
    console.log(`
        Edad del usuario: ${age}
        Es mayor de edad: Sí
        Bienvenido al Bar de Moe
        `)
}   else {
    console.log(`
        Edad del usuario: ${age}
        Es mayor de edad: No
        No puedes pasar hasta cumplir ${minimumAge} años
        `)
}
