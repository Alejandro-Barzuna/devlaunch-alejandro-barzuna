/*
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada
y salida diariamente. De esta forma, al final de cada día, su empleador sabrá cuánto 
tiene que pagarles por sus horas trabajas.  
Pero, si una persona trabajó más de ocho horas, se le debe pagar un costo extra por 
las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.
Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida,
imprima el monto total de dinero que ese empleado recibió ese día.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

✓ Respuesta: $95
*/

const prompt = require('prompt-sync')()

const MAX_NORMAL_HOUR = 8

function calculateSalary (hourlyRate, startTime, endTime){
    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')
    const workedHours = endHour - startHour
    
    let salary = 0

    if (workedHours>MAX_NORMAL_HOUR) {
        const extraHours = workedHours - MAX_NORMAL_HOUR
        salary =  MAX_NORMAL_HOUR * hourlyRate + extraHours*1.5*hourlyRate
    } else {
        salary = MAX_NORMAL_HOUR * hourlyRate
    }
return salary
    
}

function main (){
    const hourlyRate = parseFloat(prompt('HOURLY RATE: '))
    const startTime = prompt('START TIME: ')
    const endTime = prompt('END TIME: ')

    const salary = calculateSalary (hourlyRate, startTime, endTime)

    console.log(`${salary}`)
}

main()

