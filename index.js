
let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripsId = 0;

 
class Driver {
    constructor(name) {
        this.name = name;
        this.id = driverId++;
        
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}

//we want to display the trips a driver has taken.
//going into the array, filtering store.trips to return the tripsId to this.id === driverId.

//we want to display the passengers a driver has.
//taking the trips() mapping the result each trip and each passenger. Thi way we target each driver and through that we find each passenger.


class Passenger {
  constructor(name) {
        this.name = name;
        this.id = passengerId++;

    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}

//filter through the trips to find the passenger.
//using trips() we have targeted the passengers, now we can use that information to find their drivers.


class Trip {
  constructor(driver, passenger) {
        this.id = tripsId++;
        this.driverId = driver.id;
        this.passengerId = passenger.id;

    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}

//a trip belongs to both a passenger and a driver. we can find both from doing find(). Since a trip belongs to a driver and a passenger (not to many) we do not need to use another function to pre-filter the results.






