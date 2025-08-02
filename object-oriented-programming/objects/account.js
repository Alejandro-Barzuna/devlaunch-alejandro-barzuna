/*

Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y
métodos deben estar definidos dentro de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.
Métodos de la cuenta bancaria (dentro de la función usando this):

deposit(amount): incrementa el saldo de la cuenta.
withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta si hay suficientes fondos disponibles.

*/
//const prompt = require('prompt-sync')()

//prompt('Indique un nombre de usuario')

// function Account (){

//     this.id = prompt('Indique un numero de cuenta: ')
//     this.name = prompt('Indique un nombre de usuario: ')
//     this.balance = 0

// }



function Account (id, name, balance = 0){

    this.id = id
    this.name = name
    this.balance = balance

    this.deposit = (amount) => {
        this.balance = this.balance + amount
        //this.balance += amount
    }

    this.withdraw = (amount) => {
        if (this.balance > amount){
            this.balance -= amount
            return amount
        } //else {
        //     //return 'Fondos insuficientes'
        // }
        return null
    }
    //return this
    
    this.transfer = (toAccount, amount) => {
        const cash = this.withdraw (amount)

        if (cash){
            toAccount.deposit(cash)
            return toAccount

        }
        return null
    }
}

const acc1 = new Account (1, 'Alejandro', 100000)
// acc1.deposit(1)
// console.log(acc1.withdraw(11000))
// console.log(acc1)

const acc2 = new Account (2, 'Benito')
// acc2.deposit(1)
// console.log(acc2.withdraw(11))
// console.log(acc2)

//console.log(acc1.transfer(acc2,5000))
console.log(acc2.transfer(acc1,6000))

console.log(acc1.balance)
console.log(acc2.balance)