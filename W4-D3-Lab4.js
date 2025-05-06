const saudiaAirlines = {
  airlineName: "Saudi Airlines",
  country: "Saudi Arabia",
  fleetSize: 120,
  destinations: ["Riyadh", "Jeddah", "Dubai", "New York"],
  inOperation: true,

  bookFlight(destination) {
    if (this.destinations.includes(destination)) {
      console.log(`Flight to ${destination} booked.`);
    } else {
      console.log(`Sorry, there are no flights to ${destination} currently.`);
    }
  },

  addDestination(newDestination) {
    if (!this.destinations.includes(newDestination)) {
      this.destinations.push(newDestination);
      console.log(`${newDestination} has been added to destinations.`);
    } else {
      console.log(`${newDestination} is already on the list of destinations.`);
    }
  },

  getSummary() {
    const numDests = this.destinations.length;
    console.log(
      `${this.airlineName} operates in ${this.country}, has ${this.fleetSize} aircraft, and flies to ${numDests} destinations.`
    );
  },
};

saudiaAirlines.getSummary();

saudiaAirlines.bookFlight("Dubai");

saudiaAirlines.bookFlight("London");

saudiaAirlines.addDestination("London");

saudiaAirlines.addDestination("Dubai");

saudiaAirlines.getSummary();
