function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function () {
    // alert("Warning warning!!");
    console.log("Warning warning!!");
}

Robot.prototype.makeCoffee = function () {
    // alert("Making coffee");
    console.log("Making coffee");
}

Robot.prototype.blinkLights = function () {
    // alert("Blink Blink!");
    console.log("Blink Blink!");
}

let robby = new Robot("Robby", 1956, "Dr.Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    // alert("Fetching a coffee from Starbucks.")
    // alert("I'm on the road to drinking coffee in Starbuck!");
    console.log("I'm on the road to drinking coffee in Starbuck!");
}

rosie.cleanHouse = function () {
    // alert("Cleaning! Spic and Span soon...")
    // alert("I'm cleaning the room!");
    console.log("Cleaning! Spic and Span soon...")
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