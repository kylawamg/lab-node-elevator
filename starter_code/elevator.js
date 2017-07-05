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
  _passengersEnter() {
    this.waitingList.map((person,index) =>{
      if (this.floor === person.originFloor) {
        this.passengers.push(person);
        this.waitingList.split(index,1);
        this.requests.push(person.destinationFloor);
      }
    }
    );
  }
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

    if (this.passengers.indexOf(person) === -1 ) {
          this.waitingList.push(person);
          this.requests.push(person.originFloor);
    }

   }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
