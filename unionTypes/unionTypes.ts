let age: number | string = 21;
age = 23;
age = "24";

// Either type Point or type Loc
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 321.213, long: 23.334};

function printAge(age: number | string): void{
  console.log(`You are ${age} years old`)
}
printAge(23)
printAge("87")

// Type narrowing
function calculateTax(price: number | string, tax: number):number{
  if(typeof price === "string"){
    price = parseFloat(price.replace("$",""))
  }
    return price * tax
}

console.log(calculateTax("55", 7))

// Union Types and arrays
const stuff: (number | string)[] = [1,2,3,"four"]

const location: (Point | Loc)[] = []
location.push({ lat: 3856782, long: 9883})


//Literal types
let zero: 0 = 0;
// any number other than 0 will complain
//zero = 2
let hi: "hi" = "HI"

//Combine literal types with union types
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday" | 0
// No other value is allowed
let today: DayOfWeek = "Monday"



