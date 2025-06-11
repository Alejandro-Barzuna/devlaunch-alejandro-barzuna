/*
Escribe un programa simple en JavaScript que examine las preferencias culinarias
de tres personas: María, Pepe y Malvern. El programa analiza tres condiciones:

¿Comparte María la misma comida favorita tanto con Pepe como Malvern?
¿La comida de favorita de María coincide ya sea con la de Pepe o la de Malvern?
¿ La preferencia de María es diferente tanto de la de Pepe como de la de Malvern?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones,
ejemplo: Si la comida favorita de María es la pizza, la de Pepe es el pollo y
 la de Malvern es el pescado.
 Los resultados de estas comparaciones se muestran luego, ofreciondo información
 sobre las similitudes y diferencias en las preferencias culinarias de los 3 individuos.

 La salida del programa será:

 Does María share the same favorite food as both Pepe and Malvern? : false
 Does María's favorite food match either Pepe's or Malvern's? : false
 Dose María's preference differ from both Pepe's and Malvern's? : true
*/

const prompt = require('prompt-sync')()

const foodMaria = prompt('What your favorite food?: ')
const foodPepe = prompt('What your favorite food?: ')
const foodMalvern = prompt('What your favorite food?: ')

const samePepe = foodMaria == foodPepe
const sameMalvern = foodMaria == foodMalvern

const match = samePepe && sameMalvern
const someMatch = samePepe || sameMalvern
const noMatch = !(samePepe||sameMalvern)

console.log(`
 Does María share the same favorite food as both Pepe and Malvern? : ${match}
 Does María's favorite food match either Pepe's or Malvern's? : ${someMatch}
 Dose María's preference differ from both Pepe's and Malvern's? : ${noMatch}
    `)
