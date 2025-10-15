/*

Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.

El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura.

Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

Los vehículos deben poder arrancar y mostrar su información.

Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

*/

class Vehicle {

    private isOn: boolean

    constructor(
        protected emoji: string,
        protected brand: string,
        protected model: string,
        protected year: number

    ) {
        this.emoji = emoji
        this.brand = brand
        this.model = model
        this.year = year
        this.isOn = false
    }

    run () {
        this.isOn = true
    }

    toString () {
        return `Name: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
    }
}

class Car extends Vehicle {
    private isAirOn:boolean
    constructor(
        brand: string,
        model: string,
        year: number,
        private numbOfDoors: number = 4

    ) { 
        super('🏎️',brand, model,year)
        this.isAirOn = false
    }
}

class Motorcycle extends Vehicle {
    
    constructor(
        brand: string,
        model: string,
        year: number,

    ) { 
        super('🏍️',brand, model,year)
    }

    wheelie () {
        return '🛞'
    }
}

const car1 = new Car ('Ferrari','F1',2025, 0)
const mot1 = new Motorcycle ('Ducati', '300', 2020)

console.log(car1.toString())
console.log(mot1.toString())