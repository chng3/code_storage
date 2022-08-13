function car(name, make, age){
    this.name = name;
    this.make = make;
    this.age = age;
}
/* class car {
    constructor(name, make, age) {
        this.name = name;
        this.make = make;
        this.age = age;
    }
} */

let toyota  = new car("carolla", "Japan", 5);
toyota.color = 'grey';
console.log(toyota);
// delete toyota['make']
delete toyota.make;
console.log(toyota);
console.log(toyota.age);

