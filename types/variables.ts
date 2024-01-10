let movieTitle: string = "Amadeux";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.upper()


let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero";

let gameOver: boolean = false;
gameOver = "true";
gameOver = true;

//Type Inference; May not always need exact annotation
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = 9;

let isFunny = false;
isFunny = true;
isFunny = "asd";

//The Any type, can be used to is you don't want type checking
//let thing: any = "hello";
//thing = 1;
//thing = false;
//thing.toUpperCase();

let thing = "hello";
thing().saddads;


const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
// This will be type any
//let foundMovie;
let foundMovie: string;

for(let movie of movies) {
  if(movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}