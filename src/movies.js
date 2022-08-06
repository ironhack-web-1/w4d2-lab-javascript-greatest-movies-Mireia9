// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*function getAllDirectors(moviesArray) {
const alldirectors = moviesArray.map (function (movie) {
    return movie["director"]
})

return alldirectors

}*/
//const movies = require("./data.js");

function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray
        .filter(movie => movie.director === "Steven Spielberg")
        .filter(movie => movie.genre.includes("Drama"))
        .length

}

console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(moviesArray) { 
    if (moviesArray.length === 0) {
        return 0;
    }

    const sum = moviesArray.reduce((accumulator, currentValue) => accumulator + currentValue.score,0);
    const average = (sum / moviesArray.length).toFixed(2);

    return Number(average);

}*/

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const sum = moviesArray.reduce((accumulator, currentValue) => {
        if (currentValue.score) return accumulator + currentValue.score
        else return accumulator
    }, 0)
    const average = (sum / moviesArray.length).toFixed(2);

    return Number(average);

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray
        .filter(movie => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    }


    const sum = dramaMovies.reduce((accumulator, currentValue) => {
        if (currentValue.score) return accumulator + currentValue.score;
        else return accumulator
    }, 0);

    const dramaAverage = (sum / dramaMovies.length).toFixed(2);
    return Number(dramaAverage);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newarray = [...moviesArray];
    return newarray
        .sort((a, b) => {
            if (a.title > b.title) return 1;
            else return -1;

        })
        .sort((a, b) => a.year - b.year);


}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newarray = moviesArray.map((movie) => movie.title)
        .sort()
        .slice(0, 20)
    return newarray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

/*
function turnHoursToMinutes(moviesArray) { y
    const newArray = [...moviesArray]
    const separaArray = newArray.duration.split (" ");
    const horesAminuts = Number (separaArray[0].slice(0,-1)*60);
    const minuts = Number (separaArray[1].slice(0,-3));
    const total = horesAminuts + minuts
    return total
}

*/
function converHours (horas){
    const calcularHoras = horas.split("h");
    return Number (calcularHoras[0])*60;
}

function converMinutos (minutos){
    const calcularMinutos = minutos.split("min");
    return Number (calcularMinutos[0]);
}

function convertDuration (duration){
    const minutes = duration.split (" ");




    
    return minutes.reduce ((accumulator, currentValue) => {
        if (currentValue.includes("h")){
            return accumulator + converHours(currentValue)
        }
        if (currentValue.includes ("min")){
        return accumulator + converMinutos(currentValue)
    
}
return accumulator

    },0)

}

function turnHoursToMinutes(moviesArray) { 
    const newArray = [...moviesArray]
    return newArray.map((movie) => {
      movie.duration = Number (convertDuration (movie.duration))
      return movie
    })
    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {













}
