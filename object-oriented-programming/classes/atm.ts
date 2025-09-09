/* Simula la interacción entre una tarjeta de crédito y un cajero automático. El usuario puede insertar su
tarjeta, verificar su saldo hacer compras o pagos, y retirar dinero (si est´´a dentro del límite).*/

class ATM {

    private bills: {
        [key: number]: number
    }

    private total: number
   
    constructor () {
        this.bills = {
            100 : 100,
            50 : 100,
            20 : 100,
            10 : 100,
            5 : 100,
        }
        this.total = Object.keys(this.bills).reduce((total,key)=> (total + this.bills[parseInt(key)]*parseInt(key)),0)
    }

    withdraw (card: CreditCard, amount: number): number {
       
        if (card.availableAmount >= amount) {

        if (amount === 100 || amount === 50 || amount === 20 || amount === 10 || amount === 5) {
            this.bills[amount] -= 1
            card.substract (amount)
            console.log(`Cantidad disponible en la tarjeta ${card.availableAmount}`)
            return amount
        }

        }
        return -1
    }

    print (): void {console.log(this.total)}
}



class CreditCard {
    public availableAmount: number
    public amountSpent: number

    constructor (available: number, spent: number) {
        this.availableAmount = available
        this.amountSpent = spent
    }

    substract (amount: number): void {
        this.availableAmount -= amount
    }

}


const atm1 = new ATM ()
atm1.print ()

const card1 = new CreditCard (1000, 0)
atm1.withdraw (card1,100)

