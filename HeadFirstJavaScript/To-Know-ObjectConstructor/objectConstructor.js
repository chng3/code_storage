let cadiParams = {
    make: "GM", model: "Cadillac", year: 1955,
    color: "tan", passengers: 5, convertible: false, mileage: 12892
};

let cadi = new Car(cadiParams);
cadi.chrome = true;
delete cadi.covnertible;

