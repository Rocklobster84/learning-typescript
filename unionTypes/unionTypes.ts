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
function calculateTax(price: number | string, tax: number):void{
  if(typeof price === "string"){
    price = parseFloat(price.replace("$",""))
  }
    let finalPrice = price * tax
   console.log(`The price is ${finalPrice}`)
  }

  calculateTax("55", 7)