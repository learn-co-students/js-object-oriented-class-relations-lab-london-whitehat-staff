let id = 0

store = {
    drivers: [],
    passengers: [],
    trips: []
}

class Driver {
    constructor (name) {
        this.name = name
        this.id = ++id
        this._addToStore('drivers')
    }

    _addToStore (key) {
        store[key].push({name: this.name, id: this.id})
    }

    trips () {
        return store.trips.filter(trip => trip.driverId === this.id)
    }

    passengers () {
        return this.trips().map(trip => trip.passenger())
    }
}

class Passenger extends Driver {
    constructor (name) {
        super(name)
        this._addToStore('passengers')
    }

    trips () {
        return store.trips.filter(trip => trip.passengerId === this.id)
    }

    drivers () {
        return this.trips().map(trip => trip.driver())
    }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++id
        this.driverId = driver.id
        this.passengerId = passenger.id
        this.passenger = () => passenger
        this.driver = () => driver

        store.trips.push(this)
    }
}