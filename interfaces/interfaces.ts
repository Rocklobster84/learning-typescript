// Similar to type alias. No "="
// Interfaces are used to describe the shape of ojects and can be extended by others. Almost everything in JS is an object and interface is built to match their runtime behavior.
// ie what methods it includes,what those methods accept, and what they return
interface Point {
  x: number;
  y: number;
}

const pt: Point = {x: 3, y: 5}

interface Person {
  readonly id: number;
  first: string,
  last: string,
  nickname?: string;
  //sayHi must be a method with no arguments that returns a string
  //sayHi: () => string;
  sayHi(): string
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 35978,
  sayHi: () => {
    return 'Hello!';
  },
};

thomas.first = "jkhkjhg"
//thomas.id = 4934985

interface Product {
  name: string,
  price: number,
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// Interfaces can have properties added whereas types cannot. type Person = { ... cannot be duplicated. interface Person ( ... can

interface Dog {
  name: string,
  age: number;
}

interface Dog {
  breed: string;
  bark(): string
}

const navi: Dog = {
  name: "Navi",
  age: 2.3,
  breed: "Great Dane",
  bark() {
    return "Woooooof";
  },
};

// Extending Interfaces
interface ServiceDog extends Dog{
  job: "drug sniffer" | "bomb" | "guide dog";
}

const midna: ServiceDog = {
  name: "Midna",
  age: 2.3,
  breed: "Great Dane",
  bark() {
    return "WOOF"
  },
  job: "guide dog"
}

// Multiple inheritance

interface NewPerson {
  name: string
}

interface Employee {
  readonly id: number,
  email: string
}

interface Engineer extends NewPerson, Employee {
  level: string,
  languages: string[]
}

const steph: Engineer = {
  name: "Pierre",
  id: 483838,
  email: "steph@gmail.com",
  level: "senior",
  languages: ["python", "javascript"]
}

// Types vs Interfaces
// Interfaces only work with objects, no literals etc
// ex interface color = "red" | "blue" - bad
// Interfaces can be re-opened and added to. Types can't
// Interfaces allow for extending, types have to have intersection types
