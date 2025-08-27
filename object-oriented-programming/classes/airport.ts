/*

El objetivo es crear una clase Airport que modele las características y operaciones de un aeropuerto
de forma más avanzada.

Cada aeropuerto tiene:

Un nombre.
Una ubicación.
Una pista de aterrizaje (runway).
Un nivel de tráfico aéreo (bajo, medio, alto).
La clase debe incluir:

Un método changeTrafficLevel que permita cambiar el nivel de tráfico aéreo.
Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
Un método displayInfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la
pista y el nivel de tráfico.
Crea una instancia de la clase Airport y demuestra el uso de estos metodos con distintas operaciones.

*/

type RunwayStatus = 'cerrada' | 'disponible'
type TrafficLevel = 'bajo' | 'medio' | 'alto'

class Airport {
    
    private _runway: RunwayStatus
    private _trafficLevel: TrafficLevel

    constructor (
        public _name: string,
        public _location: string,
    ) {
        this._runway = 'disponible'
        this._trafficLevel = 'bajo'
    }

    set runway (status: RunwayStatus) {
        this._runway = status
    }
    get runway() {
        return this._runway
    }

    set traffic (level: TrafficLevel) {
        this._trafficLevel = level
    }
    get traffic() {
        return this._trafficLevel
    }

    changeTrafficLevel (level: TrafficLevel): void {
        this.traffic = level
        console.log(`El nivel de trafico se ha cambiado a ${this.traffic} en el aeropuerto ${this._name}`)
    }

    emergencyLanding (): void {
        this.runway = 'cerrada'
        this.traffic = 'alto'
        console.log(`Aterrizaje de emergencia en el aeropuerto ${this._name}. La pista esta cerrada y el nivel de trafico es alto`)
    }

    displayInfo (): void {
        console.log(`Nombre: ${this._name}`)
        console.log(`Ubicacion: ${this._location}`)
        console.log(`Estado de la pista: ${this.runway}`)
        console.log(`Nivel de trafico: ${this.traffic}`)
    }
}

const air1 = new Airport ('JuanSantamaria', 'Alajuela')

air1.displayInfo()
air1.changeTrafficLevel('medio')
air1.displayInfo()
air1.emergencyLanding()
air1.displayInfo()


// console.log(air1._name)
// console.log(air1._location)
// console.log(air1.runway)
// console.log(air1.traffic)