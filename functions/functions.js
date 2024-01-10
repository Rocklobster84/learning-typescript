// Annotations in functions
function square(num) {
    return num * num;
}
//function greet(person: string) {
//  return `Hi there, ${person}!`
//}
var doSomething = function (person, age, isFunny) { };
square(3);
greet("Steph");
doSomething("ChickenFace", 78, true);
// If providing value for person, it would come after string annotation
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
greet();
// Function Return Types
// This one should return a number
function square(num) {
    return num * num;
}
//This one should return a string
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
// Union type, string || number
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var add = function (x, y) {
    return x + y;
};
