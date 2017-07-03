/*jshint esversion:6*/

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = null;
    this.intervalId = null;
    this.waitingList = [];
    this.passengers = [];

  }

  start() {
  this.intervalId = setInterval (this.update(),1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update() {
    this.log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor <10) {
        this.floor ++;
        this.log();
    }else {
      console.log("Piso maximo alcanzado");
    }


}
  floorDown() {
    if (this.floor > 0) {
        this.floor--;
        this.log();
    }else {
      console.log("Piso minimo alcanzado");
    }

  }
  call(person) {
      this.requests.push(person.originFloor);
      this.waitingList.push(person);

   }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
