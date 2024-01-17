// Annotations in functions

function square(num: number) {
  return num * num;
}

//function greet(person: string) {
//  return `Hi there, ${person}!`
//}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("Steph");
doSomething("ChickenFace", 78, true);

// If providing value for person, it would come after string annotation
function greet(person: string = "stranger"){
  return `Hi there, ${person}!`
}

greet();

// Function Return Types
// This one should return a number
function square(num: number): number {
  return num * num;
}
//This one should return a string
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`
}
// Union type, string || number
function rando(num: number) {
  if(Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
}

// ANONYMOUS FUNCTIONS
// Context removes the need to specify : string
const colors = ["red", "orange", "yellow"];
colors.map(color => {
  return color.toUpperCase()
})

// VOID TYPE - Returns no value
function pringTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// NEVER TYPE - Never finished executing
// Functions that don't finish running
// Function that throws an exception
function makeError(msg: string): never {
  throw new Error(msg)
}

function gameLoop(){
  while(true){
    console.log("GAME LOOP RUNNING!");
  }
}

