//OBJECTS - can be typed by declaring what the object should look like in the annotation
var dog = {
    name: "Link",
    breed: "Daniff",
    age: 11
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
