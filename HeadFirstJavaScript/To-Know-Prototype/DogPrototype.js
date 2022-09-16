// 1.1 使用原型

// Dog 的构造函数
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

console.log(Dog.prototype);

// 通过构造函数Dog的属性prototype来访问原型对象
// 将字符串"Canine" 赋给Dog原型的属性species
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

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

// 重写原型，给Spot 提供自定义方法 bark
spot.bark = function () {
    console.log(this.name + " says WOOF!");
};

// 对原型进行测试
fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

let barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
    if(this.sitting){
        console.log(this.name + " is already sitting");
    } else {
        // 这里的 this 指向原始对象，即方法被调用的对象。第一次调用时，默认给小狗实例添加了属性sitting的值，便于后续独立跟踪自己是否是坐着的
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
    
}

// 小狗实例刚创建时，从原型那里继承了属性sitting， 该属性的值默认为false;但调用方法sit后，
// 就给小狗实例添加了属性sitting的 值，导致在小狗实例中创建了属性sitting。这让我们能够给所
// 有小狗对象指定默 认值，并在需要时对各个小狗进行定制。


console.log(spot.hasOwnProperty("sitting")); 

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();


// 判断使用的属性包含在实例还是原型中用 hasOwnProperty 方法，传入参数为字符串形式的属性名

console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));
console.log(spot.hasOwnProperty("sitting"));
console.log(fido.hasOwnProperty("sitting"));

// 输出Dog的原型
console.log(Dog.prototype);