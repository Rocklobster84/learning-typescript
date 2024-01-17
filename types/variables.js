var movieTitle = "Amadeux";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.upper();
var numCatLives = 9;
numCatLives += 1;
numCatLives = "zero";
var gameOver = false;
gameOver = "true";
gameOver = true;
//Type Inference; May not always need exact annotation
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = 9;
var isFunny = false;
isFunny = true;
isFunny = "asd";
//The Any type, can be used to is you don't want type checking
//let thing: any = "hello";
//thing = 1;
//thing = false;
//thing.toUpperCase();
var thing = "hello";
thing().saddads;
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// This will be type any
//let foundMovie;
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
