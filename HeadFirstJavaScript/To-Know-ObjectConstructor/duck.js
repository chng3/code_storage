// 创建鸭子对象的构造函数
function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

let smallDuck = new Duck('redheaded',true);
console.log(smallDuck);