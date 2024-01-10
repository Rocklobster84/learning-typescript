//OBJECTS - can be typed by declaring what the object should look like in the annotation
//Basic object
//const dog = {
//  name: "Link",
//  breed: "Daniff",
//  age: 11
//}

/*
function printName(person: {first: string, last: string}): void {

  console.log(`${person.first} ${person.last}`)
}

printName({first: "Thomas", last: "Jenkins"});
 */
// Example of type and object on same line
//let coordinate: {x: number, y: number} = {x: 34, y: 2};

// x and y are object type returned by function
//function randomCoord(): {x: number, y: number} {
//  return {x: Math.random(), y: Math.random() };
//}

// Can't add age to age because it is not known. It is assumed by TS that anything extra is a "mistake"
//printName({first: "Mick", last: "Jagger", age: 485})

//will give no error
//const singer = {first: "Mick", last: "Jagger", age: 485, isAlive: true};
//printName(singer);

// TYPE ALIAS
type Point = {
  x: number;
  y: number;
};

let coord: Point = { x: 34, y: 2 };

function doubleCoord(point: Point): Point {
  return {x: point.x *2, y: point.y *2};
}

//Primitive type alias
//type MyNum = number;
//let age: MyNum = 4536;

// Nested Objects
// A function with a nested object type parameter
const describePerson = (person: {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  }
}) => {
  return `Person: ${name},
  Age: ${age},
  Parents: ${parentNames.mom}, ${parentNames.dad}.`;
}

describePerson({name: 'Jimmy', age: 10, parents: {mom: 'Kim', dad: 'Steve'}});

// More nested object
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
}

const song: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 4954983,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
}
}

function calculatePayout(song: Song): number {
  let total = song.numStreams * .0033;
  return total;
}
function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

calculatePayout(song)
printSong(song)
