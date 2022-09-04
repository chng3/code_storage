function CarPrototype() {
    this.make = "Webville Motors";
    this.year = 2013;
    this.start = function(){
        started = true;
    }
    this.stop = function(){
        started = false;
    }
    this.drive = function () {
        drived = true;
    }
}

let taxi = new CarPrototype();
taxi.color = "silver"; 
taxi.modle = "Delorean Remake";
taxi.currentTime = new Date();
taxi.fluxCapacity = {type: "Mr. Fusion"};
taxi.timeTravel = function (date) {
    calander = date;
}
console.log(taxi);
let ceshi = new CarPrototype();
console.log(ceshi);