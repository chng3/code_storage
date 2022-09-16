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

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler    
}

// 要创建继承小狗原型的对象，只需结合使用new和构造函数Dog
// 这里将构造函数showDog的属性prototype设置为一个新的小狗实例（将新的小狗实例赋给属性prototype）
ShowDog.prototype = new Dog();

// 获取表演犬原型，将其属性constructor显式地设置为构造函数ShowDog  -- 给对象设置正确的构造函数是一种最佳实践
ShowDog.prototype.constructor = ShowDog;

//补充表演犬的原型

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
    console.log("Stack");
}

ShowDog.prototype.bait = function () {
    console.log("Bait"); 
}

ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
}

ShowDog.prototype.groom = function () {
    console.log("Groom");
}


//TODO: 最后的测试

let scotty = new ShowDog("scotty", "Scottish Terrier", 15, "Cookie");

// 测试表演犬
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

let fido = new Dog("Fido", "Mixed", 38);

if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}

if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}


if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}

if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);