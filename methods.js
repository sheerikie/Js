/**Filter Array */

const myList = ["Robert", "Sharon", "Laurie", "Mark"];
const filtered = myList.filter((filte) => filte != "Mark");
console.log(filtered);


/**calculate age */
const Birthday=new Date().getFullYear()-Object("28-02-1992").split("-")[2];
/**Map Array */
const list = filtered.map((list) => list);

/**List Array */
const formated = list.join(" ,");

/** Jest Testing */
const functions = require("./functions"); //name of file with function to be tested //ie. equal to func return
test("adds 4 + 4 to equal 8", () => {
  expect(functions.add(4, 4)).toBe(8); // strict used for primitives
});

//not.toBe
test("adds 4 + 4 not to equal 9", () => {
  expect(functions.add(4, 4)).not.toBe(9);
});

//to be null
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//to be false
test("should be falsy", () => {
  expect(functions.checkValue()).toBeFalsy(); // opposity to be truth or .not.toBeFalsy
});
//to equal //used for arrays and objects
test("should be equal", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Adrian",
    lastName: "Itika",
  }); // opposity not.toEqual
});

//to be less than or equal to
test("load 1 should be less than load 2", () => {
  // const load1=400;
  // const load2=200;
  //expect(load2).toBeLessThanOrEqualTo(load1);
  expect(functions.testLoad(load2)).toBeLessThanOrEqualTo(load1);
  //addition
  expect(functions.testLoad(load2 + load1)).toBeLessThanOrEqualTo(1600);
});

//regex
test("to contain value I in team", () => {
  usernames = "TeamI";
  expect(usernames).toMatch(/I/i); // opposity to be truth or .not.toBeFalsy
});
//Arrays
test("to contain value I in team", () => {
  usernames = ["TeamI", "John"];
  expect(usernames).toContain("John"); // opposity to be truth or .not.toBeFalsy
});

tobeDefined // check if it existts
