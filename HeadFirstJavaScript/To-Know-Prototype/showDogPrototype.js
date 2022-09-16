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

// 要创建继承小狗原型的对象，只需结合使用new和构造函数Dog
// 这里将构造函数showDog的属性prototype设置为一个新的小狗实例（将新的小狗实例赋给属性prototype）
showDog.prototype = new Dog();

//补充表演犬的原型

showDog.prototype.league = "Webville";

showDog.prototype.stack = function () {
    console.log("Stack");
}

showDog.prototype.bait = function () {
    console.log("Bait"); 
}

showDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
}

showDog.prototype.groom = function () {
    console.log("Groom");
}

let scotty = new showDog("scotty", "Scottish Terrier", 15, "Cookie");

// 测试表演犬
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);