const dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

let bark;
if (dog.weight > 20){
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
dog.spouse = "Hevy";
console.log(speak);
console.log(dog.spouse)
console.log(dog)
delete dog.spouse;
console.log(dog);