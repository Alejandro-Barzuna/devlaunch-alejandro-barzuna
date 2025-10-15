/*

Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información básica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño específico (por ejemplo, 'pequeño', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos y propiedades particulares.

*/

class Animal {
    constructor(
        protected name: string,
        protected species: string,
        protected age: number
    ) {
        this.name=name
        this.species=species
        this.age=age
    }
    makeSound () {
        return ''
    }

    toString () {
        return `Name: ${this.name}\nSpecies: ${this.species}\nAge: ${this.age}`
    }
}

class Lion extends Animal{
    constructor (
        name: string,
        species: string,
        age: number
    ) {
        super(name, species, age)
    }

    makeSound(): string {
        return 'ROAAAAAAR'
    }

    print(): string {
        const info = this.toString()

        return `🦁:\n${info}`
    }
}

type elephantSize = 'Small' | 'Medium' | "Large"

class Elephant extends Animal{
    constructor (
        name: string,
        species: string,
        age: number,
        private size: elephantSize
    ) {
        super(name, species, age)
    }

    makeSound(): string {
        return 'PHHRR'
    }

    print(): string {
        const info = this.toString()

        return `🐘:\n${info}\n${this.size}`
    }
}


const l1 = new Lion ('Simba', 'King', 8)
console.log(l1.makeSound())
console.log(l1.print())

const e1 = new Elephant ('Tanthor', 'African', 5, 'Medium')
console.log(e1.makeSound())
console.log(e1.print())