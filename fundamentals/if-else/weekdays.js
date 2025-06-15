/*
El programa solicita al usuario un número del 1 al 7 mediante prompt-sync.
Utiliza una declaración switch para mostrar el día de la semana correspondiente o
"Invalid day" si el número no es válido. Ejemplo: 3 muestra "Wednesday",
8 muestra "Invalid day". Ideal para identificar días en programas simples.
*/

const prompt = require('prompt-sync')()

const weekDay = parseInt(prompt('Por favor introduce un número:'))

switch (weekDay) {

    case 1:
        console.log('Monday')
    break;

    case 2:
        console.log('Tuesday')
    break;

    case 3:
        console.log('Wednesday')
    break;

    case 4:
        console.log('Thursday')
    break;

    case 5:
        console.log('Friday')
    break;

    case 6:
        console.log('Saturday')
    break;

    case 7:
        console.log('Sunnday')
    break;

    default:
        console.log('Invalid day')
}