//OBJECTS - can be typed by declaring what the object should look like in the annotation
//Basic object
//const dog = {
//  name: "Link",
//  breed: "Daniff",
//  age: 11
//}
var coord = { x: 34, y: 2 };
function doubleCoord(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
//Primitive type alias
//type MyNum = number;
//let age: MyNum = 4536;
// Nested Objects
// A function with a nested object type parameter
var describePerson = function (person) {
    return "Person: ".concat(name, ",\n  Age: ").concat(age, ",\n  Parents: ").concat(parentNames.mom, ", ").concat(parentNames.dad, ".");
};
describePerson({ name: 'Jimmy', age: 10, parents: { mom: 'Kim', dad: 'Steve' } });
var song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 4954983,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
function calculatePayout(song) {
    var total = song.numStreams * .0033;
    return total;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
calculatePayout(song);
printSong(song);
