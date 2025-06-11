/*
Escribe un programa en JavaScript que solicitee al usuario ingresasr el
número de días y calcule el número equivalente de meses y días restantes,
considerando que un mes consta de 30 días

Este programa utiliza el módulo Prompt-Sync para recibir interactivamente
la entrada del usuario. Después de calcular la cantidad de mese y días restantes
según la entrada, el programa muestra el mensaje al usuario indicando el equivalente
en meses y días restantes.

Como pista, puedes usar Math.floor() para redondear el resultado a un número entero.

Si el usuario ingresa 100, la salida será 3 meses y 10 días.
*/

const prompt = require('prompt-sync')()
const DAYS_PER_MONTH = 30

const userDays = parseInt(prompt('Cantidad de días: '))

const meses = Math.floor(userDays/DAYS_PER_MONTH)
const days = userDays%DAYS_PER_MONTH

console.log(`${userDays} días son ${meses} mes(es) y ${days} día(s)`)