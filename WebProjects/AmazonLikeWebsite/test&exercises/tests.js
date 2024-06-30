export class Car {
  #brand;
  #model;
  speed = 0;
  trunk = this.trunk ? 'Cart is open' : 'Cart is closed'
  
  constructor(carDetails) {
    this.#brand = carDetails.brand
    this.#model = carDetails.model
  };

  displayInfo() {
    console.log(`${this.#brand} 
${this.#model}
${this.speed}
${this.trunk}
    `)
  };

  go() {
    if (this.speed<200) {
      this.speed += 5;
    }
  };

  brake() {
    if (this.speed >= 0) {
     this.speed -= 5;
    };
  };

  openTrunk() {
    this.trunk = true;
    this.setTrunk();
  };

  closeTrunk() {
    this.trunk = false;
    this.setTrunk();
  };

  setTrunk() {
    this.trunk = this.trunk ? 'Cart is open' : 'Cart is closed'
  };
};

const toyota = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const tesla = new Car({
  brand: 'Tesla',
  model: 'Model 3'
})

toyota.go();

for (let i = 0; i <= tesla.speed; i++) {
  tesla.go();
};

tesla.brake();

toyota.openTrunk();

toyota.closeTrunk();

tesla.openTrunk();

tesla.openTrunk();


toyota.displayInfo();

tesla.displayInfo();

console.log(toyota.model = 'ugo')



console.log('FROM HERE: RACECARS!')



class Racecar extends Car {

  constructor(carDetails) {
    super(carDetails);
  };

  go(acceleration) {
    this.speed += acceleration;
    
    this.speed = this.speed > 300 ? 300 : this.speed
  };
}



const mcLaren = new Racecar({
    brand: 'McLaren',
    model: 'F1',
});

  mcLaren.go(5);

  mcLaren.go(6)

  mcLaren.displayInfo();