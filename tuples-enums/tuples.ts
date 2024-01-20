// Tuples are a special type exclusive to TypeScript
//Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays

//Creating a Tuple with its type definition
let myTuple: [number, string];

//CAN assign it values per its specs
myTuple = [10, 'Typescript is fun!'];

//CAN'T assign it values of dif structure
//myTuple = ['Typescript is fun!', 10];

const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]
const badRes: HTTPResponse =[404, "Not Found"]
// Does not prevent you from pushing on extra types/values at the end. Or pop off
//goodRes.push(123)
//goodRes.pop()
//goodRes.pop()

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "Ok"]]

