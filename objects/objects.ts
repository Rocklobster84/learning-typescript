//OBJECTS - can be typed by declaring what the object should look like in the annotation
//Basic object
const dog = {
  name: "Link",
  breed: "Daniff",
  age: 11
}

function printName(person: {first: string, last: string}): void {
  console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "Jenkins"});

// Example of type and object on same line
let coordinate: {x: number, y: number} = {x: 34, y: 2};

// x and y are object type returned by function
function randomCoord(): {x: number, y: number} {
  return {x: Math.random(), y: Math.random() };
}

// Can't add age to age because it is not known. It is assumed by TS that anything extra is a "mistake"
printName({first: "Mick", last: "Jagger", age: 485})

//will give no error
const singer = {first: "Mick", last: "Jagger", age: 485, isAlive: true};
printName(singer);