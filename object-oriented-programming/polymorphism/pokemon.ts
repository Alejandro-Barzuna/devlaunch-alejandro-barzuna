/* Pokémon Battle Simulator
Design a turn-based battle between two Pokémon where each one has three unique abilities.

Rules:
****usedOnceAbilities: Set<string> (to track abilities that can only be used once)----->con data structures
Base Class: Create an abstract class Pokemon with:
name: string
health: number (default 100)
Method attack(opponent: Pokemon, move: string, turn: number): void
Method isAlive(): boolean

Pokémon Defined:
Pikachu
Thunder Shock: Deals 20 damage
Quick Attack: Deals 10 damage (always available)
Heal Spark: Heals 20 health (can only be used once)

Charizard
Flamethrower: Deals 30 damage (can only be used every 2 turns)
Scratch: Deals 15 damage
Fire Breath: Heals 10 health and burns the opponent (adds 10 damage on the next turn)
*/

abstract class Pokemon{
    public name: string
    public health: number

    constructor (name:string, health:number = 100) {
        this.name = name
        this.health = health
    }

    isAlive (): boolean{
        return this.health > 0
    }

    recieveDamage (damage: number) {      
        if (this.health < damage) {
        this.health = 0
        console.log('The opponent Pokemon has already fainted')
    }   
    else {
        this.health = this.health - damage
    }   
    }
    
}

class Pikachu extends Pokemon {
    constructor () {
        super('Pikachu')
    }
    
    thundershock (opponent: Pokemon) {
        
        if (this.isAlive() ){
            const damage: number = 20
            opponent.recieveDamage(damage)
        } else {console.log('Your Pokemon has fainted')}
    }

}

class Charizard extends Pokemon {
    constructor () {
        super('Charizard')
    }

    flamethrower (opponent: Pokemon) {
        
        if (this.isAlive() ){
            const damage: number = 30
            opponent.recieveDamage(damage)
        } else {console.log('Your Pokemon has fainted')}
    }
}
const pika1 = new Pikachu ()
console.log(pika1)

const chard1 = new Charizard ()
console.log(chard1)

pika1.thundershock(chard1)
console.log(chard1)
chard1.flamethrower(pika1)
console.log(pika1)


pika1.thundershock(chard1)
console.log(chard1)
chard1.flamethrower(pika1)
console.log(pika1)

pika1.thundershock(chard1)
console.log(chard1)
chard1.flamethrower(pika1)
console.log(pika1)

pika1.thundershock(chard1)
console.log(chard1)
chard1.flamethrower(pika1)
console.log(pika1)

pika1.thundershock(chard1)
console.log(chard1)
chard1.flamethrower(pika1)
console.log(pika1)