/*

Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados
y tres vértices. De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo
válido, la suma de las longitudes de dos lados cualesquiera debe ser mayor que la longitud del
tercer lado.

Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.

Además, se requiere una función para validar si los lados dados cumplen con el teorema de la
desigualdad del triángulo.

Por ejemplo, considera un triángulo con longitudes de lados: a = 7, b = 10, y c = 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par
de lados es mayor que la longitud del lado restante.

En este caso, verificamos si (b + c) > a, (a + c) > b, y (a + b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triángulo.

*/

interface Triangle {

    side1: number,
    side2: number,
    side3: number,
}

import PromptSync from "prompt-sync"

const prompt = PromptSync()

const triangle: Triangle = {
    side1: parseInt(prompt('Digite un numero entero: ')),
    side2: parseInt(prompt('Digite un numero entero: ')),
    side3: parseInt(prompt('Digite un numero entero: '))
}

// const isValidTriangle = ({ side1, side2, side3 }: Triangle) => {

//     return (side2 + side3) > side1 && (side1 + side3) > side2 && (side1 + side2) > side3; -------->destructuracion de un objeto
// }

if ((triangle.side1 + triangle.side2)> triangle.side3 &&
    (triangle.side3 + triangle.side2)> triangle.side1 &&
    (triangle.side1 + triangle.side2)> triangle.side3){
    console.log('Es un triangulo valido')
} else {
    console.log('No es un triangulo valido')
}

console.log(triangle)