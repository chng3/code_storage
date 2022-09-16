// 1.2 建立原型链 -- 对原型的补充

// Dog 的构造函数
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

// Dog 的四个原型
Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log("Run!");
};

Dog.prototype.wag = function () {
    console.log("Wag!");
};

function showDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler    
}

showDog.prototype = new Dog();

let buddy = new showDog("dsds","A", 14, "Kevin");

console.log(buddy);