/*
Imagina desarrollar un programa para calcula el promedio de calificaciones de estudiantes
en una escuela. Como parte de este dersafío, primero configuras el entorno para recibir
entradas del usuario, permitiendo que ingresen 3 notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formatedado con máximo 2 decimales,para asegurar una lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será:80
*/

let prompt = require('prompt-sync')()
const studentName = prompt('Indique su nombre, ')

const grade1= parseFloat(prompt('Indique su primera nota: '))
const grade2= parseFloat(prompt('Indique su segunda nota: '))
const grade3= parseFloat(prompt('Indique su tercera nota: '))

const amountOfGrades = 3
const maxDecimals = 2

const promedio = (grade1+grade2+grade3)/amountOfGrades

console.log(`
    Nombre: ${studentName}\n
    ---------------------\n
    Nota 1: ${grade1}
    Nota 2: ${grade2}
    Nota 3: ${grade3}
    _____________________
    Promedio: ${promedio.toFixed(maxDecimals)}
    `)
