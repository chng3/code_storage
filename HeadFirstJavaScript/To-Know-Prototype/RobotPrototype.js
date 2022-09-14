function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function () {
    console.log("I'm a robot");
}

Robot.prototype.makeCoffee = function () {
    console.log("I'm goning to the way to drinking coffee!");
}

Robot.prototype.blinkLights = function () {
    console.log("B ling B ling B ling!");
}

let robby = new Robot("Robby", 1956, "Dr.Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log("I'm on the road to drinking coffee in Starbuck!");
}

rosie.cleanHouse = function () {
    console.log("I'm cleaning the room!");
}

console.log(robby.name + " was made by " + robby.maker + 
            " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + 
            " in " + rosie.year + " and is owned by " + rosie.owner);

rosie.cleanHouse();

// 控制台打印构造函数 Robot 的 prototype 属性
console.log(Robot.prototype);