/*

En este escenario, se te proporcionarán varias fracciones, y tu tarea será realizar diversas
operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es obtener el numerador y el denominador resultantes de estas operaciones.

Para lograrlo, deberás definir dos atributos: el numerador y el denominador.

Además, implementarás métodos correspondientes para cada operación, devolviendo un objeto
resultante con el numerador y denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte
del objeto como incluidos como parte de su funcional dentro del objeto mismo.


const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFraction(2, 3)

fraction3.add(fraction4)

min 28:16
*/

const createFraction = (numerador,denominador) =>{
    return {
    //     numerador: numerador,
    //     denominador: denominador
        numerador,
        denominador
    }
}

const add = (f1, f2) =>{
    const numerador = f1.numerador * f2.denominador + f2.numerador * f1.denominador
    const denominador = f1.denominador * f2.denominador
    
    return createFraction(numerador, denominador)
}

const substract = (f1, f2) =>{
    const numerador = f1.numerador * f2.denominador - f2.numerador * f1.denominador
    const denominador = f1.denominador * f2.denominador
    
    return createFraction(numerador, denominador)
}

const mult = (f1, f2) =>{
    const numerador = f1.numerador * f2.numerador
    const denominador = f1.denominador * f2.denominador
    
    return createFraction(numerador, denominador)
}

const divide = (f1, f2) =>{
    const numerador = f1.numerador * f2.denominador
    const denominador = f2.numerador * f1.denominador
    
    return createFraction(numerador, denominador)
}

const createFractionWithFunctions = (numerador,denominador) => {
    
    const f1 = createFraction(numerador,denominador)

    return {
        ...f1,
        add: (f2) => add(f1,f2),
        substract: (f2) => substract(f1,f2),
        mult: (f2) => mult(f1,f2),
        divide: (f2) => divide(f1,f2)
    }

}

const f1 = createFraction(3, 4)
const f2 = createFraction(2, 3)
// console.log(f1)
// console.log(f2)

console.log(add(f1,f2))
console.log(substract(f1,f2))
console.log(mult(f1,f2))
console.log(divide(f1,f2))

const f3 = createFractionWithFunctions(3, 4)
const f4 = createFraction(2, 3)

console.log(f3.add(f4))