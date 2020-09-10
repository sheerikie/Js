const car1 = {
  brand: "meredes",
  desc: function (price, year, color) {
    console.log(
      `my car is a ${this.brand}.The manufacturing year is ${year} and her color is ${color}`
    );
  },
};
const car2 = {
  brand: "Cadillac",
  desc: function (price, year, color) {
    console.log(
      `my car is a ${this.brand}.The manufacturing year is ${year} and her color is ${color}`
    );
  },
};
const car3 = {
  brand: "Tesla",
  desc: function (price, year, color) {
    console.log(
      `my car is a ${this.brand}.The manufacturing year is ${year} and her color is ${color}`
    );
  },
};
car1.desc(20000, 2019, "green");
car1.desc.call(car2, 40000, 2022, "darkgreen"); //call to function
car1.desc.apply(car3, [50000, 2027, "darkred"]); //apply to function
