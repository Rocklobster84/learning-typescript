var age = 21;
age = 23;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
printAge(23);
printAge("87");
// Type narrowing
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax("55", 7));
